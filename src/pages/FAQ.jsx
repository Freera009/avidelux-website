import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";

const INTERIOR_IMG = "/images/7118d11e4_generated_fea8ad00.png";
const HOTEL_IMG = "/images/88fbb552e_generated_43d254ea.png";
const DASHBOARD_IMG = "/images/1c96283a7_generated_902bb949.png";

const faqSections = [
  {
    title: "Account & Getting Started",
    items: [
      {
        q: "How do I create an AviDelux corporate account?",
        a: "Visit our Services page or contact our enterprise team directly. We'll set up your corporate profile, configure travel policies, and integrate with your existing travel management platform within 48 hours.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, corporate billing accounts, and direct invoicing for enterprise clients. Monthly consolidated billing is available for corporate accounts with 10+ rides per month.",
      },
      {
        q: "Is there a minimum commitment for corporate accounts?",
        a: "No. Our platform operates on a pay-per-ride basis with zero minimum commitments. Volume discounts are automatically applied as your usage scales.",
      },
    ],
  },
  {
    title: "Booking & Dispatch",
    items: [
      {
        q: "How does AI-powered dispatch work?",
        a: "Our autonomous AI nodes analyze real-time traffic, weather, driver availability, and your pickup location to dispatch the nearest qualified chauffeur within 60 seconds. The system continuously optimizes routing for the fastest, smoothest journey.",
      },
      {
        q: "Can I pre-book rides in advance?",
        a: "Absolutely. Schedule rides up to 90 days in advance through the app, website, or WhatsApp AI agent. Our system assigns the optimal chauffeur 2 hours before your pickup and sends proactive updates.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Rides can be cancelled free of charge up to 2 hours before the scheduled pickup. Late cancellations within 2 hours incur a 50% charge. On-demand rides can be cancelled within 3 minutes of booking at no cost.",
      },
      {
        q: "Do you offer airport meet-and-greet services?",
        a: "Yes. Our chauffeurs monitor your flight in real-time, arrive at the terminal with a personalized name board, and assist with luggage. This service is complimentary for all First Class bookings.",
      },
    ],
  },
  {
    title: "Fleet & Sustainability",
    items: [
      {
        q: "What types of vehicles are in your fleet?",
        a: "Our fleet includes Business Class (BMW i7, Mercedes EQS), First Class (Lucid Air, Mercedes-Maybach), and Premium SUV (Range Rover Electric, BMW iX). All vehicles are under 18 months old and 100% electric or hybrid.",
      },
      {
        q: "How does Scope 3 carbon reporting work?",
        a: "Every ride automatically calculates and reports carbon emissions data compliant with CSRD 2025/2026 requirements. Your corporate dashboard provides real-time Scope 3 analytics, downloadable audit reports, and carbon offset certificates.",
      },
      {
        q: "What amenities are included in the vehicles?",
        a: "All vehicles include complimentary Wi-Fi, bottled water, device charging, and premium leather interiors. First Class vehicles additionally offer champagne service, privacy partitions, and a dedicated personal host.",
      },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-cacao/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-body text-base font-medium text-cacao pr-4 group-hover:text-bronze luxury-transition">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-bronze" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-cacao/50 leading-relaxed pb-6 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const images = [INTERIOR_IMG, HOTEL_IMG, DASHBOARD_IMG];

  return (
    <PageTransition>
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">
              Support
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-tight">
              Your questions, expertly answered
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-6 max-w-lg mx-auto">
              Everything you need to know about AviDelux's AI-powered luxury ground travel platform.
            </p>
          </SectionReveal>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-24">
        {faqSections.map((section, si) => (
          <React.Fragment key={si}>
            <SectionReveal>
              <div className="mt-16 mb-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-cacao">
                  {section.title}
                </h2>
              </div>
            </SectionReveal>

            {section.items.map((item, qi) => (
              <SectionReveal key={qi} delay={qi * 0.05}>
                <AccordionItem q={item.q} a={item.a} />
              </SectionReveal>
            ))}

            {si < images.length && (
              <SectionReveal>
                <div className="my-16 rounded-sm overflow-hidden">
                  <img
                    src={images[si]}
                    alt="Luxury travel detail"
                    className="w-full h-64 md:h-80 object-cover hover:scale-[1.02] luxury-transition"
                  />
                </div>
              </SectionReveal>
            )}
          </React.Fragment>
        ))}
      </div>

      <Footer />
    </PageTransition>
  );
}