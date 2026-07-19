import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "@formspree/react";
import { ArrowRight, Check, Shield, Award, Globe } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const CHAUFFEUR_IMG = "/images/af1003db8_generated_image.png";
const INTERIOR_IMG = "/images/7118d11e4_generated_fea8ad00.png";

const requirements = [
  { icon: Shield, title: "License & Insurance", desc: "Valid Local Chauffeur/Limousine License & Commercial Passenger Insurance." },
  { icon: Globe, title: "Multilingual Proficiency", desc: "Fluency in English plus the local language is mandatory." },
  { icon: Award, title: "Black-Tie Protocol", desc: "Strict adherence to the Avidelux Black-Tie Dress Code & Protocol." },
];

const benefits = [
  "Competitive, transparent trip payouts",
  "Flexible scheduling—choose your hours",
  "Premium vehicle training provided",
  "Partner support and account assistance",
  "Performance bonuses",
  "Network growth opportunities",
];

const positions = [
  { title: "Executive Chauffeur", location: "Frankfurt · Munich · Hamburg", type: "Contract" },
  { title: "Airport Specialist", location: "Frankfurt · Düsseldorf · Berlin", type: "Contract" },
  { title: "Event Transport Lead", location: "Multiple German cities", type: "Contract" },
  { title: "Fleet Operations Manager", location: "Mülheim an der Ruhr HQ", type: "Full-time" },
];

export default function Careers() {
  const [formspreeState, submitApplication] = useForm("xvzeoopb");
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
  const inputClass = "w-full bg-transparent border-b border-cacao/15 py-3 font-body text-sm text-cacao placeholder:text-cacao/30 focus:outline-none focus:border-bronze luxury-transition";

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    submitApplication({
      subject: `New Driver Application — ${form.name}`,
      name: form.name,
      email: form.email,
      phone: form.phone,
      position: form.position,
      experience: form.experience,
      message: form.message,
    });
  };

  return (
    <PageTransition>
      <SEO
        title="Careers"
        description="Explore opportunities to join Avidelux's licensed partner network across Germany, dedicated to premium ground transport and luxury hospitality."
        path="/careers"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Careers</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              Join Germany's Most Trusted Dispatch Network
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              We do not work with gig-workers or casual drivers. Avidelux partners exclusively with certified professional chauffeurs and licensed operators who view ground logistics as an elite profession. If you own a pristine, late-model executive vehicle (Mercedes-Benz E/S Class, V-Class, or equivalent) and possess flawless professional driving credentials, immaculate protocol training, and local geographical expertise, we invite you to apply to our partner network.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Hero Image */}
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="rounded-sm overflow-hidden">
            <img src={CHAUFFEUR_IMG} alt="Professional Avidelux partner chauffeur in bespoke suit" className="w-full h-[40vh] lg:h-[55vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* Requirements */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">What It Takes</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-lg">
                Minimum Network Requirements
              </h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="p-8 border border-cacao/10 rounded-sm hover:bg-cream luxury-transition luxury-card">
                  <req.icon size={24} className="text-bronze mb-6" />
                  <h3 className="font-heading text-lg font-semibold text-cacao mb-3">{req.title}</h3>
                  <p className="font-body text-sm text-cacao/50 leading-relaxed">{req.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Why Join Us</p>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cacao leading-tight mb-6">
                  Rewards worthy of the best
                </h2>
                <div className="space-y-3">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={16} className="text-bronze flex-shrink-0 mt-1" />
                      <span className="font-body text-sm text-cacao/70">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="rounded-sm overflow-hidden">
                <img src={INTERIOR_IMG} alt="Luxury vehicle interior detail" className="w-full h-64 lg:h-96 object-cover" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Open Positions</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cacao leading-tight">
                Current opportunities
              </h2>
            </div>
          </SectionReveal>
          <div className="space-y-0">
            {positions.map((pos, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-cacao/10 gap-4">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-cacao">{pos.title}</h3>
                    <p className="font-body text-sm text-cacao/50 mt-1">{pos.location}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-body text-xs text-bronze">{pos.type}</span>
                    <button onClick={() => document.getElementById("application-form").scrollIntoView({ behavior: "smooth" })} className="font-body text-sm text-cacao hover:text-bronze luxury-transition flex items-center gap-1">
                      Apply <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-cream">
        <div className="max-w-xl mx-auto px-6">
          <SectionReveal>
            <div id="application-form" className="bg-ivory p-8 lg:p-10 rounded-sm">
              {formspreeState.succeeded ? (
                <div className="text-center py-8">
                  <Check size={40} className="text-bronze mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-semibold text-cacao mb-2">Application Received</h3>
                  <p className="font-body text-sm text-cacao/50 mb-6">Our recruitment team will review your application and contact you within 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  <h3 className="font-heading text-lg font-semibold text-cacao">Application Form</h3>
                  <input type="text" required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  <input type="email" required placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                  <select required value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className={inputClass}>
                    <option value="">Position of Interest</option>
                    {positions.map((p, i) => <option key={i} value={p.title}>{p.title}</option>)}
                  </select>
                  <input type="text" placeholder="Years of Experience" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className={inputClass} />
                  <textarea placeholder="Tell us about yourself..." rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass + " resize-none"} />
                  <button type="submit" disabled={formspreeState.submitting} className="w-full bg-cacao text-ivory py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm flex items-center justify-center gap-2 disabled:opacity-30">
                    {formspreeState.submitting ? "Sending..." : "Submit Application"}
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}