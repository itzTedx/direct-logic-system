import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { IconArrowUpRight } from "@/assets/icons/arrows";

import { SERVICES } from "@/data/constant";

export const Services = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="container max-w-7xl space-y-8 px-4 py-16 md:space-y-12 md:px-6 md:py-24 lg:px-8 lg:py-32"
    >
      <SectionHeader
        badge="What we offer"
        description="Expanding Possibilities. Being the leading IT service provider in Dubai, UAE portfolio of our services are meant to offer you a comprehensive IT support services in Dubai, UAE."
        title="Our Services"
      />
      <div
        aria-label="Our services"
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        role="list"
      >
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
              <Button
                aria-label="Learn more about IT Services & Support"
                className="w-full sm:w-auto"
                size="sm"
                variant="ghost"
              >
                Explore
              </Button>
              <Button size="icon" variant="secondary">
                <IconArrowUpRight aria-hidden="true" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button aria-label="View all our services" className="w-full sm:w-auto">
        Explore More
      </Button>
    </section>
  );
};
