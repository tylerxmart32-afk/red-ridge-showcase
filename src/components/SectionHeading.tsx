interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, lede, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lede}</p>
    </div>
  );
}
