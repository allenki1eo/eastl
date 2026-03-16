"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "hansons-choice",
    title: "Hanson's Choice",
    description: "Premium brandy crafted with precision and aged to perfection. Rich, smooth flavor profile that defines luxury in every sip.",
    image: "/images/1.jpg",
  },
  {
    id: "hansons-lite",
    title: "Hanson's Lite",
    description: "Light, refreshing beer with balanced taste. Perfect for any occasion, combining quality with easy drinkability.",
    image: "/images/2.jpg",
  },
  {
    id: "goldberg",
    title: "Goldberg",
    description: "Premium lager with a golden finish. Crisp, clean taste that's become a favorite across East Africa.",
    image: "/images/3.jpg",
  },
  {
    id: "crafted-excellence",
    title: "Crafted Excellence",
    description: "Since 2017, delivering exceptional quality. Our flagship collection represents years of brewing mastery and tradition.",
    image: "/images/4.jpg",
  }
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray<HTMLImageElement>(".product-img-wrapper img");

      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 769px)": function () {
          const mainTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              pin: rightRef.current,
              scrub: true,
            }
          });

          // Initial state
          gsap.set(imgs, {
            clipPath: "inset(0)",
            objectPosition: "0px 0%"
          });

          imgs.forEach((_, index) => {
            const currentImage = imgs[index];
            const nextImage = imgs[index + 1] || null;

            const sectionTimeline = gsap.timeline();

            if (nextImage) {
              sectionTimeline
                .to(currentImage, {
                  clipPath: "inset(0px 0px 100%)",
                  objectPosition: "0px 60%",
                  duration: 1.5,
                  ease: "none"
                }, 0)
                .to(nextImage, {
                  objectPosition: "0px 40%",
                  duration: 1.5,
                  ease: "none"
                }, 0);
            }

            mainTimeline.add(sectionTimeline);
          });
        },

        // Mobile
        "(max-width: 768px)": function () {
          const mbTimeline = gsap.timeline();

          gsap.set(imgs, {
            objectPosition: "0px 60%"
          });

          imgs.forEach((image) => {
            const innerTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: image,
                start: "top-=70% top+=50%",
                end: "bottom+=200% bottom",
                scrub: true
              }
            });

            innerTimeline
              .to(image, {
                objectPosition: "0px 30%",
                duration: 5,
                ease: "none"
              });

            mbTimeline.add(innerTimeline);
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black pb-20 pt-0">
      <div className="h-[10vh]" /> {/* Spacer */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start relative w-full"
        >
          {/* Left side - Text content */}
          <div className="contents md:flex md:flex-col md:min-w-[300px] md:max-w-[400px] w-full">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-info w-full min-h-[50vh] py-10 md:py-0 md:h-screen flex items-center justify-center"
                style={{ order: index * 2 }} // Mobile order
              >
                <div className="content w-full">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                    {product.title}
                  </h2>
                  <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                    {product.description}
                  </p>
                  {/* <button className="mt-8 px-8 py-3 rounded-full bg-white text-black font-semibold uppercase tracking-wide hover:bg-white/90 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                      <path fill="currentColor" d="M5.5 2.5c0 1.105-1.895 2-3 2a2 2 0 1 1 0-4c1.105 0 3 .895 3 2ZM11.5 4c0 1.105-.895 3-2 3s-2-1.895-2-3a2 2 0 1 1 4 0ZM6.5 9.5c0 1.105.895-3 2-3s2 1.895 2 3Z" />
                    </svg>
                    <span>Learn More</span>
                  </button> */}
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Images */}
          <div
            ref={rightRef}
            className="contents md:flex md:flex-1 md:h-screen md:w-full md:max-w-[640px] md:relative md:flex-col"
          >
            {products.map((product, index) => (
              <div
                key={`img-${product.id}`}
                className="product-img-wrapper relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 md:mb-0 md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2"
                style={{
                  zIndex: products.length - index,
                  order: index * 2 + 1 // Mobile order
                }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[10vh]" /> {/* Spacer */}
    </section>
  );
}
