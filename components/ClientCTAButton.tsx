"use client";

import { useCallback } from "react";

type Props = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
  eventParams?: Record<string, unknown>;
};

export default function ClientCTAButton({ label, href, variant = "primary", eventParams = {} }: Props) {
  const onClick = useCallback(async () => {
    try {
      // For static hosting, log to console instead of API
      console.log('CTA Click:', {
        event: "trial_cta_click",
        url: location.href,
        ts: Date.now(),
        params: eventParams,
      });
    } catch {}
  }, [eventParams]);

  const className = variant === "secondary" ? "btn border border-black/10" : "btn bg-black text-white";
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>{label}</a>
    );
  }
  return (
    <button type="button" className={className} onClick={onClick}>{label}</button>
  );
}
