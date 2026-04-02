import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { SmokeBackground } from "./spooky-smoke-animation";

export const HeroFuturistic = () => {
  return (
    <div className="relative min-h-screen flex w-full overflow-hidden bg-black items-center justify-center">
      {/* Background Layer 1: Smoke Animation (Safe & Stable) */}
      <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
        <SmokeBackground smokeColor="#e63946" />
      </div>
      
      {/* Background Layer 2: Industrial red glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-black z-0 pointer-events-none" />

      {/* Background Layer 3: Grid Overlay for Tech feel */}
      <div className="absolute inset-0 industrial-grid z-0 opacity-40 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/30 rounded-full bg-black/60 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              Candidato — Aprendiz de Manufatura 2026
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1] uppercase tracking-tighter"
        >
          Lucas <span className="text-primary italic">Patrick</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-xl md:text-2xl font-bold text-white/90 mb-8 tracking-widest uppercase border-y border-white/10 py-2 inline-block mx-auto"
        >
          Organização, disciplina e vontade de crescer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Jovem com formação técnica em Administração, focado em ingressar na Bosch
          para elevar os padrões de manufatura através da inovação e processos eficientes.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1 }}
           className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button variant="destructive" size="lg" className="px-10 py-8 text-xl rounded-none font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(230,57,70,0.4)]" asChild>
            <a href="#sobre">Ver meu perfil</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white/20 text-white rounded-none px-10 py-8 text-xl font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all" asChild>
             <a href="#contato">Entrar em contato</a>
          </Button>
        </motion.div>
      </div>

       {/* Scroll indicator with pulse */}
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Scroll</span>
          <ChevronDown className="w-8 h-8 text-primary shadow-sm" />
        </motion.div>
      </motion.div>

       {/* Red accent lines on the corners */}
       <div className="absolute top-0 left-0 w-32 h-[1px] bg-primary/40" />
       <div className="absolute top-0 left-0 w-[1px] h-32 bg-primary/40" />
       <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-primary/40" />
       <div className="absolute bottom-0 right-0 w-[1px] h-32 bg-primary/40" />
    </div>
  );
};

export default HeroFuturistic;
