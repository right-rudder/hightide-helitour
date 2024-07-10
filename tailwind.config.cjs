const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('~/assets/images/HTA-logo.png')",
        "logo-dark": "url('~/assets/images/HTA-white-grad-logo.png')",
        "southport-tour": "url('~/assets/images/beaufort-sc-waterways.jpg')",
        "simons-tour":
          "url('~/assets/images/high-tide-aviation-tours-st-simons-island-plane-flying-over-island.jpeg')",
        "beaufort-tour":
          "url('~/assets/images/high-tide-aviation-beaufort-sc-tours.jpg')",
        "rrm-icon": "url('~/assets/favicons/rrm-favicon.png')",
        "gift-card": "url('~/assets/images/pier-at-st-simons-island.jpg')",
        404: "url('~/assets/images/pier-at-st-simons-island.jpg')",
      },
      height: (theme) => ({
        "screen-1/2": "50vh",
        "screen-2/3": "66vh",
        "screen-1/3": "calc(100vh / 3)",
        "screen-3/4": "75vh",
        "screen-4/5": "80vh",
        "screen-mobile": "92vh", //depends on menu height
      }),
      colors: {
        primary: "var(--aw-color-primary)",
        secondary: "var(--aw-color-secondary)",
        accent: "var(--aw-color-accent)",
        default: "var(--aw-color-text-default)",
        muted: "var(--aw-color-text-muted)",
        "mustard-yellow": "#ffc220",
      },
      fontFamily: {
        sans: [
          "var(--aw-font-sans, ui-sans-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "var(--aw-font-serif, ui-serif)",
          ...defaultTheme.fontFamily.serif,
        ],
        heading: [
          "var(--aw-font-heading, ui-sans-serif)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      keyframes: {
        "color-change": {
          "0%": {
            color: "#0000FF",
          },
          "50%": {
            color: "#FFC0CB",
          },
          "100%": {
            color: "#0000FF",
          },
        },
        wave: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        "color-change": "color-change 3s infinite",
        wave: "wave 3s infinite linear",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
