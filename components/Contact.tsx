export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-24 text-neutral-900 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-title">
          Contact
        </p>

        <p className="mt-8 text-[13px] leading-[2.6] tracking-[0.14em] md:mt-10 md:text-[14px] md:leading-[2.8] md:tracking-[0.18em]">
          撮影のご相談・ご依頼はこちらから。
          <br />
          まずはお気軽にお問い合わせください。
        </p>

        <div className="mt-12 md:mt-14">
          <a
            href="/contact"
            className="font-english inline-block border border-neutral-900 px-10 py-4 text-[16px] font-semibold tracking-[0.18em] transition-all duration-300 hover:bg-neutral-900 hover:text-white md:px-14 md:text-[18px] md:tracking-[0.22em]"
          >
            Contact Form
          </a>
        </div>
      </div>
    </section>
  );
}