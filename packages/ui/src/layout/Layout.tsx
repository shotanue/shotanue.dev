import { useEffect, useState } from "react";
import { GeometricPattern } from "../primitive/GeometricPattern";

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
    <div className="min-h-screen w-dvw h-dvh">
      <div className="relative w-full h-full">
        <GeometricPattern
          seed={42}
          triangleCount={triangleCount}
          backgroundColor="#18181b"
          colorPalette={["#09090b", "#18181b", "#27272a", "#3f3f46", "#52525b"]}
          strokeOpacity={0.15}
          displacementFactor={0.9}
        />
        <div className="absolute left-0 top-0 w-full h-full py-4">
          <div className="max-w-7xl h-full mx-auto text-zinc-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
