import { useEffect } from "react";

/**
 * Pinned to the 0.36 line so a breaking widget release can't change the site
 * without a code change. Docs: https://www.npmjs.com/package/@telnyx/ai-agent-widget
 */
const TELNYX_WIDGET_SRC = "https://unpkg.com/@telnyx/ai-agent-widget@0.36";

/**
 * Mounts the Telnyx AI agent widget (<telnyx-ai-agent>) for one assistant.
 *
 * Client-only, loaded on first scroll or after 4 s so it never competes with
 * the first paint, and unmounting removes the element so two corner widgets
 * can never stack. The script defines the custom element once per page load,
 * so it is added a single time and kept; only the element comes and goes.
 *
 * Visitors can talk or type. The assistant itself (prompt, voice, tools,
 * widget theme) is configured in Telnyx, not here.
 */
export function TelnyxAgentWidget({ agentId }: { agentId: string }) {
  useEffect(() => {
    let initialized = false;
    let element: HTMLElement | null = null;
    const timer = window.setTimeout(init, 4_000);

    function init() {
      if (initialized) return;
      initialized = true;
      window.clearTimeout(timer);
      window.removeEventListener("scroll", init);
      if (!document.querySelector(`script[src="${TELNYX_WIDGET_SRC}"]`)) {
        const script = document.createElement("script");
        script.src = TELNYX_WIDGET_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      element = document.createElement("telnyx-ai-agent");
      element.setAttribute("agent-id", agentId);
      document.body.appendChild(element);
    }

    window.addEventListener("scroll", init, { once: true, passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", init);
      element?.remove();
      document.querySelectorAll("telnyx-ai-agent").forEach((el) => el.remove());
    };
  }, [agentId]);

  return null;
}
