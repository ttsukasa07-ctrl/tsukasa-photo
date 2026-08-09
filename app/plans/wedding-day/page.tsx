import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeddingDayPortfolioStrip from "@/components/WeddingDayPortfolioStrip";

export const metadata: Metadata = {
  title: "Wedding Day Plan | 結婚式当日の撮影",
  description:
    "挙式・披露宴当日の様子を、お支度からお開きまで丁寧に撮影。外式や出張撮影にも対応しています。",
};

export default function WeddingDayPlanPage() {
  return (
    <main className="bg-white text-neutral-900">
      <Header />

      {/* Hero */}
      <section className="px-5 pb-0 pt-40 md:px-8 md:pb-0 md:pt-48">
        <div className="mx-auto max-w-5xl text-center">
          <p className="section-title">
            Wedding Day
          </p>

          <p className="section-subtitle mt-4">
            挙式・披露宴
          </p>

          <div className="relative mt-12 aspect-[16/9] overflow-hidden md:mt-16">
            <Image
              src="/images/plans/wedding_day_main.jpg"
              alt="Wedding Day photo plan"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <WeddingDayPortfolioStrip />

<div className="mt-10 text-center md:mt-14">
  <a
    href="/portfolio/wedding-day"
    className="font-english inline-block text-[18px] font-semibold tracking-[0.2em] transition-opacity duration-300 hover:opacity-50"
  >
    View Portfolio →
  </a>
</div>

      {/* Description */}
      <section className="px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[14px] leading-[3] tracking-[0.18em]">
            お支度から披露宴のお開きまで、
            <br />
            結婚式当日の様子を余すところなく撮影いたします。
          </p>

          <p className="mt-8 text-[14px] leading-[3] tracking-[0.18em]">
            お二人はもちろん、
            <br />
            ご家族やゲストの表情まで大切に残します。
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

              <div className="space-y-2 leading-[2.2] tracking-[0.1em]">
                <p>挙式＋披露宴　¥70,000</p>
                <p>挙式のみ　¥30,000</p>
              </div>
            </div>

            <div className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
              <p className="font-semibold tracking-[0.14em]">
                撮影時間
              </p>

              <p className="leading-[2.2] tracking-[0.1em]">
                お支度〜披露宴お開きまで
              </p>
            </div>

            <div className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
              <p className="font-semibold tracking-[0.14em]">
                納品枚数
              </p>

              <p className="leading-[2.2] tracking-[0.1em]">
                500枚以上
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

              <div className="space-y-2 leading-[2.2] tracking-[0.1em]">
                <p>10日間納品　¥10,000</p>
                <p>二次会撮影　¥30,000</p>
                <p>前撮り追加　¥30,000</p>
              </div>
            </div>

            <div className="grid gap-3 py-7 md:grid-cols-[220px_1fr]">
              <p className="font-semibold tracking-[0.14em]">
                外式
              </p>

              <p className="leading-[2.2] tracking-[0.1em]">
                出張料についてはご相談ください
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
              ・会場によって撮影ルールやカメラマン持込料が設定されている場合があります。
            </p>

            <p>
              ・カメラマンの持込が可能か、事前に会場へご確認をお願いいたします。
            </p>

            <p>
              ・当日の進行により撮影内容やスケジュールが変動する場合があります。
            </p>

            <p>
              ・外式や遠方への出張の場合は、交通費・出張費等が必要となる場合があります。
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