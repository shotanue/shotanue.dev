import devServer from "@hono/vite-dev-server";
import ssg from "@hono/vite-ssg";
import { defineConfig } from "vite";

const entry = "src/index.tsx";
export default defineConfig({
  plugins: [
    ssg({
      entry,
    }),
    devServer({
      entry,
    }),
  ],
  build: {
    rollupOptions: {
      input: ["src/global.css"],
      output: {
        assetFileNames: "style/[name].[ext]",
      },
    },
  },
});
