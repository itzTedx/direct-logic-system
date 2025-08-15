import Image from "next/image";
import Link from "next/link";

import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconArrowUpRight } from "@/assets/icons/arrows";
import { IconDirectWatermark } from "@/assets/logo";

import { getCategoriesWithMetadata, getServicesByCategory } from "@/modules/services/actions";

export default async function WhatWeOfferPage() {
  const categories = await getCategoriesWithMetadata();

  return (
    <main className="min-h-svh pt-24">
      <BackgroundLeft aria-hidden="true" className="-top-20 -left-20 z-1 md:top-0 md:left-0" />
      <BackgroundRight aria-hidden="true" className="-top-20 -right-20 z-1 md:top-0 md:right-0" />
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

      {
        await Promise.all(
          categories.map(async (category) => {
            const categoryServices = await getServicesByCategory(category.id);
            const displayedServices = categoryServices.slice(0, 6); // Limit to 4 services
            console.log(displayedServices);
            return (
              <section className="container max-w-7xl pt-14" key={category.id}>
                <SectionHeader
                  badge={category.title}
                  description={category.description}
                  title={`${category.title} Solutions`}
                />
                <div className="grid grid-cols-1 gap-3 py-14 md:grid-cols-2 lg:grid-cols-3">
                  {displayedServices.map((service) => (
                    <Card className="group transition-all duration-300 hover:shadow-lg" key={service.id}>
                      <CardContent className="flex h-full flex-col p-1">
                        {service.image && (
                          <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-md bg-muted">
                            <Image alt={service.title} className="object-cover" fill src={service.image} />
                          </div>
                        )}
                        <CardHeader className="p-3">
                          <CardTitle>{service.title}</CardTitle>
                          <CardDescription>{service.meta.description}</CardDescription>
                        </CardHeader>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between px-2 pb-1">
                        <CardTitle className="text-muted-foreground text-sm">Explore</CardTitle>

                        <Button asChild size="icon" variant="secondary">
                          <Link
                            href={`/what-we-offer/${category.id}/${service.slug}`}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <IconArrowUpRight />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })
        )
      }

      <Faq />
      <Cta />
    </main>
  );
}
