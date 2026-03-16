"use client";

import Image from "next/image";

const brands = [
  { name: "Hanson's Choice", image: "/images/6.png" },
  { name: "Hanson's Lite", image: "/images/7.png" },
  { name: "Goldberg", image: "/images/10.png" },
  { name: "Diamond Rock", image: "/images/hanson2.png" },
];

export default function FloatingBrands() {
  return (
    <section className="relative pt-20 pb-10 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight uppercase">
            Our Brands
          </h2>
          <p className="text-base md:text-lg text-white/70 font-light tracking-wide">
            Crafted with excellence and trusted by everyone
          </p>
        </div>

        {/* Brands Grid - Single Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative aspect-[3/2] bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-white/5 overflow-hidden transition-all duration-300 hover:bg-zinc-900/80 hover:border-white/10"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              {/* Brand name overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
