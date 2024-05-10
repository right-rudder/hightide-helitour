const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "southport-tour": "url('~/assets/images/beach-of-beaufort-sc.jpg')",
        "simons-tour":
          "url('~/assets/images/golf-course-st-simons-island.jpg')",
        "beaufort-tour": "url('~/assets/images/beaufort-sc-waterways.jpg')",
        "rrm-icon": "url('~/assets/favicons/rrm-favicon.png')",
        "gift-card": "url('~/assets/images/pier-at-st-simons-island.jpg')",
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
