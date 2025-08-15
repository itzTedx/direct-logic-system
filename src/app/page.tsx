import { Metadata } from "next";

import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";

import { BASE_URL } from "@/data/site-config";
import { About, Hero, Portfolio, Services, Solutions, Testimonials } from "@/modules/home/sections";
import { getCategoriesWithMetadata } from "@/modules/services/actions";

export const metadata: Metadata = {
  title: "Direct Logic Systems - Leading IT Solutions & Digital Innovation in Dubai, UAE",
  description:
    "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation in Dubai, UAE. 40+ years of expertise in IT infrastructure, cloud solutions, security, and custom software development.",
  keywords: [
    "IT solutions Dubai",
    "digital innovation UAE",
    "cloud computing Dubai",
    "cybersecurity UAE",
    "custom software development",
    "web development Dubai",
    "digital marketing UAE",
    "trading solutions",
    "IT consulting Dubai",
    "infrastructure management UAE",
    "business technology solutions",
    "Dubai IT company",
    "UAE technology services",
  ],
  authors: [{ name: "Direct Logic Systems" }],
  creator: "Direct Logic Systems",
  publisher: "Direct Logic Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Direct Logic Systems - Leading IT Solutions & Digital Innovation in Dubai, UAE",
    description:
      "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation in Dubai, UAE. 40+ years of expertise in IT infrastructure, cloud solutions, security, and custom software development.",
    siteName: "Direct Logic Systems",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Logic Systems - IT Solutions & Digital Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Logic Systems - Leading IT Solutions & Digital Innovation in Dubai, UAE",
    description:
      "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation in Dubai, UAE.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "geo.region": "AE",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    ICBM: "25.2048, 55.2708",
  },
};

export default async function Home() {
  const categories = await getCategoriesWithMetadata();

  return (
    <main id="main-content" role="main">
      <Hero />

      <About />

      <Services categories={categories} />

      <Solutions />

      <Portfolio />

      <Testimonials />

      <Faq />

      <Cta />
    </main>
  );
}
