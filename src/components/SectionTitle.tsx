interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, light }: SectionTitleProps) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-1 bg-primary rounded-full" />
      <span className={`font-display text-sm font-semibold uppercase tracking-[0.2em] ${light ? "text-primary" : "text-primary"}`}>
        {subtitle}
      </span>
    </div>
    <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
  </div>
);

export default SectionTitle;
