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
  { name: "Frankfurt", country: "Germany", coords: [50.1109, 8.6821], region: "DACH Region" },
  { name: "Munich", country: "Germany", coords: [48.1351, 11.5820], region: "DACH Region" },
  { name: "Zurich", country: "Switzerland", coords: [47.3769, 8.5417], region: "DACH Region" },
  { name: "Vienna", country: "Austria", coords: [48.2082, 16.3738], region: "DACH Region" },
  { name: "Geneva", country: "Switzerland", coords: [46.2044, 6.1432], region: "DACH Region" },
  { name: "Paris", country: "France", coords: [48.8566, 2.3522], region: "Benelux & France" },
  { name: "Brussels", country: "Belgium", coords: [50.8503, 4.3517], region: "Benelux & France" },
  { name: "Amsterdam", country: "Netherlands", coords: [52.3676, 4.9041], region: "Benelux & France" },
  { name: "Luxembourg", country: "Luxembourg", coords: [49.6116, 6.1319], region: "Benelux & France" },
  { name: "Milan", country: "Italy", coords: [45.4642, 9.1900], region: "Southern & Eastern Europe" },
  { name: "Rome", country: "Italy", coords: [41.9028, 12.4964], region: "Southern & Eastern Europe" },
  { name: "Prague", country: "Czech Republic", coords: [50.0755, 14.4378], region: "Southern & Eastern Europe" },
  { name: "Budapest", country: "Hungary", coords: [47.4979, 19.0402], region: "Southern & Eastern Europe" },
];

const regions = [
  { name: "DACH Region", count: "5 cities", desc: "Frankfurt, Munich, Zurich, Vienna, and Geneva." },
  { name: "Benelux & France", count: "4 cities", desc: "Paris, Brussels, Amsterdam, and Luxembourg." },
  { name: "Southern & Eastern Europe", count: "4 cities", desc: "Milan, Rome, Prague, and Budapest." },
];

export default function ServiceAreas() {
  return (
    <PageTransition>
      <SEO
        title="Service Areas"
        description="AviDelux provides premium chauffeur coverage across Europe's principal business hubs — explore our DACH, Benelux & France, and Southern & Eastern Europe network."
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
              Our Global Footprint: Principal Business Hubs
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              AviDelux operates across Europe's primary financial capitals, diplomatic centers, and luxury destinations through a highly vetted, unified local network. From airport transfers at major international hubs to cross-border intercity transit, we ensure identical premium standards everywhere.
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
                center={[49, 10]}
                zoom={4}
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
              <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-4">Global Presence</p>
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