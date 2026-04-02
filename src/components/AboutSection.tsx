import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { User, MapPin, GraduationCap } from "lucide-react";

const facts = [
  { icon: User, label: "18 anos" },
  { icon: MapPin, label: "Campinas, SP" },
  { icon: GraduationCap, label: "Técnico em Administração" },
];

const AboutSection = () => (
  <SectionWrapper id="sobre">
    <SectionTitle title="Sobre Mim" subtitle="Quem sou" />
    <div className="grid md:grid-cols-3 gap-4 mb-10">
      {facts.map((f) => (
        <div
          key={f.label}
          className="flex items-center gap-3 p-4 rounded-lg bg-secondary"
        >
          <f.icon className="w-5 h-5 text-primary shrink-0" />
          <span className="font-medium text-secondary-foreground">{f.label}</span>
        </div>
      ))}
    </div>
    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
      <p>
        Tenho 18 anos, sou de Campinas e concluí o Ensino Médio Técnico em Administração, 
        onde desenvolvi habilidades em organização de processos, controle de documentos e 
        planejamento. Atualmente curso Nutrição no período noturno, o que demonstra minha 
        capacidade de conciliar múltiplas responsabilidades.
      </p>
      <p>
        Sou uma pessoa organizada e disciplinada, com facilidade para seguir rotinas e 
        processos. Tenho interesse genuíno por ambientes produtivos e industriais, onde 
        posso aplicar minha atenção aos detalhes e meu comprometimento com prazos e qualidade. 
        Aprendo rápido e me adapto com facilidade a novas atividades e desafios.
      </p>
    </div>
  </SectionWrapper>
);

export default AboutSection;
