"use client";

import { useEffect, useState } from "react";

export default function AkiraBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="akira-bg">
      {/* Data Rain Streams */}
      <div className="data-rain">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="data-stream" />
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="floating-geometry">
        {/* Triangles */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`triangle-${i}`}
            className="geo-triangle geo-element"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        
        {/* Squares */}
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={`square-${i}`}
            className="geo-square geo-element"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Circles */}
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={`circle-${i}`}
            className="geo-circle geo-element"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${18 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Neon City Skyline */}
      <div className="neon-city" />

      {/* Street Lights */}
      <div className="street-lights" />

      {/* Neon Light Reflections */}
      <div className="neon-reflections" />

      {/* Retro Scan Lines */}
      <div className="retro-scanlines" />

      {/* Digital Noise */}
      <div className="digital-noise" />
    </div>
  );
}