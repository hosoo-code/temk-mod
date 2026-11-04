import { NextResponse } from "next/server";
import { createServiceClient, createSupabaseServer } from "@/lib/supabase/server";
import { isDemoMode } from "@/lib/demo-mode";
import { serverEnv } from "@/lib/env";

function safeNext(value: string | null): string {
  if (!value || /[\\\u0000-\u001f\u007f]/.test(value)) return "/dashboard";
  try {
    const parsed = new URL(value, "https://safe.local");
    return parsed.origin === "https://safe.local" && parsed.pathname.startsWith("/")
      ? `${parsed.pathname}${parsed.search}${parsed.hash}`
      : "/dashboard";
  } catch {
    return "/dashboard";
  }
}

function redirectOrigin(requestUrl: URL): string {
  const configured = serverEnv().appUrl.trim();
  if (!configured) return requestUrl.origin;
  try {
    return new URL(configured).origin;
  } catch {
    return requestUrl.origin;
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = redirectOrigin(url);
  const code = url.searchParams.get("code");
  const next = safeNext(url.searchParams.get("next"));
  const loginError = () =>
    NextResponse.redirect(new URL(`/login?error=oauth_callback&next=${encodeURIComponent(next)}`, origin));

  if (isDemoMode() || !code || url.searchParams.has("error")) {
    return loginError();
  }

  const sb = await createSupabaseServer();
  const { error } = await sb.auth.exchangeCodeForSession(code);
  if (error) return loginError();

  const { data: authData } = await sb.auth.getUser();
  const user = authData.user;
  if (user) {
    try {
      const service = await createServiceClient();
      const existing = await service
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .maybeSingle();
      if (existing.error) throw existing.error;
      const metadataName =
        typeof user.user_metadata?.full_name === "string"
          ? user.user_metadata.full_name
          : typeof user.user_metadata?.name === "string"
            ? user.user_metadata.name
            : "";
      const fullName = metadataName.trim() || existing.data?.full_name || user.email?.split("@")[0] || "Хэрэглэгч";
      const { error: profileError } = await service.from("profiles").upsert(
        { id: user.id, full_name: fullName, role: "user" },
        { onConflict: "id", ignoreDuplicates: true }
      );
      if (profileError) throw profileError;
    } catch (profileError) {
      console.error("[oauth] Profile sync failed:", profileError);
      await sb.auth.signOut();
      return loginError();
    }
  }

  return NextResponse.redirect(new URL(next, origin));
}
