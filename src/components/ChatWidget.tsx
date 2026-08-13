import { useEffect } from "react";

const WIDGET_ID = "6a7cf4ba187766e8c20694ea";
const LOADER_URL = "https://widgets.leadconnectorhq.com/loader.js";
const RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

export function ChatWidget() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(WIDGET_ID)) return;

    const script = document.createElement("script");
    script.id = WIDGET_ID;
    script.src = LOADER_URL;
    script.async = true;
    script.setAttribute("data-resources-url", RESOURCES_URL);
    script.setAttribute("data-widget-id", WIDGET_ID);

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
