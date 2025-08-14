import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { IconCloud, IconGear, IconGlobe, IconLoudspeaker } from "@/assets/icons/system";
import { IconDirectWatermark } from "@/assets/logo";

export const Cta = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative mx-4 rounded-b-4xl bg-gradient-to-b from-50% from-white to-50% to-transparent py-12 md:mx-6 md:py-16 lg:py-20"
    >
      <div className="container relative inset-shadow-[0_1px_42px_0] inset-shadow-white/25 z-10 max-w-7xl space-y-4 overflow-hidden rounded-4xl bg-radial-[105%_100%_at_50%_0%] from-[#6DA3FF] via-55% via-secondary to-primary px-4 py-12 text-center text-background md:space-y-6 md:px-6 md:py-16 lg:px-8 lg:py-20">
        <Badge className="relative z-10" variant="outline">
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
        <div className="absolute inset-24 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex size-20 rotate-9 items-center justify-center rounded-2xl bg-card shadow-[0_8px_24px_0] shadow-primary-background/30">
              <IconCloud />
            </div>
            <div className="-rotate-12 flex size-20 items-center justify-center rounded-2xl bg-card shadow-[0_8px_24px_0] shadow-primary-background/30">
              <IconGlobe />
            </div>
          </div>
          <div className="flex items-center justify-between px-16">
            <div className="-rotate-9 flex size-20 items-center justify-center rounded-2xl bg-card shadow-[0_8px_24px_0] shadow-primary-background/30">
              <IconLoudspeaker />
            </div>
            <div className="flex size-20 rotate-6 items-center justify-center rounded-2xl bg-card shadow-[0_8px_24px_0] shadow-primary-background/30">
              <IconGear />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-1/2 h-8 w-full rounded-b-full bg-white" />
    </section>
  );
};
