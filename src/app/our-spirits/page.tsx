import Image from "next/image";
import SpiritsScrollFilter from "@/components/spirits-scroll-filter";

export default function OurSpiritsPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/spirithero.png"
            alt="Our Spirits"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 uppercase tracking-tight">
            Our Spirits
          </h1>
          <p className="text-xl md:text-2xl text-white/70 uppercase tracking-widest">
            Crafted Excellence Since 2017
          </p>
        </div>
      </section>

      {/* Spirits Scroll Filter with Keyhole Reveal */}
      <SpiritsScrollFilter />
    </main>
  );
}