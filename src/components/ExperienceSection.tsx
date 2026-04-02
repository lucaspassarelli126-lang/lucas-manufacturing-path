import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Briefcase, CheckCircle2 } from "lucide-react";

const activities = [
  "Organização de processos e documentos",
  "Controle básico de estoque",
  "Conferência de mercadorias com atenção aos detalhes",
  "Apoio em rotinas operacionais diárias",
  "Atendimento ao cliente com responsabilidade",
];

const transferable = [
  "Organização",
  "Responsabilidade",
  "Atenção aos detalhes",
  "Rotina operacional",
];

const ExperienceSection = () => (
  <SectionWrapper id="experiencia" dark>
    <SectionTitle title="Experiência Prática" subtitle="Trajetória" light />
    <div className="grid lg:grid-cols-2 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-primary-foreground">
              Auxiliar Administrativo
            </h3>
            <p className="text-sm text-primary-foreground/60">Minimercado</p>
          </div>
        </div>
        <ul className="space-y-3">
          {activities.map((a) => (
            <li key={a} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-primary-foreground/80">{a}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-primary mb-6 uppercase tracking-wider">
          Habilidades Transferíveis para a Indústria
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {transferable.map((t) => (
            <div
              key={t}
              className="p-4 rounded-lg border border-primary/20 bg-primary/5 text-center"
            >
              <span className="font-display font-semibold text-primary-foreground">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
