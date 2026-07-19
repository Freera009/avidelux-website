import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const INTERIOR_IMG = "/images/7118d11e4_generated_fea8ad00.png";
const COASTAL_IMG = "/images/df3b79dfd_generated_d50a62bb.png";

export default function Testimonials() {
  return (
    <PageTransition>
      <SEO
        title="Built for Business Travel"
        description="Avidelux's dispatch platform is trusted by business leaders and corporate travel managers who rely on our licensed partner network daily."
        path="/testimonials"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Client Journals</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              The Avidelux Standard: Built for Business Travel
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              Trusted by business leaders and corporate travel managers who rely on our licensed partner network daily.
            </p>
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
              Join the professionals who trust Avidelux
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Link to="/booking" className="inline-flex items-center gap-2 bg-bronze text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-bronze/80 luxury-transition rounded-sm mt-8">
              Request Your First Ride
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}