import { AccordionHeader, AccordionTrigger } from "@radix-ui/react-accordion";

import { SectionHeader } from "@/components/layout/section-header";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NumberCounter } from "@/components/ui/number-counter";

import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { Client1, Client2 } from "@/assets/brands";
import { IconArrowLeft, IconArrowRight, IconArrowUpRight } from "@/assets/icons/arrows";
import { IconPlus } from "@/assets/icons/plus";
import { IconStar } from "@/assets/icons/star";
import { IconDirectWatermark } from "@/assets/logo";

import { FAQ_ITEMS, SERVICES } from "@/data/constant";

export default function Home() {
  return (
    <main>
      <header className="min-h-svh bg-gradient-to-b from-[#E5CAFF]/30 to-transparent">
        <BackgroundLeft className="top-0 left-0 z-1" />
        <BackgroundRight className="top-0 right-0 z-1" />
        <div className="relative z-10 ml-auto grid max-w-[90rem] grid-cols-2 items-center gap-4 pt-32">
          <div className="container max-w-3xl">
            <Badge>
              <BadgeDot />
              Your Complete Technology & Trading Partner
            </Badge>
            <h1 className="mt-3 font-bold text-5xl leading-[1.15]">
              Making Technology
              <br /> Work for You <br />
              <span className="text-primary">Faster, Smarter, Better.</span>
            </h1>
            <p className="mt-3 mb-6 text-balance text-lg text-muted-foreground leading-relaxed">
              From IT infrastructure to trading solutions, software, and digital marketing, we deliver innovation,
              reliability, and growth for your business.
            </p>
            <div className="flex items-center gap-4">
              <Button>Talk to us</Button>
              <Button variant="outline">View Portfolio</Button>
            </div>
          </div>
          <div className="aspect-7/5 rounded-s-3xl bg-white ring-8 ring-white/40" />
        </div>
        <section className="container mt-14 max-w-7xl text-center">
          <h2>Trusted by 200+ Businesses in the UAE</h2>
          <ul className="mx-auto mt-6 flex max-w-fit flex-wrap items-center divide-x [&>li]:px-6">
            <li>
              <Client1 />
            </li>
            <li>
              <Client2 />
            </li>
            <li>
              <Client1 />
            </li>
            <li>
              <Client2 />
            </li>
            <li>
              <Client1 />
            </li>
            <li>
              <Client2 />
            </li>
          </ul>
        </section>
      </header>
      <section className="py-32">
        <div className="container max-w-7xl">
          <SectionHeader
            badge="About Direct LS"
            description=" Direct Logic Systems LLC, based in Dubai, has empowered businesses for over 40 years with expert IT services,
        trading, and digital marketing - integrating the latest technology to help you stay ahead."
            title="Your Trusted Technology Partner Since 1978"
          />
          <div className="mt-24 grid grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-4xl text-primary">
                <NumberCounter suffix="+" value={45} />
              </h3>
              <p className="text-muted-foreground text-sm">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-4xl text-primary">On-Site</h3>
              <p className="mt-3 text-muted-foreground text-sm">Support in 2 Hours</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-4xl text-primary">
                <NumberCounter suffix="+" value={200} />
              </h3>
              <p className="text-muted-foreground text-sm">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-4xl text-primary">Global</h3>
              <p className="mt-3 text-muted-foreground text-sm">Trading Partnerships</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container max-w-7xl space-y-12 py-32">
        <SectionHeader
          badge="What we offer"
          description="Expanding Possibilities. Being the leading IT service provider in Dubai, UAE portfolio of our services are meant to offer you a comprehensive IT support services in Dubai, UAE."
          title="Our Services"
        />
        <div className="grid grid-cols-3 gap-6">
          <Card>
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
              <Button>Explore</Button>
              <IconArrowUpRight />
            </CardFooter>
          </Card>
        </div>
        <Button>Explore More</Button>
      </section>
      <section className="container max-w-7xl py-32">
        <h2 className="text-center text-4xl">
          Everything you'd <span className="text-primary">need</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-muted-foreground">
          Direct Logic Systems LLC, based in Dubai, empowers businesses with innovative IT, trading, and digital
          marketing services. Our mission is to seamlessly integrate technology that drives your growth and security.
        </p>
        <div className="mt-12 grid grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-32">
        <div className="container max-w-7xl">
          <SectionHeader
            badge="Portfolio"
            description="From complex IT infrastructure to cutting-edge digital campaigns, see how we’ve helped clients achieve lasting success."
            title="Our Work Speaks for Itself"
          />
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div className="aspect-4/3 rounded-2xl bg-red-400" key={service.id} />
          ))}
        </div>
      </section>
      <section className="container max-w-7xl py-32">
        <SectionHeader
          badge="Clients & Testimonials"
          description="We’re proud to partner with diverse clients across industries, delivering tailored solutions and exceptional service."
          title="Trusted by 200+ Leading Businesses"
        />
        <div className="mt-12 grid grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <CardHeader className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IconStar className="size-5 shrink-0 text-yellow-500" key={index} />
                ))}
              </CardHeader>
              <p>
                Direct LS is one of the best service providers our organization has had the pleasure of using. As an
                organization, we needed an entire overhaul to our out dated computer. We are pleased and confident in
                extending our highest recommendation for Direct LS.
              </p>
            </CardContent>
            <CardFooter>
              <div>
                <h3>Stephen Shaw</h3>
                <p>Surrey</p>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-6 space-x-3">
          <Button size="icon" variant="outline">
            <IconArrowLeft />
          </Button>
          <Button size="icon" variant="outline">
            <IconArrowRight />
          </Button>
        </div>
      </section>
      <section className="mx-6 rounded-t-4xl bg-white py-20">
        <div className="container max-w-7xl">
          <SectionHeader
            badge="Frequently Asked Question"
            description="We know choosing the right technology partner is a big decision. Here’s everything you need to know about working with Direct Logic Systems."
            title="Your Questions, Answered"
          />
          <Accordion className="mt-6 w-full space-y-2" collapsible defaultValue="3" type="single">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                className="rounded-md border bg-background px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50"
                key={item.id}
                value={item.id}
              >
                <AccordionHeader className="flex">
                  <AccordionTrigger className="flex flex-1 items-center justify-between rounded-md py-2 text-left font-semibold text-[15px] leading-6 outline-none transition-all focus-visible:ring-0 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                    {item.title}
                    <IconPlus
                      aria-hidden="true"
                      className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                    />
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent className="pb-2 text-muted-foreground">{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="relative mx-6 rounded-b-4xl bg-gradient-to-b from-50% from-white to-50% to-transparent py-20">
        <div className="container relative inset-shadow-[0_1px_42px_0] inset-shadow-white/25 max-w-7xl space-y-6 overflow-hidden rounded-4xl bg-radial-[at_50%_0%] from-sky-400 to-primary py-20 text-center text-background">
          <Badge className="relative z-10">
            <BadgeDot />
            What we offer
          </Badge>
          <h2 className="relative z-10 text-balance font-bold text-5xl leading-snug">
            Power Your Business with <br />
            40+ Years of Proven Tech Expertise
          </h2>
          <p className="relative z-10 mx-auto max-w-2xl text-balance text-lg leading-relaxed">
            Your business deserves more than just technology - it deserves the right strategy, execution, and innovation
            to thrive in a competitive market.
          </p>
          <Button>Get know more</Button>
          <IconDirectWatermark className="-top-1/2 -left-12 absolute text-white/8" />
          <IconDirectWatermark className="-bottom-1/2 -right-20 -scale-x-90 absolute text-white/8" />
        </div>
      </section>
    </main>
  );
}
