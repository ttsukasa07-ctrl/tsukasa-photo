export default function Footer() {
  return (
    <footer className="bg-neutral-300 px-5 py-10 text-neutral-800 md:px-8 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 md:flex-row md:items-end md:justify-end md:gap-5">
        <p className="brand-logo text-[24px] md:relative md:-top-[7px] md:text-[28px]">
          tsukasa
        </p>

        <p className="font-english text-[13px] font-semibold tracking-[0.05em] md:-ml-2 md:text-[15px] md:tracking-[0.06em]">
          Wedding Photographer
        </p>

        <p className="font-english text-[11px] tracking-[0.04em] md:text-[14px]">
          all rights reserved.
        </p>
      </div>
    </footer>
  );
}