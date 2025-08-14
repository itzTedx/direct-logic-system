import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import { IconArrowLeft, IconArrowRight } from "@/assets/icons/arrows";
import { IconStar } from "@/assets/icons/star";

export const Testimonials = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="container max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32"
    >
      <SectionHeader
        badge="Clients & Testimonials"
        description="We're proud to partner with diverse clients across industries, delivering tailored solutions and exceptional service."
        title="Trusted by 200+ Leading Businesses"
      />
      <div
        aria-label="Client testimonials"
        className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        role="list"
      >
        <Card role="listitem">
          <CardContent>
            <CardHeader aria-label="5 out of 5 stars rating" className="flex items-center gap-2" role="img">
              {Array.from({ length: 5 }).map((_, index) => (
                <IconStar aria-hidden="true" className="size-4 shrink-0 text-yellow-500 md:size-5" key={index} />
              ))}
            </CardHeader>
            <blockquote>
              <p className="text-sm md:text-base">
                Direct LS is one of the best service providers our organization has had the pleasure of using. As an
                organization, we needed an entire overhaul to our out dated computer. We are pleased and confident in
                extending our highest recommendation for Direct LS.
              </p>
            </blockquote>
          </CardContent>
          <CardFooter>
            <div>
              <cite className="not-italic">
                <h3 className="font-semibold text-sm md:text-base">Stephen Shaw</h3>
                <p className="text-muted-foreground text-xs md:text-sm">Surrey</p>
              </cite>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div aria-label="Testimonial navigation" className="mt-6 flex justify-center space-x-3" role="group">
        <Button aria-label="Previous testimonial" size="icon" variant="outline">
          <IconArrowLeft aria-hidden="true" />
        </Button>
        <Button aria-label="Next testimonial" size="icon" variant="outline">
          <IconArrowRight aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
};
