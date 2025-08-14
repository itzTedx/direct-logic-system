import { AccordionHeader, AccordionTrigger } from "@radix-ui/react-accordion";

import { SectionHeader } from "@/components/layout/section-header";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";

import { IconPlus } from "@/assets/icons/plus";

import { FAQ_ITEMS } from "@/data/constant";

export const Faq = () => {
  return (
    <section aria-labelledby="faq-heading" className="mx-4 rounded-t-4xl bg-white py-12 md:mx-6 md:py-16 lg:py-20">
      <div className="container max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          badge="Frequently Asked Question"
          description="We know choosing the right technology partner is a big decision. Here's everything you need to know about working with Direct Logic Systems."
          title="Your Questions, Answered"
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
                <AccordionTrigger className="flex flex-1 items-center justify-between rounded-md py-2 text-left font-semibold text-sm leading-6 outline-none transition-all focus-visible:ring-0 md:text-[15px] [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  {item.title}
                  <IconPlus
                    aria-hidden="true"
                    className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                  />
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="pb-2 text-muted-foreground text-sm md:text-base">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
