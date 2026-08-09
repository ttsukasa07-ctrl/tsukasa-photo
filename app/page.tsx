import Image from "next/image";
import Header from "@/components/Header";
import PortfolioStrip from "@/components/PortfolioStrip";
import Concept from "@/components/Concept";
import Plans from "@/components/Plans";
import Profile from "@/components/Profile";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />

     <section className="relative h-screen overflow-hidden">
  <Image
    src="/images/hero/hero.jpg"
    alt="Wedding Hero"
    fill
    className="hero-zoom object-cover object-[80%_center] md:object-center"
    priority
  />

  <div className="absolute left-[5%] top-[14%] z-10 md:left-[9%] md:top-[26%]">
    <p className="font-english text-[22px] font-semibold italic leading-[2.05] tracking-[0.38em] text-white/95 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] md:text-[26px] md:tracking-[0.48em]">
      For the moments
      <br />
      you&apos;ll return to,
      <br />
      forever.
    </p>
  </div>
</section>

   <PortfolioStrip />

<FadeIn>
  <Concept />
</FadeIn>

<FadeIn>
  <Plans />
</FadeIn>

<FadeIn>
  <Profile />
</FadeIn>

<FadeIn>
  <FAQ />
</FadeIn>

<FadeIn>
  <Contact />
</FadeIn>

<Footer />
    </main>
  );
}<section className="relative h-screen overflow-hidden">
  <Image
    src="/images/hero/hero.jpg"
    alt="Wedding Hero"
    fill
    className="hero-zoom object-cover"
    priority
  />

  <div className="absolute left-[9%] top-[26%] z-10">
    <p className="font-english text-[26px] font-semibold italic leading-[2.05] tracking-[0.48em] text-white/95 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
      For the moments
      <br />
      you&apos;ll return to,
      <br />
      forever.
    </p>
  </div>
</section>