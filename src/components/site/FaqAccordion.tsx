import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <Reveal>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-semibold hover:text-primary hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
