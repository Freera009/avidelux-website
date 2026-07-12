import React from "react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const controllerRows = [
  { label: "Company", value: "Freera UG (operating as Avidelux)" },
  { label: "Address", value: "45475 Mülheim an der Ruhr, Germany" },
  { label: "Email", value: "info@avidelux.com", href: "mailto:info@avidelux.com" },
  { label: "Phone", value: "+49 1522 4001111", href: "tel:+4915224001111" },
];

const authorityRows = [
  { label: "Authority", value: "Landesbeauftragte für Datenschutz und Informationsfreiheit NRW" },
  { label: "Address", value: "Kavalleriestraße 2–4, 40213 Düsseldorf" },
  { label: "Email", value: "poststelle@ldi.nrw.de", href: "mailto:poststelle@ldi.nrw.de" },
  { label: "Website", value: "www.ldi.nrw.de", href: "https://www.ldi.nrw.de" },
];

const dataSubsections = [
  {
    title: "a) Server log data",
    paragraphs: [
      "When you access our website or platform, your browser automatically transmits log data including IP address (truncated where possible), date/time of access, pages visited, HTTP status, bytes transferred, referring URL, and browser/OS type.",
    ],
    note: "Legal basis: Art. 6(1)(f) GDPR — legitimate interest in stable, secure operation. Retention: 30 days unless required for security investigation.",
  },
  {
    title: "b) Contact form and direct email",
    paragraphs: [
      "When you send an enquiry we collect: name, email address, company name, message content, and any other information you voluntarily provide.",
    ],
    note: "Legal basis: Art. 6(1)(b) GDPR (pre-contractual measures). Retention: 3 years after correspondence closes; contract-related data up to 10 years (§ 257 HGB, § 147 AO).",
  },
  {
    title: "c) Platform / SaaS usage data",
    paragraphs: [
      "When using the Avidelux B2B platform (dispatch dashboard, booking management), we process operational data including: booking details, vehicle GPS coordinates, driver status, trip records, and financial transaction logs.",
    ],
    note: "Legal basis: Art. 6(1)(b) GDPR — performance of a contract. Retention: 10 years for financial records (GoBD compliance, § 147 AO). GPS data retained 30 days unless required for dispute resolution.",
  },
  {
    title: "d) GPS and location data",
    paragraphs: [
      "The platform processes real-time GPS coordinates of fleet vehicles for dispatch and tracking purposes. Location data is processed only during active trips and is accessible only to authorised platform administrators and the relevant fleet operator.",
    ],
    note: "Legal basis: Art. 6(1)(b) GDPR — contractual necessity for dispatch services.",
  },
  {
    title: "e) Financial and invoicing data",
    paragraphs: [
      "For B2B transactions, we process company name, VAT number, bank details, and transaction amounts. All financial records are maintained as append-only entries in compliance with German GoBD regulations.",
    ],
    note: "Legal basis: Art. 6(1)(c) GDPR — legal obligation. Retention: 10 years (§ 147 AO).",
  },
];

const rightsList = [
  { name: "Access", ref: "Art. 15", desc: "know what data we hold about you" },
  { name: "Rectification", ref: "Art. 16", desc: "have inaccurate data corrected" },
  { name: "Erasure", ref: "Art. 17", desc: "have your data deleted (subject to legal retention obligations)" },
  { name: "Restriction", ref: "Art. 18", desc: "restrict processing in certain circumstances" },
  { name: "Portability", ref: "Art. 20", desc: "receive your data in machine-readable format" },
  { name: "Object", ref: "Art. 21", desc: "object to processing based on legitimate interest" },
  { name: "Withdraw consent", ref: "Art. 7(3)", desc: "at any time, without affecting past lawful processing" },
];

