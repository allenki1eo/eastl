"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const eras = [
  {
    id: "founding",
    chapter: "01",
    year: "2017",
    title: "The Founding",
    description:
      "Born from a vision to craft premium beverages that reflect the spirit of East Africa, East African Spirits was established in 2017. Starting with a small team and bold ambitions, we set out to redefine quality in the regional beverage market.",
    images: ["/images/1.jpg", "/images/9.png", "/images/hanson1.png", "/images/hanson2.png"],
  },
  {
    id: "expansion",
    chapter: "02",
    year: "2018 – 2019",
    title: "Expansion Era",
    description:
      "From Tanzania into Kenya and Uganda, our distribution network grew rapidly. New product lines were launched and thousands of retailers became partners — bringing our beverages to millions of consumers across the region.",
    images: ["/images/2.jpg", "/images/3.jpg", "/images/hansonvodka.png", "/images/rock.png"],
  },
  {
    id: "innovation",
    chapter: "03",
    year: "2020 – 2022",
    title: "Innovation & Growth",
    description:
      "We deepened our commitment to product excellence — introducing premium gins, refining our vodka, and modernising our brewing processes. Quality became our sharpest competitive edge as we invested in sustainable production.",
    images: ["/images/4.jpg", "/images/rock2.png", "/images/furaha.png", "/images/p1.png"],
  },
  {
    id: "today",
    chapter: "04",
    year: "2023+",
    title: "Today & Beyond",
    description:
      "A leading name in premium East African beverages with a growing portfolio and regional presence. We continue pushing forward — driven by pride in our roots and a passion for excellence that never settles.",
    images: ["/images/p2.png", "/images/p3.png", "/images/p4.png", "/images/p5.png"],
  },
];

const milestones = [
  {
    year: "2017",
    title: "Founded",
    description:
      "East African Spirits Ltd. was established with a vision to deliver premium beverages to the region.",
  },
  {
    year: "2018",
    title: "First Product Launch",
    description:
      "Hanson's Choice Brandy introduced to the market, setting new standards for quality.",
  },
  {
    year: "2020",
    title: "Regional Expansion",
    description:
      "Distribution network expanded across East Africa, reaching millions of consumers.",
  },
  {
    year: "2022",
    title: "Premium Spirits Range",
    description:
      "Launched Diamond Rock Gin, Furaha Gin, and Hanson's Vodka — completing a full premium spirits portfolio.",
  },
  {
    year: "2023",
    title: "Innovation",
    description:
      "Invested in sustainable brewing practices and modern production facilities to meet growing demand.",
  },
];

export default function OurHistoryPage() {
  const scenesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const carousels = document.querySelectorAll(".carousel-3d");

    carousels.forEach((carousel, sceneIndex) => {
      const cells = carousel.querySelectorAll(".carousel-3d__cell");
      const cellCount = cells.length;
      const radius = 500;
      const angle = 360 / cellCount;

      // Position cells via GSAP so transforms don't conflict
      cells.forEach((cell, i) => {
        gsap.set(cell, { rotationY: angle * i, z: radius });
      });

      // Set initial carousel state via GSAP
      const initialRotY = sceneIndex % 2 === 0 ? 0 : 45;
      gsap.set(carousel, { z: -radius, rotationY: initialRotY });

      const scene = scenesRef.current[sceneIndex];
      if (!scene) return;

      gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
        .fromTo(
          carousel,
          { rotationY: initialRotY },
          { rotationY: initialRotY - 180 }
        )
        .fromTo(
          carousel,
          { rotationZ: 3, rotationX: 3 },
          { rotationZ: -3, rotationX: -3 },
          0
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/3.jpg"
            alt="Our History"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p
            className="text-[#c99b3e] text-xs font-bold uppercase tracking-[0.5em] mb-6"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            Est. 2017
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 uppercase tracking-tight">
            Our Story
          </h1>
          <p
            className="text-lg md:text-xl text-white/50 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            A Journey of Excellence Across East Africa
          </p>
          <div className="w-16 h-0.5 bg-[#c99b3e] mx-auto mt-10" />
        </div>
      </section>

      {/* Era Sections */}
      <div className="scene-wrapper">
        {eras.map((era, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={era.id}
              ref={(el) => {
                scenesRef.current[index] = el;
              }}
              className="scene-3d relative h-screen overflow-hidden border-b border-white/5"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`absolute inset-0 flex items-center ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Text Panel */}
                <div className="w-full md:w-1/2 px-10 md:px-16 lg:px-24 z-20 relative">
                  <span
                    className="text-[#c99b3e] text-xs font-bold uppercase tracking-[0.4em] mb-3 block"
                    style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
                  >
                    Chapter {era.chapter}
                  </span>
                  <div
                    className="text-5xl md:text-7xl font-bold text-white/10 leading-none mb-1 uppercase select-none"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {era.year}
                  </div>
                  <h2
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {era.title}
                  </h2>
                  <p
                    className="text-white/60 text-base md:text-lg leading-relaxed max-w-md"
                    style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
                  >
                    {era.description}
                  </p>
                  <div className="w-12 h-0.5 bg-[#c99b3e] mt-8" />
                </div>

                {/* Carousel Panel — hidden on mobile */}
                <div className="hidden md:flex w-1/2 h-full items-center justify-center relative">
                  <div
                    className="carousel-3d relative w-[300px] h-[380px] lg:w-[350px] lg:h-[420px]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {era.images.map((img, cellIndex) => (
                      <div
                        key={cellIndex}
                        className="carousel-3d__cell absolute inset-0"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <div
                          className="w-full h-full relative rounded-lg overflow-hidden"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <Image
                            src={img}
                            alt={`${era.title} — ${cellIndex + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Watermark chapter number */}
              <div
                className={`absolute bottom-6 ${
                  isEven ? "right-8 md:right-12" : "left-8 md:left-12"
                } text-[140px] lg:text-[180px] font-bold text-white/[0.03] leading-none pointer-events-none select-none`}
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                {era.chapter}
              </div>
            </div>
          );
        })}
      </div>

      {/* Milestones Timeline */}
      <section className="relative py-24 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span
              className="text-[#c99b3e] text-xs font-bold uppercase tracking-[0.4em] block mb-4"
              style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
            >
              Timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Our Milestones
            </h2>
          </div>

          {/* Vertical timeline */}
          <div className="relative pl-4">
            {/* Spine */}
            <div className="absolute left-[84px] md:left-[100px] top-2 bottom-2 w-px bg-gradient-to-b from-[#c99b3e]/70 via-[#c99b3e]/30 to-transparent" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4 md:gap-6 relative">
                  {/* Year */}
                  <div className="min-w-[64px] md:min-w-[80px] text-right pt-0.5">
                    <span
                      className="text-2xl md:text-3xl font-bold text-[#c99b3e] leading-none"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      {m.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="flex-shrink-0 mt-2 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-[#c99b3e] ring-4 ring-[#c99b3e]/20" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3
                      className="text-xl md:text-2xl font-bold text-white mb-1 uppercase"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="text-white/50 text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
                    >
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
