"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxReveal() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const overlayImgRef = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !heroRef.current || !overlayImgRef.current || !overlayTextRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=200%", // Increased scroll distance for smoother feel
          pin: true,
          scrub: 1, // Smooth scrubbing with 1s lag
        }
      });

      tl
        // Start with overlay text fading out and moving up
        .to(overlayTextRef.current, {
          opacity: 0,
          y: -50,
          scale: 1.5, // Slight scale up with the container
          duration: 1,
          ease: "power2.inOut"
        })
        // Zoom in the overlay image significantly
        .to(overlayImgRef.current, {
          scale: 5, // Much larger scale to "pass through"
          z: 500,
          filter: "blur(10px)", // Add blur as it gets closer
          opacity: 0, // Fade out at the very end
          transformOrigin: "center center",
          duration: 3,
          ease: "power2.inOut"
        }, "<")
        // Animate the background hero slightly
        .fromTo(heroRef.current,
          { scale: 1, filter: "brightness(0.5)" },
          { scale: 1.1, filter: "brightness(1)", duration: 3, ease: "power2.out" },
          "<"
        )
        // Reveal the hero text
        .fromTo(heroTextRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
          "-=1.5" // Overlap with the end of the zoom
        );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-screen overflow-hidden -mt-20 z-10">
      {/* Content - Background Hero Section */}
      <div className="absolute inset-0 w-full h-full z-[1]">
        <section
          ref={heroRef}
          className="w-full h-full relative bg-black"
        >
          <Image
            src="/images/lite.png"
            alt="Background Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20">
            <h1
              ref={heroTextRef}
              className="text-white text-6xl md:text-8xl lg:text-9xl font-bold text-center px-4 uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              to new tastes
            </h1>
          </div>
        </section>
      </div>

      {/* Image Container - Overlay that zooms */}
      <div
        className="absolute inset-0 w-full h-full z-[2] pointer-events-none"
        style={{ perspective: "1000px" }}
      >
        <div ref={overlayImgRef} className="w-full h-full relative origin-center will-change-transform">
          <Image
            src="/images/p5.png"
            alt="Overlay Image"
            fill
            className="object-cover"
            priority
          />
          <div ref={overlayTextRef} className="absolute inset-0 flex items-center justify-center z-10">
            <h1
              className="text-white text-6xl md:text-8xl lg:text-9xl font-bold text-center px-4 uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              opening your world
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}