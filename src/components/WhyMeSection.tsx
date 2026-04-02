import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Check } from "lucide-react";

const points = [
  "Tenho disciplina para rotina de produção",
  "Já tenho experiência com organização e controle",
  "Aprendo rápido e me adapto fácil",
  "Tenho interesse real pela área industrial",
  "Quero crescer dentro da empresa",
];

const WhyMeSection = () => (
  <SectionWrapper id="por-que-eu" dark>
    <SectionTitle title="Por Que Eu Devo Ser Escolhido?" subtitle="Diferencial" light />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {points.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="flex items-start gap-3 p-5 rounded-xl border border-primary/20 bg-primary/5"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-primary-foreground font-medium leading-relaxed">{p}</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhyMeSection;
