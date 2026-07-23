import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Shield, Leaf, Award } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const HQ_IMG = "/images/8dcb7bb09_generated_image.png";
const CHAUFFEUR_IMG = "/images/af1003db8_generated_image.png";
const INTERIOR_IMG = "/images/7118d11e4_generated_fea8ad00.png";

const values = [
  { icon: Shield, title: "Discretion", desc: "Absolute confidentiality for every client, every journey. Your privacy is sacred." },
  { icon: Leaf, title: "Sustainability", desc: "Partner fleets moving toward zero-emission vehicles, with full Scope 3 carbon reporting for CSRD compliance built into the platform." },
  { icon: Award, title: "Excellence", desc: "Partner vehicles under 18 months old. Partner chauffeurs held to strict hospitality standards. No compromise." },
  { icon: Heart, title: "Human Touch", desc: "AI dispatches the trip. Partner chauffeurs deliver the experience. Technology serves, never replaces." },
];

const timeline = [
  { year: "2019", title: "The Vision", desc: "Founded in Germany with a radical idea: automated dispatch technology for independently owned premium chauffeur companies, replacing manual call-center coordination." },
  { year: "2021", title: "Emissions Reporting", desc: "Introduced per-trip Scope 3 carbon reporting, now used by partners and corporate clients for CSRD compliance." },
  { year: "2023", title: "Germany-Wide Growth", desc: "Expanded partner coverage across major German business hubs, from Frankfurt to Berlin." },
  { year: "2026", title: "Platform Maturity", desc: "Refined automated dispatch to deliver sixty-second average response times for partner-fulfilled trips." },
];

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Avidelux"
        description="Learn how Avidelux's dispatch and fleet management platform connects independently owned, licensed premium chauffeur and ground transport companies across the EU under one automated, GoBD-compliant system."
        path="/about"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">About AviDelux</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              Luxury mobility, redefined by intelligence
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              We are a zero-fleet B2B technology platform. Our automated dispatch system routes each trip to a vetted, independently owned partner within 60 seconds — with GPS tracking and GoBD-compliant invoicing built in.
            </p>
          </SectionReveal>
        </div>
      </section>

      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="rounded-sm overflow-hidden">
            <img src={HQ_IMG} alt="AviDelux corporate headquarters at golden hour" className="w-full h-[40vh] lg:h-[55vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* Mission & Vision */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <SectionReveal>
              <div>
                <Target size={28} className="text-bronze mb-6" />
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-cacao mb-4">Our Mission</h2>
                <p className="font-body text-base text-cacao/50 leading-relaxed">
                  To liberate time for the global elite through frictionless, intelligent luxury ground travel. We eliminate waiting, uncertainty, and compromise—replacing them with precision, discretion, and zero-emission excellence.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div>
                <Eye size={28} className="text-bronze mb-6" />
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-cacao mb-4">Our Vision</h2>
                <p className="font-body text-base text-cacao/50 leading-relaxed">
                  A world where luxury ground travel is invisible—seamlessly woven into the fabric of executive life. Where autonomous dispatch, zero-emission fleets, and uncompromising hospitality converge into a single, effortless experience.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Our Values</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-lg">
                The principles that drive us
              </h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="p-8 border border-cacao/10 rounded-sm hover:bg-ivory luxury-transition luxury-card">
                  <v.icon size={24} className="text-bronze mb-6" />
                  <h3 className="font-heading text-lg font-semibold text-cacao mb-3">{v.title}</h3>
                  <p className="font-body text-sm text-cacao/50 leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Our Journey</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight">
                  From vision to global standard
                </h2>
              </div>
              <SectionReveal delay={0.1}>
                <div className="rounded-sm overflow-hidden">
                  <img src={CHAUFFEUR_IMG} alt="Professional AviDelux chauffeur in bespoke suit" className="w-full h-64 lg:h-80 object-cover" />
                </div>
              </SectionReveal>
            </div>
          </SectionReveal>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-8 py-8 border-b border-cacao/10">
                  <span className="font-heading text-2xl md:text-3xl font-bold text-bronze">{item.year}</span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cacao mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-cacao/50 leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cacao py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ivory leading-tight max-w-xl mx-auto">
              Experience the Avidelux difference
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Link to="/corporate" className="inline-flex items-center gap-2 bg-bronze text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-bronze/80 luxury-transition rounded-sm mt-8">
              Explore Corporate Solutions
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}