import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TechSection from "@/components/TechSection";
import WhyBoschSection from "@/components/WhyBoschSection";
import FutureSection from "@/components/FutureSection";
import WhyMeSection from "@/components/WhyMeSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
    <ProjectsSection />
    <SkillsSection />
    <TechSection />
    <WhyBoschSection />
    <FutureSection />
    <WhyMeSection />
    <ContactSection />
    <footer className="bg-industrial text-center py-6 px-4">
      <p className="text-sm text-primary-foreground/40">
        © 2026 Lucas Patrick — Candidato Aprendiz de Manufatura Bosch
      </p>
    </footer>
  </>
);

export default Index;
