import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/avidelux/Logo";

const mainLinks = [
  { label: "Home", path: "/" },
  { label: "B2B Corporate", path: "/corporate" },
  { label: "Fleet", path: "/fleet" },
  { label: "Services", path: "/services" },
  { label: "FAQ", path: "/faq" },
];

const moreLinks = [
  { label: "Our Heritage", path: "/about" },
  { label: "Booking Portal", path: "/booking" },
  { label: "Inquiries & Bespoke Requests", path: "/contact" },
  { label: "Client Journals / Executive Reviews", path: "/testimonials" },
  { label: "Service Areas", path: "/service-areas" },
  { label: "Gift Cards", path: "/gift-cards" },
  { label: "Careers", path: "/careers" },
  { label: "Events & Tours", path: "/events" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Imprint", path: "/imprint" },
  { label: "Terms & Conditions", path: "/terms" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const allLinks = [...mainLinks, ...moreLinks];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 luxury-transition ${
        scrolled ? "bg-ivory/90 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo size={38} />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm tracking-wide luxury-transition relative ${
                  location.pathname === link.path
                    ? "text-cacao font-medium"
                    : "text-cacao/60 hover:text-cacao"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-bronze"
                  />
                )}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button className="font-body text-sm tracking-wide text-cacao/60 hover:text-cacao luxury-transition flex items-center gap-1">
                More
                <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 pt-3 w-56"
                  >
                    <div className="bg-ivory/95 backdrop-blur-xl border border-cacao/10 rounded-sm shadow-xl py-2">
                      {moreLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className={`block px-4 py-2.5 font-body text-sm luxury-transition ${
                            location.pathname === link.path
                              ? "text-cacao font-medium bg-cream"
                              : "text-cacao/60 hover:text-cacao hover:bg-cream"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/booking"
              className="bg-cacao text-ivory px-6 py-2.5 text-sm font-body font-medium tracking-wide hover:bg-espresso luxury-transition rounded-full"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-cacao p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="lg:hidden bg-ivory/95 backdrop-blur-xl border-t border-bronze/10 max-h-[70vh] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {allLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body text-base ${
                    location.pathname === link.path
                      ? "text-cacao font-medium"
                      : "text-cacao/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/booking"
                className="bg-cacao text-ivory px-6 py-3 text-center text-sm font-body font-medium tracking-wide rounded-full mt-2"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}