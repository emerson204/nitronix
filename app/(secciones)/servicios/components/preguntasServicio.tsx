import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicioPreguntas } from "@/data/servicioPreguntasData";

export default function PreguntasServicio() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {servicioPreguntas.map(({ id, pregunta, respuesta, item }) => (
        <AccordionItem key={id} value={item} className="mb-5">
          <AccordionTrigger className="text-white text-lg">
            {pregunta}
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 ml-4 ">
            {respuesta}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
