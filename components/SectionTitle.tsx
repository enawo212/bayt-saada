interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ label, title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block bg-orange/10 text-orange font-montserrat font-semibold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2 className="font-montserrat font-bold text-navy text-3xl sm:text-4xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-inter text-navy/60 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
