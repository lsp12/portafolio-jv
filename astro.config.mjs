// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://lsp12.github.io",
  base: "/portafolio-jv/",
  vite: {
    plugins: [tailwindcss()],
  },
});
