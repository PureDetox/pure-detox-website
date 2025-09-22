"use client";

import { useEffect, useRef } from "react";
import CTAButton from "@/components/CTAButton";
import { sendEvent } from "@/utils/events";

type StickyCTAProps = {
  variant?: "loss" | "identity";
  label?: string;
};

export default function StickyCTA({ variant = "loss", label = "Start 7-day rescue" }: StickyCTAProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sticky = ref.current;
    const sentinel = document.querySelector("#sticky-sentinel");
    if (!sticky || !sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const show = entry.intersectionRatio < 0.75;
        sticky.classList.toggle("is-visible", show);
      },
      { threshold: [0, 0.25, 0.75, 1] }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  const handleClick = async () => {
    await sendEvent("trial_cta_click", { variant, source: "sticky" });
  };

  return (
    <>
      <div className="sticky-spacer" aria-hidden="true" />
      <div ref={ref} className="sticky-cta" role="region" aria-label="Sticky actions">
        <div className="container flex items-center justify-between gap-3">
          <span className="text-sm">Stop losing 10–15 hours/week</span>
          <CTAButton onClick={handleClick} aria-label={label}>
            {label}
          </CTAButton>
        </div>
      </div>
    </>
  );
}


