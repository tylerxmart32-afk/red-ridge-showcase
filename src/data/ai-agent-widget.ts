/* ────────────────────────────────────────────────────────────────
 *  PASTE THE GOHIGHLEVEL VOICE AI WIDGET SNIPPET HERE
 *
 *  1. In GoHighLevel: AI Agents -> Voice AI -> ERICA -> Get Code.
 *  2. Copy the ENTIRE embed snippet (including the <script> tags).
 *  3. Paste it between the backticks below, replacing the empty
 *     string. Do not remove the backticks.
 *  4. Save. That's the whole job -- nothing else needs to change.
 *
 *  Leave it empty to hide the widget; the rest of the page still
 *  works and shows a fallback message instead of a blank hole.
 *
 *  Warning: if the snippet itself contains a backtick (`) or the
 *  two characters ${ , this file will fail to build -- tell your
 *  developer and they'll switch this to a different string format.
 * ──────────────────────────────────────────────────────────────── */

export interface AiAgentWidgetConfig {
  embedSnippet: string;
  /** "floating" = GHL's own corner bubble. "inline" = renders inside the page section below. */
  placement: "floating" | "inline";
}

export const AI_AGENT_WIDGET: AiAgentWidgetConfig = {
  embedSnippet: ``,
  placement: "floating",
};
