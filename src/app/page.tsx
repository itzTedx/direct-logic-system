import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";

import { About, Hero, Portfolio, Services, Solutions, Testimonials } from "@/modules/home/sections";
import { getCategoriesWithMetadata } from "@/modules/services/actions";

export default async function Home() {
  const categories = await getCategoriesWithMetadata();

  return (
    <main id="main-content" role="main">
      <Hero />

      <About />

      <Services categories={categories} />

      <Solutions />

      <Portfolio />

      <Testimonials />

      <Faq />

      <Cta />
    </main>
  );
}
