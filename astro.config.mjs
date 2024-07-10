import path from "path";
import { fileURLToPath } from "url";
import { defineConfig, squooshImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import compress from "astro-compress";
import astrowind from "./src/integration";
import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
} from "./src/utils/frontmatter.mjs";
import react from "@astrojs/react";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
  hasExternalScripts
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ["*"],
        "flat-color-icons": [
          "template",
          "gallery",
          "approval",
          "document",
          "advertising",
          "currency-exchange",
          "voice-presentation",
          "business-contact",
          "database",
        ],
      },
    }),
    ...whenExternalScripts(() =>
      partytown({
        config: {
          forward: ["dataLayer.push"],
        },
      }),
    ),
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    astrowind(),
    react(),
    partytown(),
  ],
  image: {
    service: squooshImageService(),
  },
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
  redirects: {
    "/fly-with-us-st-simons-island-ga/": "/st-simons-island",
    "/flight-training-southport-nc/": "/southport",
    "/fly-with-us-wilmington-nc/": "/southport",
    "/flight-training-st-simons-island-ga/": "https://hightideaviation.com/",
    "/specials/": "https://hightideaviation.com/",
    "/flight-school-wilmington-nc/": "https://hightideaviation.com/",
    "/flight-school-southport-nc/flight-lessons/":
      "https://hightideaviation.com/",
    "/flight-school-st-simons-island-ga/": "https://hightideaviation.com/",
    "/aircraft-services-southport-nc/":
      "https://hightideaviation.com/about/aircraft-services/",
    "/flight-training-southport-nc/airplane/": "https://hightideaviation.com/",
    "/fly-with-us-southport-nc/scenic-air-tours/": "/southport",
    "/fly-with-us-southport-nc/helicopter-flights/": "/southport",
    "/fly-with-us-st-simons-island-ga/scenic-air-tours/": "/st-simons-island",
    "/flight-school-southport-nc/": "https://hightideaviation.com/",
    "/category/flight-training-aerial-services-blog/":
      "https://hightideaviation.com/blog/",
    "/contact-high-tide-aviation/": "/",
    "/financing/": "https://hightideaviation.com/about/financing/",
    "/request-flight-training/": "https://hightideaviation.com/",
  },
});
