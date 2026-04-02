import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { GraduationCap, Award, BarChart3, FileSpreadsheet, Truck } from "lucide-react";

const courses = [
  { icon: FileSpreadsheet, name: "Excel", desc: "Planilhas e análise de dados" },
  { icon: Truck, name: "Logística", desc: "Fluxo e controle de materiais" },
  { icon: BarChart3, name: "Relatórios Financeiros", desc: "Análise e organização" },
];

const EducationSection = () => (
  <SectionWrapper id="formacao">
    <SectionTitle title="Formação e Cursos" subtitle="Educação" />
    <div className="grid lg:grid-cols-2 gap-10">
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
        <ul className="space-y-2 text-muted-foreground">
          <li>• Base em organização de processos</li>
          <li>• Conhecimento em controle e planejamento</li>
          <li>• Facilidade com números e dados</li>
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-primary" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            Cursos SENAI
          </h3>
        </div>
        <div className="space-y-4">
          {courses.map((c) => (
            <div key={c.name} className="flex items-center gap-4 p-4 rounded-lg bg-secondary">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{c.name}</p>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
