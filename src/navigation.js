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
      text: "Other Services",
      links: [
        {
          text: "Book a Custom Tour!",
          href: getPermalink("/packages/custom-tours"),
        },
        {
          text: "Aerial Photography - Videography",
          href: getPermalink("/packages/aerial-photography"),
        },
        {
          text: "Flight Training",
          href: "https://www.hightideaviation.com/",
        },
      ],
    },
    {
      text: "Gift Cards",
      href: "https://fareharbor.com/embeds/book/flyhightide-ssi/items/350303/?full-items=yes&back=https://flyhightide.com/&flow=621000&g4=yes",
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
  description:
    "High Tide Aviation offers premier aerial tours across three spectacular locations: Southport, NC, St Simons Island, GA, and Beaufort, SC. Choose from our diverse tour options including both airplane and helicopter rides in Southport, and exclusive airplane tours in Georgia and South Carolina. Each flight is an opportunity to take in breathtaking landscapes and historical landmarks, guided by our experienced pilots who ensure a safe and memorable experience. Perfect for tourists, photography enthusiasts, and anyone looking to celebrate a special occasion. Book your next adventure with High Tide Aviation and see the Southeast coast from a new perspective!",
  links: [
    {
      title: "Southport",
      links: [
        {
          text: "Bald Head Island",
          href: getPermalink("/southport/bald-head-island"),
        },
        {
          text: "Beach Lover",
          href: getPermalink("/southport/beach-lover"),
        },
        {
          text: "Cape Fear Passport",
          href: getPermalink("/southport/cape-fear-passport"),
        },
        {
          text: "Lighthouse Tour",
          href: getPermalink("/southport/lighthouse-tour"),
        },
        {
          text: "Oak Island",
          href: getPermalink("/southport/oak-island"),
        },
      ],
    },
    {
      title: "Beaufort",
      links: [
        {
          text: "Barrier Island",
          href: getPermalink("/beaufort/barrier-island"),
        },
        {
          text: "Hilton Head Tour",
          href: getPermalink("/beaufort/hilton-head"),
        },
        {
          text: "Low Country Passport",
          href: getPermalink("/beaufort/low-country-passport"),
        },
      ],
    },
    {
      title: "St Simons Island",
      links: [
        {
          text: "Lighthouse Tour",
          href: getPermalink("/st-simons-island/lighthouse-tour"),
        },
        {
          text: "Jekyll Island Tour",
          href: getPermalink("/st-simons-island/jekyll-island"),
        },
        {
          text: "Golden Isles Passport",
          href: getPermalink("/st-simons-island/golden-isles-passport"),
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          text: "Book a Custom Tour!",
          href: getPermalink("/packages/custom-tours"),
        },
        {
          text: "Aerial Photography",
          href: getPermalink("/packages/aerial-photography"),
        },
        {
          text: "Flight Training",
          href: "https://www.hightideaviation.com/",
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
    /* { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") }, */
    /* {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/onwidget/astrowind",
    }, */
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-rrm-icon"></span>
    Made by <a class="text-blue-900 hover:text-blue-200 hover:underline dark:text-muted" href="https://rightruddermarketing.com/"> Right Rudder Marketing</a> · All rights reserved · 2024.
  `,
};
