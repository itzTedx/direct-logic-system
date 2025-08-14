import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconArrowUpRight } from "@/assets/icons/arrows";
import { IconDirectWatermark } from "@/assets/logo";

import { SERVICES } from "@/data/constant";

export default function WhatWeOfferPage() {
  return (
    <main className="min-h-svh pt-24">
      <BackgroundLeft aria-hidden="true" className="top-0 left-0 z-1" />
      <BackgroundRight aria-hidden="true" className="top-0 right-0 z-1" />
      <div className="container relative z-10 max-w-7xl space-y-2 overflow-hidden rounded-4xl bg-radial-[105%_100%_at_50%_0%] from-[#6DA3FF] via-55% via-secondary to-primary px-4 py-12 text-center text-background shadow-[0_12px_42px_0_oklch(0.2788_0.0909_306.27/40%),_inset_0_1px_42px_12px_oklch(1_0_0_/20%)] md:space-y-6 md:px-6 md:py-16 lg:px-8">
        <Badge className="relative z-10" variant="outline">
          <BadgeDot />
          What we offer
        </Badge>
        <h2
          className="relative z-10 text-balance font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          id="cta-heading"
        >
          Empowering your business with <br />
          technology, expertise, and innovation.
        </h2>
        <p className="relative z-10 mx-auto max-w-6xl text-balance text-base leading-relaxed">
          At Direct Logic Systems, we deliver end-to-end solutions that help you operate smarter, scale faster, and stay
          secure. Whether you need robust IT infrastructure, proven industry insights, or digital tools for the future,
          we&apos;ve got you covered.
        </p>

        <IconDirectWatermark aria-hidden="true" className="-top-3/4 -left-12 absolute hidden text-white/5 lg:block" />
        <IconDirectWatermark
          aria-hidden="true"
          className="-bottom-3/4 -right-20 -scale-x-90 absolute hidden text-white/5 lg:block"
        />
      </div>

      <section className="container max-w-7xl pt-14">
        <SectionHeader
          badge="Integrated Technology Solutions"
          description="With over 40 years of experience, we combine deep industry knowledge with cutting-edge technology to solve complex challenges, improve operations, and deliver measurable results."
          title="Smarter, faster, and safer end-to-end."
        />
        <div className="grid grid-cols-1 gap-3 py-14 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ id, description, tags, title }) => (
            <Card key={id} role="listitem">
              <CardContent className="flex h-full flex-col justify-between gap-4">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <ul className="flex flex-wrap gap-2.5">
                  {tags.map((tag) => (
                    <li className="rounded-md bg-primary-foreground/40 px-2.5 py-1 text-primary text-sm" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button aria-label="Learn more about IT Services & Support" size="sm" variant="ghost">
                  Explore
                </Button>
                <Button size="icon" variant="secondary">
                  <IconArrowUpRight aria-hidden="true" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="container max-w-7xl pt-14">
        <SectionHeader
          badge="Trading Solutions"
          description="Source electronics, IT equipment, and industrial products from trusted global suppliers—on time and on budget."
          title="Smarter, faster, and safer end-to-end."
        />
        <div className="grid grid-cols-1 gap-3 py-14 md:grid-cols-2 lg:grid-cols-3">
          {[...SERVICES, ...SERVICES].map(({ id, description, tags, title }, i) => (
            <Card key={`${id}-${i}`} role="listitem">
              <CardContent className="flex h-full flex-col justify-between gap-4">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <ul className="flex flex-wrap gap-2.5">
                  {tags.map((tag) => (
                    <li className="rounded-md bg-primary-foreground/40 px-2.5 py-1 text-primary text-sm" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button aria-label="Learn more about IT Services & Support" size="sm" variant="ghost">
                  Explore
                </Button>
                <Button size="icon" variant="secondary">
                  <IconArrowUpRight aria-hidden="true" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <Faq />
      <Cta />
    </main>
  );
}
