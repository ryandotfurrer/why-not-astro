import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

export default defineConfig({
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "houston",
      wrap: true,
    },
  },
  integrations: [
    tailwind(),
    alpinejs(),
    preact({
      include: ["**/preact/*"],
    }),
    react({
      experimentalReactChildren: true,
      include: ["**/react/*"],
    }),
    solidJs({
      include: ["**/solid/*"],
    }),
    svelte(),
    vue(),
  ],
});
