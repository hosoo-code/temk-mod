import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { SiteFooter } from "@/components/layout/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = { title: "Үйлчилгээний нөхцөл" };

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <header className="flex h-16 items-center justify-between px-4 sm:px-6"><Link href="/"><Logo /></Link><ThemeToggle /></header>
      <main className="page-shell w-full flex-1 py-10 sm:py-16">
        <article className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">ARHAT MODERATOR</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">Үйлчилгээний нөхцөл</h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Хүчин төгөлдөр огноо: [эзэмшигч баталгаажуулсны дараа бөглөнө үү]</p>
          <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
            <h2>1. Үйлчилгээний зорилго</h2>
            <p>ARHAT MODERATOR нь Mobile Legends нийгэмлэгт moderator-ийн мэдээлэл, moderator хүсэлт, identity verification болон холбогдох community хэрэгслүүдийг нэг дор ашиглах боломж олгоно. Олон нийтэд харагдах moderator-ийн мэдээлэл нь энэ платформын доторх бүртгэл, review-ийн төлөвтэй хамаарна.</p>

            <h2>2. Бүртгэл ба нэвтрэлт</h2>
            <p>Хэрэглэгч email/password, Google эсвэл Facebook Login ашиглан бүртгэл үүсгэж, нэвтэрч болно. Хэрэглэгч өөрийн бүртгэлийн мэдээллийг үнэн зөв байлгах, session болон account access-аа хамгаалах үүрэгтэй. OAuth-оор нэвтэрсэн нь нэмэлт эрхийн баталгаа биш.</p>

            <h2>3. Хэрэглэгчийн эрх, үүрэг</h2>
            <ul>
              <li>Өөрийн нэр, профайл болон хүсэлтэд үнэн зөв, бусдын эрхийг зөрчихгүй мэдээлэл өгөх;</li>
              <li>Moderator application, identity verification болон weekly verification-ийн алхмуудыг өөрийн хүсэлтээр, зөвшөөрлөө ойлгосны дараа гүйцэтгэх;</li>
              <li>Өөрийн account-ийг бусдад шилжүүлэхгүй, бусдын нууцлал, intellectual property болон нэр төрд халдахгүй байх;</li>
              <li>Алдаа, зөвшөөрөлгүй хандалт эсвэл account-ийн сэжигтэй үйлдлийг боломжит сувгаар мэдэгдэх.</li>
            </ul>

            <h2>4. Хориглосон үйлдэл</h2>
            <ul>
              <li>Хуурамч нэр, бусдын мэдээлэл эсвэл хуурамч verification баримт ашиглах;</li>
              <li>Систем, API, Supabase, storage, cookie, session эсвэл админы эрхийн хамгаалалтыг тойрохыг оролдох;</li>
              <li>Бусдын хувийн мэдээлэл, identity баримт, location эсвэл account-д зөвшөөрөлгүй хандах;</li>
              <li>Спам, phishing, malware, дарамт, заналхийлэл, хууль бус сурталчилгаа болон хортой контент түгээх;</li>
              <li>Үйлчилгээний ажиллагааг саатуулах, хэт их хүсэлт илгээх, алдааг санаатайгаар ашиглах.</li>
            </ul>

            <h2>5. Moderator ба admin эрх</h2>
            <p>Moderator болохын тулд одоо байгаа application, verification болон admin review процессоор явна. Admin эрхийг зөвхөн эрх бүхий сервер талын profile role-оор шалгана. Google эсвэл Facebook Login ашигласан нь moderator, admin, super admin эрхийг автоматаар олгохгүй.</p>

            <h2>6. Account түдгэлзүүлэх, хаах</h2>
            <p>Хуурамч мэдээлэл, хориглосон үйлдэл, бусдын аюулгүй байдалд эрсдэл, системийн хамгаалалтыг зөрчих оролдлого эсвэл холбогдох хууль, дүрмийн зөрчил илэрвэл account, application, verification эсвэл тодорхой үйлдлийг хязгаарлаж, түдгэлзүүлж, хааж болно. Шалгалтын явцад шаардлагатай мэдээлэл дутуу бол application-ийг буцаах эсвэл нэмэлт мэдээлэл хүсэж болно.</p>

            <h2>7. Үйлчилгээний өөрчлөлт</h2>
            <p>Үйлчилгээний хэсэг, authentication provider, moderator workflow, storage, verification эсвэл аюулгүй байдлын тохиргоог өөрчилж болно. Томоохон өөрчлөлт гарвал холбогдох мэдээллийн хуудсуудыг шинэчилнэ.</p>

            <h2>8. Хариуцлагын нөхцөл</h2>
            <p>Платформ дээрх moderator-ийн мэдээлэл, verification төлөв болон хэрэглэгчийн илгээсэн мэдээлэл нь системд бүртгэгдсэн төлөвийг харуулна. Платформын доторх badge эсвэл application approval нь аливаа гуравдагч этгээдийн үйлчилгээ, гүйлгээ, амлалт, үр дүнгийн баталгаа биш. Үйлчилгээний тасалдал, provider, сүлжээ эсвэл хэрэглэгчийн төхөөрөмжөөс шалтгаалсан асуудал гарч болохыг хэрэглэгч ойлгоно.</p>

            <h2>9. Мэдээлэл устгуулах</h2>
            <p>Account болон хувийн мэдээллээ устгуулах хүсэлт гаргах бол <Link href="/data-deletion">Мэдээлэл устгуулах</Link> хуудсанд заасан алхмуудыг ашиглана. Хууль ёсны шаардлага, маргаан шийдвэрлэх, аюулгүй байдал эсвэл audit-ийн зайлшгүй шаардлагаар зарим мэдээллийг тодорхой хугацаанд хадгалах шаардлагатай байж болно.</p>

            <h2>10. Холбоо барих мэдээлэл</h2>
            <p><strong>Тохируулах шаардлагатай:</strong> үйлчилгээний эзэмшигчийн баталгаатай нэр, холбоо барих email болон шаардлагатай бол хаягийг production-д нийтлэхээс өмнө энд оруулна. Баталгаажаагүй компанийн нэр, email, хаяг зохиож оруулаагүй.</p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
