import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { SiteFooter } from "@/components/layout/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = { title: "Мэдээлэл устгуулах" };

export default function DataDeletionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <header className="flex h-16 items-center justify-between px-4 sm:px-6"><Link href="/"><Logo /></Link><ThemeToggle /></header>
      <main className="page-shell w-full flex-1 py-10 sm:py-16">
        <article className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">ARHAT MODERATOR</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">Мэдээлэл устгуулах заавар</h1>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">Facebook, Google болон email бүртгэлд хамаарна</p>
          <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
            <h2>1. Ямар мэдээллийг устгуулах вэ?</h2>
            <p>Та account, profiles мэдээлэл, OAuth-той холбоотой account мэдээлэл, moderator application, verification metadata, consent болон зөвшөөрөлтэй location мэдээллийг устгуулах хүсэлт гаргаж болно. Хүсэлт нь тухайн хэрэглэгчийн account-ийг танихад шаардлагатай мэдээлэлтэй байх ёстой.</p>

            <h2>2. Хүсэлт гаргах алхам</h2>
            <ol>
              <li>Үйлчилгээний эзэмшигчийн баталгаатай холбоо барих сувгийг доорх хэсэгт production-д бөглөсөн эсэхийг шалгана.</li>
              <li>Бүртгэлтэй email-ээсээ account устгах хүсэлт илгээнэ. Facebook эсвэл Google Login ашигласан бол тухайн account-той холбогдох боломжтой email, provider-ийн нэрийг дурдана.</li>
              <li>Хүсэлтэд хэрэглэгчийн нэр, account танихад шаардлагатай мэдээлэл болон устгуулах хүрээг бичнэ. Нууц үг, Facebook App Secret, OAuth token илгээж болохгүй.</li>
              <li>Шаардлагатай үед account эзэмшигчийг баталгаажуулах нэмэлт мэдээлэл хүсэж болно.</li>
            </ol>

            <h2>3. Facebook-ээр нэвтэрсэн хэрэглэгч</h2>
            <p>Та Facebook-ийн Settings хэсгээс энэ аппын нэвтрэх зөвшөөрлийг цуцалж болно. Энэ нь Facebook талаас өгсөн access-ийг зогсоох үйлдэл бөгөөд ARHAT MODERATOR дахь account болон хадгалагдсан мэдээллийг устгуулах хүсэлтийг мөн доорх бодит сувгаар тусад нь гаргана.</p>

            <h2>4. Хүсэлтийг хэрхэн боловсруулах вэ?</h2>
            <p>Хүсэлтийг account эзэмшигч мөн эсэхийг шалгасны дараа холбогдох өгөгдөл, profile, application, verification болон storage metadata-г шалгана. Устгах боломжтой мэдээллийг устгах, устгах боломжгүй эсвэл заавал хадгалах хэсгийн шалтгааныг тайлбарлах арга хэмжээ авна.</p>
            <p>Одоогоор үйлчилгээний эзэмшигчийн баталгаатай хүлээн авах email, хүсэлтийн form URL болон боловсруулах хугацааны SLA энэ кодод өгөгдөөгүй. Тиймээс бодит хугацаа зохиож бичээгүй. Production-д нийтлэхээс өмнө эдгээр мэдээллийг заавал бөглөнө.</p>

            <h2>5. Ямар мэдээллийг түр хадгалж болох вэ?</h2>
            <p>Хууль ёсны шаардлага, маргаан шийдвэрлэх, залилан болон аюулгүй байдлын шалгалт, audit, нягтлан бодох бүртгэл эсвэл техникийн backup-ийн шаардлагаар зарим мэдээллийг шууд устгахгүй түр хадгалах шаардлага гарч болно. Identity verification баримтын хадгалалт нь системийн retention тохиргоо болон холбогдох шаардлагаар удирдагдана. Хадгалах шаардлага дуусмагц холбогдох cleanup процессоор устгах боломжтой мэдээллийг цэвэрлэнэ.</p>

            <h2>6. Production-д бөглөх холбоо барих хэсэг</h2>
            <p><strong>Тохируулах шаардлагатай:</strong> энд үйлчилгээний эзэмшигчийн бодит deletion request email эсвэл нийтэд нээлттэй request form URL-ийг оруулна. Зохиомол email, байгууллага, хаяг оруулаагүй.</p>

            <p><Link href="/privacy">Нууцлалын бодлогыг үзэх</Link> · <Link href="/terms">Үйлчилгээний нөхцөлийг үзэх</Link></p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
