import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Location Portfolio | Wedding Photographer",
  description:
    "ロケーション前撮りのポートフォリオ。京都を中心に撮影したウェディングフォトをご覧いただけます。",
};

const images = [
  "/images/portfolio/location/location_01.jpg",
  "/images/portfolio/location/location_02.jpg",
  "/images/portfolio/location/location_03.jpg",
  "/images/portfolio/location/location_04.jpg",
  "/images/portfolio/location/location_05.jpg",
  "/images/portfolio/location/location_06.jpg",
  "/images/portfolio/location/location_07.jpg",
  "/images/portfolio/location/location_08.jpg",
  "/images/portfolio/location/location_09.jpg",
  "/images/portfolio/location/location_10.jpg",
  "/images/portfolio/location/location_11.jpg",
  "/images/portfolio/location/location_12.jpg",
  "/images/portfolio/location/location_13.jpg",
  "/images/portfolio/location/location_14.jpg",
  "/images/portfolio/location/location_15.jpg",
  "/images/portfolio/location/location_16.jpg",
  "/images/portfolio/location/location_17.jpg",
  "/images/portfolio/location/location_18.jpg",
  "/images/portfolio/location/location_19.jpg",
  "/images/portfolio/location/location_20.jpg",
];

export default function LocationPortfolioPage() {
  return (
    <main className="bg-white text-neutral-900">
      <Header />

      <section className="px-4 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-6xl">
          {/* Title */}
          <div className="mb-16 text-center md:mb-24">
            <p className="section-title">
              Location
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
                  alt={`Location portfolio ${index + 1}`}
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