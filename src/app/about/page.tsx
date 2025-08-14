import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { IconHands, IconHeart, IconInnovation } from "@/assets/icons/values";
import { IconBulb, IconChartUp, IconHandshake, IconStarSparkle, IconUser, IconWorld } from "@/assets/icons/visions";

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
            <Badge className="mx-auto" variant="secondary">
              <BadgeDot />
              Our Journey
            </Badge>
            <h2 className="mt-4 font-medium text-2xl">
              Empowering Growth, Building Trust – shaping solutions that help businesses thrive.
            </h2>
            <p className="mt-3 whitespace-break-spaces text-lg text-muted-foreground">
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
      <section className="container max-w-7xl py-20">
        <SectionHeader
          badge="Values"
          description="Ethics you can count on—anytime, at Direct Logic Systems."
          title="Ethics first, and second"
        />
        <div className="grid grid-cols-3 gap-12 py-12 text-center">
          <div className="flex flex-col items-center gap-2">
            <IconHands className="h-20 w-20" />
            <h3 className="font-medium text-2xl">Integrity First</h3>
            <p className="text-muted-foreground">
              We believe trust is earned through honesty and transparency. Every decision, project, and solution is
              built on a foundation of ethical responsibility.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconHeart className="h-20 w-20" />
            <h3 className="font-medium text-2xl">Detail Every Excellence in</h3>
            <p className="text-muted-foreground">
              From planning to delivery, we go beyond meeting standards—we set them. Quality is not just our goal; it’s
              our promise.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconInnovation className="h-20 w-20" />
            <h3 className="font-medium text-2xl">Innovation with Impact</h3>
            <p className="text-muted-foreground">
              We embrace forward-thinking solutions that solve real problems, creating lasting value for our clients and
              their businesses.
            </p>
          </div>
        </div>
      </section>
      <section className="container max-w-7xl py-20">
        <SectionHeader
          badge="Guiding Principles"
          description="We aim to deliver innovative, reliable tech solutions that help businesses thrive. Guided by integrity and a passion for excellence, we work toward a future where technology empowers growth and lasting success."
          title="Mission & Vision That Drive Us Forward"
        />
        <div className="relative mt-12">
          <Card>
            <CardHeader className="px-2 pt-1.5">
              <CardTitle className="text-base">
                Our Mission{" "}
                <span className="font-normal text-muted-foreground"> — Empowering Businesses Through Technology </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-pretty text-muted-foreground">
                To empower businesses with smart, dependable technology that simplifies complexity, boosts efficiency,
                and unlocks new opportunities for success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <IconUser className="size-5 text-primary" />
                  <h3>Client Satisfaction First</h3>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <p className="text-muted-foreground">We work for 100% client satisfaction.</p>
                </li>
                <li className="flex items-center gap-3">
                  <IconBulb className="size-5 text-primary" />
                  <h3>High-Quality IT Solutions</h3>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <p className="text-muted-foreground">Deliver sustainable, cutting-edge IT services across UAE.</p>
                </li>
                <li className="flex items-center gap-3">
                  <IconHandshake className="size-5 text-primary" />
                  <h3>Integrity & Leadership</h3>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <p className="text-muted-foreground">Build a reputation for reliability and ethical service.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="ml-6 h-12 w-px border border-dashed" />
          <Card>
            <CardHeader className="px-2 pt-1.5">
              <CardTitle className="text-base">
                Our Vision{" "}
                <span className="font-normal text-muted-foreground"> — Shaping the Future of Digital Solutions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-pretty text-muted-foreground">
                To be the go-to partner for innovative business solutions, recognized for delivering measurable results,
                building trust, and fostering long-term relationships with our clients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <IconStarSparkle className="size-5 text-primary" />
                  <h3>Innovation at Its Best</h3>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <p className="text-muted-foreground">Inspire teams to provide extraordinary, innovative solutions.</p>
                </li>
                <li className="flex items-center gap-3">
                  <IconWorld className="size-5 text-primary" />
                  <h3>Trusted Partnerships</h3>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <p className="text-muted-foreground">Nurture strong, reliable relationships with our clients.</p>
                </li>
                <li className="flex items-center gap-3">
                  <IconChartUp className="size-5 text-primary" />
                  <h3>Leadership in IT</h3>
                  <span className="size-1 rounded-full bg-muted-foreground/50" />
                  <p className="text-muted-foreground">
                    Grow as a leading IT company, driving progress and efficiency.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <Faq />
      <Cta />
    </main>
  );
}
