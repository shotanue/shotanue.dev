import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm"],
  clean: false,
  dts: true,
  treeshake: true,
});
