// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), solidJs()],
});