import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";
import SEO from "@/components/avidelux/SEO";

const AERIAL_IMG = "/images/c96c76a46_generated_image.png";

const cities = [
  { name: "Frankfurt", country: "Germany", coords: [50.1109, 8.6821], region: "Central & Southern Germany" },
  { name: "Munich", country: "Germany", coords: [48.1351, 11.5820], region: "Central & Southern Germany" },
  { name: "Berlin", country: "Germany", coords: [52.5200, 13.4050], region: "Northern & Eastern Germany" },
  { name: "Hamburg", country: "Germany", coords: [53.5511, 9.9937], region: "Northern & Eastern Germany" },
  { name: "Cologne", country: "Germany", coords: [50.9375, 6.9603], region: "Rhine-Ruhr" },
  { name: "Düsseldorf", country: "Germany", coords: [51.2277, 6.7735], region: "Rhine-Ruhr" },
  { name: "Dortmund", country: "Germany", coords: [51.5136, 7.4653], region: "Rhine-Ruhr" },
];

const regions = [
  { name: "Rhine-Ruhr", count: "3 cities", desc: "Cologne, Düsseldorf, and Dortmund." },
  { name: "Central & Southern Germany", count: "2 cities", desc: "Frankfurt and Munich." },
  { name: "Northern & Eastern Germany", count: "2 cities", desc: "Berlin and Hamburg." },
];

export default function ServiceAreas() {
  return (
    <PageTransition>
      <SEO
        title="Service Areas"
        description="Avidelux's partner network provides dispatch coverage across Germany's principal business hubs — explore our Rhine-Ruhr, Central & Southern, and Northern & Eastern Germany coverage."
        path="/service-areas"
      />
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Service Areas</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              Our Coverage: Germany's Principal Business Hubs
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              Avidelux dispatches trips across Germany's principal business hubs through a highly vetted, unified network of licensed local partners. From airport transfers at major hubs to intercity transit, we ensure identical standards everywhere.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="rounded-sm overflow-hidden border border-cacao/10 h-[50vh] lg:h-[60vh]">
              <MapContainer
                center={[51, 9]}
                zoom={6}
                scrollWheelZoom={true}
                style={{ height: "100%", width: "100%", background: "#0a0a0a" }}
                attributionControl={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                {cities.map((city, i) => (
                  <CircleMarker
                    key={i}
                    center={city.coords}
                    radius={7}
                    pathOptions={{ color: "#D4AF7A", fillColor: "#8C7355", fillOpacity: 0.9, weight: 2 }}
                  >
                    <Popup>
                      <div style={{ fontFamily: "Inter, sans-serif" }}>
                        <strong>{city.name}, {city.country}</strong>
                        <br />
                        <span style={{ color: "#8C7355" }}>{city.region}</span>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Regions */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Germany-Wide Presence</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-cacao leading-tight max-w-lg">
                Regional breakdown
              </h2>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="border border-cacao/10 p-8 rounded-sm hover:bg-ivory luxury-transition luxury-card">
                  <div className="flex items-center justify-between mb-4">
                    <Globe size={20} className="text-bronze" />
                    <span className="font-body text-xs text-bronze">{region.count}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-cacao mb-3">{region.name}</h3>
                  <p className="font-body text-sm text-cacao/50 leading-relaxed">{region.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* City List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Key Markets</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cacao leading-tight">
                Featured cities
              </h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {cities.map((city, i) => (
              <SectionReveal key={i} delay={i * 0.04}>
                <div className="flex items-start gap-3 p-4 border border-cacao/10 rounded-sm hover:bg-cream luxury-transition">
                  <MapPin size={16} className="text-bronze mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-cacao">{city.name}</p>
                    <p className="font-body text-xs text-cacao/40 mt-1">{city.country}</p>
                    <p className="font-body text-xs text-bronze mt-1">{city.region}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="rounded-sm overflow-hidden">
            <img src={AERIAL_IMG} alt="Aerial night view of global city with illuminated streets" className="w-full h-[40vh] lg:h-[55vh] object-cover" />
          </div>
        </div>
      </SectionReveal>

      {/* CTA */}
      <section className="bg-cacao py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ivory leading-tight max-w-xl mx-auto">
              Don't see your city? We're expanding.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-bronze text-ivory px-8 py-4 font-body text-sm font-medium tracking-wide hover:bg-bronze/80 luxury-transition rounded-sm mt-8">
              Request Your City
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}