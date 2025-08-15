import Link from "next/link";

import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconPhone } from "@/assets/icons/contact";

import { ClientsLogos } from "../components/clients-roll";

export const Hero = () => {
  return (
    <header className="min-h-svh overflow-hidden bg-gradient-to-b from-[#E5CAFF]/30 to-transparent" role="banner">
      <BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
      <BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />
      <div className="relative z-10 ml-auto grid max-w-[90rem] grid-cols-1 items-center gap-4 pt-24 pl-4 md:pl-6 lg:grid-cols-2 lg:pt-32 lg:pl-8">
        <div className="container max-w-3xl">
          <Badge>
            <BadgeDot />
            Your Complete Technology & Trading Partner
          </Badge>
          <h1 className="mt-3 font-bold text-3xl leading-[1.15] md:text-4xl lg:text-5xl">
            Making Technology
            <br /> Work for You <br />
            <span className="text-primary">Faster, Smarter, Better.</span>
          </h1>
          <p className="mt-3 mb-6 text-balance text-base text-muted-foreground leading-relaxed md:text-lg">
            From IT infrastructure to trading solutions, software, and digital marketing, we deliver innovation,
            reliability, and growth for your business.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              aria-label="Contact us to discuss your technology needs"
              asChild
              className="w-full sm:w-auto"
              size="lg"
            >
              <Link href="/contact">
                <div className="flex items-center justify-center">
                  <IconPhone className="text-primary-foreground" />
                </div>
                Talk to us
              </Link>
            </Button>
            <Button
              aria-label="View our portfolio of successful projects"
              className="w-full sm:w-auto"
              size="lg"
              variant="outline"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
        <div
          aria-label="Direct Logic Systems showcase image"
          className="mt-8 aspect-7/5 bg-white ring-8 ring-white/40 max-md:rounded-3xl md:rounded-s-3xl lg:mt-0"
          role="img"
        />
      </div>
      <section
        aria-labelledby="clients-heading"
        className="container mt-8 max-w-7xl px-4 pb-36 text-center md:mt-12 md:px-6 md:pb-0 lg:mt-14 lg:px-8"
      >
        <h2 className="mb-3 text-xl" id="clients-heading">
          Trusted by 200+ Businesses in the UAE
        </h2>
        <ClientsLogos />
      </section>
    </header>
  );
};
