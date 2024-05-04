import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Locations",
      links: [
        {
          text: "Southport",
          href: getPermalink("/southport"),
        },
        {
          text: "Beaufort",
          href: getPermalink("/beaufort"),
        },
        {
          text: "St. Simons Island",
          href: getPermalink("/st-simons-island"),
        },
      ],
    },
    {
      text: "The High Tide Experience",
      href: getPermalink("/high-tide-experience"),
    },
    {
      text: "Other Packages",
      links: [
        {
          text: "Book a Custom Tour!",
          href: getPermalink("/packages/custom-tour"),
        },
        {
          text: "Aerial Photography",
          href: getPermalink("/packages/aerial-photography"),
        },
        {
          text: "Aerial Videography",
          href: getPermalink("/packages/aerial-videography"),
        },
      ],
    },
    {
      text: "Gift Cards",
      href: getPermalink("/gift-cards"),
    },
    {
      text: "About Us",
      links: [
        {
          text: "Why High Tide?",
          href: getPermalink("/about/why-high-tide"),
        },
        {
          text: "Testimonials",
          href: getPermalink("/about/testimonials"),
        },
      ],
    },
  ],
  actions: [
    {
      text: "Book a Tour",
      href: "#",
      target: "_self",
    },
  ],
};

export const footerData = {
  links: [
    {
      title: "Locations",
      links: [
        {
          text: "Southport",
          href: getPermalink("/locations/southport"),
        },
        {
          text: "Beaufort",
          href: getPermalink("/locations/beaufort"),
        },
        {
          text: "St. Simons Island",
          href: getPermalink("/locations/st-simons-island"),
        },
      ],
    },
    {
      title: "Packages",
      links: [
        {
          text: "Book a Custom Tour!",
          href: getPermalink("/packages/custom-tour"),
        },
        {
          text: "Aerial Photography",
          href: getPermalink("/packages/aerial-photography"),
        },
        {
          text: "Aerial Videography",
          href: getPermalink("/packages/aerial-videography"),
        },
      ],
    },
    {
      title: "About Us",
      links: [
        {
          text: "Why High Tide?",
          href: getPermalink("/about/why-high-tide"),
        },
        {
          text: "Testimonials",
          href: getPermalink("/about/testimonials"),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") },
  ],
  socialLinks: [
    {
      ariaLabel: "YouTube",
      icon: "tabler:brand-youtube",
      href: "https://www.youtube.com/@hightideaviation",
    },
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/hightideaviation/",
    },
    {
      ariaLabel: "Facebook",
      icon: "tabler:brand-facebook",
      href: "https://facebook.com/High-Tide-Aviation-763218714053314/",
    },
    { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
    /* {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/onwidget/astrowind",
    }, */
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-rrm-icon"></span>
    Made by <a class="text-blue-900 hover:text-blue-200 underline dark:text-muted" href="https://rightruddermarketing.com/"> Right Rudder Marketing</a> · All rights reserved.
  `,
};
