export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/direct-logic-systems",
  facebook: "https://facebook.com/directlogicsystems",
  instagram: "https://instagram.com/directlogicsystems",
  x: "https://x.com/directlogicsys",
} as const;

export const CONTACT_INFO = {
  phone1: "+971 4 334 8774",
  phone2: "+971 50 675 6708",
  email: "sales@directls.ae",
} as const;

export const COMPANY_ADDRESS = {
  street: "Oud Metha Road, Al Nasar Building No 1, Office No. 13",
  location: "Near Oud Metha Metro Station, Post Box: 6016",
  city: "Dubai, United Arab Emirates.",
} as const;

export const NAVIGATION_LINKS = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/what-we-offer", label: "What we offer" },
    { href: "/contact", label: "Contact" },
  ],
  company: [
    { href: "/about", label: "About us" },
    { href: "/about#clients", label: "Clients" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
  ],
} as const;

export const COMPANY_INFO = {
  name: "Direct Logic Systems LLC",
  tagline: "Don't settle for good, let's go for amazing, together",
  developer: {
    name: "Ziron Media",
    url: "https://www.zironmedia.com",
  },
} as const;
