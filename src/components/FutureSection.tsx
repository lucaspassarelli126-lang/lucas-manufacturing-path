import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { TrendingUp } from "lucide-react";

const FutureSection = () => (
  <SectionWrapper id="visao">
    <SectionTitle title="Visão de Futuro" subtitle="Objetivos" />
    <div className="relative p-8 md:p-12 rounded-2xl bg-secondary border border-border">
      <TrendingUp className="w-10 h-10 text-primary mb-6" />
      <div className="space-y-4 text-muted-foreground leading-relaxed text-lg max-w-3xl">
        <p>
          Meu objetivo é <strong className="text-foreground">crescer dentro da Bosch</strong>, 
          aproveitando cada etapa como aprendiz para absorver conhecimento sobre processos 
          industriais, metodologias de qualidade e cultura organizacional.
        </p>
        <p>
          Quero desenvolver <strong className="text-foreground">habilidades técnicas sólidas</strong> na 
          área de manufatura, entender o funcionamento completo da linha de produção e, 
          com o tempo, me tornar um profissional de referência na indústria.
        </p>
        <p>
          Busco construir uma <strong className="text-foreground">carreira sólida e de longo prazo</strong>, 
          contribuindo com resultados reais e crescendo junto com a empresa.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default FutureSection;
