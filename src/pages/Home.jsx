import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Shield, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import FleetCard from "@/components/avidelux/FleetCard";
import SectionReveal from "@/components/avidelux/SectionReveal";
import ScrollToast from "@/components/avidelux/ScrollToast";
import PageTransition from "@/components/avidelux/PageTransition";
import SpinningCar from "@/components/avidelux/SpinningCar";

const HERO_IMG = "/images/f02e2c51b_generated_f64341c9.png";
const LIFESTYLE_IMG = "/images/99725ca19_generated_26990631.png";
const INTERIOR_IMG = "/images/7118d11e4_generated_fea8ad00.png";
const SUV_IMG = "/images/d163e2d79_generated_787d9461.png";
const FIRST_IMG = "/images/d66ac3028_generated_7e4454ac.png";
const DETAIL_IMG = "/images/4bd2100d2_generated_26d5f150.png";

const fleetData = [
  {
    title: "Business Class",
    subtitle: "BMW i7 · Mercedes EQS",
    image: SUV_IMG,
    features: ["Zero-emission", "Wi-Fi", "Leather interior"],
  },
  {
    title: "First Class",
    subtitle: "Lucid Air · Mercedes-Maybach",
    image: FIRST_IMG,
    features: ["Champagne service", "Privacy partition", "Personal host"],
  },
  {
    title: "Premium SUV",
    subtitle: "Range Rover · BMW iX",
    image: DETAIL_IMG,
    features: ["Spacious cabin", "Airport transfer", "Luggage priority"],
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);

  return (
    <PageTransition>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-8">
              AI-Powered Luxury Ground Travel
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cacao leading-[1.05] max-w-5xl">
              Next-generation chauffeur, dispatched by AI
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <p className="font-body text-base md:text-lg text-cacao/50 max-w-lg mt-8 leading-relaxed">
              Autonomous dispatch nodes. Zero-emission fleet. Sixty-second response times across 200+ global markets.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-cacao text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm"
              >
                Book Your Ride
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 border border-cacao/20 text-cacao px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-cream luxury-transition rounded-sm"
              >
                Explore Fleet
              </Link>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.4} className="mt-16 lg:mt-20">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="max-w-7xl mx-auto px-6 lg:px-12 w-full"
          >
            <div className="rounded-sm overflow-hidden">
              <img
                src={HERO_IMG}
                alt="Luxury black sedan on urban boulevard at golden hour"
                className="w-full h-[50vh] lg:h-[65vh] object-cover"
              />
            </div>
          </motion.div>
        </SectionReveal>
      </section>

      {/* Mid Section */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">
                  Precision Engineering
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight">
                  Intelligent rides. Unmatched precision.
                </h2>
                <p className="font-body text-base text-cacao/50 mt-6 leading-relaxed max-w-md">
                  Our autonomous AI nodes analyze traffic patterns, weather conditions, and real-time demand to dispatch the perfect vehicle within sixty seconds. Zero-fleet ownership. Zero compromise.
                </p>
                <p className="font-body text-sm text-bronze mt-4">
                  Zero-Emission Scope 3 Carbon Reporting Included
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-sm overflow-hidden">
                  <img
                    src={LIFESTYLE_IMG}
                    alt="Professional chauffeur at airport tarmac"
                    className="w-full h-64 lg:h-80 object-cover hover:scale-105 luxury-transition"
                  />
                </div>
                <div className="rounded-sm overflow-hidden mt-8">
                  <img
                    src={INTERIOR_IMG}
                    alt="Hand-stitched leather interior detail"
                    className="w-full h-64 lg:h-80 object-cover hover:scale-105 luxury-transition"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Spinning Car Showcase */}
      <section className="py-24 lg:py-32 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                360° Showcase
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao">
                Every angle, perfected
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <SpinningCar />
          </SectionReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { value: "99.8%", label: "Unmatched platform reliability", icon: Shield },
              { value: "1.2M", label: "Rides delivered globally", icon: Zap },
              { value: "60s", label: "Rapid dispatch average", icon: Clock },
            ].map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center">
                  <stat.icon size={24} className="text-bronze mb-4" />
                  <span className="font-heading text-5xl md:text-6xl font-bold text-cacao">
                    {stat.value}
                  </span>
                  <span className="font-body text-sm text-cacao/50 mt-3 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                  Our Fleet
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-lg">
                  Exquisite fleet. Impeccable presentation.
                </h2>
              </div>
              <Link
                to="/fleet"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 font-body text-sm text-bronze hover:text-cacao luxury-transition"
              >
                View all vehicles
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {fleetData.map((car, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <FleetCard {...car} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Toast */}
      <ScrollToast triggerPercent={40}>
        <div className="flex items-start gap-3">
          <MessageCircle size={20} className="text-bronze mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-body text-sm font-medium text-ivory mb-1">
              Need a ride now?
            </p>
            <p className="font-body text-xs text-ivory/60 leading-relaxed">
              Tap to book instantly via our WhatsApp AI Agent. Your personal concierge is ready.
            </p>
            <a
              href="https://wa.me/4915224001111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 font-body text-xs text-bronze hover:text-ivory luxury-transition"
            >
              Open WhatsApp
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </ScrollToast>

      <Footer />
    </PageTransition>
  );
}