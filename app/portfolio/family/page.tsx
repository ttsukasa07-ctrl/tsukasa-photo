import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Family Portfolio | Wedding Photographer",
  description:
    "家族写真のポートフォリオ。お宮参り、七五三、マタニティなど、大切な人との時間を自然に残しています。",
};

const images = [
  "/images/portfolio/family/family_01.jpg",
  "/images/portfolio/family/family_02.jpg",
  "/images/portfolio/family/family_03.jpg",
  "/images/portfolio/family/family_04.jpg",
  "/images/portfolio/family/family_05.jpg",
  "/images/portfolio/family/family_06.jpg",
  "/images/portfolio/family/family_07.jpg",
  "/images/portfolio/family/family_08.jpg",
  "/images/portfolio/family/family_09.jpg",
  "/images/portfolio/family/family_10.jpg",
  "/images/portfolio/family/family_11.jpg",
  "/images/portfolio/family/family_12.jpg",
  "/images/portfolio/family/family_13.jpg",
  "/images/portfolio/family/family_14.jpg",
  "/images/portfolio/family/family_15.jpg",
  "/images/portfolio/family/family_16.jpg",
  "/images/portfolio/family/family_17.jpg",
];

export default function FamilyPortfolioPage() {
  return (
    <main className="bg-white text-neutral-900">
      <Header />

      <section className="px-4 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <div className="mb-16 text-center md:mb-24">
            <p className="section-title">
              Family
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
                  alt={`Family portfolio ${index + 1}`}
                  width={1800}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  loading={index === 0 ? "eager" : "lazy"}
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