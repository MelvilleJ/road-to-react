import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function GlowSection() {
  const containerRef = useRef(null);

  // Track raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the motion with spring physics
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-[400px] bg-gray-900 overflow-hidden rounded-xl"
    >
      {/* Glow Aura */}
      <motion.div
        className="pointer-events-none absolute w-60 h-60 rounded-full bg-purple-500 opacity-25 blur-[100px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Section content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-3xl font-bold">
        Smooth Aura Hover
      </div>
    </section>
  );
}

export default GlowSection;
