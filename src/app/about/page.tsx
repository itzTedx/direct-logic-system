import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { Badge, BadgeDot } from "@/components/ui/badge";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconHands, IconHeart, IconInnovation } from "@/assets/icons/values";

export default function AboutPage() {
  return (
    <main>
      <BackgroundLeft aria-hidden="true" className="top-0 left-0 z-1" />
      <BackgroundRight aria-hidden="true" className="top-0 right-0 z-1" />
      <div className="bg-gradient-to-b from-[#E5CAFF]/30 to-transparent pt-20">
        <header className="container relative z-10 max-w-5xl py-12">
          <Badge>
            <BadgeDot />
            About DirectLS
          </Badge>
          <h1 className="mt-4 text-pretty font-bold text-6xl">Empowering Businesses Through Technology Since 1978</h1>
          <p className="mt-4 max-w-3xl text-pretty text-lg">
            Delivering end-to-end IT services, trading solutions, and digital innovations that empower businesses to
            operate smarter, faster, and more securely.
          </p>
        </header>
      </div>
      <section className="container max-w-5xl">
        <div className="rounded-[calc(var(--radius-3xl)+var(--spacing)_*_2)] bg-gradient-to-b from-primary to-75% to-transparent p-2">
          <div className="rounded-3xl bg-card p-12">
            <h2 className="mb-2 font-medium text-2xl text-primary">Our Journey</h2>
            <p className="whitespace-break-spaces text-lg">
              Direct Logic Systems LLC (DLS), headquartered in Dubai, UAE, has been a trusted partner for businesses for
              over 45 years. We provide end-to-end IT services, trading solutions, and digital services, helping
              organizations operate smarter, scale faster, and stay secure.
              <br />
              <br />
              Our mission is simple: to make technology work for you. From robust IT infrastructure and network security
              to cutting-edge software and digital marketing, we deliver solutions that integrate seamlessly with your
              business environment.
              <br />
              <br />
              Founded in 1978, Direct LS started as a dedicated IT service provider in Dubai. Over the decades, we
              expanded our capabilities to include trading solutions and digital services, evolving into a full-service
              technology partner for companies across the UAE and beyond.
            </p>
          </div>
        </div>
      </section>
      <section className="container max-w-7xl py-20 text-center">
        <Badge className="mx-auto">
          <BadgeDot />
          Values
        </Badge>
        <h2 className="mt-4 font-medium text-5xl">Ethics first, and second</h2>
        <p className="mt-3 text-lg text-muted-foreground">Ethics you can count on—anytime, at Direct Logic Systems.</p>
        <div className="grid grid-cols-3 gap-6 py-12">
          <div className="flex flex-col items-center gap-2">
            <IconHands className="h-20 w-20" />
            <h3 className="font-medium text-2xl">Integrity First</h3>
            <p>
              We believe trust is earned through honesty and transparency. Every decision, project, and solution is
              built on a foundation of ethical responsibility.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconHeart className="h-20 w-20" />
            <h3 className="font-medium text-2xl">Detail Every Excellence in</h3>
            <p>
              From planning to delivery, we go beyond meeting standards—we set them. Quality is not just our goal; it’s
              our promise.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconInnovation className="h-20 w-20" />
            <h3 className="font-medium text-2xl">Innovation with Impact</h3>
            <p>
              We embrace forward-thinking solutions that solve real problems, creating lasting value for our clients and
              their businesses.
            </p>
          </div>
        </div>
      </section>
      <Faq />
      <Cta />
    </main>
  );
}
