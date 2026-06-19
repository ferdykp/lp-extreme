"use client";
import { useState } from "react";

export default function ElegantCard({
  children,
  borderColor = "border-white/5",
  className = "",
}) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl border ${borderColor} bg-zinc-900/40 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group reveal-on-scroll ${className}`}
    >
      {/* Spotlight Effect Glow - Mengikuti gerakan kursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(239, 68, 68, 0.07), transparent 80%)`,
        }}
      />

      {/* Konten Utama Card */}
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
}
