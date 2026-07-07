import React from "react";

export default function Logo({ size = 40, light = false, className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="flex items-center justify-center bg-cacao rounded-xl flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          width={size * 0.55}
          height={size * 0.55}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
            fill="#F4F1EA"
          />
        </svg>
      </div>
      <span className={`font-heading text-xl md:text-2xl font-bold tracking-tight ${light ? "text-ivory" : "text-cacao"}`}>
        AviDelux
      </span>
    </div>
  );
}