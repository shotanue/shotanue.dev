"use client";

import { motion } from "motion/react";
import type React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

import { useEffect, useState } from "react";
import { GeometricPattern } from "../primitive/GeometricPattern";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [triangleCount, setTriangleCount] = useState(150);

  useEffect(() => {
    const calculateTriangleCount = (width: number): number => {
      const lgBreakpoint = 1024;
      const minCount = 150;

      if (width <= lgBreakpoint) {
        return minCount;
      }

      const rate = 350 / 256; // (500 - 150) / (1280 - 1024)
      return Math.floor(minCount + (width - lgBreakpoint) * rate);
    };

    const updateTriangleCount = () => {
      setTriangleCount(calculateTriangleCount(window.innerWidth));
    };

    // Initial calculation
    updateTriangleCount();

    // Update on resize
    window.addEventListener("resize", updateTriangleCount);

    return () => {
      window.removeEventListener("resize", updateTriangleCount);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-800 selection:text-zinc-100 relative">
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <GeometricPattern
          seed={42}
          triangleCount={triangleCount}
          backgroundColor="#18181b"
          colorPalette={["#09090b", "#18181b", "#27272a", "#3f3f46", "#52525b"]}
          strokeOpacity={0.15}
          displacementFactor={0.9}
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto w-full grow">{children}</main>
      </div>
    </div>
  );
};
