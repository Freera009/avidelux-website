import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Wine, Heart, Building2, Music } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const WEDDING_IMG = "/images/3b6853f1e_generated_image.png";
const HOTEL_IMG = "/images/88fbb552e_generated_43d254ea.png";
const COASTAL_IMG = "/images/df3b79dfd_generated_d50a62bb.png";

const eventTypes = [
  { icon: Heart, title: "Weddings", desc: "Bespoke bridal cars, guest shuttles, and seamless logistics for your perfect day. White-glove service from ceremony to reception." },
  { icon: Wine, title: "Wine Tours", desc: "Curated vineyard journeys in chauffeur-driven luxury. Multi-stop itineraries through the world's finest wine regions." },
  { icon: Building2, title: "Corporate Events", desc: "Conferences, galas, board meetings. Dedicated fleet allocation with on-site coordination and real-time tracking." },
  { icon: Music, title: "Social Gatherings", desc: "Galas, premieres, and high-profile social events. Discreet, punctual, and impeccably presented." },
];

const packages = [
  {
    name: "Wedding Signature",
    desc: "The complete bridal transport package.",
    features: ["Mercedes-Maybach or Lucid Air", "Decorated to your specifications", "Champagne service", "Multi-stop coordination", "Photography stops included", "Up to 8 hours"],
  },
  {
    name: "Vineyard Voyager",
    desc: "A day among the vines, in luxury.",
    features: ["Premium SUV or First Class", "3-4 vineyard stops", "Sommelier coordination", "Gourmet lunch arrangement", "Wine transport service", "Full-day (10 hours)"],
  },
  {
    name: "Event Concierge",
    desc: "Comprehensive event transport management.",
    features: ["Multi-vehicle coordination", "Guest shuttle management", "Real-time tracking dashboard", "On-site coordinator", "VIP priority dispatch", "Custom billing"],
  },
];

export default function Events() {
  return (
    <PageTransition>
      <SEO
        title="Event Chauffeur Services"
        description="Arrive in style with AviDelux event chauffeur services for weddings, galas, corporate functions, and special occasions."
        path="/events"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Events & Private Tours</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              Bespoke transport for life's extraordinary moments
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              From weddings to wine tours, galas to corporate gatherings. AviDelux crafts unforgettable journeys with meticulous attention to every detail.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Hero Image */}
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="rounded-sm overflow-hidden">
            <img src={WEDDING_IMG} alt="Elegant white luxury wedding car at sunset" className="w-full h-[40vh] lg:h-[55vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* Event Types */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">What We Do</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-lg">
                Tailored for every occasion
              </h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((evt, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="group p-8 lg:p-10 border border-cacao/10 rounded-sm hover:bg-cream luxury-transition luxury-card">
                  <evt.icon size={28} className="text-bronze mb-6" />
                  <h3 className="font-heading text-xl font-semibold text-cacao mb-3">{evt.title}</h3>
                  <p className="font-body text-sm text-cacao/50 leading-relaxed">{evt.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="rounded-sm overflow-hidden">
            <img src={COASTAL_IMG} alt="Luxury sedan on scenic coastal highway at sunset" className="w-full h-[40vh] lg:h-[50vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* Packages */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Signature Packages</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight">
                Curated experiences
              </h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-cream p-8 rounded-sm h-full flex flex-col">
                  <Calendar size={24} className="text-bronze mb-6" />
                  <h3 className="font-heading text-lg font-semibold text-cacao mb-2">{pkg.name}</h3>
                  <p className="font-body text-sm text-cacao/50 mb-6">{pkg.desc}</p>
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-bronze flex-shrink-0 text-xs mt-1">—</span>
                        <span className="font-body text-xs text-cacao/60">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-6 font-body text-sm text-bronze hover:text-cacao luxury-transition flex items-center gap-1">
                    Enquire <ArrowRight size={14} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="rounded-sm overflow-hidden">
            <img src={HOTEL_IMG} alt="Luxury hotel entrance with limousine at evening" className="w-full h-[40vh] lg:h-[50vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* CTA */}
      <section className="bg-cacao py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ivory leading-tight max-w-xl mx-auto">
              Planning something extraordinary?
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-base text-ivory/50 mt-6 max-w-md mx-auto leading-relaxed">
              Our event specialists will craft a bespoke transport plan for your occasion.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-bronze text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-bronze/80 luxury-transition rounded-sm mt-8">
              Speak to an Event Specialist
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}