import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

export default function ScrollToast({ triggerPercent = 40, children }) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent >= triggerPercent && !show) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerPercent, show, dismissed]);

  const handleClose = () => {
    setDismissed(true);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-cacao/95 backdrop-blur-xl text-ivory p-6 rounded-sm shadow-2xl border border-bronze/20">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-ivory/40 hover:text-ivory luxury-transition"
            >
              <X size={16} />
            </button>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}