import { Cta } from "@/components/global/cta";
import { Faq } from "@/components/global/faq";

import { About, Hero, Portfolio, Services, Solutions, Testimonials } from "@/modules/home/sections";

export default function Home() {
  return (
    <main id="main-content" role="main">
      <Hero />

      <About />

      <Services />

      <Solutions />

      <Portfolio />

      <Testimonials />

      <Faq />

      <Cta />
    </main>
  );
}
