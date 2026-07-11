import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/avidelux/Logo";

const SKYLINE_IMG =
  "/images/8cfc8115c_generated_7886680d.png";

const testimonials = [
  {
    quote: "AviDelux redefined what we expect from corporate ground travel. The AI dispatch is flawless.",
    author: "Victoria Chen",
    title: "CFO, Meridian Capital",
  },
  {
    quote: "Every detail is impeccable—from the vehicle presentation to the zero-emission reporting for our ESG commitments.",
    author: "James Hartwell",
    title: "Managing Director, Atlas Ventures",
  },
  {
    quote: "Sixty-second dispatch in Zurich at midnight. I've never experienced anything like it.",
    author: "Sofia Lindström",
    title: "Partner, Nordic Equity Group",
  },
];

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Careers", path: "/careers" },
      { label: "Contact", path: "/contact" },
      { label: "Testimonials", path: "/testimonials" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Fleet", path: "/fleet" },
      { label: "Services", path: "/services" },
      { label: "Booking Portal", path: "/booking" },
      { label: "Events & Tours", path: "/events" },
      { label: "Gift Cards", path: "/gift-cards" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", path: "/faq" },
      { label: "Service Areas", path: "/service-areas" },
      { label: "B2B Corporate", path: "/corporate" },
      { label: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cacao text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src={SKYLINE_IMG}
          alt="City skyline at night"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-16 max-w-xl">
            What our clients say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((t, i) => (
              <div key={i} className="border-t border-ivory/15 pt-8 group">
                <p className="font-body text-ivory/80 text-base leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <p className="font-body text-sm font-medium text-ivory">{t.author}</p>
                <p className="font-body text-xs text-ivory/50 mt-1">{t.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-ivory/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <Logo size={36} light />
                <p className="font-body text-sm text-ivory/50 mt-4 leading-relaxed">
                  Next-generation chauffeur services, dispatched by autonomous AI nodes.
                </p>
              </div>

              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-body text-xs tracking-widest uppercase text-ivory/40 mb-6">
                    {section.title}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="font-body text-sm text-ivory/60 hover:text-bronze luxury-transition flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 group-hover:opacity-100 luxury-transition"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-ivory/30">
              © 2026 AviDelux. All rights reserved. Zero-fleet. Zero-emission. Pure intelligence.
            </p>
            <p className="font-body text-xs text-ivory/30">
              Zero-Emission Scope 3 Carbon Reporting Included
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}