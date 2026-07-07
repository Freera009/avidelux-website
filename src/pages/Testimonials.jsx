import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Quote } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";

const INTERIOR_IMG = "/images/7118d11e4_generated_fea8ad00.png";
const COASTAL_IMG = "/images/df3b79dfd_generated_d50a62bb.png";
const HOTEL_IMG = "/images/88fbb552e_generated_43d254ea.png";

const testimonials = [
  {
    quote: "AviDelux transformed our executive travel program. The AI dispatch is extraordinary—60 seconds from request to confirmed chauffeur, every single time. The zero-emission reporting alone has transformed our CSRD compliance process.",
    author: "Victoria Chen",
    title: "CFO, Meridian Capital",
    location: "London · Singapore",
    metric: "3,200+ rides",
  },
  {
    quote: "I've used every premium car service in Europe. None come close. The vehicle presentation, the chauffeur's discretion, the seamless airport pickup—it's a masterclass in luxury hospitality powered by technology that actually works.",
    author: "James Hartwell",
    title: "Managing Director, Atlas Ventures",
    location: "Zurich · Geneva",
    metric: "1,800+ rides",
  },
  {
    quote: "At midnight in Zurich, after a delayed flight, my chauffeur was already waiting. He'd tracked the flight, adjusted the route, and had warm coffee ready. This isn't a car service. It's a concierge that happens to drive.",
    author: "Sofia Lindström",
    title: "Partner, Nordic Equity Group",
    location: "Stockholm · Copenhagen",
    metric: "950+ rides",
  },
  {
    quote: "We moved 400 executives across 12 cities for our annual conference. Not a single delay. Not a single complaint. The dashboard gave us real-time visibility of every vehicle. AviDelux is now our exclusive ground travel partner.",
    author: "Marcus Okonkwo",
    title: "Head of Travel, Orion Partners",
    location: "New York · Dubai",
    metric: "5,600+ rides",
  },
  {
    quote: "The Scope 3 carbon reporting saved my team weeks of work. Every ride, every emission, automatically tracked and audit-ready. We hit our CSRD targets a year early because of AviDelux.",
    author: "Elena Vasquez",
    title: "Sustainability Director, Summit Group",
    location: "Madrid · Lisbon",
    metric: "2,100+ rides",
  },
];

export default function Testimonials() {
  return (
    <PageTransition>
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Client Stories</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              Trusted by the global elite
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="flex items-center gap-3 mt-8">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className="text-bronze fill-bronze" />)}
              </div>
              <span className="font-body text-sm text-cacao/50">4.97 average rating · 12,400+ reviews</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="bg-cream p-8 lg:p-16 rounded-sm">
              <Quote size={32} className="text-bronze mb-8" />
              <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-cacao leading-relaxed mb-10">
                {testimonials[0].quote}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="font-body text-sm font-medium text-cacao">{testimonials[0].author}</p>
                  <p className="font-body text-xs text-cacao/50 mt-1">{testimonials[0].title}</p>
                  <p className="font-body text-xs text-bronze mt-1">{testimonials[0].location}</p>
                </div>
                <span className="font-heading text-3xl font-bold text-bronze">{testimonials[0].metric}</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Image Break */}
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="rounded-sm overflow-hidden">
            <img src={INTERIOR_IMG} alt="Hand-stitched luxury leather interior detail" className="w-full h-[40vh] lg:h-[50vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* Testimonial Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(1).map((t, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="border border-cacao/10 p-8 lg:p-10 rounded-sm hover:bg-cream luxury-transition luxury-card h-full flex flex-col">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-bronze fill-bronze" />)}
                  </div>
                  <p className="font-body text-sm text-cacao/70 leading-relaxed flex-1 mb-8">"{t.quote}"</p>
                  <div className="flex items-end justify-between pt-6 border-t border-cacao/10">
                    <div>
                      <p className="font-body text-sm font-medium text-cacao">{t.author}</p>
                      <p className="font-body text-xs text-cacao/50 mt-1">{t.title}</p>
                      <p className="font-body text-xs text-bronze mt-1">{t.location}</p>
                    </div>
                    <span className="font-heading text-xl font-bold text-bronze">{t.metric}</span>
                  </div>
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
            <img src={COASTAL_IMG} alt="Luxury sedan on scenic coastal highway" className="w-full h-[40vh] lg:h-[50vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* CTA */}
      <section className="bg-cacao py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ivory leading-tight max-w-xl mx-auto">
              Join 52,000+ professionals who trust AviDelux
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Link to="/booking" className="inline-flex items-center gap-2 bg-bronze text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-bronze/80 luxury-transition rounded-sm mt-8">
              Book Your First Ride
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}