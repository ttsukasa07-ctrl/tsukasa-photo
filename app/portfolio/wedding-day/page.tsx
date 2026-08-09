import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wedding Day Portfolio | Wedding Photographer",
  description:
    "挙式・披露宴当日のウェディングフォトポートフォリオ。大切な一日の空気や表情を丁寧に残しています。",
};

const images = [
  "/images/portfolio/wedding-day/wedding_day_01.jpg",
  "/images/portfolio/wedding-day/wedding_day_02.jpg",
  "/images/portfolio/wedding-day/wedding_day_03.jpg",
  "/images/portfolio/wedding-day/wedding_day_04.jpg",
  "/images/portfolio/wedding-day/wedding_day_05.jpg",
  "/images/portfolio/wedding-day/wedding_day_06.jpg",
  "/images/portfolio/wedding-day/wedding_day_07.jpg",
  "/images/portfolio/wedding-day/wedding_day_08.jpg",
  "/images/portfolio/wedding-day/wedding_day_09.jpg",
  "/images/portfolio/wedding-day/wedding_day_10.jpg",
  "/images/portfolio/wedding-day/wedding_day_11.jpg",
  "/images/portfolio/wedding-day/wedding_day_12.jpg",
  "/images/portfolio/wedding-day/wedding_day_13.jpg",
  "/images/portfolio/wedding-day/wedding_day_14.jpg",
  "/images/portfolio/wedding-day/wedding_day_15.jpg",
];

export default function WeddingDayPortfolioPage() {
  return (
    <main className="bg-white text-neutral-900">
      <Header />

      <section className="px-4 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <div className="mb-16 text-center md:mb-24">
            <p className="section-title">
              Wedding Day
            </p>

            <p className="section-subtitle mt-4">
              Portfolio
            </p>
          </div>

          {/* Gallery */}
          <div className="space-y-5 md:space-y-10">
            {images.map((src, index) => (
              <div
                key={src}
                className="relative mx-auto w-full overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Wedding Day portfolio ${index + 1}`}
                  width={1800}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}