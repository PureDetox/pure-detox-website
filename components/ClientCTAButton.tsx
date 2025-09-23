"use client";

import { useCallback } from "react";

type Props = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
  eventParams?: Record<string, unknown>;
  className?: string;
};

export default function ClientCTAButton({ label, href, variant = "primary", eventParams = {}, className: customClassName }: Props) {
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

  const defaultClassName = variant === "secondary" ? "btn border border-black/10" : "btn bg-black text-white";
  const className = customClassName || defaultClassName;
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>{label}</a>
    );
  }
  return (
    <button type="button" className={className} onClick={onClick}>{label}</button>
  );
}
