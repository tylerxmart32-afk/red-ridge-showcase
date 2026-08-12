interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span className={className}>
      <span className="flex items-center gap-2.5">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-7 w-7 shrink-0 text-primary"
          fill="none"
        >
          <path d="M2 25 L11 9 L17 19 L21 13 L30 25 Z" fill="currentColor" />
          <path d="M2 28 H30" stroke="currentColor" strokeWidth="2" opacity="0.45" />
        </svg>
        <span className="text-base font-semibold tracking-tight text-foreground">
          Red Ridge <span className="text-primary">AI</span>
        </span>
      </span>
    </span>
  );
}
