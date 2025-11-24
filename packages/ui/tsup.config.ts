import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.tsx", "./src/input.css"],
  target: "esnext",
  format: ["esm"],
  clean: false,
  dts: true,
  treeshake: true,
  splitting: true,
  minify: false,
  sourcemap: true,
  external: ["@egoist/tailwindcss-icons"]
});
