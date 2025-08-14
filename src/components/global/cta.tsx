import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconDirectWatermark } from "@/assets/logo";

export const Cta = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative mx-4 rounded-b-4xl bg-gradient-to-b from-50% from-white to-50% to-transparent py-12 md:mx-6 md:py-16 lg:py-20"
    >
      <div className="container relative inset-shadow-[0_1px_42px_0] inset-shadow-white/25 z-10 max-w-7xl space-y-4 overflow-hidden rounded-4xl bg-radial-[at_50%_0%] from-sky-400 to-primary px-4 py-12 text-center text-background md:space-y-6 md:px-6 md:py-16 lg:px-8 lg:py-20">
        <Badge className="relative z-10">
          <BadgeDot />
          What we offer
        </Badge>
        <h2
          className="relative z-10 text-balance font-bold text-2xl leading-snug md:text-3xl lg:text-4xl xl:text-5xl"
          id="cta-heading"
        >
          Power Your Business with <br className="hidden sm:block" />
          40+ Years of Proven Tech Expertise
        </h2>
        <p className="relative z-10 mx-auto max-w-2xl text-balance text-base leading-relaxed md:text-lg">
          Your business deserves more than just technology - it deserves the right strategy, execution, and innovation
          to thrive in a competitive market.
        </p>
        <Button aria-label="Learn more about our services and expertise" className="w-full sm:w-auto">
          Get know more
        </Button>
        <IconDirectWatermark aria-hidden="true" className="-top-1/2 -left-12 absolute hidden text-white/8 lg:block" />
        <IconDirectWatermark
          aria-hidden="true"
          className="-bottom-1/2 -right-20 -scale-x-90 absolute hidden text-white/8 lg:block"
        />
      </div>
      <div aria-hidden="true" className="absolute top-1/2 h-8 w-full rounded-b-full bg-white" />
    </section>
  );
};
