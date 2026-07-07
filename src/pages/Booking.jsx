import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MapPin, Calendar, Clock, Car } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";

const vehicleOptions = [
  { name: "Business Class", desc: "BMW i7 · Mercedes EQS", price: "From €85" },
  { name: "First Class", desc: "Lucid Air · Mercedes-Maybach", price: "From €145" },
  { name: "Premium SUV", desc: "Range Rover · BMW iX", price: "From €120" },
  { name: "Executive Van", desc: "Mercedes V-Class EQV", price: "From €165" },
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicle: "",
    passengers: "1",
    luggage: "0",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const update = (field, value) => setFormData({ ...formData, [field]: value });

  const inputClass = "w-full bg-transparent border-b border-cacao/15 py-3 font-body text-sm text-cacao placeholder:text-cacao/30 focus:outline-none focus:border-bronze luxury-transition";

  return (
    <PageTransition>
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Booking Portal</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08]">
              Schedule your journey
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              Configure your ride with precision. Our AI dispatch node will assign the optimal chauffeur within 60 seconds of confirmation.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {confirmed ? (
            <SectionReveal>
              <div className="bg-cream p-12 rounded-sm text-center">
                <CheckCircle size={48} className="text-bronze mx-auto mb-6" />
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-cacao mb-3">Booking Confirmed</h2>
                <p className="font-body text-sm text-cacao/50 max-w-sm mx-auto mb-8">
                  Your chauffeur has been dispatched. You'll receive confirmation and driver details at {formData.email} shortly.
                </p>
                <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-8 text-left">
                  <div>
                    <p className="font-body text-xs text-cacao/40">Route</p>
                    <p className="font-body text-sm text-cacao">{formData.pickup} → {formData.dropoff}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-cacao/40">Vehicle</p>
                    <p className="font-body text-sm text-cacao">{formData.vehicle || "Business Class"}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-cacao/40">Date & Time</p>
                    <p className="font-body text-sm text-cacao">{formData.date || "ASAP"} {formData.time}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-cacao/40">Carbon Impact</p>
                    <p className="font-body text-sm text-bronze">0g CO₂</p>
                  </div>
                </div>
                <button onClick={() => { setConfirmed(false); setStep(1); }} className="font-body text-sm text-bronze hover:text-cacao luxury-transition">
                  Book another ride
                </button>
              </div>
            </SectionReveal>
          ) : (
            <SectionReveal>
              <div className="bg-cream p-8 lg:p-12 rounded-sm">
                {/* Step indicator */}
                <div className="flex items-center gap-4 mb-10">
                  {[1, 2, 3].map((s) => (
                    <React.Fragment key={s}>
                      <div className={`flex items-center gap-2 ${step >= s ? "text-cacao" : "text-cacao/30"}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-body text-xs font-medium ${step >= s ? "bg-cacao text-ivory" : "bg-ivory border border-cacao/15"}`}>
                          {s}
                        </div>
                        <span className="font-body text-xs hidden sm:inline">
                          {s === 1 ? "Route" : s === 2 ? "Vehicle" : "Details"}
                        </span>
                      </div>
                      {s < 3 && <div className={`flex-1 h-px ${step > s ? "bg-cacao" : "bg-cacao/15"}`} />}
                    </React.Fragment>
                  ))}
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2 flex items-center gap-1"><MapPin size={12} /> Pickup Location</label>
                      <input type="text" placeholder="Airport, hotel, or address" value={formData.pickup} onChange={(e) => update("pickup", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2 flex items-center gap-1"><MapPin size={12} /> Drop-off Destination</label>
                      <input type="text" placeholder="Destination address" value={formData.dropoff} onChange={(e) => update("dropoff", e.target.value)} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2 flex items-center gap-1"><Calendar size={12} /> Date</label>
                        <input type="date" value={formData.date} onChange={(e) => update("date", e.target.value)} className={inputClass} />
                      </div>
                      <div>
                        <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2 flex items-center gap-1"><Clock size={12} /> Time</label>
                        <input type="time" value={formData.time} onChange={(e) => update("time", e.target.value)} className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2">Passengers</label>
                        <select value={formData.passengers} onChange={(e) => update("passengers", e.target.value)} className={inputClass}>
                          {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2">Luggage</label>
                        <select value={formData.luggage} onChange={(e) => update("luggage", e.target.value)} className={inputClass}>
                          {[0,1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} bags</option>)}
                        </select>
                      </div>
                    </div>
                    <button onClick={() => setStep(2)} disabled={!formData.pickup || !formData.dropoff} className="w-full bg-cacao text-ivory py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm flex items-center justify-center gap-2 disabled:opacity-30">
                      Continue
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2 flex items-center gap-1"><Car size={12} /> Select Vehicle Class</label>
                    {vehicleOptions.map((vc, i) => (
                      <button
                        key={i}
                        onClick={() => update("vehicle", vc.name)}
                        className={`w-full text-left p-5 rounded-sm border luxury-transition ${formData.vehicle === vc.name ? "border-cacao bg-ivory" : "border-cacao/10 hover:border-cacao/30"}`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-heading text-base font-semibold text-cacao">{vc.name}</p>
                            <p className="font-body text-xs text-cacao/40 mt-1">{vc.desc}</p>
                          </div>
                          <span className="font-body text-sm text-bronze">{vc.price}</span>
                        </div>
                      </button>
                    ))}
                    <div className="flex gap-3 pt-4">
                      <button onClick={() => setStep(1)} className="px-6 border border-cacao/15 text-cacao py-4 font-body text-sm hover:bg-ivory luxury-transition rounded-sm">Back</button>
                      <button onClick={() => setStep(3)} disabled={!formData.vehicle} className="flex-1 bg-cacao text-ivory py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm flex items-center justify-center gap-2 disabled:opacity-30">
                        Continue
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2">Full Name</label>
                      <input type="text" placeholder="Your name" value={formData.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2">Email</label>
                      <input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2">Phone</label>
                      <input type="tel" placeholder="+44 207 123 4567" value={formData.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-2">Special Requests</label>
                      <textarea placeholder="Flight number, child seat, preferences..." value={formData.notes} onChange={(e) => update("notes", e.target.value)} rows={3} className={inputClass + " resize-none"} />
                    </div>
                    <div className="bg-ivory p-4 rounded-sm">
                      <p className="font-body text-xs text-bronze">Zero-Emission Scope 3 Carbon Reporting Included</p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(2)} className="px-6 border border-cacao/15 text-cacao py-4 font-body text-sm hover:bg-ivory luxury-transition rounded-sm">Back</button>
                      <button onClick={() => setConfirmed(true)} disabled={!formData.name || !formData.email} className="flex-1 bg-cacao text-ivory py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm flex items-center justify-center gap-2 disabled:opacity-30">
                        Confirm Booking
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </SectionReveal>
          )}
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}