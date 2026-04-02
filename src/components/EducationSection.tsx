import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { GraduationCap, Award, BarChart3, FileSpreadsheet, Truck } from "lucide-react";

import { FeatureCarousel } from "./ui/feature-carousel";

const courses = [
  { icon: FileSpreadsheet, name: "Excel", desc: "Planilhas e análise de dados" },
  { icon: Truck, name: "Logística", desc: "Fluxo e controle de materiais" },
  { icon: BarChart3, name: "Relatórios Financeiros", desc: "Análise e organização" },
];

const courseImages = [
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=60',
    alt: 'Planilhas e análise de dados',
    label: 'Excel',
    desc: 'Elaboração de planilhas e análise de dados.'
  },
  {
    src: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c154cb?w=900&auto=format&fit=crop&q=60',
    alt: 'Fluxo e controle de materiais',
    label: 'Logística',
    desc: 'Práticas logísticas e controle de fluxo de materiais.'
  },
  {
    src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop&q=60',
    alt: 'Análise e organização financeira',
    label: 'Relatórios Financeiros',
    desc: 'Bases contábeis e consolidação de relatórios.'
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60',
    alt: 'Organização de processos',
    label: 'Administração',
    desc: 'Fundamentos de gestão e administração de empresas.'
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=60',
    alt: 'Computador e pacote office',
    label: 'Informática / Pacote Office',
    desc: 'Domínio prático de ferramentas fundamentais de escritório.'
  },
  {
    src: 'https://images.unsplash.com/photo-1546410531-bea5aadcb6ce?w=900&auto=format&fit=crop&q=60',
    alt: 'Estudos e idiomas',
    label: 'Inglês Básico',
    desc: 'Compreensão de leitura e comunicação fundamental.'
  }
];

const EducationSection = () => (
  <SectionWrapper id="formacao">
    <SectionTitle title="Formação e Cursos" subtitle="Educação" />
    <div className="grid lg:grid-cols-1 gap-10">
      <div className="p-8 rounded-xl bg-secondary border border-border">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Técnico em Administração
            </h3>
            <p className="text-sm text-muted-foreground">Ensino Médio Técnico</p>
          </div>
        </div>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>• Base em organização de processos</li>
          <li>• Conhecimento em controle e planejamento</li>
          <li>• Facilidade com números e dados</li>
        </ul>
      </div>

      <div className="w-full">
         <FeatureCarousel 
            title={
              <>
                Meus <span className="text-gradient-red">Cursos</span>
              </>
            }
            subtitle="Conhecimentos técnicos adquiridos no SENAI e em outras formações."
            images={courseImages}
            className="bg-transparent py-4"
         />
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
