import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FamilyPortfolioStrip from "@/components/FamilyPortfolioStrip";

export const metadata: Metadata = {
  title: "Family Plan | 京都の家族写真",
  description:
    "お宮参り、七五三、マタニティ、カップルフォトなど、大切な人との時間を自然に残す家族写真プランです。",
};

export default function FamilyPlanPage() {
  return (
    <main className="bg-white text-neutral-900">
      <Header />

      {/* Hero */}
      <section className="px-5 pb-0 pt-40 md:px-8 md:pb-0 md:pt-48">
        <div className="mx-auto max-w-5xl text-center">
          <p className="section-title">
            Family
          </p>

          <p className="section-subtitle mt-4">
            家族写真
          </p>

          <div className="relative mt-12 aspect-[16/9] overflow-hidden md:mt-16">
            <Image
              src="/images/plans/family_main.jpg"
              alt="Family photo plan"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <FamilyPortfolioStrip />

      {/* Description */}
      <section className="px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[14px] leading-[3] tracking-[0.18em]">
            お宮参りや七五三などのご記念日はもちろん、
            <br />
            マタニティやカップルフォトなど、
            <br />
            大切な人との時間を写真に残します。
          </p>

          <p className="mt-8 text-[14px] leading-[3] tracking-[0.18em]">
            何気ない表情や空気まで、
            <br />
            そのご家族らしく残せたらと思っています。
          </p>
        </div>
      </section>

      {/* Plan Details */}
      <section className="bg-neutral-50 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="section-title text-center">
            Plan Details
          </p>

          <div className="mt-14 divide-y divide-neutral-300 border-y border-neutral-300">
            <div className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
              <p className="font-semibold tracking-[0.14em]">
                料金
              </p>

              <p className="leading-[2.2] tracking-[0.1em]">
                ¥30,000
              </p>
            </div>

            <div className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
              <p className="font-semibold tracking-[0.14em]">
                撮影時間
              </p>

              <p className="leading-[2.2] tracking-[0.1em]">
                1時間
              </p>
            </div>

            <div className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
              <p className="font-semibold tracking-[0.14em]">
                納品枚数
              </p>

              <p className="leading-[2.2] tracking-[0.1em]">
                100枚以上
              </p>
            </div>

            <div className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
              <p className="font-semibold tracking-[0.14em]">
                納期
              </p>

              <p className="leading-[2.2] tracking-[0.1em]">
                約1ヶ月
              </p>
            </div>

            <div className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
              <p className="font-semibold tracking-[0.14em]">
                オプション
              </p>

              <p className="leading-[2.2] tracking-[0.1em]">
                10日間納品　¥10,000
              </p>
            </div>
          </div>

          <p className="mt-5 text-right text-[11px] tracking-[0.1em] text-neutral-500">
            ※すべて税抜価格です
          </p>
        </div>
      </section>

      {/* Notes */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="section-title text-center">
            Notes
          </p>

          <div className="mt-12 space-y-4 text-[13px] leading-[2.4] tracking-[0.1em]">
            <p>
              ・撮影場所によっては別途交通費・施設使用料等が必要となる場合があります。
            </p>

            <p>
              ・神社や施設での撮影は、事前に撮影許可の確認をお願いいたします。
            </p>

            <p>
              ・お子様の体調やご機嫌に合わせながら撮影を進めます。
            </p>

            <p>
              ・撮影内容や移動時間によってスケジュールが変動する場合があります。
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-neutral-50 px-5 py-24 text-center md:px-8 md:py-32">
        <p className="section-title">
          Contact
        </p>

        <p className="mt-8 text-[14px] leading-[2.8] tracking-[0.16em]">
          撮影について気になることがあれば、
          <br />
          まずはお気軽にお問い合わせください。
        </p>

        <div className="mt-12">
          <a
            href="/#contact"
            className="font-english inline-block border border-neutral-900 px-12 py-4 text-[17px] font-semibold tracking-[0.2em] transition-all duration-300 hover:bg-neutral-900 hover:text-white"
          >
            Contact
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}