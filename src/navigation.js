import { locations } from "./locations";
import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Locations",
      links: [
        {
          text: "Southport, NC",
          href: getPermalink("/southport"),
        },
        {
          text: "Beaufort, SC",
          href: getPermalink("/beaufort"),
        },
        {
          text: "St Simons Island, GA",
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
          text: "Aerial Photography/Videography",
          href: getPermalink("/packages/aerial-photography"),
        },
        {
          text: "Gift Cards",
          href: getPermalink("/gift-cards"),
        },
      ],
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
    {
      text: "Shop",
      href: "https://shop.flyhightide.com/",
    },
  ],
  actions: [
    {
      text: "Flight Training",
      href: "https://www.hightideaviation.com/",
      target: "_blank",
      variant: "special",
    },
    {
      text: "Book a Tour",
      href: getPermalink("/packages/custom-tours"),
      target: "_self",
      variant: "primary",
    },
  ],
};

export const footerData = {
  description:
    "High Tide Aviation offers premier aerial tours across three spectacular locations: Southport, NC, St Simons Island, GA, and Beaufort, SC. Choose from our diverse tour options including both airplane and helicopter rides in Southport, and exclusive airplane tours in Georgia and South Carolina. Each flight is an opportunity to take in breathtaking landscapes and historical landmarks, guided by our experienced pilots who ensure a safe and memorable experience. Perfect for tourists, photography enthusiasts, and anyone looking to celebrate a special occasion. Book your next adventure with High Tide Aviation and see the Southeast coast from a new perspective!",
  links: [
    {
      title: "Southport, NC",
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
      title: "Beaufort, SC",
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
      title: "St Simons Island, GA",
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
          text: "Aerial Photography/Videography",
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
    /* { text: "Terms", href: getPermalink("/terms") }, */
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
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-rrm-icon"></span>
    Powered by <a class="text-blue-900 hover:text-blue-600 hover:underline dark:text-muted" href="https://rightruddermarketing.com/"> More Right Rudder</a> · All rights reserved · 2024.
  `,
  locations: [
    {
      city: "Southport, NC",
      airport: "Cape Fear Regional Jetport (KSUT)",
      address: "4345 Airport Road SE",
      phone: "(910) 477-1926",
    },
    {
      city: "St Simons Island, GA",
      airport: "McKinnon-St Simons Island Airport (KSSI)",
      address: "1759 Demere Road",
      phone: "(912) 434-4843",
    },
    {
      city: "Beaufort, SC",
      airport: "Beaufort Executive Airport (KARW)",
      address: "39 Airport Circle",
      phone: "(843) 612-0278",
    },
  ],
};
