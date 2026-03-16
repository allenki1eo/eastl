"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-32 px-4 border-b border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Privacy Policy
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
                Our Commitment to Privacy
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                At East African Spirits, we respect your privacy and are committed to protecting your personal data.
                This Privacy Policy explains how we collect, use, store, and protect your information when you visit
                our website or use our services.
              </p>
              <p className="text-lg leading-relaxed">
                By using our website, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-6 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Information We Collect
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-white/30 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                  <p className="leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>Name and contact information (email, phone number, address)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>Date of birth or age verification information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>Order and delivery information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>Payment information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>Communication preferences</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-white/30 pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Automatically Collected Information</h3>
                  <p className="leading-relaxed mb-3">
                    When you visit our website, we automatically collect certain information, including:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>IP address and browser type</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>Device information and operating system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>Pages visited and time spent on our website</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>Referring website or search engine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span>Cookies and similar tracking technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                How We Use Your Information
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To process and fulfill your orders and deliveries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To verify your age and comply with legal requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To communicate with you about orders, promotions, and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To improve our website, products, and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To analyze website usage and trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To prevent fraud and ensure security</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>To comply with legal obligations</span>
                </li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                How We Share Your Information
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span><strong className="text-white">Service Providers:</strong> Third-party companies that help us operate our business
                    (e.g., payment processors, delivery services, marketing partners)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or government regulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span><strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span><strong className="text-white">Protection:</strong> To protect our rights, property, or safety, or that of our users</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Data Security
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Secure server infrastructure and encryption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Regular security assessments and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Access controls and authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span>Employee training on data protection</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Your Rights
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span><strong className="text-white">Access:</strong> Request access to your personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span><strong className="text-white">Deletion:</strong> Request deletion of your personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span><strong className="text-white">Opt-out:</strong> Unsubscribe from marketing communications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white text-xl">•</span>
                  <span><strong className="text-white">Data Portability:</strong> Request a copy of your data in a structured format</span>
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Cookies and Tracking
              </h2>
              <p className="text-lg leading-relaxed">
                We use cookies and similar tracking technologies to improve your browsing experience. For more
                information about how we use cookies, please see our Cookie Policy.
              </p>
            </div>

            {/* Age Verification */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Age Verification
              </h2>
              <p className="text-lg leading-relaxed">
                Our website and products are intended for individuals who are at least 18 years old or the legal
                drinking age in their jurisdiction. We do not knowingly collect personal information from individuals
                under the legal drinking age.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Data Retention
              </h2>
              <p className="text-lg leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2
                className="text-3xl font-bold text-white mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-bebas), sans-serif" }}
              >
                Changes to This Privacy Policy
              </h2>
              <p className="text-lg leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We will notify you of any material changes by posting the new Privacy Policy on this
                page and updating the &quot;Last Updated&quot; date.
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
              <p className="text-lg leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us
                through our Contacts page.
              </p>
              <p className="text-lg leading-relaxed">
                We are committed to resolving any privacy concerns you may have.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
