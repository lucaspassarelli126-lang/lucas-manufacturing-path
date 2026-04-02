import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Factory, Lightbulb, Wrench, Rocket } from "lucide-react";

const reasons = [
  { icon: Factory, text: "Interesse em entender processos produtivos de ponta a ponta" },
  { icon: Lightbulb, text: "Curiosidade sobre como produtos de alta qualidade são fabricados" },
  { icon: Wrench, text: "Vontade de aprender na prática e desenvolver habilidades técnicas" },
  { icon: Rocket, text: "Identificação com empresas inovadoras e referências globais como a Bosch" },
];

const WhyBoschSection = () => (
  <SectionWrapper id="por-que-bosch" dark>
    <SectionTitle title="Por Que Manufatura na Bosch?" subtitle="Motivação" light />
    <div className="space-y-6">
      {reasons.map((r, i) => (
        <div key={i} className="flex items-start gap-5 p-5 rounded-xl border border-primary/10 bg-primary/5">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
            <r.icon className="w-6 h-6 text-primary" />
          </div>
          <p className="text-primary-foreground/80 leading-relaxed text-lg">{r.text}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhyBoschSection;
