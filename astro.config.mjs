// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://Jacques-z.github.io",
  base: "/vite-deploy-demo",
  integrations: [mdx(), sitemap()],
});
