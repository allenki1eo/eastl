"use client";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-32 px-4 border-b border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Terms of Service
          </h1>
          <p 
            className="text-lg text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            Last Updated: October 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div 
            className="space-y-12 text-white/70"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            {/* Introduction */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Agreement to Terms
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Welcome to East African Spirits. By accessing or using our website, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing this site.
              </p>
              <p className="text-lg leading-relaxed">
                Please read these terms carefully before using our website.
              </p>
            </div>

            {/* Age Restriction */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Age Restriction
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Our products and services are intended solely for individuals who are of legal drinking age. In Tanzania, 
                the legal drinking age is 18 years. By accessing this website, you confirm that you are at least 18 years 
                old or the legal drinking age in your jurisdiction.
              </p>
              <p className="text-lg leading-relaxed">
                We do not knowingly collect information from or market to persons under the legal drinking age.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Use of Website
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                You agree to use this website only for lawful purposes and in a way that does not infringe the rights 
                of others or restrict their use and enjoyment of the website. Prohibited behavior includes:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Harassing, threatening, or defaming any person or entity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Transmitting any unlawful, harmful, or offensive content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Attempting to gain unauthorized access to our systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Using automated systems to access the website without permission</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Interfering with the proper functioning of the website</span>
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Intellectual Property Rights
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                All content on this website, including but not limited to text, graphics, logos, images, product names, 
                and software, is the property of East African Spirits or its content suppliers and is protected by 
                international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-lg leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit 
                any content from this website without our express written permission.
              </p>
            </div>

            {/* Products and Orders */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Products and Orders
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                All product descriptions, pricing, and availability are subject to change without notice. We reserve 
                the right to limit quantities, refuse service, or cancel orders at our discretion.
              </p>
              <p className="text-lg leading-relaxed">
                By placing an order, you agree to provide accurate and complete information. Orders are subject to 
                acceptance and availability.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Limitation of Liability
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                East African Spirits shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages resulting from the use or inability to use our website or products, even if we have been advised 
                of the possibility of such damages.
              </p>
              <p className="text-lg leading-relaxed">
                We do not guarantee that the website will be available at all times or that it will be error-free.
              </p>
            </div>

            {/* Responsible Drinking */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Responsible Drinking
              </h2>
              <p className="text-lg leading-relaxed">
                We are committed to promoting responsible alcohol consumption. By using our website and purchasing our 
                products, you acknowledge that you will consume alcohol responsibly, never drink and drive, and comply 
                with all applicable laws regarding alcohol consumption.
              </p>
            </div>

            {/* Privacy */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Privacy
              </h2>
              <p className="text-lg leading-relaxed">
                Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy to 
                understand our practices regarding the collection and use of your personal information.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Governing Law
              </h2>
              <p className="text-lg leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of Tanzania, 
                without regard to its conflict of law provisions. Any disputes arising from these terms shall be 
                resolved in the courts of Tanzania.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Changes to Terms
              </h2>
              <p className="text-lg leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
                upon posting to the website. Your continued use of the website after any changes constitutes acceptance 
                of the new terms.
              </p>
            </div>

            {/* Contact */}
            <div className="border-t border-white/10 pt-8">
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Contact Information
              </h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our Contacts page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
