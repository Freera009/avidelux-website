import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Crown, Diamond, Star } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const VIP_IMG = "/images/0365aea9b_generated_image.png";
const HOTEL_IMG = "/images/88fbb552e_generated_43d254ea.png";

const tiers = [
  {
    name: "Silver",
    icon: Star,
    price: "€299",
    period: "/month",
    desc: "For the discerning executive.",
    features: [
      "Priority dispatch (30s average)",
      "10% volume discount on trip fees",
      "Dedicated account manager",
      "Monthly ride summary reports",
      "Standard vehicle selection",
    ],
    accent: false,
  },
  {
    name: "Gold",
    icon: Crown,
    price: "€699",
    period: "/month",
    desc: "For the frequent global traveler.",
    features: [
      "Priority dispatch (15s average)",
      "20% volume discount on trip fees",
      "Senior account manager",
      "Quarterly business review",
      "First Class vehicle access",
      "Airport meet & greet included",
      "Scope 3 carbon reporting",
    ],
    accent: true,
  },
  {
    name: "Platinum",
    icon: Diamond,
    price: "€1,499",
    period: "/month",
    desc: "For the elite few. Unlimited.",
    features: [
      "Instant dispatch (5s average)",
      "30% volume discount on trip fees",
      "24/7 dedicated account support",
      "Vehicle preference guarantee",
      "Maybach & Lucid Air access",
      "Priority dispatch across our full German network",
      "Full CSRD compliance suite",
      "Ground transport coordination for private aviation arrivals",
      "Custom billing & invoicing",
    ],
    accent: false,
  },
];

export default function Membership() {
  return (
    <PageTransition>
      <SEO
        title="Corporate Account Tiers"
        description="Avidelux corporate account tiers offer priority dispatch, volume-based rates, and dedicated account support for growing business travel programs."
        path="/membership"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Corporate Account Program</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              Tiers built for growing corporate accounts
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              Tiers designed for our most valued corporate clients. Priority dispatch, dedicated account support, and access to our full partner vehicle network.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* VIP Image */}
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="rounded-sm overflow-hidden">
            <img src={VIP_IMG} alt="Exclusive VIP lounge interior with private jet view" className="w-full h-[40vh] lg:h-[55vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* Tiers */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Account Tiers</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight">
                Choose your account tier
              </h2>
            </div>
          </SectionReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className={`p-8 lg:p-10 rounded-sm h-full flex flex-col ${tier.accent ? "bg-cacao text-ivory" : "bg-cream text-cacao border border-cacao/10"}`}>
                  <tier.icon size={28} className={tier.accent ? "text-bronze" : "text-bronze"} />
                  <h3 className="font-heading text-2xl font-semibold mt-6 mb-2">{tier.name}</h3>
                  <p className={`font-body text-sm mb-6 ${tier.accent ? "text-ivory/50" : "text-cacao/50"}`}>{tier.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="font-heading text-4xl font-bold">{tier.price}</span>
                    <span className={`font-body text-sm ${tier.accent ? "text-ivory/50" : "text-cacao/50"}`}>{tier.period}</span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check size={16} className={`flex-shrink-0 mt-0.5 ${tier.accent ? "text-bronze" : "text-bronze"}`} />
                        <span className={`font-body text-sm ${tier.accent ? "text-ivory/70" : "text-cacao/60"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-8 py-4 font-body text-sm font-medium tracking-wide rounded-sm flex items-center justify-center gap-2 luxury-transition ${tier.accent ? "bg-bronze text-ivory hover:bg-bronze/80" : "bg-cacao text-ivory hover:bg-espresso"}`}
                  >
                    Choose {tier.name}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Perks */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Account Benefits</p>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cacao leading-tight mb-6">
                  Beyond transportation
                </h2>
                <p className="font-body text-base text-cacao/50 leading-relaxed mb-8">
                  Corporate accounts unlock benefits that extend far beyond the trip itself. From private aviation ground coordination to custom billing, we anticipate every need.
                </p>
                <div className="space-y-4">
                  {[
                    "Guaranteed vehicle availability during peak demand",
                    "Partner chauffeur preference and recall",
                    "Custom routes and saved destinations",
                    "White-glove event coordination",
                    "Complimentary upgrades to First Class",
                  ].map((perk, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={16} className="text-bronze flex-shrink-0 mt-1" />
                      <span className="font-body text-sm text-cacao/70">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
              <SectionReveal delay={0.1}>
                <div className="rounded-sm overflow-hidden">
                  <img src={HOTEL_IMG} alt="Luxury hotel entrance with limousine" className="w-full h-64 lg:h-96 object-cover" />
                </div>
              </SectionReveal>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}