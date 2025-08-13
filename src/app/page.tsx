import { BackgroundLeft, BackgroundRight } from "@/assets/background";
import { Client1, Client2 } from "@/assets/brands";
import { Badge, BadgeDot } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
          <div className="grid grid-cols-2 items-center gap-4">
            <div>
              <Badge>
                <BadgeDot />
                About Direct LS
              </Badge>
              <h2 className="mt-4 text-pretty font-medium text-3xl">Your Trusted Technology Partner Since 1978</h2>
            </div>
            <p className="text-balance text-lg">
              Direct Logic Systems LLC, based in Dubai, has empowered businesses for over 40 years with expert IT
              services, trading, and digital marketing - integrating the latest technology to help you stay ahead.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
