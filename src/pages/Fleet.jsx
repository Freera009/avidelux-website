import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import FleetCard from "@/components/avidelux/FleetCard";
import SectionReveal from "@/components/avidelux/SectionReveal";
import ParallaxText from "@/components/avidelux/ParallaxText";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";
import SpinningCar from "@/components/avidelux/SpinningCar";

const DASHBOARD_IMG = "/images/1c96283a7_generated_902bb949.png";
const SUV_IMG = "/images/d163e2d79_generated_787d9461.png";
const FIRST_IMG = "/images/d66ac3028_generated_7e4454ac.png";
const DETAIL_IMG = "/images/4bd2100d2_generated_26d5f150.png";
const HERO_IMG = "/images/f02e2c51b_generated_f64341c9.png";
const COASTAL = "/images/df3b79dfd_generated_d50a62bb.png";

const fleetVehicles = [
  {
    title: "First Class",
    subtitle: "Mercedes-Maybach S-Class",
    image: HERO_IMG,
    features: ["Champagne service", "Privacy partition", "Personal host", "Noise cancelling cabin"],
  },
  {
    title: "Business Class",
    subtitle: "Mercedes S-Class",
    image: COASTAL,
    features: ["Zero-emission", "Wi-Fi", "Leather interior", "USB-C charging"],
  },
  {
    title: "Luxury Sedan",
    subtitle: "Lucid Air Grand Touring",
    image: FIRST_IMG,
    features: ["Sport comfort", "Dynamic ride", "Premium audio", "Performance cabin"],
  },
  {
    title: "Premium SUV",
    subtitle: "Electric Luxury SUV",
    image: SUV_IMG,
    features: ["Spacious cabin", "Airport priority", "6 passengers", "Luggage capacity"],
  },
  {
    title: "Airport Express",
    subtitle: "Cadillac Escalade IQ",
    image: DASHBOARD_IMG,
    features: ["Flight tracking", "Meet & greet", "Fast dispatch", "Terminal navigation"],
  },
  {
    title: "Executive Class",
    subtitle: "Bespoke Interior Craftsmanship",
    image: DETAIL_IMG,
    features: ["Hand-stitched leather", "Ambient lighting", "Whisper-quiet cabin", "Concierge detailing"],
  },
];

export default function Fleet() {
  return (
    <PageTransition>
      <SEO
        title="Our Luxury Fleet"
        description="Explore AviDelux's luxury fleet, including the Mercedes-Maybach S-Class, Mercedes S-Class, Lucid Air, Cadillac Escalade IQ, and premium electric SUVs."
        path="/fleet"
      />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionReveal>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">
                  The Fleet
                </p>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08]">
                  Luxury mobility, redefined for business
                </h1>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-md">
                  Every vehicle in our network meets exacting standards of luxury, sustainability, and performance. Zero fleet ownership—100% quality control.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <p className="font-body text-sm text-bronze mt-4">
                  Zero-Emission Scope 3 Carbon Reporting Included
                </p>
              </SectionReveal>
            </div>

            <SectionReveal delay={0.2}>
              <div className="rounded-sm overflow-hidden">
                <img
                  src={DASHBOARD_IMG}
                  alt="Ultra-premium luxury vehicle dashboard interior with ambient lighting"
                  className="w-full h-[50vh] lg:h-[60vh] object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Spinning Car Showcase */}
      <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-8">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                Interactive Showcase
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cacao">
                Explore every detail
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <SpinningCar />
          </SectionReveal>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-24 lg:py-36 relative">
        <ParallaxText />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                Vehicle Classes
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-xl">
                Luxury rides. Instant, intelligent dispatch.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {fleetVehicles.map((car, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <FleetCard {...car} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                  Get Started
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cacao leading-tight">
                  Connect with our experts
                </h2>
                <p className="font-body text-base text-cacao/50 mt-6 leading-relaxed max-w-md">
                  Our dedicated account team will help you select the perfect fleet configuration for your organization's travel needs.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="bg-ivory p-8 lg:p-10 rounded-sm">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-cacao/15 py-3 font-body text-sm text-cacao placeholder:text-cacao/30 focus:outline-none focus:border-bronze luxury-transition"
                  />
                  <input
                    type="email"
                    placeholder="Corporate Email"
                    className="w-full bg-transparent border-b border-cacao/15 py-3 font-body text-sm text-cacao placeholder:text-cacao/30 focus:outline-none focus:border-bronze luxury-transition"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-transparent border-b border-cacao/15 py-3 font-body text-sm text-cacao placeholder:text-cacao/30 focus:outline-none focus:border-bronze luxury-transition"
                  />
                  <select className="w-full bg-transparent border-b border-cacao/15 py-3 font-body text-sm text-cacao/30 focus:outline-none focus:border-bronze luxury-transition">
                    <option value="">Preferred Vehicle Class</option>
                    <option value="first">First Class</option>
                    <option value="business">Business Class</option>
                    <option value="sedan">Luxury Sedan</option>
                    <option value="suv">Premium SUV</option>
                    <option value="airport">Airport Express</option>
                    <option value="executive">Executive Class</option>
                  </select>
                  <button className="w-full mt-6 bg-cacao text-ivory py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm flex items-center justify-center gap-2">
                    Request Consultation
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-6 mt-8 pt-6 border-t border-cacao/10">
                  <a href="tel:+4915224001111" className="flex items-center gap-2 font-body text-xs text-cacao/40 hover:text-bronze luxury-transition">
                    <Phone size={14} />
                    +49 152 2400 1111
                  </a>
                  <a href="mailto:corporate@avidelux.com" className="flex items-center gap-2 font-body text-xs text-cacao/40 hover:text-bronze luxury-transition">
                    <Mail size={14} />
                    corporate@avidelux.com
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}