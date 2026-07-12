import React from "react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const infoRows = [
  { label: "Operating company", value: "Freera UG (haftungsbeschränkt)" },
  { label: "Address", value: "45475 Mülheim an der Ruhr, Germany" },
  { label: "Brand", value: "Avidelux — a brand operated by Freera UG" },
  { label: "Email", value: "info@avidelux.com", href: "mailto:info@avidelux.com" },
  { label: "Phone", value: "+49 1522 4001111", href: "tel:+4915224001111" },
  { label: "VAT ID", value: "DE369532975" },
  { label: "Register", value: "Amtsgericht Duisburg" },
];

export default function Imprint() {
  return (
    <PageTransition>
      <SEO
        title="Imprint"
        description="Legal disclosure (Impressum) for AviDelux, operated by Freera UG (haftungsbeschränkt), pursuant to § 5 TMG / § 5 DDG."
        path="/imprint"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Legal</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08]">
              Imprint
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              Legal disclosure pursuant to § 5 TMG / § 5 DDG.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.3}>
            <p className="font-body text-xs text-cacao/40 mt-4">Last updated: June 2026</p>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionReveal>
            <div className="bg-cream rounded-sm p-8 mb-4">
              <div className="space-y-4">
                {infoRows.map((row, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="font-body text-xs tracking-widest uppercase text-cacao/40 sm:w-40 flex-shrink-0">
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
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                Responsible for editorial content
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                Pursuant to § 18 Para. 2 MStV: Freera UG, 45475 Mülheim an der Ruhr, Germany.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                EU online dispute resolution
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                The European Commission provides a platform for online dispute resolution (ODR):{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bronze hover:text-cacao luxury-transition"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . We are not obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                Liability for content
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                As a service provider we are responsible for our own content on these pages under § 7 Para. 1 TMG. Under §§ 8–10 TMG we are not obliged to monitor third-party information. Liability arises only from the point at which we become aware of a specific infringement. We will remove relevant content immediately upon becoming aware of any infringement.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="py-10 border-b border-cacao/10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                Liability for links
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                Our website may contain links to third-party websites over whose content we have no control. We assume no liability for external content. Linked pages were checked for possible violations at time of linking; no illegal content was identified at that time.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.25}>
            <div className="py-10">
              <h2 className="font-heading text-xl md:text-2xl font-semibold text-cacao mb-4">
                Copyright
              </h2>
              <p className="font-body text-sm text-cacao/60 leading-relaxed">
                Content and works on these pages created by the site operators are subject to German copyright law. Reproduction, processing, distribution, or any commercial exploitation of such material requires prior written consent. Downloads and copies are permitted for private, non-commercial use only.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
