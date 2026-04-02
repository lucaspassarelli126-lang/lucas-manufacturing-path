import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "@/context/PreloaderContext";

const words = [
  "Proatividade",
  "Organização",
  "Trabalho em equipe",
  "Aprendizado contínuo",
  "Pensamento lógico",
  "Resolução de problemas",
  "Foco em resultados",
  "Construindo meu futuro na indústria...",
];

export const Preloader = () => {
  const { isActive } = usePreloader();
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [showSignature, setShowSignature] = useState(true);

  useEffect(() => {
    if (isActive) {
      setCurrentWordIndex(-1);
      setShowSignature(true);

      // Etapa 1: Assinatura "Lucas Patrick" por 0.8 segundos
      const signatureTimer = setTimeout(() => {
        setShowSignature(false);
        setCurrentWordIndex(0);
      }, 800);

      // Etapa 2: Ciclar pelas 8 palavras (restante de 4.2 segundos)
      const wordInterval = setInterval(() => {
        setCurrentWordIndex((prev) => {
          if (prev < words.length - 1) return prev + 1;
          return prev;
        });
      }, 525); // 8 palavras * 0.525s = 4.2s + 0.8s signature = 5 segundos exatos

      return () => {
        clearTimeout(signatureTimer);
        clearInterval(wordInterval);
      };
    }
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white font-display"
        >
          <div className="relative w-full max-w-md px-10 text-center">
            {/* Etapa 1: Assinatura */}
            <AnimatePresence mode="wait">
              {showSignature ? (
                <motion.div
                  key="signature"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-4xl md:text-5xl font-black uppercase tracking-tighter"
                >
                  Lucas <span className="text-primary italic">Patrick</span>
                </motion.div>
              ) : (
                <motion.div
                  key="words"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center"
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentWordIndex}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-white/80"
                    >
                      {words[currentWordIndex] || "Processando..."}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Barra de Progresso Industrial */}
            <div className="absolute -bottom-20 left-10 right-10 h-[2px] bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-primary shadow-[0_0_10px_rgba(230,57,70,0.8)]"
              />
            </div>
          </div>

          {/* Background subtle scanline effect */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
