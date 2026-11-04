import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { SiteFooter } from "@/components/layout/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = { title: "Нууцлалын бодлого" };

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <header className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/"><Logo /></Link>
        <ThemeToggle />
      </header>
      <main className="page-shell w-full flex-1 py-10 sm:py-16">
        <article className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">ARHAT MODERATOR</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">Нууцлалын бодлого</h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Хүчин төгөлдөр огноо: [эзэмшигч баталгаажуулсны дараа бөглөнө үү]</p>
          <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
            <h2>1. Энэ бодлого юуг тайлбарлах вэ?</h2>
            <p>Энэ бодлого нь ARHAT MODERATOR веб үйлчилгээг ашиглах үед ямар мэдээлэл боловсруулах, ямар зорилгоор ашиглах, хэрхэн хадгалах болон мэдээлэл устгуулах хүсэлт гаргах боломжийг тайлбарлана. Энэхүү хуудас нь Facebook Developers болон бусад OAuth provider-ийн тохиргоонд ашиглагдах нийтэд нээлттэй мэдээллийн хуудас юм.</p>

            <h2>2. Бид ямар мэдээлэл цуглуулдаг вэ?</h2>
            <ul>
              <li><strong>Бүртгэл, профайл:</strong> нэр, и-мэйл хаяг, Supabase Auth хэрэглэгчийн ID болон профайлын мэдээлэл.</li>
              <li><strong>Нэвтрэлтийн мэдээлэл:</strong> session cookie болон нэвтрэлттэй холбоотой техникийн төлөв. Нууц үгийг энэ вебийн frontend кодод хадгалдаггүй.</li>
              <li><strong>Moderator application:</strong> бүтэн нэр, Facebook холбоос, утасны дугаарууд, сургууль/анги/багшийн мэдээлэл, ажил/ажлын газрын мэдээлэл, эцэг эхийн нэр/утас/Facebook холбоос, банкны дансны мэдээлэл болон одоогийн хаяг, Maps холбоос, хаягийн түүх.</li>
              <li><strong>Identity verification:</strong> иргэний үнэмлэхийн урд/ард тал, төрсний гэрчилгээ, шаардлагатай үед эцэг/эхийн үнэмлэх, олон байрлалын selfie болон эдгээрийн private storage object metadata.</li>
              <li><strong>Verification metadata:</strong> баримтын шалгалтын төлөв, нүүрний шалгалтын төлөв/оноо, liveness шалгалтын үр дүн, confidence, blink, хөдөлгөөний хэмжээ, өнгөний тогтвортой байдал, шалгалтын хугацаа зэрэг review-д шаардлагатай metadata.</li>
              <li><strong>Зөвшөөрөлтэй байршил:</strong> browser-ийн location permission-ийг хэрэглэгч өөрөө зөвшөөрсөн үед weekly verification болон холбогдох үйлдэлд шаардлагатай байршлын мэдээлэл. Байршил хуваалцахаас өмнө consent бүртгэгдэнэ.</li>
              <li><strong>Техникийн мэдээлэл:</strong> хүсэлт боловсруулахад шаардагдах лог, хамгаалалтын мэдээлэл болон системийн ажиллагааны metadata.</li>
            </ul>

            <h2>3. Google болон Facebook Login</h2>
            <p>Google эсвэл Facebook-ээр нэвтрэх үед тухайн provider-ийн зөвшөөрсөн OAuth мэдээллийг Supabase Auth-ээр дамжуулан хүлээн авна. Google-ийн хувьд provider-ээс өгсөн профайлын нэр, и-мэйл зэрэг мэдээлэл; Facebook-ийн хувьд хүссэн <code>public_profile</code> болон <code>email</code> scope-ийн хүрээнд өгсөн public profile, и-мэйл байж болно.</p>
            <p>Provider и-мэйл өгөөгүй үед хоосон и-мэйл зохиомлоор үүсгэхгүй. OAuth-оор нэвтэрсэн нь өөрөө moderator, admin эсвэл super admin эрх олгохгүй. Эрх нь одоо байгаа profiles болон админы батлах процессоор сервер талд шалгагдана.</p>
            <p>Ижил и-мэйлтэй Google, Facebook болон password account-ийг автоматаар, зөвшөөрөлгүйгээр холбохгүй. Account linking-ийн эцсийн зан төлөв нь Supabase Auth provider-ийн тохиргооноос хамаарна.</p>

            <h2>4. Мэдээллийг ямар зорилгоор ашигладаг вэ?</h2>
            <ul>
              <li>Бүртгэл үүсгэх, нэвтрүүлэх, session хадгалах;</li>
              <li>Профайл болон moderator хүсэлтийг ажиллуулах;</li>
              <li>Moderator-ийн identity verification болон admin review хийх;</li>
              <li>Хэрэглэгчийн хүсэлтээр weekly verification, зөвшөөрөлтэй location үйлдлийг гүйцэтгэх;</li>
              <li>Системийн аюулгүй байдал, алдаа илрүүлэлт, abuse prevention-ийг дэмжих;</li>
              <li>Үйлчилгээний ажиллагаа, тохиргоо болон хадгалалтын журмыг хэрэгжүүлэх.</li>
            </ul>

            <h2>5. Хадгалалт, хамгаалалт, устгалт</h2>
            <p>Auth болон профайлын мэдээлэл Supabase орчинд, identity verification-ийн баримтууд тохируулагдсан тохиолдолд private R2 storage-д хадгалагдана. Service-role нууц түлхүүрийг зөвхөн сервер талд ашиглана. RLS болон сервер талын хэрэглэгчийн эрхийн шалгалтыг сулруулахгүйгээр өгөгдөлд хандана.</p>
            <p>Identity баримтын retention хугацааг системийн админ тохируулж болох бөгөөд хугацаа хэтэрсэн баримтыг cron retention процесс устгадаг. Зөвшөөрөлтэй location мэдээлэл тусдаа cleanup процессоор цэвэрлэгдэнэ. Тодорхой хугацаа нь тухайн үеийн системийн тохиргоо, хууль ёсны хадгалалтын шаардлагаас хамаарна.</p>

            <h2>6. Таны эрх ба мэдээлэл устгуулах хүсэлт</h2>
            <p>Та өөрийн бүртгэл болон холбогдох хувийн мэдээллийг устгуулах хүсэлт гаргаж болно. Хүсэлт гаргах дэлгэрэнгүй алхмуудыг <Link href="/data-deletion">Мэдээлэл устгуулах</Link> хуудсаас үзнэ үү.</p>
            <p>Хүсэлтийг хүлээн авах бодит email эсвэл хүсэлтийн URL-ийг үйлчилгээний эзэмшигч одоогоор энэ кодод өгөөгүй байна. Production-д нийтлэхийн өмнө энэ хуудсын холбоо барих хэсэг болон <Link href="/data-deletion">устгалын заавар</Link>-т бодит сувгийг заавал оруулна.</p>

            <h2>7. Бодлогын өөрчлөлт</h2>
            <p>Үйлчилгээ, мэдээлэл боловсруулах flow эсвэл хууль ёсны шаардлага өөрчлөгдвөл энэ бодлогыг шинэчилж болно. Шинэчилсэн огноог энэ хуудсанд тэмдэглэнэ.</p>

            <h2>8. Холбоо барих</h2>
            <p><strong>Тохируулах шаардлагатай:</strong> үйлчилгээний эзэмшигчийн бодит нэр, холбоо барих email болон шаардлагатай бол хаягийг deploy хийхээс өмнө энд оруулна. Баталгаажаагүй холбоо барих мэдээллийг зориудаар зохиож оруулаагүй.</p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
