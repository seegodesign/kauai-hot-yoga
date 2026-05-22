import path from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import playformCompress from "@playform/compress";

export default defineConfig({
  site: "https://kauaihotyoga.com",
  redirects: {
    "/our-community-1": {
      status: 301,
      destination: "/our-community",
    },
    "/blog/f/the-science-backed-benefits-of-26-2-hot-yoga": {
      status: 301,
      destination: "/blog/the-science-backed-benefits-of-26-2-hot-yoga",
    },
    "/blog/f/how-yin-yoga-hydrates-your-fascia-and-boosts-hyaluronic-acid": {
      status: 301,
      destination: "/blog/how-yin-yoga-hydrates-your-fascia-and-boosts-hyaluronic-acid",
    },
    "/blog/f/how-frequency-accuracy-precision-can-transform-your-practice": {
      status: 301,
      destination: "/blog/how-frequency-accuracy-and-precision-can-transform-your-practice",
    },
    "/blog/f/five-profound-lessons-from-marvins-class-this-morning": {
      status: 301,
      destination: "/blog/five-profound-lessons-from-marvin-s-class-this-morning",
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