import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, Car, Award, Calculator, MapPin, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const COASTAL = "/images/df3b79dfd_generated_d50a62bb.png";

const vehicleClasses = [
  { name: "Business Class", basePrice: 85, perKm: 2.4 },
  { name: "First Class", basePrice: 145, perKm: 3.8 },
  { name: "Premium SUV", basePrice: 120, perKm: 3.2 },
  { name: "Executive Van", basePrice: 165, perKm: 4.1 },
];

const metrics = [
  { value: "100%", label: "Licensed & Insured Partners", icon: Users },
  { value: "7", label: "Cities Across Germany", icon: Globe },
  { value: "60s", label: "Average Dispatch Time", icon: MapPin },
  { value: "GoBD", label: "Compliant Invoicing", icon: Award },
];

const services = [
  {
    title: "Airport Transfers",
    desc: "Avidelux's airport transfer dispatch is engineered to eliminate the friction of international travel. The moment your flight touches down, our platform synchronizes with live flight-tracking data, ensuring a licensed partner chauffeur is positioned at the arrivals terminal regardless of early landings or delays. Every trip includes 60 minutes of complimentary waiting time and full inclusion of airport toll fees, with a professional partner chauffeur who handles your luggage with care, escorting you seamlessly from the arrivals gate to your vehicle.",
    icon: Car,
  },
  {
    title: "Corporate Accounts",
    desc: "Centralized billing, travel policy enforcement, multi-city management, and CSRD-compliant carbon reporting in one enterprise dashboard.",
    icon: Calculator,
  },
  {
    title: "Event Transport",
    desc: "Coordinate ground travel for conferences, galas, and board meetings with dedicated partner fleet allocation and on-site dispatch coordination.",
    icon: Calendar,
  },
  {
    title: "Hourly Chauffeur",
    desc: "Designed for dynamic schedules, business roadshows, and multi-destination itineraries, our Hourly & As-Directed service grants you absolute logistical flexibility. Rather than booking point-to-point, you retain a dedicated partner vehicle and a certified professional chauffeur for a customized duration. No destination changes require re-booking; your schedule dictates the route, billed transparently by the hour with unlimited stops.",
    icon: Clock,
  },
];

export default function Services() {
  const [selectedClass, setSelectedClass] = useState(0);
  const [distance, setDistance] = useState(25);

  const selected = vehicleClasses[selectedClass];
  const estimated = selected.basePrice + selected.perKm * distance;

  return (
    <PageTransition>
      <SEO
        title="Chauffeur Services"
        description="Airport transfers, corporate travel, event coordination, and hourly hire — discover how Avidelux's dispatch platform connects you with licensed premium partner chauffeurs across the EU."
        path="/services"
      />
      <Navbar />

      {/* Hero + Calculator */}
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionReveal>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">
                  Our Services
                </p>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08]">
                  Intelligent chauffeur, redefined service
                </h1>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-md">
                  From airport transfers to corporate fleet management—every trip is automatically dispatched to a licensed partner for unmatched precision and reliability.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.3}>
                <p className="font-body text-sm text-bronze mt-4">
                  Zero-Emission Scope 3 Carbon Reporting Included
                </p>
              </SectionReveal>
            </div>

            {/* Pricing Calculator */}
            <SectionReveal delay={0.2}>
              <div className="bg-cream p-8 lg:p-10 rounded-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator size={20} className="text-bronze" />
                  <h3 className="font-heading text-lg font-semibold text-cacao">
                    Ride Estimator
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-3 block">
                      Vehicle Class
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {vehicleClasses.map((vc, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedClass(i)}
                          className={`py-3 px-4 font-body text-xs font-medium rounded-sm luxury-transition ${
                            selectedClass === i
                              ? "bg-cacao text-ivory"
                              : "bg-ivory text-cacao/60 hover:text-cacao border border-cacao/10"
                          }`}
                        >
                          {vc.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-cacao/40 mb-3 block">
                      Estimated Distance: {distance} km
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="150"
                      value={distance}
                      onChange={(e) => setDistance(Number(e.target.value))}
                      className="w-full accent-cacao"
                    />
                    <div className="flex justify-between font-body text-xs text-cacao/30 mt-1">
                      <span>5 km</span>
                      <span>150 km</span>
                    </div>
                  </div>

                  <div className="border-t border-cacao/10 pt-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-body text-xs text-cacao/40">Estimated fare</p>
                        <p className="font-heading text-4xl font-bold text-cacao mt-1">
                          €{estimated.toFixed(0)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-body text-xs text-cacao/40">Base: €{selected.basePrice}</p>
                        <p className="font-body text-xs text-cacao/40">Per km: €{selected.perKm.toFixed(1)}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/booking"
                    className="w-full bg-cacao text-ivory py-4 font-body text-sm font-medium tracking-wide hover:bg-espresso luxury-transition rounded-sm flex items-center justify-center gap-2"
                  >
                    Book This Ride
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                What We Offer
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-lg">
                Comprehensive luxury mobility
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((svc, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="group p-8 lg:p-10 border border-cacao/10 rounded-sm hover:bg-cream luxury-transition luxury-card">
                  <svc.icon size={28} className="text-bronze mb-6" />
                  <h3 className="font-heading text-xl font-semibold text-cacao mb-3">
                    {svc.title}
                  </h3>
                  <p className="font-body text-sm text-cacao/50 leading-relaxed">
                    {svc.desc}
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
              alt="Luxury sedan on scenic highway at sunset"
              className="w-full h-[40vh] lg:h-[55vh] object-cover"
            />
          </div>
        </div>
      </SectionReveal>

      {/* Social Proof */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">
                Our Impact
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-xl mx-auto">
                Trusted by business leaders
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="text-center p-6 bg-cream rounded-sm">
                  <m.icon size={24} className="text-bronze mx-auto mb-4" />
                  <span className="font-heading text-4xl md:text-5xl font-bold text-cacao block">
                    {m.value}
                  </span>
                  <span className="font-body text-sm text-cacao/50 mt-2 block">
                    {m.label}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cacao py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-ivory leading-tight max-w-xl mx-auto">
              Ready to experience luxury mobility?
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="font-body text-base text-ivory/50 mt-6 max-w-md mx-auto leading-relaxed">
              Trusted by corporate travel teams and hospitality partners across the EU.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 bg-bronze text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-bronze/80 luxury-transition rounded-sm"
              >
                Explore Our Fleet
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/corporate"
                className="inline-flex items-center gap-2 border border-ivory/20 text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:border-ivory/40 luxury-transition rounded-sm"
              >
                Corporate Solutions
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}