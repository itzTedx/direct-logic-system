import { SectionHeader } from "@/components/layout/section-header";

import { SOLUTIONS } from "@/data/constant";

export const Portfolio = () => {
  return (
    <section aria-labelledby="portfolio-heading" className="px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32">
      <div className="container max-w-7xl">
        <SectionHeader
          badge="Portfolio"
          description="From complex IT infrastructure to cutting-edge digital campaigns, see how we've helped clients achieve lasting success."
          title="Our Work Speaks for Itself"
        />
      </div>
      <div
        aria-label="Portfolio projects"
        className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        role="list"
      >
        {SOLUTIONS.map((service) => (
          <div
            aria-label={`Portfolio project: ${service.title}`}
            className="aspect-4/3 rounded-2xl bg-red-400"
            key={service.id}
            role="listitem"
          />
        ))}
      </div>
    </section>
  );
};
