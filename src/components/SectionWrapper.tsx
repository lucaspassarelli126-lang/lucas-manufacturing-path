import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const SectionWrapper = ({ children, className = "", id, dark }: SectionWrapperProps) => (
  <section
    id={id}
    className={`section-padding ${dark ? "bg-industrial text-primary-foreground industrial-grid" : "bg-background text-foreground"} ${className}`}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto"
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
