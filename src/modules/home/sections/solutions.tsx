import { SERVICES } from "@/data/constant";

export const Solutions = () => {
  return (
    <section
      aria-labelledby="solutions-heading"
      className="container max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-32"
    >
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl" id="solutions-heading">
        Everything you'd <span className="text-primary">need</span>
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
        Direct Logic Systems LLC, based in Dubai, empowers businesses with innovative IT, trading, and digital marketing
        services. Our mission is to seamlessly integrate technology that drives your growth and security.
      </p>
      <div
        aria-label="Technology solutions"
        className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
        role="list"
      >
        {SERVICES.map((service) => (
          <div className="p-4 md:p-6" key={service.id} role="listitem">
            <h3 className="mb-2 font-semibold text-lg md:text-xl">{service.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
