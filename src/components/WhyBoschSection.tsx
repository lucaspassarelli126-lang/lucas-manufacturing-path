import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Factory, Lightbulb, Wrench, Rocket } from "lucide-react";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/interfaces-accordion";

const reasons = [
  { 
    value: "item-1",
    icon: Factory, 
    title: "Processos Produtivos de Ponta a Ponta",
    content: "Possuo grande interesse em entender os processos produtivos da indústria na sua totalidade de execução."
  },
  { 
    value: "item-2",
    icon: Lightbulb, 
    title: "Fabricação e Alta Qualidade",
    content: "Tenho muita curiosidade sobre como produtos de alta qualidade são elaborados e fabricados."
  },
  { 
    value: "item-3",
    icon: Wrench, 
    title: "Aprender na Prática",
    content: "Sinto muita vontade de aprender na prática e desenvolver novas habilidades técnicas."
  },
  { 
    value: "item-4",
    icon: Rocket, 
    title: "Inovação e Referência Global",
    content: "Identificação forte com empresas inovadoras e referências globais de mercado como a Bosch."
  },
];

const WhyBoschSection = () => (
  <SectionWrapper id="por-que-bosch" dark>
    <SectionTitle title="Por Que Manufatura na Bosch?" subtitle="Motivação" light />
    
    <div className="flex justify-center mt-8">
      <Accordion type="single" collapsible className="w-full max-w-3xl">
        {reasons.map((r) => (
          <AccordionItem key={r.value} value={r.value}>
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-primary-foreground">{r.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {r.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </SectionWrapper>
);

export default WhyBoschSection;