const recipientsList = [
  "With processors acting on our instructions under Art. 28 GDPR data processing agreements (hosting, email, payment processors)",
  "With fleet partners where necessary to fulfil a booking you have placed",
  "Where legally required by German or EU law",
  "Where you have given explicit consent",
];

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <SEO
        title="Privacy Policy"
        description="Read the AviDelux GDPR/DSGVO-compliant privacy policy to learn how Freera UG collects, uses, and protects your personal data."
        path="/privacy-policy"
      />
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
              GDPR / DSGVO compliant. Covers avidelux.com and all Avidelux services.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <p className="font-body text-xs text-cacao/40 mt-4">Last updated: June 2026</p>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* 1. Controller */}
          <SectionReveal>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-6">
                1. Controller
              </h2>
              <div className="bg-cream rounded-sm p-8">
                <div className="space-y-4">
                  {controllerRows.map((row, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="font-body text-xs tracking-widest uppercase text-cacao/40 sm:w-24 flex-shrink-0">
                        {row.label}
                      </span>
                      {row.href ? (
                        <a href={row.href} className="font-body text-sm text-cacao hover:text-bronze luxury-transition">
                          {row.value}
                        </a>
                      ) : (
                        <span className="font-body text-sm text-cacao">{row.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* 2. Data we collect and why */}
          <SectionReveal delay={0.05}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-6">
                2. Data we collect and why
              </h2>
              <div className="space-y-8">
                {dataSubsections.map((sub, i) => (
                  <div key={i}>
                    <h3 className="font-body text-sm font-semibold text-cacao mb-2">{sub.title}</h3>
                    {sub.paragraphs.map((p, j) => (
                      <p key={j} className="font-body text-sm text-cacao/60 leading-relaxed mb-2">{p}</p>
                    ))}
                    <p className="font-body text-xs text-cacao/40 leading-relaxed italic">{sub.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* 3. Cookies */}
          <SectionReveal delay={0.1}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                3. Cookies
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                Our website uses only technically necessary cookies required for the site to function. We do not use analytics, advertising, or third-party tracking cookies. Session preferences may be stored in <code className="text-xs bg-cream px-1.5 py-0.5 rounded">localStorage</code> — this is client-side only and is not transmitted to any server.
              </p>
            </div>
          </SectionReveal>

          {/* 4. Recipients */}
          <SectionReveal delay={0.15}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                4. Recipients of your data
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed mb-3">
                Your personal data is not shared with third parties except:
              </p>
              <ul className="space-y-3 mb-3">
                {recipientsList.map((item, i) => (
                  <li key={i} className="font-body text-sm text-cacao/60 leading-relaxed flex gap-3">
                    <span className="text-bronze flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">We do not sell your data.</p>
            </div>
          </SectionReveal>

          {/* 5. International transfers */}
          <SectionReveal delay={0.2}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                5. International transfers
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                Some processors operate outside the EEA (primarily in the USA). We ensure adequate protection via EU-US Data Privacy Framework certification and/or Standard Contractual Clauses (Art. 46 GDPR). Our primary infrastructure is hosted in the EU (Google Cloud, europe-west3, Frankfurt).
              </p>
            </div>
          </SectionReveal>

          {/* 6. Your rights */}
          <SectionReveal delay={0.25}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                6. Your rights under GDPR
              </h2>
              <ul className="space-y-3 mb-3">
                {rightsList.map((r, i) => (
                  <li key={i} className="font-body text-sm text-cacao/60 leading-relaxed flex gap-3">
                    <span className="text-bronze flex-shrink-0">—</span>
                    <span><strong className="text-cacao font-semibold">{r.name}</strong> ({r.ref}) — {r.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                To exercise any right, email{" "}
                <a href="mailto:info@avidelux.com" className="text-bronze hover:text-cacao luxury-transition">info@avidelux.com</a>.
                We respond within one month (Art. 12(3) GDPR).
              </p>
            </div>
          </SectionReveal>

          {/* 7. Complaint */}
          <SectionReveal delay={0.3}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-6">
                7. Right to lodge a complaint
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed mb-4">
                You have the right to complain to a supervisory authority (Art. 77 GDPR). The authority responsible for our location:
              </p>
              <div className="bg-cream rounded-sm p-8">
                <div className="space-y-4">
                  {authorityRows.map((row, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="font-body text-xs tracking-widest uppercase text-cacao/40 sm:w-24 flex-shrink-0">
                        {row.label}
                      </span>
                      {row.href ? (
                        <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-body text-sm text-cacao hover:text-bronze luxury-transition">
                          {row.value}
                        </a>
                      ) : (
                        <span className="font-body text-sm text-cacao">{row.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* 8. Data security */}
          <SectionReveal delay={0.35}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                8. Data security
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                We use TLS encryption (HTTPS) on all pages and API endpoints. We apply appropriate technical and organisational measures per Art. 32 GDPR. All financial records are maintained as append-only (GoBD compliant). Please report any security concerns to{" "}
                <a href="mailto:info@avidelux.com" className="text-bronze hover:text-cacao luxury-transition">info@avidelux.com</a>.
              </p>
            </div>
          </SectionReveal>

          {/* 9. Automated decision-making */}
          <SectionReveal delay={0.4}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                9. Automated decision-making
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                Our platform uses automated dispatch algorithms to assign bookings to fleet partners. This process does not constitute automated individual decision-making within the meaning of Art. 22 GDPR, as it relates to business-to-business trip assignments rather than decisions producing legal effects on individuals.
              </p>
            </div>
          </SectionReveal>

          {/* 10. Changes */}
          <SectionReveal delay={0.45}>
            <div className="py-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                10. Changes to this notice
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                We may update this notice to reflect changes in our services or legal requirements. The "Last updated" date at the top reflects any changes. For material changes affecting active clients we will provide notice via email.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
