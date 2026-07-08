import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Globe } from "lucide-react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/avidelux/Navbar";
import Footer from "@/components/avidelux/Footer";
import SectionReveal from "@/components/avidelux/SectionReveal";
import PageTransition from "@/components/avidelux/PageTransition";

const AERIAL_IMG = "/images/c96c76a46_generated_image.png";

const cities = [
  { name: "London", country: "United Kingdom", coords: [51.5074, -0.1278], rides: "18,400+" },
  { name: "Paris", country: "France", coords: [48.8566, 2.3522], rides: "12,200+" },
  { name: "New York", country: "United States", coords: [40.7128, -74.0060], rides: "15,800+" },
  { name: "Dubai", country: "UAE", coords: [25.2048, 55.2708], rides: "9,600+" },
  { name: "Singapore", country: "Singapore", coords: [1.3521, 103.8198], rides: "7,300+" },
  { name: "Tokyo", country: "Japan", coords: [35.6762, 139.6503], rides: "6,100+" },
  { name: "Zurich", country: "Switzerland", coords: [47.3769, 8.5417], rides: "8,900+" },
  { name: "Hong Kong", country: "China", coords: [22.3193, 114.1694], rides: "5,400+" },
  { name: "Madrid", country: "Spain", coords: [40.4168, -3.7038], rides: "4,200+" },
  { name: "Stockholm", country: "Sweden", coords: [59.3293, 18.0686], rides: "3,800+" },
];

const regions = [
  { name: "Europe", count: "48 cities", desc: "London, Paris, Zurich, Madrid, Stockholm, Milan, Amsterdam, and more." },
  { name: "North America", count: "32 cities", desc: "New York, Los Angeles, Chicago, Toronto, Miami, San Francisco, and more." },
  { name: "Middle East", count: "18 cities", desc: "Dubai, Abu Dhabi, Doha, Riyadh, Jeddah, Istanbul, and more." },
  { name: "Asia Pacific", count: "42 cities", desc: "Singapore, Tokyo, Hong Kong, Sydney, Seoul, Bangkok, and more." },
  { name: "Latin America", count: "24 cities", desc: "São Paulo, Mexico City, Buenos Aires, Santiago, and more." },
  { name: "Africa", count: "16 cities", desc: "Cape Town, Johannesburg, Nairobi, Cairo, Lagos, and more." },
];

export default function ServiceAreas() {
  return (
    <PageTransition>
      <Navbar />

      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-bronze mb-6">Service Areas</p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cacao leading-[1.08] max-w-3xl">
              200+ cities. Five continents. One standard.
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-body text-base text-cacao/50 mt-8 leading-relaxed max-w-xl">
              Wherever business takes you, AviDelux delivers the same uncompromising luxury. Autonomous dispatch nodes operate globally, 24/7.
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
                center={[30, 20]}
                zoom={2}
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
                        <span style={{ color: "#8C7355" }}>{city.rides} rides delivered</span>
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
                    <p className="font-body text-xs text-bronze mt-1">{city.rides}</p>
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