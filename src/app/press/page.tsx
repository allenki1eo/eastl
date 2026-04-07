"use client";

export default function PressPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Press & Media
          </h1>
          <p 
            className="text-xl text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            Latest news and media resources from East African Spirits
          </p>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <p 
            className="text-lg text-white/70"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            Press releases and media resources coming soon
          </p>
        </div>
      </section>
    </main>
  );
}
