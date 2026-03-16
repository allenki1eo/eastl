"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Products",
    question: "What types of beverages do you produce?",
    answer: "We produce a wide range of premium beverages including lagers (Goldberg, Hanson's Lite, Basembi, Mbogo), premium spirits (Hanson's Choice Brandy, Hanson's Vodka, Diamond Rock Gin, Furaha Gin), and premium ciders (Hanson's Dry Crispy Apple Cider, Hanson's Premium Cider). All our products are crafted to the highest quality standards."
  },
  {
    category: "Products",
    question: "Where can I buy your products?",
    answer: "Our products are available at major supermarkets, liquor stores, bars, and restaurants across Tanzania, Kenya, and Uganda. Use our store locator on the Contacts page to find the nearest retailer."
  },
  {
    category: "Products",
    question: "What is the alcohol content (ABV) of your beers and spirits?",
    answer: "Our beers range from 4.2% to 5.6% ABV. Goldberg Malt Lager is 5.6%, Mbogo Lager is 5.5%, Basembi Lager is 5.0%, Hanson's Dry Crispy Apple Cider is 5.0%, Hanson's Premium Cider is 4.8%, and Hanson's Lite is 4.2%. Our spirits range from 37.5% to 43% ABV, with vodka at 37.5%, brandy at 40%, and gin at 40-43%."
  },
  {
    category: "Quality & Production",
    question: "How do you ensure product quality?",
    answer: "We maintain the highest quality standards through rigorous quality control at every stage of production. Our facilities use state-of-the-art brewing and distilling equipment, and all products undergo multiple quality checks before distribution. We source premium ingredients and follow international brewing and distilling best practices."
  },
  {
    category: "Quality & Production",
    question: "Are your products made locally?",
    answer: "Yes, all our products are proudly crafted in East Africa using a combination of locally sourced ingredients and premium imported materials. We support local agriculture and contribute to the regional economy while maintaining international quality standards."
  },
  {
    category: "Quality & Production",
    question: "What makes your spirits premium?",
    answer: "Our spirits are crafted using traditional distillation methods combined with modern technology. Hanson's Choice Brandy is aged to perfection, our vodka undergoes triple distillation for exceptional smoothness, and our gins feature carefully selected botanical blends. Each spirit is crafted in small batches to ensure consistency and quality."
  },
  {
    category: "Storage & Serving",
    question: "How should I store your products?",
    answer: "Beers should be stored in a cool, dry place away from direct sunlight, ideally at 4-7°C (39-45°F). Spirits should be stored upright in a cool, dark place at room temperature. Once opened, spirits can last for years if properly sealed, while beers should be consumed fresh for the best taste."
  },
  {
    category: "Storage & Serving",
    question: "What is the best way to serve your beers?",
    answer: "Our lagers are best served chilled at 4-7°C (39-45°F) in a clean glass. Pour at a 45-degree angle to achieve the perfect head. For optimal taste, avoid freezing beers as it can affect the flavor profile."
  },
  {
    category: "Storage & Serving",
    question: "What is the shelf life of your products?",
    answer: "Our beers have a shelf life of approximately 6-9 months from the production date when stored properly. Check the 'best before' date on the bottle or can. Spirits have an indefinite shelf life when unopened and properly stored."
  },
  {
    category: "Company Information",
    question: "How long have you been in business?",
    answer: "East African Spirits has been producing quality beverages for decades, building on a rich heritage of brewing and distilling excellence in the region. We continue to innovate while honoring traditional craftsmanship."
  },
  {
    category: "Company Information",
    question: "Do you offer tours of your facilities?",
    answer: "Yes, we offer guided tours of selected production facilities. Tours include an overview of our brewing and distilling processes, quality control measures, and tasting sessions. Please contact us through our Contacts page to schedule a visit."
  },
  {
    category: "Company Information",
    question: "Are you hiring?",
    answer: "We're always looking for talented individuals to join our team. Visit our Careers page or contact our HR department for current openings. We value diversity, innovation, and a passion for quality."
  },
  {
    category: "Responsible Drinking",
    question: "What is your stance on responsible drinking?",
    answer: "We are committed to promoting responsible consumption of alcohol. Our products are intended for adults of legal drinking age only (18+ in Tanzania, 21+ in some regions). We encourage our customers to drink responsibly, never drink and drive, and be mindful of their limits."
  },
  {
    category: "Responsible Drinking",
    question: "What is the legal drinking age for your products?",
    answer: "The legal drinking age is 18 years in Tanzania and varies by region in East Africa. All our marketing and sales strictly adhere to local regulations. We do not sell or market our products to minors."
  },
  {
    category: "Distribution & Sales",
    question: "Do you export your products internationally?",
    answer: "Currently, our primary markets are Tanzania, Kenya, and Uganda. We are exploring opportunities to expand to other markets. For international inquiries, please contact our export division through the Contacts page."
  },
  {
    category: "Distribution & Sales",
    question: "Can I become a distributor for your products?",
    answer: "We're always interested in working with reputable distributors. If you're interested in distributing our products, please submit your company information and distribution proposal through our Contacts page, and our sales team will get in touch with you."
  },
  {
    category: "Customer Service",
    question: "How can I provide feedback or file a complaint?",
    answer: "We value customer feedback and take all concerns seriously. You can reach our customer service team through the Contacts page, via email, or by phone. We aim to respond to all inquiries within 24-48 hours."
  },
  {
    category: "Customer Service",
    question: "Do you have a loyalty program?",
    answer: "We're currently developing a customer loyalty program that will reward our regular customers with exclusive benefits, early access to new products, and special promotions. Stay tuned to our website and social media for updates."
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = selectedCategory === "All"
    ? faqData
    : faqData.filter(item => item.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            Find answers to common questions about our products, services, and company
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${selectedCategory === "All"
              ? "bg-[#c99b3e] text-white shadow-lg scale-105"
              : "bg-muted text-foreground hover:bg-[#c99b3e]/20"
              }`}
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${selectedCategory === category
                ? "bg-[#c99b3e] text-white shadow-lg scale-105"
                : "bg-muted text-foreground hover:bg-[#c99b3e]/20"
                }`}
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider text-white bg-[#c99b3e]/20 px-3 py-1 rounded-full"
                      style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                    >
                      {faq.category}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-semibold uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                  >
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div
                  className="px-6 pb-6 text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-zinc-900/50 border border-[#c99b3e]/30 rounded-2xl p-8">
          <h2
            className="text-3xl font-bold mb-4 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Still have questions?
          </h2>
          <p
            className="text-muted-foreground mb-6"
            style={{ fontFamily: "var(--font-open-sans), sans-serif" }}
          >
            Can&apos;t find the answer you&apos;re looking for? Our customer support team is here to help.
          </p>
          <a
            href="/contacts"
            className="inline-block bg-[#c99b3e] hover:bg-[#d4a84a] text-white font-semibold uppercase tracking-wide px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
