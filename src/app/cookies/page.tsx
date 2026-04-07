"use client";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-32 px-4 border-b border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Cookie Policy
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
                What Are Cookies?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-lg leading-relaxed">
                This Cookie Policy explains how East African Spirits uses cookies and similar technologies on our website.
              </p>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-6 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-white/30 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation and access to secure areas of the website. The website cannot function properly 
                    without these cookies.
                  </p>
                </div>

                <div className="border-l-4 border-white/30 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Performance Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies collect information about how visitors use our website, such as which pages are visited 
                    most often. This data helps us improve how our website works and enhance user experience.
                  </p>
                </div>

                <div className="border-l-4 border-white/30 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Functionality Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies allow the website to remember choices you make (such as your language preference) and 
                    provide enhanced, more personalized features.
                  </p>
                </div>

                <div className="border-l-4 border-white/30 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Targeting/Advertising Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are used to deliver advertisements more relevant to you and your interests. They may 
                    also be used to limit the number of times you see an advertisement and help measure the effectiveness 
                    of advertising campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Cookies */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                How We Use Cookies
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To ensure our website functions properly and securely</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To analyze website traffic and understand how visitors use our site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To remember your preferences and settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To verify your age (as our products are for adults 18+ only)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To improve your browsing experience</span>
                </li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Managing Cookies
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Block all cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Allow only certain cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Delete cookies when you close your browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Notify you when a website tries to set a cookie</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                Please note that blocking all cookies may impact your experience on our website and prevent you from 
                accessing certain features.
              </p>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Third-Party Cookies
              </h2>
              <p className="text-lg leading-relaxed">
                We may also use third-party services that set cookies on our behalf. These services help us analyze 
                website traffic, provide social media features, and deliver targeted advertising. Third-party cookies 
                are subject to the respective privacy policies of these external services.
              </p>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Updates to This Policy
              </h2>
              <p className="text-lg leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or 
                our business operations. We encourage you to review this page periodically for the latest information 
                on our cookie practices.
              </p>
            </div>

            {/* Contact */}
            <div className="border-t border-white/10 pt-8">
              <h2 
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Contact Us
              </h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about our use of cookies, please contact us through our Contacts page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
