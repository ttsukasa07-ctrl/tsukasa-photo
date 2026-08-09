"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const portfolioImages = [
  { src: "/images/portfolio/portfolio_01.jpg", orientation: "landscape" },
  { src: "/images/portfolio/portfolio_02.jpg", orientation: "portrait" },
  { src: "/images/portfolio/portfolio_03.jpg", orientation: "landscape" },
  { src: "/images/portfolio/portfolio_04.jpg", orientation: "portrait" },
  { src: "/images/portfolio/portfolio_05.jpg", orientation: "landscape" },
  { src: "/images/portfolio/portfolio_06.jpg", orientation: "portrait" },
  { src: "/images/portfolio/portfolio_07.jpg", orientation: "landscape" },
  { src: "/images/portfolio/portfolio_08.jpg", orientation: "landscape" },
  { src: "/images/portfolio/portfolio_09.jpg", orientation: "portrait" },
  { src: "/images/portfolio/portfolio_10.jpg", orientation: "landscape" },
];

export default function PortfolioStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);

  const repeatedImages = [...portfolioImages, ...portfolioImages];

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    let animationFrameId: number;
    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - previousTime) / 1000;
      previousTime = currentTime;

      const loopWidth = container.scrollWidth / 2;

      // 1周 約240秒
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
    <section
      id="portfolio"
      className="w-full overflow-hidden py-10 md:py-16"
    >
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
              alt={`Portfolio ${
                (index % portfolioImages.length) + 1
              }`}
              fill
              sizes="(max-width: 768px) 300px, 390px"
              className="object-cover md:transition-transform md:duration-700 md:ease-out md:group-hover:scale-[1.04]"
            />

            <div className="pointer-events-none absolute inset-0 bg-white/0 md:transition-colors md:duration-700 md:group-hover:bg-white/15" />
          </div>
        ))}
      </div>
    </section>
  );
}