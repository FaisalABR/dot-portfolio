import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/lib/constants";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQ_DATA.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="text-lg text-blue-primary">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-blue-900">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
