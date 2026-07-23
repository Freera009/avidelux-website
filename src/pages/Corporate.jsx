import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, BarChart3, Shield, Globe, Leaf, Clock, Users, CheckCircle, Zap } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const CORP_HERO = "/images/99725ca19_generated_26990631.png";
const COASTAL = "/images/df3b79dfd_generated_d50a62bb.png";

const features = [
  { num: "01", title: "AI-Powered Dispatch", desc: "Automated dispatch routes each trip to a vetted local fleet partner within seconds.", icon: Zap },
  { num: "02", title: "CO₂ Reporting", desc: "Per-trip emissions data and monthly exports, built for CSRD Scope 3 reporting.", icon: Leaf },
  { num: "03", title: "Germany-Wide Coverage", desc: "Live in Frankfurt, Berlin, München, Hamburg, Köln and Düsseldorf, expanding city by city.", icon: Globe },
  { num: "04", title: "Corporate Dashboard", desc: "Trip visibility, cost tracking, and travel policy alignment in one place.", icon: BarChart3 },
  { num: "05", title: "Duty of Care", desc: "Live GPS tracking, vetted chauffeurs, and a direct account contact for every corporate client.", icon: Shield },
  { num: "06", title: "Simple Integration", desc: "Connect via API, webhook, or even a monitored inbox — no engineering team required.", icon: Clock },
];

const trustCards = [
  {
    title: "Verified Chauffeurs",
    desc: "Every driver is licensed and background-checked before joining the network.",
  },
  {
    title: "Fleet Standards",
    desc: "Partner vehicles are inspected regularly and held to a consistent presentation standard.",
  },
  {
    title: "Data Protection",
    desc: "Trip and booking data is processed and stored within the EU, in line with GDPR.",
  },
];

export default function Corporate() {
  const [showModal, setShowModal] = useState(false);
  const [modalDismissed, setModalDismissed] = useState(false);

  useEffect(() => {
    if (modalDismissed) return;
    const handleScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (pct >= 50 && !showModal) setShowModal(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showModal, modalDismissed]);

  return (
    <PageTransition>
      <SEO
        title="Corporate Dispatch & Fleet Platform"
        description="Avidelux's B2B dispatch and fleet management platform connects your corporate travel program with independently owned, licensed premium chauffeur and ground transport partners across the EU."
        path="/corporate"
      />
      <Navbar />

      {/* Hero */}
      <section className="min-h-[85vh] flex items-center pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionReveal>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">
                  B2B Corporate Solutions
                </p>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08]">
                  Intelligent chauffeur. Zero compromise.
                </h1>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-md">
                  Enterprise-grade dispatch technology with automated routing, per-trip carbon reporting, and seamless integration into your corporate travel ecosystem.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <div className="flex gap-4 mt-8">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 bg-cacao text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm"
                  >
                    Request Demo
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </SectionReveal>
            </div>

            <SectionReveal delay={0.2}>
              <div className="rounded-sm overflow-hidden">
                <img
                  src={CORP_HERO}
                  alt="Elite chauffeur on private airport tarmac at sunrise"
                  className="w-full h-[50vh] lg:h-[65vh] object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                Why Avidelux
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-lg">
                Luxury ground travel perfected
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="group p-8 bg-cream rounded-sm hover:bg-cacao luxury-transition luxury-card cursor-default">
                  <span className="font-body text-xs text-bronze group-hover:text-bronze/80 luxury-transition">
                    {f.num}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-cacao group-hover:text-ivory mt-4 mb-3 luxury-transition">
                    {f.title}
                  </h3>
                  <p className="font-body text-sm text-cacao/50 group-hover:text-ivory/60 leading-relaxed luxury-transition">
                    {f.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="rounded-sm overflow-hidden">
            <img
              src={COASTAL}
              alt="Luxury sedan on scenic coastal highway at sunset"
              className="w-full h-[40vh] lg:h-[55vh] object-cover"
            />
          </div>
        </div>
      </SectionReveal>

      {/* Trust Section */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                Our Promise
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-xl mx-auto">
                Luxury travel, redefined by trust
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {trustCards.map((card, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="border border-cacao/10 p-8 lg:p-10 rounded-sm">
                  <CheckCircle size={24} className="text-bronze mb-6" />
                  <h3 className="font-heading text-xl font-semibold text-cacao mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-cacao/50 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-12">
              Live across the EU, expanding city by city
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {["Frankfurt", "Berlin", "München", "Hamburg", "Köln", "Düsseldorf", "Dortmund"].map(
                (name, i) => (
                  <div
                    key={i}
                    className="h-12 flex items-center justify-center opacity-50 hover:opacity-90 luxury-transition"
                  >
                    <span className="font-heading text-sm font-semibold text-cacao tracking-wide">
                      {name}
                    </span>
                  </div>
                )
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Carbon Modal */}
      <AnimatePresence>
        {showModal && !modalDismissed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-cacao/60 backdrop-blur-md"
              onClick={() => { setModalDismissed(true); setShowModal(false); }}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="relative bg-espresso text-ivory rounded-sm max-w-lg w-full p-8 lg:p-12 shadow-2xl border border-bronze/20"
            >
              <button
                onClick={() => { setModalDismissed(true); setShowModal(false); }}
                className="absolute top-4 right-4 text-ivory/40 hover:text-ivory luxury-transition"
              >
                <X size={20} />
              </button>

              <BarChart3 size={32} className="text-bronze mb-6" />
              <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
                CFO Carbon Reporting
              </h3>
              <p className="font-body text-sm text-ivory/60 leading-relaxed mb-6">
                Prepare for CSRD Scope 3 reporting with a CO₂ figure on every trip and a monthly export ready for your compliance team.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { val: "Per trip", label: "CO₂ figure" },
                  { val: "Monthly", label: "Export" },
                  { val: "CSRD", label: "Scope 3 ready" },
                ].map((s, i) => (
                  <div key={i} className="text-center p-3 bg-ivory/5 rounded-sm">
                    <span className="font-heading text-xl font-bold text-bronze">{s.val}</span>
                    <p className="font-body text-xs text-ivory/40 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/services"
                onClick={() => { setModalDismissed(true); setShowModal(false); }}
                className="inline-flex items-center gap-2 bg-bronze text-ivory px-6 py-3 font-body text-sm font-medium tracking-wide hover:bg-bronze/80 luxury-transition rounded-sm"
              >
                Learn More
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </PageTransition>
  );
}