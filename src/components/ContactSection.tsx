import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Phone, Mail, AtSign } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(19) 98261-4845",
    href: "https://wa.me/5519982614845",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lucas.passarelli00@hotmail.com",
    href: "mailto:lucas.passarelli00@hotmail.com",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@lucass.passarelli",
    href: "https://instagram.com/lucass.passarelli",
  },
];

const ContactSection = () => (
  <SectionWrapper id="contato">
    <SectionTitle title="Contato" subtitle="Fale comigo" />
    <div className="grid sm:grid-cols-3 gap-6 mb-12">
      {contacts.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-6 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <c.icon className="w-6 h-6 text-primary" />
          </div>
          <p className="font-semibold text-foreground mb-1">{c.label}</p>
          <p className="text-sm text-muted-foreground">{c.value}</p>
        </a>
      ))}
    </div>
    <div className="text-center">
      <p className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6">
        "Estou pronto para aprender, contribuir e crescer junto com a Bosch."
      </p>
      <Button withPreloader={true} variant="hero" size="lg" asChild>
        <a href="https://wa.me/5519982614845" target="_blank" rel="noopener noreferrer">
          Entre em contato pelo WhatsApp
        </a>
      </Button>
    </div>
  </SectionWrapper>
);

export default ContactSection;
