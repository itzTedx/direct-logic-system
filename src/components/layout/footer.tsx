import Link from "next/link";

import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@/assets/icons/brands";
import { IconLogo, LogoWordmark, WordWatermark } from "@/assets/logo";

import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer aria-label="Site footer" className="container relative space-y-6 overflow-hidden" role="contentinfo">
      {/* Top section with logo and social media */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
        <div className="flex items-center gap-2">
          <IconLogo aria-hidden="true" className="text-primary" />
          <LogoWordmark aria-label="Direct Logic Systems" />
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  aria-label="Visit our LinkedIn page"
                  className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="https://linkedin.com/company/direct-logic-systems"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandLinkedin aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Visit our Facebook page"
                  className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="https://facebook.com/directlogicsystems"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandFacebook aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Visit our Instagram page"
                  className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="https://instagram.com/directlogicsystems"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandInstagram aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Visit our X (Twitter) page"
                  className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="https://x.com/directlogicsys"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <IconBrandX aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Separator />

      {/* Main content section */}
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-8 sm:mb-24 md:mb-44 lg:mb-72 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="mb-8 text-pretty text-3xl leading-tight tracking-tight sm:text-4xl lg:mb-12 lg:text-5xl">
            Don't settle for good, <br />
            let's go for amazing, together
          </h2>
          <address className="text-lg text-muted-foreground not-italic leading-relaxed">
            <p>
              Oud Metha Road, Al Nasar Building No 1, Office No. 13,
              <br /> Near Oud Metha Metro Station, Post Box: 6016, <br />
              Dubai, United Arab Emirates.
            </p>
          </address>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-12 justify-self-start sm:gap-16 lg:gap-20 lg:justify-self-end"
        >
          <div>
            <h3 className="mb-3 font-medium text-muted-foreground text-sm">Quick Links</h3>
            <ul className="space-y-3 font-medium text-base sm:space-y-4 sm:text-lg">
              <li>
                <Link
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="/what-we-offer"
                >
                  What we offer
                </Link>
              </li>
              <li>
                <Link
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-muted-foreground text-sm">Company</h3>
            <ul className="space-y-3 font-medium text-base sm:space-y-4 sm:text-lg">
              <li>
                <Link
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="/about"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="/about#clients"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-muted-foreground text-sm">Contact</h3>
            <ul className="space-y-3 font-medium text-base sm:space-y-4 sm:text-lg">
              <li>
                <a
                  aria-label="Call us at +971 4 334 8774"
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="tel:+97143348774"
                >
                  +971 4 334 8774
                </a>
              </li>
              <li>
                <a
                  aria-label="Call us at +971 50 675 6708"
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="tel:+971506756708"
                >
                  +971 50 675 6708
                </a>
              </li>
              <li>
                <a
                  aria-label="Email us at info@directls.ae"
                  className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  href="mailto:sales@directls.ae"
                >
                  sales@directls.ae
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom section with copyright and credits */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 py-3 text-center sm:flex-row sm:gap-0 sm:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} Direct Logic Systems LLC{" "}
          <span className="text-muted-foreground">- All Rights Reserved</span>
        </p>
        <p className="text-sm">
          Website Designed & Developed by{" "}
          <Link
            aria-label="Visit Ziron Media website (opens in new tab)"
            className="rounded transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            href="https://www.zironmedia.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ziron Media
          </Link>
        </p>
      </div>

      <WordWatermark
        aria-hidden="true"
        className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2 mx-auto h-auto w-full sm:w-[92%]"
      />
    </footer>
  );
};
