"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const familyImages = [
  { src: "/images/portfolio/family/family_01.jpg", orientation: "landscape" },
  { src: "/images/portfolio/family/family_02.jpg", orientation: "portrait" },
  { src: "/images/portfolio/family/family_03.jpg", orientation: "landscape" },
  { src: "/images/portfolio/family/family_04.jpg", orientation: "portrait" },
  { src: "/images/portfolio/family/family_05.jpg", orientation: "landscape" },
  { src: "/images/portfolio/family/family_06.jpg", orientation: "landscape" },
  { src: "/images/portfolio/family/family_07.jpg", orientation: "portrait" },
  { src: "/images/portfolio/family/family_08.jpg", orientation: "landscape" },
  { src: "/images/portfolio/family/family_09.jpg", orientation: "landscape" },
  { src: "/images/portfolio/family/family_10.jpg", orientation: "portrait" },
  { src: "/images/portfolio/family/family_11.jpg", orientation: "landscape" },
  { src: "/images/portfolio/family/family_12.jpg", orientation: "landscape" },
];

export default function FamilyPortfolioStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);

  const repeatedImages = [...familyImages, ...familyImages];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - previousTime) / 1000;
      previousTime = currentTime;

      const loopWidth = container.scrollWidth / 2;
      const speed = loopWidth / 240;

      positionRef.current += speed * deltaTime;

      if (positionRef.current >= loopWidth) {
        positionRef.current -= loopWidth;
      }

      container.scrollLeft = positionRef.current;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    positionRef.current = container.scrollLeft;
  };

  return (
    <section className="w-full overflow-hidden py-6 md:py-10">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="portfolio-scroll flex gap-1 overflow-x-auto"
      >
        {repeatedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={`group relative h-[200px] shrink-0 overflow-hidden md:h-[260px] ${
              image.orientation === "landscape"
                ? "w-[300px] md:w-[390px]"
                : "w-[134px] md:w-[174px]"
            }`}
          >
            <Image
              src={image.src}
              alt={`Family portfolio ${
                (index % familyImages.length) + 1
              }`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            <div className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-700 group-hover:bg-white/15" />
          </div>
        ))}
      </div>
    </section>
  );
}