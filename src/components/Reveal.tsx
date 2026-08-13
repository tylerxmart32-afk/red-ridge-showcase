import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

export function Reveal({ children, as: Component = "div", delay = 0, className }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <Component
      ref={ref}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        inView
          ? "animate-in fade-in-0 slide-in-from-bottom-3 duration-700 ease-out fill-mode-both"
          : "opacity-0",
        className,
      )}
    >
      {children}
    </Component>
  );
}
