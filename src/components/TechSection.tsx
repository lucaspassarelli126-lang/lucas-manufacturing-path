import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Monitor, Bot, Globe, Cog } from "lucide-react";

const techs = [
  { icon: Monitor, name: "Excel & Pacote Office", desc: "Análise de dados, planilhas avançadas e relatórios — ferramentas essenciais para otimização de processos." },
  { icon: Bot, name: "Ferramentas Digitais e IA", desc: "Utilizo inteligência artificial como apoio para resolver problemas e aumentar produtividade." },
  { icon: Globe, name: "Criação de Sites", desc: "Capacidade de criar soluções digitais, demonstrando mentalidade moderna e proatividade." },
  { icon: Cog, name: "Automação Básica", desc: "Interesse em automatizar tarefas repetitivas, buscando eficiência nos processos." },
];

const TechSection = () => (
  <SectionWrapper id="tecnologia">
    <SectionTitle title="Tecnologia e Diferencial" subtitle="Digital" />
    <div className="grid sm:grid-cols-2 gap-6">
      {techs.map((t) => (
        <div key={t.name} className="group p-6 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <t.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{t.name}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default TechSection;
