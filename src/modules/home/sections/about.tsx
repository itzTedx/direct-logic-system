import { SectionHeader } from "@/components/layout/section-header";
import { NumberCounter } from "@/components/ui/number-counter";

export const About = () => {
  return (
    <section aria-labelledby="about-heading" className="py-16 md:py-24 lg:py-32">
      <div className="container max-w-7xl">
        <SectionHeader
          badge="About Direct LS"
          description=" Direct Logic Systems LLC, based in Dubai, has empowered businesses for over 40 years with expert IT services,
          trading, and digital marketing - integrating the latest technology to help you stay ahead."
          title="Your Trusted Technology Partner Since 1978"
        />
      </div>
      <div className="container mt-12 max-w-7xl">
        <div className="grid gap-1 rounded-[calc(var(--radius-2xl)+var(--spacing)*1)] bg-accent p-1">
          <div className="grid grid-cols-3 gap-1">
            <div className="aspect-4/3 rounded-2xl bg-card" />
            <div className="aspect-4/3 rounded-2xl bg-card" />
            <div className="aspect-4/3 rounded-2xl bg-card" />
          </div>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-5 aspect-4/3 rounded-2xl bg-card" />
            <div className="col-span-7 h-full w-full rounded-2xl bg-card" />
          </div>
        </div>
      </div>
      <div
        aria-label="Company statistics"
        className="container mt-12 grid max-w-7xl grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6 lg:mt-24"
        role="list"
      >
        <div className="flex flex-col items-center justify-between text-center" role="listitem">
          <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">
            <NumberCounter suffix="+" value={45} />
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm">Years of Experience</p>
        </div>
        <div className="flex flex-col items-center justify-between text-center" role="listitem">
          <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">On-Site</h3>
          <p className="text-muted-foreground text-xs md:text-sm">Support in 2 Hours</p>
        </div>
        <div className="flex flex-col items-center justify-between text-center" role="listitem">
          <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">
            <NumberCounter suffix="+" value={200} />
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm">Satisfied Clients</p>
        </div>
        <div className="flex flex-col items-center justify-between text-center" role="listitem">
          <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-5xl">Global</h3>
          <p className="text-muted-foreground text-xs md:text-sm">Trading Partnerships</p>
        </div>
      </div>
    </section>
  );
};
