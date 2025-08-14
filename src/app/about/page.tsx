import { Badge, BadgeDot } from "@/components/ui/badge";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconDirectWatermark } from "@/assets/logo";

export default function AboutPage() {
  return (
    <main className="container min-h-svh max-w-7xl pt-32">
      <BackgroundLeft aria-hidden="true" className="top-0 left-0 z-1" />
      <BackgroundRight aria-hidden="true" className="top-0 right-0 z-1" />
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

        <IconDirectWatermark aria-hidden="true" className="-top-1/2 -left-12 absolute hidden text-white/8 lg:block" />
        <IconDirectWatermark
          aria-hidden="true"
          className="-bottom-1/2 -right-20 -scale-x-90 absolute hidden text-white/8 lg:block"
        />
      </div>
    </main>
  );
}
