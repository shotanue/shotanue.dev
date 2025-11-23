import { GeometricPattern } from "../primitive/GeometricPattern";

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen w-dvw h-dvh">
      <div className="relative w-full h-full">
        <GeometricPattern
          seed={42}
          triangleCount={100}
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
