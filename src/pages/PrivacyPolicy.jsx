import React from "react";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileText, ArrowRight } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Booking details: pickup and drop-off locations, travel dates, passenger names, and special requests.",
      "Contact information: name, email address, phone number, and corporate billing details.",
      "Payment data: processed securely through PCI-DSS compliant payment processors. We never store full card numbers.",
      "Travel preferences: vehicle preferences, recurring routes, and amenity requests to enhance your experience.",
      "Usage data: app interactions, ride history, and device information for service optimization.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To dispatch chauffeurs, coordinate rides, and provide real-time updates on your journey.",
      "To maintain discretion for high-profile passengers through enhanced privacy protocols.",
      "To generate CSRD-compliant Scope 3 carbon emission reports for corporate accounts.",
      "To improve our AI dispatch algorithms, route optimization, and overall service quality.",
      "To communicate booking confirmations, driver details, and service updates.",
    ],
  },
  {
    title: "3. Discretion for High-Profile Passengers",
    content: [
      "All chauffeurs sign comprehensive non-disclosure agreements (NDAs) before joining our network.",
      "No photos, recordings, or trip sharing permitted by any team member, under any circumstances.",
      "High-profile client profiles are tagged with enhanced privacy flags, limiting data access to senior concierge staff only.",
      "We never share, sell, or rent passenger data to third parties, marketing firms, or data brokers.",
      "Route history is automatically purged after 90 days unless explicitly retained for corporate billing compliance.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "SOC 2 Type II certified infrastructure with end-to-end encryption for all data in transit and at rest.",
      "GDPR and CCPA compliant. Full data portability and right-to-erasure supported.",
      "Multi-factor authentication required for all internal systems accessing passenger data.",
      "Regular third-party security audits and penetration testing conducted quarterly.",
      "Data centers located in EU and US regions with strict data residency controls.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "Active booking data: retained for the duration of your engagement plus 90 days.",
      "Corporate billing records: retained for 7 years to meet tax and audit compliance requirements.",
      "Marketing data: retained only with explicit opt-in consent, withdrawable at any time.",
      "Carbon reporting data: retained per CSRD regulatory requirements (minimum 5 years).",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Right to access: request a copy of all personal data we hold about you.",
      "Right to rectification: correct any inaccurate or incomplete information.",
      "Right to erasure: request deletion of your data, subject to legal retention requirements.",
      "Right to restrict processing: limit how we use your data in specific circumstances.",
      "Right to data portability: receive your data in a structured, machine-readable format.",
      "To exercise any of these rights, contact privacy@avidelux.com.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Legal</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08]">
              Privacy Policy
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              Your privacy is sacred. This policy details how we handle client data with absolute discretion, ensuring the highest standards of confidentiality for all passengers—especially high-profile individuals.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <p className="font-body text-xs text-cacao/40 mt-4">Last updated: July 2026</p>
          </SectionReveal>
        </div>
      </section>

      {/* Key Principles */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Absolute Discretion", desc: "NDAs for all chauffeurs. Enhanced privacy for high-profile clients." },
              { icon: Lock, title: "Bank-Grade Security", desc: "SOC 2 Type II. End-to-end encryption. Quarterly security audits." },
              { icon: Eye, title: "Zero Data Selling", desc: "We never share, sell, or rent your data. Ever. Under any circumstances." },
              { icon: FileText, title: "Full Compliance", desc: "GDPR, CCPA, and CSRD compliant. Your rights, fully protected." },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="p-6 border border-cacao/10 rounded-sm">
                  <item.icon size={22} className="text-bronze mb-4" />
                  <h3 className="font-heading text-sm font-semibold text-cacao mb-2">{item.title}</h3>
                  <p className="font-body text-xs text-cacao/50 leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {sections.map((section, i) => (
            <SectionReveal key={i} delay={i * 0.04}>
              <div className="py-10 border-b border-cacao/10">
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-6">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, j) => (
                    <li key={j} className="font-body text-sm text-cacao/60 leading-relaxed flex gap-3">
                      <span className="text-bronze flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}

          <SectionReveal>
            <div className="pt-10">
              <p className="font-body text-sm text-cacao/50 leading-relaxed">
                For privacy inquiries or to exercise your data rights, contact our Data Protection Officer at{" "}
                <a href="mailto:privacy@avidelux.com" className="text-bronze hover:text-cacao luxury-transition">privacy@avidelux.com</a>.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cacao py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ivory leading-tight max-w-xl mx-auto">
              Questions about your data?
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-bronze text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-bronze/80 luxury-transition rounded-sm mt-8">
              Contact Our DPO
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}