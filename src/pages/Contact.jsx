import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const RECEPTION_IMG = "/images/c278dd8e7_generated_image.png";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@avidelux.com", href: "mailto:info@avidelux.com" },
  { icon: Phone, label: "Phone", value: "+49 152 2400 1111", href: "tel:+4915224001111" },
  { icon: MapPin, label: "Office", value: "Im Beckerfelde 8, 45475 Mülheim an der Ruhr, Germany", href: null },
  { icon: Clock, label: "Hours", value: "24/7 Support", href: null },
];

export default function Contact() {
  const [formspreeState, submitContact] = useForm("xvzeoopb");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const inputClass = "w-full bg-transparent border-b border-cacao/15 py-3 font-body text-sm text-cacao placeholder:text-cacao/30 focus:outline-none focus:border-bronze luxury-transition";

  const handleContactSubmit = (e) => {
    e.preventDefault();
    submitContact({
      subject: `New Contact Message — ${form.name}`,
      name: form.name,
      email: form.email,
      topic: form.subject,
      message: form.message,
    });
  };

  return (
    <PageTransition>
      <SEO
        title="Contact Us"
        description="Get in touch with Avidelux's team by phone, email, or WhatsApp for ride requests, questions, or corporate accounts."
        path="/contact"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Contact Us</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              We're here to help, day or night
            </h1>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <SectionReveal>
              <div className="rounded-sm overflow-hidden mb-10">
                <img src={RECEPTION_IMG} alt="Avidelux office reception desk" className="w-full h-48 lg:h-64 object-cover" />
              </div>
              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} className="text-bronze" />
                    </div>
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-body text-sm text-cacao hover:text-bronze luxury-transition">{info.value}</a>
                      ) : (
                        <p className="font-body text-sm text-cacao">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* Contact Form */}
            <SectionReveal delay={0.1}>
              <div className="bg-cream p-8 lg:p-10 rounded-sm">
                {formspreeState.succeeded ? (
                  <div className="text-center py-12">
                    <CheckCircle size={40} className="text-bronze mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-cacao mb-2">Message Sent</h3>
                    <p className="font-body text-sm text-cacao/50 mb-6">Our team will respond within 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <h3 className="font-heading text-lg font-semibold text-cacao mb-2">Send us a message</h3>
                    <input type="text" required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                    <input type="email" required placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    <input type="text" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} />
                    <textarea required placeholder="Your message" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass + " resize-none"} />
                    <button type="submit" disabled={formspreeState.submitting} className="w-full bg-cacao text-ivory py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm flex items-center justify-center gap-2 disabled:opacity-30">
                      {formspreeState.submitting ? "Sending..." : "Send Message"}
                      <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}