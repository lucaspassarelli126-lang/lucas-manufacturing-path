import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { TrendingUp } from "lucide-react";

const FutureSection = () => (
  <SectionWrapper id="visao">
    <SectionTitle title="Visão de Futuro" subtitle="Objetivos" />
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative p-8 md:p-12 rounded-2xl bg-secondary border border-border group overflow-hidden"
    >
      {/* Premium Floating Icon with Scroll + Idle + Hover effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { 
            duration: 0.8, 
            delay: 0.2, 
            ease: "easeOut" 
          } 
        }}
        animate={{ 
          y: [0, -4, 0],
        }}
        transition={{ 
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ 
          scale: 1.1,
          filter: "brightness(1.2)",
          transition: { duration: 0.3 }
        }}
        viewport={{ once: true }}
        className="inline-block mb-6 cursor-pointer"
      >
        <TrendingUp className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(230,57,70,0.3)] transition-all duration-300" />
      </motion.div>

      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-3xl">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Meu objetivo é <strong className="text-foreground border-b-2 border-primary/20 pb-0.5">crescer dentro da Bosch</strong>, 
          aproveitando cada etapa como aprendiz para absorver conhecimento sobre processos 
          industriais, metodologias de qualidade e cultura organizacional.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Quero desenvolver <strong className="text-foreground border-b-2 border-primary/20 pb-0.5">habilidades técnicas sólidas</strong> na 
          área de manufatura, entender o funcionamento completo da linha de produção e, 
          com o tempo, me tornar um profissional de referência na indústria.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Busco construir uma <strong className="text-foreground border-b-2 border-primary/20 pb-0.5">carreira sólida e de longo prazo</strong>, 
          contribuindo com resultados reais e crescendo junto com a empresa.
        </motion.p>
      </div>

      {/* Subtle red accent line in the corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 rounded-full" />
    </motion.div>
  </SectionWrapper>
);

export default FutureSection;
