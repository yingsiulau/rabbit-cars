import { useEffect, useRef } from "react";

const HCI_SCRIPT_SRC = "https://www.autoscout24.ch/assets/hci/v2/hci.current.js";

type Props = {
  configId: string;
  language?: string;
  entryPoint?: string;
};

export function AutoScout24Listings({ configId, language = "de", entryPoint = "search" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // The HCI widget only scans the page for .hci-container once, when its script
    // executes — it has no client-side-routing awareness. Re-entering this route
    // via TanStack Router (no full page load) would otherwise leave the container
    // empty, so a fresh script instance is inserted on every mount.
    document.querySelectorAll(`script[src="${HCI_SCRIPT_SRC}"]`).forEach((el) => el.remove());

    const script = document.createElement("script");
    script.src = HCI_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hci-container"
      data-config-id={configId}
      data-language={language}
      data-entry-point={entryPoint}
    />
  );
}
