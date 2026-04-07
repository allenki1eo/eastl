"use client";

export default function ResponsibleDrinkingPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-32 px-4 border-b border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Responsible Drinking
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            We are committed to promoting responsible consumption and the wellbeing of our customers
          </p>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide text-center"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Our Commitment
          </h2>
          <div
            className="text-lg text-white/70 space-y-6 leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            <p>
              At East African Spirits, we take pride in crafting quality beverages that bring people together.
              However, we believe that with this privilege comes great responsibility. We are deeply committed
              to promoting responsible drinking habits and ensuring that our products are enjoyed safely and
              in moderation.
            </p>
            <p>
              Our mission goes beyond producing premium beers and spirits—we aim to foster a culture of
              responsibility, awareness, and respect for the impact alcohol can have on individuals, families,
              and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Stance */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-12 uppercase tracking-wide text-center"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Our Stance
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-white pl-6">
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                For Adults Only
              </h3>
              <p
                className="text-lg text-white/70 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
              >
                Our products are intended exclusively for adults of legal drinking age. In Tanzania, this is 18 years
                and above. We do not market to, sell to, or encourage consumption by minors under any circumstances.
              </p>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Drink in Moderation
              </h3>
              <p
                className="text-lg text-white/70 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
              >
                We encourage all consumers to enjoy our beverages in moderation. Know your limits, pace yourself,
                and always prioritize your health and wellbeing. Excessive alcohol consumption can lead to serious
                health issues and impaired judgment.
              </p>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Never Drink and Drive
              </h3>
              <p
                className="text-lg text-white/70 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
              >
                Drinking and driving is dangerous and illegal. If you plan to drink, arrange for a designated driver,
                use public transportation, or call a taxi. Your safety and the safety of others should always come first.
              </p>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Health Awareness
              </h3>
              <p
                className="text-lg text-white/70 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
              >
                If you are pregnant, planning to become pregnant, or have certain health conditions, we strongly
                advise against consuming alcohol. Please consult with your healthcare provider if you have questions
                about alcohol consumption and your health.
              </p>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Respect and Responsibility
              </h3>
              <p
                className="text-lg text-white/70 leading-relaxed"
                style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
              >
                We believe in drinking responsibly and treating others with respect. Alcohol should enhance social
                experiences, not compromise safety, relationships, or personal wellbeing. Be mindful of your behavior
                and its impact on those around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-12 uppercase tracking-wide text-center"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Guidelines for Responsible Drinking
          </h2>
          <div
            className="space-y-4 text-lg text-white/70"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            <div className="flex items-start gap-4">
              <span className="text-white text-2xl">•</span>
              <p>Always drink water alongside alcoholic beverages to stay hydrated</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white text-2xl">•</span>
              <p>Eat before and while drinking to slow alcohol absorption</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white text-2xl">•</span>
              <p>Set a limit for yourself before you start drinking and stick to it</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white text-2xl">•</span>
              <p>Alternate alcoholic drinks with non-alcoholic beverages</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white text-2xl">•</span>
              <p>Avoid drinking games or activities that encourage excessive consumption</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white text-2xl">•</span>
              <p>Look out for your friends and speak up if you&apos;re concerned about their drinking</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-white text-2xl">•</span>
              <p>Never pressure others to drink if they choose not to</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Together We Make a Difference
          </h2>
          <p
            className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            Responsible drinking is a shared responsibility. Whether you&apos;re a consumer, retailer, or community member,
            we all play a role in promoting safe and moderate alcohol consumption. Let&apos;s work together to build a
            healthier, safer community.
          </p>
          <p
            className="text-xl text-white font-semibold"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Enjoy Responsibly. Drink Smart.
          </p>
        </div>
      </section>
    </main>
  );
}
