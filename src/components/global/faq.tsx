import { AccordionHeader, AccordionTrigger } from "@radix-ui/react-accordion";

import { SectionHeader } from "@/components/layout/section-header";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";

import { IconPlus } from "@/assets/icons/plus";

import { FAQ_ITEMS } from "@/data/constant";

import { Button } from "../ui/button";

export const Faq = () => {
  return (
    <section aria-labelledby="faq-heading" className="mx-4 rounded-t-4xl bg-white py-12 md:mx-6 md:py-16 lg:py-20">
      <div className="container max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Question"
          description="We know choosing the right technology partner is a big decision. Here's everything you need to know about working with Direct Logic Systems."
          title="Your Questions, Answered"
          variant="secondary"
        />
        <Accordion
          aria-labelledby="faq-heading"
          className="mt-6 w-full space-y-2"
          collapsible
          defaultValue="3"
          type="single"
        >
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              className="rounded-md border bg-background px-3 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 md:px-4"
              key={item.id}
              value={item.id}
            >
              <AccordionHeader className="flex">
                <AccordionTrigger className="flex flex-1 items-center justify-between rounded-md py-2.5 text-left font-medium text-lg leading-6 outline-none transition-all focus-visible:ring-0 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  {item.title}
                  <IconPlus
                    aria-hidden="true"
                    className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="pb-2 text-base text-muted-foreground md:text-lg">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
          <div className="flex flex-1 items-center justify-between rounded-md border bg-background px-3 py-2.5 text-left font-medium text-lg leading-6 outline-none transition-all last:border-b focus-visible:ring-0 has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50 md:px-4">
            <p> Let's talk about your challenges and goals.</p>
            <Button>Get in touch</Button>
          </div>
        </Accordion>
      </div>
    </section>
  );
};
