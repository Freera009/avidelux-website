import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "@formspree/react";
import { ArrowRight, Check, Gift, Mail, Calendar } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const GIFT_IMG = "/images/490246c66_generated_image.png";

const packages = [
  {
    name: "Urban Escape",
    price: "€250",
    desc: "A single luxury ride within the city of your choice.",
    features: ["1 Business Class ride", "Up to 30 km", "Valid for 6 months", "Digital delivery"],
    popular: false,
  },
  {
    name: "Executive Experience",
    price: "€750",
    desc: "Three premium rides for the discerning professional.",
    features: ["3 First Class rides", "Up to 50 km each", "Airport meet & greet", "Valid for 12 months", "Personalized message"],
    popular: true,
  },
  {
    name: "Grand Voyage",
    price: "€2,500",
    desc: "The ultimate luxury ground travel package.",
    features: ["10 First Class rides", "Unlimited distance", "Nationwide validity", "Priority dispatch", "Dedicated account support", "Valid for 18 months"],
    popular: false,
  },
];

export default function GiftCards() {
  const [selected, setSelected] = useState(1);
  const [formspreeState, submitGiftCard] = useForm("xvzeoopb");
  const [recipient, setRecipient] = useState({ name: "", email: "", message: "" });

  const inputClass = "w-full bg-transparent border-b border-cacao/15 py-3 font-body text-sm text-cacao placeholder:text-cacao/30 focus:outline-none focus:border-bronze luxury-transition";

  const handleGiftCardSubmit = (e) => {
    e.preventDefault();
    submitGiftCard({
      subject: `New Gift Card Purchase Request — ${packages[selected].name}`,
      package: packages[selected].name,
      price: packages[selected].price,
      recipientName: recipient.name,
      recipientEmail: recipient.email,
      message: recipient.message,
    });
  };

  return (
    <PageTransition>
      <SEO
        title="Corporate Gift Cards"
        description="Give the gift of time with an Avidelux gift card, redeemable for premium ground transport through our licensed partner network across Germany."
        path="/gift-cards"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Gift Cards</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              The gift of time, for your clients and team
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              Digital gift cards redeemable for premium ground transport. Perfect for clients, executives, and team members who deserve the extraordinary.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Gift Image */}
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="rounded-sm overflow-hidden">
            <img src={GIFT_IMG} alt="Luxury gift box with champagne gold ribbon" className="w-full h-[35vh] lg:h-[45vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* Packages */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Luxury Packages</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight">
                Choose a package
              </h2>
            </div>
          </SectionReveal>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <button
                  onClick={() => setSelected(i)}
                  className={`w-full text-left p-8 rounded-sm h-full luxury-transition ${selected === i ? "bg-cacao text-ivory" : "bg-cream text-cacao border border-cacao/10 hover:border-cacao/30"}`}
                >
                  {pkg.popular && (
                    <span className="inline-block font-body text-xs tracking-widest uppercase text-bronze mb-4">Most Popular</span>
                  )}
                  <Gift size={24} className="text-bronze mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className={`font-body text-sm mb-6 ${selected === i ? "text-ivory/50" : "text-cacao/50"}`}>{pkg.desc}</p>
                  <span className="font-heading text-3xl font-bold">{pkg.price}</span>
                  <ul className="space-y-2 mt-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check size={14} className="text-bronze flex-shrink-0 mt-1" />
                        <span className={`font-body text-xs ${selected === i ? "text-ivory/70" : "text-cacao/60"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              </SectionReveal>
            ))}
          </div>

          {/* Purchase Form */}
          <SectionReveal>
            <div className="bg-cream p-8 lg:p-10 rounded-sm max-w-xl mx-auto">
              {formspreeState.succeeded ? (
                <div className="text-center py-8">
                  <Gift size={40} className="text-bronze mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-semibold text-cacao mb-2">Request Received</h3>
                  <p className="font-body text-sm text-cacao/50 mb-2">Our team will follow up to complete the gift card purchase for {recipient.email}.</p>
                </div>
              ) : (
                <form onSubmit={handleGiftCardSubmit} className="space-y-6">
                  <h3 className="font-heading text-lg font-semibold text-cacao">Recipient Details</h3>
                  <input type="text" required placeholder="Recipient Name" value={recipient.name} onChange={(e) => setRecipient({ ...recipient, name: e.target.value })} className={inputClass} />
                  <input type="email" required placeholder="Recipient Email" value={recipient.email} onChange={(e) => setRecipient({ ...recipient, email: e.target.value })} className={inputClass} />
                  <textarea placeholder="Personal message (optional)" rows={3} value={recipient.message} onChange={(e) => setRecipient({ ...recipient, message: e.target.value })} className={inputClass + " resize-none"} />
                  <div className="flex items-center justify-between py-4 border-y border-cacao/10">
                    <span className="font-body text-sm text-cacao/50">{packages[selected].name} Package</span>
                    <span className="font-heading text-2xl font-bold text-cacao">{packages[selected].price}</span>
                  </div>
                  <button type="submit" disabled={formspreeState.submitting} className="w-full bg-cacao text-ivory py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm flex items-center justify-center gap-2 disabled:opacity-30">
                    {formspreeState.submitting ? "Sending..." : "Purchase Gift Card"}
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}