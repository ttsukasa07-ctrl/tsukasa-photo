import Image from "next/image";
import Link from "next/link";

export default function Plans() {
  return (
    <section
      id="plans"
      className="px-5 py-24 text-neutral-900 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="section-title text-center">
          Plans
        </p>

        <div className="mt-12 grid grid-cols-1 gap-20 md:mt-14 md:grid-cols-3 md:gap-10">
          {/* Location */}
          <div className="flex flex-col text-center">
            <Link
              href="/plans/location"
              className="group relative aspect-[4/5] overflow-hidden md:aspect-[3/4]"
            >
              <Image
                src="/images/plans/location.jpg"
                alt="Location"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </Link>

            <p className="font-english mt-6 text-[18px] font-bold tracking-[0.3em]">
              Location
            </p>

            <p className="section-subtitle mt-3">
              ロケーション前撮り
            </p>

            <div className="mt-6 text-[13px] leading-[2.5] tracking-[0.14em] md:min-h-[200px] md:text-[14px] md:leading-[2.6] md:tracking-[0.16em]">
              <p>
                ご希望があれば、
                <br />
                スタジオの手配も可能です。
                <br />
                まだ具体的なイメージがなくても、
                <br />
                お二人に合わせた撮影プランを
                <br />
                ご提案いたします。
              </p>
            </div>

            <p className="link-title mt-5 text-right">
              <Link
                href="/plans/location"
                className="inline-block transition-all duration-300 hover:translate-x-2 hover:opacity-60"
              >
                View Plan →
              </Link>
            </p>
          </div>

          {/* Wedding Day */}
          <div className="flex flex-col text-center">
            <Link
              href="/plans/wedding-day"
              className="group relative aspect-[4/5] overflow-hidden md:aspect-[3/4]"
            >
              <Image
                src="/images/plans/wedding_day.jpg"
                alt="Wedding Day"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </Link>

            <p className="font-english mt-6 text-[18px] font-bold tracking-[0.3em]">
              Wedding Day
            </p>

            <p className="section-subtitle mt-3">
              挙式・披露宴
            </p>

            <div className="mt-6 text-[13px] leading-[2.5] tracking-[0.14em] md:min-h-[200px] md:text-[14px] md:leading-[2.6] md:tracking-[0.16em]">
              <p>
                結婚式当日の様子を
                <br />
                余すところなく
                <br />
                撮影させていただきます。
                <br />
                外式での出張撮影にも
                <br />
                対応しております。
              </p>
            </div>

            <p className="link-title mt-5 text-right">
              <Link
                href="/plans/wedding-day"
                className="inline-block transition-all duration-300 hover:translate-x-2 hover:opacity-60"
              >
                View Plan →
              </Link>
            </p>
          </div>

          {/* Family */}
          <div className="flex flex-col text-center">
            <Link
              href="/plans/family"
              className="group relative aspect-[4/5] overflow-hidden md:aspect-[3/4]"
            >
              <Image
                src="/images/plans/family.jpg"
                alt="Family"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </Link>

            <p className="font-english mt-6 text-[18px] font-bold tracking-[0.3em]">
              Family
            </p>

            <p className="section-subtitle mt-3">
              家族写真
            </p>

            <div className="mt-6 text-[13px] leading-[2.5] tracking-[0.14em] md:min-h-[200px] md:text-[14px] md:leading-[2.6] md:tracking-[0.16em]">
              <p>
                お宮参り、七五三など
                <br />
                ご記念の日はもちろん、
                <br />
                マタニティ、カップルフォトなど、
                <br />
                人と人との繋がりを大切にした
                <br />
                撮影はこちらから。
              </p>
            </div>

            <p className="link-title mt-5 text-right">
              <Link
                href="/plans/family"
                className="inline-block transition-all duration-300 hover:translate-x-2 hover:opacity-60"
              >
                View Plan →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}