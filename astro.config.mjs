import path from "node:path";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

import playformCompress from "@playform/compress";

export default defineConfig({
  site: "https://www.kauaihotyoga.com",
  integrations: [react(), sitemap(), playformCompress()],
  vite: {
    plugins: [svgr(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    optimizeDeps: {
      include: ["lucide-react"],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "lucide": ["lucide-react"],
            "motion": ["motion/react"],
          },
        },
      },
    },
  },
});