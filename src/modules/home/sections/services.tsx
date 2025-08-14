import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { IconArrowUpRight } from "@/assets/icons/arrows";

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
        <Card role="listitem">
          <CardContent>
            <CardHeader>
              <CardTitle>IT Services & Support</CardTitle>
              <CardDescription>
                From strategic IT consulting to reliable infrastructure and fast 2-hour on-site support, we keep your
                systems secure and efficient.
              </CardDescription>
            </CardHeader>
          </CardContent>
          <CardFooter>
            <Button aria-label="Learn more about IT Services & Support" className="w-full sm:w-auto">
              Explore
            </Button>
            <IconArrowUpRight aria-hidden="true" />
          </CardFooter>
        </Card>
      </div>
      <Button aria-label="View all our services" className="w-full sm:w-auto">
        Explore More
      </Button>
    </section>
  );
};
