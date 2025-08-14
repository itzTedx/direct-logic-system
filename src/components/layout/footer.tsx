import Link from "next/link";

import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@/assets/icons/brands";
import { IconLogo, LogoWordmark, WordWatermark } from "@/assets/logo";

import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="container relative space-y-6 overflow-hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <IconLogo />
          <LogoWordmark />
        </div>
        <div className="flex items-center gap-3">
          <h3>Social Media</h3>
          <ul className="flex items-center gap-3">
            <li>
              <Link
                className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground"
                href="#"
              >
                <IconBrandLinkedin />
              </Link>
            </li>
            <li>
              <Link
                className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground"
                href="#"
              >
                <IconBrandFacebook />
              </Link>
            </li>
            <li>
              <Link
                className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground"
                href="#"
              >
                <IconBrandInstagram />
              </Link>
            </li>
            <li>
              <Link
                className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground"
                href="#"
              >
                <IconBrandX />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="mx-auto mb-72 grid max-w-7xl grid-cols-2 gap-12">
        <div>
          <h3 className="mb-12 text-pretty text-5xl leading-tight tracking-tight">
            Don't settle for good, let's go for amazing, together
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oud Metha Road, Al Nasar Building No 1, Office No. 13,
            <br /> Near Oud Metha Metro Station, Post Box: 6016, <br />
            Dubai, United Arab Emirates.
          </p>
        </div>
        <div className="flex gap-20 justify-self-end">
          <div>
            <h4 className="mb-3 text-muted-foreground text-sm">Quick Links</h4>
            <ul className="space-y-4 font-medium text-lg">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">What we offer</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-muted-foreground text-sm">Company</h4>
            <ul className="space-y-4 font-medium text-lg">
              <li>
                <Link href="/">Clients</Link>
              </li>
              <li>
                <Link href="/">Portfolio</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-muted-foreground text-sm">Contact</h4>
            <ul className="space-y-4 font-medium text-lg">
              <li>
                <Link href="/">+971 4 334 8774</Link>
              </li>
              <li>
                <Link href="/">+971 50 675 6708</Link>
              </li>
              <li>
                <Link href="/">info@directls.ae</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between py-3">
        <p>
          © Direct Logic Systems LLC <span className="text-muted-foreground">- All Rights Reserved</span>
        </p>
        <p>
          Website Designed & Developed by{" "}
          <Link href="https://www.zironmedia.com" target="_blank">
            Ziron Media
          </Link>
        </p>
      </div>
      <WordWatermark className="-translate-x-1/2 absolute bottom-0 left-1/2 mx-auto h-auto w-[92%]" />
    </footer>
  );
};
