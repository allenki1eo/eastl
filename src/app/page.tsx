import HeroSlider from "@/components/hero-slider";
import FloatingBrands from "@/components/floating-brands";
import ProductShowcase from "@/components/product-showcase";
import ParallaxReveal from "@/components/parallax-reveal";

export default function Home() {
  return (
    <main className="relative">
      <HeroSlider />
      <FloatingBrands />
      <ProductShowcase />
      <ParallaxReveal />

      {/* Additional sections can be added below */}

    </main>
  );
}
