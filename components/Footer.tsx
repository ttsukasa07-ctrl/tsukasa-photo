export default function Footer() {
  return (
    <footer className="bg-neutral-300 px-5 py-10 text-neutral-800 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Mobile */}
        <div className="flex flex-col items-center text-center md:hidden">
          <p className="brand-logo text-[24px]">
            tsukasa
          </p>

          <p className="font-english mt-3 text-[13px] font-semibold tracking-[0.05em]">
            Wedding Photographer
          </p>

          <p className="font-english mt-2 text-[11px] tracking-[0.04em]">
            all rights reserved.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden items-end justify-end gap-5 md:flex">
          <p className="brand-logo relative -top-[7px] text-[28px]">
            tsukasa
          </p>

          <p className="font-english -ml-2 text-[15px] font-semibold tracking-[0.06em]">
            Wedding Photographer
          </p>

          <p className="font-english text-[14px] tracking-[0.04em]">
            all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}