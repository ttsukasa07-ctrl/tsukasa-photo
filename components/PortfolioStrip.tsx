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
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);

  const mobilePositionRef = useRef(0);
  const desktopPositionRef = useRef(0);

  const repeatedImages = [...portfolioImages, ...portfolioImages];

  // Mobile
  useEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;

    let animationFrameId: number;
    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - previousTime) / 1000;
      previousTime = currentTime;

      const loopWidth = track.scrollWidth / 2;
      const speed = loopWidth / 240;

      mobilePositionRef.current += speed * deltaTime;

      if (mobilePositionRef.current >= loopWidth) {
        mobilePositionRef.current -= loopWidth;
      }

      track.style.transform = `translate3d(${-mobilePositionRef.current}px, 0, 0)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Desktop
  useEffect(() => {
    const container = desktopScrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - previousTime) / 1000;
      previousTime = currentTime;

      const loopWidth = container.scrollWidth / 2;
      const speed = loopWidth / 240;

      desktopPositionRef.current += speed * deltaTime;

      if (desktopPositionRef.current >= loopWidth) {
        desktopPositionRef.current -= loopWidth;
      }

      container.scrollLeft = desktopPositionRef.current;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleDesktopScroll = () => {
    const container = desktopScrollRef.current;
    if (!container) return;

    desktopPositionRef.current = container.scrollLeft;
  };

  return (
    <section
      id="portfolio"
      className="w-full overflow-hidden py-10 md:py-16"
    >
      {/* Mobile */}
      <div className="overflow-hidden md:hidden">
        <div
          ref={mobileTrackRef}
          className="flex w-max gap-1 will-change-transform"
        >
          {repeatedImages.map((image, index) => (
            <div
              key={`mobile-${image.src}-${index}`}
              className={`relative h-[200px] shrink-0 overflow-hidden ${
                image.orientation === "landscape"
                  ? "w-[300px]"
                  : "w-[134px]"
              }`}
            >
              <Image
                src={image.src}
                alt={`Portfolio ${
                  (index % portfolioImages.length) + 1
                }`}
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div
        ref={desktopScrollRef}
        onScroll={handleDesktopScroll}
        className="portfolio-scroll hidden gap-1 overflow-x-auto md:flex"
      >
        {repeatedImages.map((image, index) => (
          <div
            key={`desktop-${image.src}-${index}`}
            className={`group relative h-[260px] shrink-0 overflow-hidden ${
              image.orientation === "landscape"
                ? "w-[390px]"
                : "w-[174px]"
            }`}
          >
            <Image
              src={image.src}
              alt={`Portfolio ${
                (index % portfolioImages.length) + 1
              }`}
              fill
              sizes="390px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            <div className="pointer-events-none absolute inset-0 bg-white/0 transition-colors duration-700 group-hover:bg-white/15" />
          </div>
        ))}
      </div>
    </section>
  );
}