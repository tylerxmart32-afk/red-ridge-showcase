import { useLayoutEffect, useRef, useState } from "react";

/**
 * True once the element has scrolled into view. Renders as already-visible on
 * both server and initial client paint (no hydration mismatch, no flash for
 * no-JS/crawler views); a layout effect then arms the observer.
 * Also true immediately when the user prefers reduced motion.
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(true);
  const [armed, setArmed] = useState(false);

  useLayoutEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    setInView(false);
    setArmed(true);
  }, []);

  useLayoutEffect(() => {
    if (!armed || !ref.current) return;

    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [armed]);

  return [ref, inView] as const;
}
