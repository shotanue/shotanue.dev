import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.tsx"],
  target: "esnext",
  format: ["esm"],
  clean: false,
  dts: true,
  treeshake: true,
  minify: true,
  sourcemap: true,
});
