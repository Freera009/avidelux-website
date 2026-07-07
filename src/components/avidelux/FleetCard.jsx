import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FleetCard({ title, subtitle, image, features }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-cream rounded-sm overflow-hidden cursor-pointer luxury-card luxury-transition"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        />
      </div>

      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-heading text-xl font-semibold text-cacao">
              {title}
            </h3>
            <p className="font-body text-sm text-bronze mt-1">{subtitle}</p>
          </div>
          <motion.div
            animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight size={20} className="text-bronze" />
          </motion.div>
        </div>

        {features && (
          <div className="flex flex-wrap gap-2 mt-4">
            {features.map((f, i) => (
              <span
                key={i}
                className="font-body text-xs text-cacao/50 border border-cacao/10 px-3 py-1 rounded-sm"
              >
                {f}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}