import { TelnyxAgentWidget } from "@/components/TelnyxAgentWidget";

/** Jasmine, Red Ridge AI's website assistant (Telnyx AI agent). */
const JASMINE_AGENT_ID = "assistant-4102e987-8ede-4300-9491-d0e5baf40317";

/**
 * The site-wide corner assistant, mounted once in __root.tsx. This is the only
 * chat widget on the site (it replaced the GoHighLevel chat widget), so two
 * corner widgets can never stack.
 */
export function ChatWidget() {
  return <TelnyxAgentWidget agentId={JASMINE_AGENT_ID} />;
}
