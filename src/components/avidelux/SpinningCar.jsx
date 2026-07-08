import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  useVelocity,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const DEFAULT_CAR =
  "/images/7b3e04fca_generated_image.png";

export default function SpinningCar({
  image = DEFAULT_CAR,
  alt = "Side profile of a black luxury sedan rotating 360 degrees",
}) {
  const containerRef = useRef(null);
  const rotation = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothRotation = useSpring(rotation, {
    stiffness: 120,
    damping: 25,
    mass: 0.8,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!isDragging) {
      rotation.set(v * 720);
    }
  });

  const velocity = useVelocity(smoothRotation);
  const blurAmount = useTransform(velocity, [-400, 0, 400], [8, 0, 8]);
  const filter = useMotionTemplate`blur(${blurAmount}px)`;

  const handleDragStart = (clientX) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragStartRotation.current = rotation.get();
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const delta = (clientX - dragStartX.current) * 0.5;
    rotation.set(dragStartRotation.current + delta);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[50vh] lg:h-[65vh] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden"
      style={{ perspective: "1200px" }}
      onMouseDown={(e) => {
        e.preventDefault();
        handleDragStart(e.clientX);
      }}
      onMouseMove={(e) => isDragging && handleDragMove(e.clientX)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <div className="absolute bottom-[15%] w-[55%] h-8 bg-bronze/20 blur-3xl rounded-full" />

      <motion.img
        src={image}
        alt={alt}
        style={{
          rotateY: smoothRotation,
          filter,
        }}
        className="max-h-full max-w-full object-contain relative z-10"
        draggable={false}
      />
    </div>
  );
}