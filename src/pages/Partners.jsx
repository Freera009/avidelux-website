import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const cities = ["Frankfurt", "Berlin", "München", "Hamburg", "Köln", "Düsseldorf", "Other"];
const fleetSizes = ["1–5", "6–15", "16–30", "31–50", "50+"];
const volumes = ["Under 50", "50–200", "200–1,000", "1,000+"];
const integrationMethods = ["API / webhook", "Email", "None yet — starting fresh", "Other"];

export default function Partners() {
  const [formspreeState, submitApplication] = useForm("xvzeoopb");
  const [type, setType] = useState(null);
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    city: cities[0],
    fleetSize: fleetSizes[0],
    vehicleClasses: "",
    volume: volumes[0],
    coverageCities: "",
    integrationMethod: integrationMethods[0],
    notes: "",
  });

  const inputClass =
    "w-full bg-transparent border-b border-cacao/15 py-3 font-body text-sm text-cacao placeholder:text-cacao/30 focus:outline-none focus:border-bronze luxury-transition";

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type) return;
    submitApplication({
      subject: `New Partner Network Application (${type}) — ${form.companyName}`,
      applicantType: type,
      companyName: form.companyName,
      contactName: form.contactName,
      email: form.email,
      phone: form.phone,
      notes: form.notes,
      ...(type === "provider"
        ? { city: form.city, fleetSize: form.fleetSize, vehicleClasses: form.vehicleClasses }
        : { volume: form.volume, coverageCities: form.coverageCities, integrationMethod: form.integrationMethod }),
    });
  };

  return (
    <PageTransition>
      <SEO
        title="Join the Network"
        description="Apply to join the Avidelux partner network as a licensed taxi or chauffeur fleet operator, or as a booking platform sending trips into our dispatch system."
        path="/partners"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Partner Network</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              Apply to join the network
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              Tell us about your business. This takes about two minutes — our partnerships team will follow up directly, one to one.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-xl mx-auto px-6">
          <SectionReveal>
            <div className="bg-cream p-8 lg:p-10 rounded-sm">
              {formspreeState.succeeded ? (
                <div className="text-center py-8">
                  <Check size={40} className="text-bronze mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-semibold text-cacao mb-2">Application received</h3>
                  <p className="font-body text-sm text-cacao/50">
                    Thank you — our partnerships team will be in touch directly within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-body text-xs uppercase tracking-wide text-cacao/50 mb-3 block">
                      Which best describes you?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setType("provider")}
                        className={`p-4 rounded-sm border text-left luxury-transition ${
                          type === "provider" ? "border-bronze bg-ivory" : "border-cacao/15 hover:border-cacao/30"
                        }`}
                      >
                        <div className="font-body text-sm font-semibold text-cacao">Provider</div>
                        <div className="font-body text-xs text-cacao/50 mt-1">
                          Taxi / fleet company — receive bookings
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setType("supplier")}
                        className={`p-4 rounded-sm border text-left luxury-transition ${
                          type === "supplier" ? "border-bronze bg-ivory" : "border-cacao/15 hover:border-cacao/30"
                        }`}
                      >
                        <div className="font-body text-sm font-semibold text-cacao">Supplier</div>
                        <div className="font-body text-xs text-cacao/50 mt-1">
                          Booking platform / OTA — send bookings
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input required placeholder="Company name" value={form.companyName} onChange={update("companyName")} className={inputClass} />
                    <input required placeholder="Contact person" value={form.contactName} onChange={update("contactName")} className={inputClass} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input required type="email" placeholder="Email" value={form.email} onChange={update("email")} className={inputClass} />
                    <input required type="tel" placeholder="Phone / WhatsApp" value={form.phone} onChange={update("phone")} className={inputClass} />
                  </div>

                  {type === "provider" && (
                    <div className="space-y-4 pt-2 border-t border-cacao/10">
                      <div className="grid grid-cols-2 gap-4">
                        <select value={form.city} onChange={update("city")} className={inputClass}>
                          {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <select value={form.fleetSize} onChange={update("fleetSize")} className={inputClass}>
                          {fleetSizes.map((f) => <option key={f} value={f}>{f} vehicles</option>)}
                        </select>
                      </div>
                      <input placeholder="Vehicle classes (e.g. Economy, Business, Van)" value={form.vehicleClasses} onChange={update("vehicleClasses")} className={inputClass} />
                    </div>
                  )}

                  {type === "supplier" && (
                    <div className="space-y-4 pt-2 border-t border-cacao/10">
                      <div className="grid grid-cols-2 gap-4">
                        <select value={form.volume} onChange={update("volume")} className={inputClass}>
                          {volumes.map((v) => <option key={v} value={v}>{v} bookings/mo</option>)}
                        </select>
                        <input placeholder="Coverage cities (e.g. Frankfurt, Berlin)" value={form.coverageCities} onChange={update("coverageCities")} className={inputClass} />
                      </div>
                      <select value={form.integrationMethod} onChange={update("integrationMethod")} className={inputClass}>
                        {integrationMethods.map((m) => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                  )}

                  <textarea placeholder="Anything else we should know? (optional)" rows={3} value={form.notes} onChange={update("notes")} className={inputClass + " resize-none"} />

                  <button
                    type="submit"
                    disabled={!type || formspreeState.submitting}
                    className="w-full bg-cacao text-ivory py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm flex items-center justify-center gap-2 disabled:opacity-30"
                  >
                    {formspreeState.submitting ? "Sending..." : !type ? "Select a type above to continue" : "Submit application"}
                    <ArrowRight size={16} />
                  </button>

                  <p className="font-body text-xs text-cacao/40 text-center">
                    Your details go directly to Avidelux — not shared with other partners or suppliers.
                  </p>
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
