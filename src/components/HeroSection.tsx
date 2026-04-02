import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-dark/80 via-industrial-dark/70 to-industrial-dark/95" />
      <div className="absolute inset-0 industrial-grid" />
    </div>

    {/* Red accent line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/30 rounded-full">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary tracking-wide">
            Candidato — Aprendiz de Manufatura 2026
          </span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-[1.1]"
      >
        Lucas{" "}
        <span className="text-gradient-red">Passarelli</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="font-display text-xl md:text-2xl font-medium text-primary-foreground/80 mb-4 tracking-wide"
      >
        Organização, disciplina e vontade de crescer na indústria
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Jovem com formação técnica em Administração, buscando oportunidade na Bosch
        para desenvolver habilidades em manufatura e contribuir com processos produtivos
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="hero" size="lg" asChild>
          <a href="#sobre">Ver meu perfil</a>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <a href="#contato">Entrar em contato</a>
        </Button>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
