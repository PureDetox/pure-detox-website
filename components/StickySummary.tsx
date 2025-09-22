"use client";

import { useEffect, useRef, useState } from "react";
import { Plan } from "@/components/PlanTable";
import { sendEvent } from "@/utils/events";

export default function StickySummary({ selected }: { selected?: Plan | null }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sticky = ref.current;
    const sentinel = document.querySelector("#sticky-summary-sentinel");
    if (!sticky || !sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const show = entry.intersectionRatio < 0.75;
        if (show && !visible) {
          sendEvent("sticky_shown", { route: "/pricing", page_cluster: "pricing" });
        }
        setVisible(show);
        sticky.classList.toggle("is-visible", show);
      },
      { threshold: [0, 0.25, 0.75, 1] }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, [visible]);

  const handleClick = async () => {
    await sendEvent("sticky_click", { route: "/pricing", page_cluster: "pricing", plan: selected?.id ?? null });
  };

  return (
    <>
      <div className="sticky-summary-spacer" aria-hidden="true" />
      <div ref={ref} className="sticky-summary" role="region" aria-label="Sticky summary">
        <div className="container flex items-center justify-between gap-3">
          <div className="text-sm">
            {selected ? (
              <span>Selected: {selected.name} — ${selected.annual.toFixed(2)}/mo annually</span>
            ) : (
              <span>Choose a plan to begin your 7‑day rescue</span>
            )}
          </div>
          <button className="cta h-11 px-5 rounded-full bg-black text-white" onClick={handleClick} aria-label="Start 7-day rescue">
            Start 7‑day rescue
          </button>
        </div>
      </div>
    </>
  );
}


