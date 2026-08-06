import Image from "next/image";

export default function Profile() {
  return (
    <section
      id="profile"
      className="overflow-hidden px-5 py-24 text-neutral-900 md:px-8"
    >
      <div className="relative mx-auto max-w-6xl md:min-h-[1120px]">
        {/* Text Area */}
        <div className="relative z-10 text-center md:w-[570px] md:text-left">
          <p className="section-title">
            Profile
          </p>

          {/* Mobile Profile Image */}
          <div className="relative mt-10 h-[400px] w-full md:hidden">
            <Image
              src="/images/profile/profile.png"
              alt="tsukasa profile"
              fill
              className="object-contain object-top"
            />
          </div>

          {/* Profile Text */}
          <div className="mt-10 space-y-8 text-[13px] leading-[2.6] tracking-[0.14em] md:text-[14px] md:leading-[2.8] md:tracking-[0.18em]">
            <p>
              18歳の時に結婚式場の写真室で働き出してから、
              <br />
              気がつけば20年。
              <br />
              もう若くもなけりゃ、結婚もしたし、
              <br />
              家も買ったし、子供もいる。
            </p>

            <p>
              ただ何も変わらないのは、
              <br />
              ウェディングフォトグラファーとして生きていくこと以外、
              <br />
              考えられないくらいこの仕事が好きだということ。
            </p>

            <p>
              結婚式の日だけじゃなく、1年後、5年後、10年後。
              <br />
              子供が生まれた時、その子が結婚する時、
              <br />
              今日の写真を見返して
              <br />
              「この日、本当に幸せだったね」
              <br />
              と思える写真を残したい。
            </p>

            <p>
              だからtsukasaさんは、
              <br />
              がむしゃらに、ひたむきに、一生懸命。
            </p>

            <p>
              「ふたりらしさ」を
              <br />
              「ふたりだけ」の特別な写真にするために。
            </p>

            <p className="pt-6">
              今日も、明日も、明後日も。
              <br />
              ひたすらに写真を撮って生きています。
            </p>
          </div>

          {/* Instagram */}
          <a
  href="https://www.instagram.com/tsukasa_photographer/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-12 inline-flex items-center justify-center gap-4 transition-opacity duration-300 hover:opacity-60 md:justify-start"
>
  <Image
    src="/images/icons/insta_logo.png"
    alt="Instagram"
    width={60}
    height={60}
  />

  <div>
    <p className="font-english text-[13px] font-semibold tracking-[0.18em]">
      Follow on Instagram
    </p>

    <p className="mt-1 text-[11px] tracking-[0.1em]">
      @tsukasa_photographer
    </p>
  </div>
</a>
        </div>

        {/* PC Profile Image */}
        <div className="absolute -right-[120px] top-0 hidden h-[1080px] w-[850px] md:block">
          <Image
            src="/images/profile/profile.png"
            alt="tsukasa profile"
            fill
            className="object-contain object-top"
          />
        </div>
      </div>
    </section>
  );
}