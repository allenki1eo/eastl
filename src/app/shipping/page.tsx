"use client";

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/truck.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            We Deliver to You
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            We have our own fleet of trucks ready to deliver your orders anywhere across the country and beyond
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide text-white"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              Our Delivery Coverage
            </h2>
            <p
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
            >
              With our dedicated fleet of delivery trucks, we ensure your orders reach you fresh and on time.
              We serve customers throughout Tanzania and export to neighboring countries.
            </p>
          </div>

          {/* Delivery Regions - Simple List */}
          <div className="max-w-2xl mx-auto space-y-8 mb-16">
            <div className="text-center">
              <h3
                className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-3 text-white"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Tanzania
              </h3>
              <p
                className="text-lg text-white/70"
                style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
              >
                We deliver to all regions across Tanzania
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3
                className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4 text-white text-center"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Export Services
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-center">
                <div>
                  <p
                    className="text-xl font-semibold text-white/90"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    Rwanda
                  </p>
                </div>
                <div className="text-white/30">•</div>
                <div>
                  <p
                    className="text-xl font-semibold text-white/90"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    Burundi
                  </p>
                </div>
                <div className="text-white/30">•</div>
                <div>
                  <p
                    className="text-xl font-semibold text-white/90"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    Congo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fleet Info */}
          <div className="text-center max-w-3xl mx-auto border-t border-white/10 pt-12">
            <h3
              className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-white"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              Our Own Fleet of Trucks
            </h3>
            <p
              className="text-lg text-white/70 leading-relaxed"
              style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
            >
              We operate our own delivery vehicles, ensuring reliable service and timely deliveries.
              Whether you&apos;re ordering for your business or personal use, we&apos;ve got you covered with
              professional logistics support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide text-white"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              Ready to Place an Order?
            </h2>
            <p
              className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
            >
              Get in touch with us to discuss your delivery needs
            </p>
            <a
              href="/contacts"
              className="inline-block bg-white hover:bg-white/90 text-black font-semibold uppercase tracking-wide px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
