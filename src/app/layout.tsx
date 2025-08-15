import type { Metadata, Viewport } from "next";
import "./globals.css";

import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Providers from "@/components/providers";

import { helvetica } from "@/assets/fonts";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Direct Logic Systems - IT Solutions & Digital Innovation",
    template: "%s | Direct Logic Systems",
  },
  description:
    "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation. 40+ years of expertise in IT infrastructure, cloud solutions, security, and custom software development.",
  keywords: [
    "IT solutions",
    "digital innovation",
    "cloud computing",
    "cybersecurity",
    "custom software",
    "web development",
    "digital marketing",
    "trading solutions",
    "IT consulting",
    "infrastructure management",
  ],
  authors: [{ name: "Direct Logic Systems" }],
  creator: "Direct Logic Systems",
  publisher: "Direct Logic Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://directlogicsystems.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://directlogicsystems.com",
    title: "Direct Logic Systems - IT Solutions & Digital Innovation",
    description:
      "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation. 40+ years of expertise in IT infrastructure, cloud solutions, security, and custom software development.",
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
    title: "Direct Logic Systems - IT Solutions & Digital Innovation",
    description: "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation.",
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn("no-scrollbar scroll-smooth")} lang="en">
      <head>
        {/* Structured Data */}
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Direct Logic Systems",
              url: "https://directlogicsystems.com",
              logo: "https://directlogicsystems.com/logo.png",
              description:
                "Direct Logic Systems delivers comprehensive IT solutions, trading services, and digital innovation.",
              foundingDate: "1984",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: ["https://linkedin.com/company/direct-logic-systems", "https://twitter.com/directlogicsys"],
            }),
          }}
          type="application/ld+json"
        />
      </head>
      <body className={cn("antialiased", helvetica.className)}>
        <Providers>
          <Link
            className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-background focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:px-4 focus:py-2"
            href="#main-content"
          >
            Skip to main content
          </Link>

          <Navbar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
