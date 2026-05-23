import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lsp12.github.io",
  base: "/portafolio-jv/",
  integrations: [sitemap()],
  build: {
    assets: "assets",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
