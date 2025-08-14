import { SectionHeader } from "@/components/layout/section-header";
import { NumberCounter } from "@/components/ui/number-counter";

export const About = () => {
  return (
    <section aria-labelledby="about-heading" className="px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32">
      <div className="container max-w-7xl">
        <SectionHeader
          badge="About Direct LS"
          description=" Direct Logic Systems LLC, based in Dubai, has empowered businesses for over 40 years with expert IT services,
          trading, and digital marketing - integrating the latest technology to help you stay ahead."
          title="Your Trusted Technology Partner Since 1978"
        />
        <div
          aria-label="Company statistics"
          className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6 lg:mt-24"
          role="list"
        >
          <div className="text-center" role="listitem">
            <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-4xl">
              <NumberCounter suffix="+" value={45} />
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">Years of Experience</p>
          </div>
          <div className="text-center" role="listitem">
            <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-4xl">On-Site</h3>
            <p className="mt-1 text-muted-foreground text-xs md:mt-3 md:text-sm">Support in 2 Hours</p>
          </div>
          <div className="text-center" role="listitem">
            <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-4xl">
              <NumberCounter suffix="+" value={200} />
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">Satisfied Clients</p>
          </div>
          <div className="text-center" role="listitem">
            <h3 className="font-bold text-2xl text-primary md:text-3xl lg:text-4xl">Global</h3>
            <p className="mt-1 text-muted-foreground text-xs md:mt-3 md:text-sm">Trading Partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
};
