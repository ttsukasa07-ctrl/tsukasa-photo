export default function Footer() {
  return (
    <footer className="bg-neutral-300 px-8 py-12 text-neutral-800">
      <div className="mx-auto flex max-w-6xl items-end justify-end gap-5">
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
    </footer>
  );
}