import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Leaf, Code2, CheckCircle2, ArrowRight, Lightbulb, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const TypewriterText = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      variants={{
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.015,
          },
        },
      }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const projects = [
  {
    id: 1,
    title: "Liderança na Implementação de Horta Escolar",
    icon: Leaf,
    context: "Projeto desenvolvido no ambiente escolar com o objetivo de criar uma horta funcional do zero, exigindo organização, planejamento e execução prática em equipe.",
    actions: [
      "Assumi papel de liderança no projeto",
      "Estruturei o planejamento e divisão de tarefas",
      "Coordenei a equipe durante todas as etapas",
      "Acompanhei a execução garantindo organização e eficiência"
    ],
    results: [
      "Horta implementada com sucesso dentro do ambiente escolar",
      "Projeto concluído com colaboração eficiente da equipe",
      "Desenvolvimento de habilidades práticas de liderança e gestão"
    ],
    skills: ["Liderança", "Organização", "Planejamento", "Trabalho em equipe", "Execução de projetos"],
  },
  {
    id: 2,
    title: "Desenvolvimento de Sites para Negócios Locais",
    icon: Code2,
    context: "Iniciativa voltada à criação de soluções digitais para pequenos negócios, com foco em melhorar presença online e atrair mais clientes.",
    actions: [
      "Planejamento estratégico da estrutura dos sites",
      "Desenvolvimento de páginas modernas, responsivas e funcionais",
      "Organização de conteúdo com foco em clareza e conversão",
      "Aplicação de conceitos de experiência do usuário"
    ],
    results: [
      "Entrega de sites profissionais e funcionais",
      "Fortalecimento da presença digital de negócios locais",
      "Aplicação prática de tecnologia para resolução de problemas reais"
    ],
    skills: ["Desenvolvimento web", "HTML", "CSS", "Lógica de programação", "UX básico", "Pensamento estratégico"],
  }
];

const ProjectsSection = () => (
  <SectionWrapper id="projetos" className="bg-industrial-dark/50">
    <SectionTitle title="Projetos" subtitle="Iniciativa e Execução" />
    
    <div className="grid lg:grid-cols-2 gap-8 mt-12 w-full max-w-6xl mx-auto">
      {projects.map((project) => (
        <Card key={project.id} className="group overflow-hidden bg-secondary border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_-10px_rgba(230,57,70,0.2)]">
          <CardHeader className="space-y-4 pb-4 border-b border-border/30 bg-gradient-to-br from-primary/5 to-transparent relative">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mb-2 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(230,57,70,0.1)]">
              <project.icon className="w-7 h-7 text-primary" />
            </div>
            <CardTitle className="font-display text-2xl font-bold leading-tight">
              {project.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-6 flex-1 flex flex-col gap-6">
            {/* Context */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Lightbulb className="w-4 h-4" />
                <h4>Contexto do Projeto</h4>
              </div>
              <div className="text-muted-foreground text-sm leading-relaxed">
                <TypewriterText text={project.context} />
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <ArrowRight className="w-4 h-4" />
                <h4>Minha Atuação</h4>
              </div>
              <ul className="space-y-2">
                {project.actions.map((action, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                    <TypewriterText text={action} delay={idx * 0.1} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Target className="w-4 h-4" />
                <h4>Resultados Gerados</h4>
              </div>
              <ul className="space-y-2">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <TypewriterText text={result} delay={idx * 0.1} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags area */}
            <div className="pt-6 mt-auto border-t border-border/30">
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
