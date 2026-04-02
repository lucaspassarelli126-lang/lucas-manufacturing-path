import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Settings, Eye, Clock, Users, Zap, ShieldCheck } from "lucide-react";

const skills = [
  { icon: Settings, name: "Organização", desc: "Estruturação de processos no ambiente industrial" },
  { icon: Eye, name: "Atenção aos Detalhes", desc: "Inspeção, conferência e controle de qualidade" },
  { icon: Clock, name: "Disciplina", desc: "Cumprimento de rotinas e padrões rigorosos" },
  { icon: Users, name: "Trabalho em Equipe", desc: "Colaboração eficiente em linhas de produção" },
  { icon: Zap, name: "Aprendizado Rápido", desc: "Absorção ágil de novos processos e técnicas" },
  { icon: ShieldCheck, name: "Comprometimento", desc: "Foco em qualidade e melhoria contínua" },
];

const SkillsSection = () => (
  <SectionWrapper id="habilidades" dark>
    <SectionTitle title="Habilidades" subtitle="Competências" light />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="group p-6 rounded-xl border border-primary/10 bg-primary/5 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
            <s.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">
            {s.name}
          </h3>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
