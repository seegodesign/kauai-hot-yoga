import path from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import playformCompress from "@playform/compress";

export default defineConfig({
  site: "https://www.kauaihotyoga.com",
  redirects: {
    "/our-community-1": {
      status: 301,
      destination: "/our-community",
    },
  },
  integrations: [sitemap(), playformCompress()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});