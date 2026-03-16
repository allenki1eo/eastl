"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const carouselData = [
  {
    id: "founding",
    title: "The Founding — 2017",
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    id: "expansion",
    title: "Expansion Era — 2018-2019",
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    id: "innovation",
    title: "Innovation & Growth — 2020-2022",
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
  },
  {
    id: "today",
    title: "Today & Beyond — 2025+",
    images: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
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

      // Position cells in 3D circle
      cells.forEach((cell, i) => {
        const cellAngle = angle * i;
        (cell as HTMLElement).style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
      });

      // Scroll animation
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
          { rotationY: sceneIndex % 2 === 0 ? 0 : 45 },
          { rotationY: sceneIndex % 2 === 0 ? -180 : -135 }
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/3.jpg"
            alt="Our History"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 uppercase tracking-tight">
            Our History
          </h1>
          <p className="text-xl md:text-2xl text-white/70 uppercase tracking-widest">
            A Journey of Excellence Since 2017
          </p>
        </div>
      </section>

      {/* 3D Carousel Scenes */}
      <div className="scene-wrapper">
        {carouselData.map((data, index) => (
          <div
            key={data.id}
            ref={(el) => { scenesRef.current[index] = el }}
            className="scene-3d relative h-screen flex items-center justify-center"
            style={{ perspective: "900px" }}
          >
            {/* Title */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight text-center px-4 pointer-events-none">
              {data.title}
            </h2>

            {/* 3D Carousel */}
            <div
              className="carousel-3d absolute top-1/2 left-1/2 w-[350px] h-[420px] -ml-[175px] -mt-[210px]"
              style={{
                transformStyle: "preserve-3d",
                transform: index % 2 === 0 ? "translateZ(-500px) rotateY(0deg)" : "translateZ(-500px) rotateY(45deg)",
              }}
            >
              {data.images.map((img, cellIndex) => (
                <div
                  key={cellIndex}
                  className="carousel-3d__cell absolute w-[350px] h-[420px] left-0 top-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="card-3d w-full h-full relative rounded-lg overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="card-3d__face absolute w-full h-full"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <Image
                        src={img}
                        alt={`${data.title} - ${cellIndex + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Timeline */}
      <section className="relative py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 uppercase tracking-tight text-center">
            Our Milestones
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="text-6xl font-bold text-white min-w-[120px]">2017</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">Founded</h3>
                <p className="text-white/70 text-lg">
                  East African Spirits Ltd. was established with a vision to deliver premium beverages to the region.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-6xl font-bold text-white min-w-[120px]">2018</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">First Product Launch</h3>
                <p className="text-white/70 text-lg">
                  Hanson&apos;s Choice brandy introduced to the market, setting new standards for quality.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-6xl font-bold text-white min-w-[120px]">2020</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">Expansion</h3>
                <p className="text-white/70 text-lg">
                  Expanded distribution network across East Africa, reaching millions of consumers.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-6xl font-bold text-white min-w-[120px]">2023</span>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">Innovation</h3>
                <p className="text-white/70 text-lg">
                  Launched new premium product lines and invested in sustainable brewing practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}