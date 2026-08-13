import { useEffect, useRef } from "react";
import { AI_AGENT_WIDGET } from "@/data/ai-agent-widget";

// Module-level, not a ref/cleanup: third-party widgets append their own DOM
// and globals that can't be cleanly torn down. This flag just needs to survive
// React StrictMode's double-invoke and HMR so the widget never mounts twice.
let injected = false;

function injectSnippet(target: HTMLElement, snippet: string) {
  const template = document.createElement("template");
  template.innerHTML = snippet;

  for (const node of Array.from(template.content.childNodes)) {
    if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName === "SCRIPT") {
      // Scripts materialised via innerHTML are inert per spec -- rebuild them
      // as real script elements so the browser actually executes them.
      const source = node as HTMLScriptElement;
      const script = document.createElement("script");
      for (const name of source.getAttributeNames()) {
        script.setAttribute(name, source.getAttribute(name) ?? "");
      }
      script.textContent = source.textContent;
      target.appendChild(script);
    } else {
      target.appendChild(document.importNode(node, true));
    }
  }
}

export function AiAgentWidget() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const snippet = AI_AGENT_WIDGET.embedSnippet.trim();
    if (!snippet || injected) return;

    const target = AI_AGENT_WIDGET.placement === "inline" ? mountRef.current : document.body;
    if (!target) return;

    injected = true;
    injectSnippet(target, snippet);
  }, []);

  if (AI_AGENT_WIDGET.placement !== "inline") return null;

  return <div ref={mountRef} data-ai-agent-widget-mount />;
}
