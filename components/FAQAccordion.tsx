"use client";

import { useState } from "react";

type Item = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="divide-y divide-black/10" role="list">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} role="listitem">
            <button
              type="button"
              className="w-full text-left py-3 font-medium"
              aria-expanded={isOpen}
              onClick={async () => {
                setOpenIndex(isOpen ? null : idx);
                try {
                  const body = JSON.stringify({ metric: { name: "faq_expand", id: `faq-${idx}`, value: 1 }, url: location.href, ts: Date.now() });
                  const usedBeacon = navigator.sendBeacon?.("/api/rum", body);
                  if (!usedBeacon) {
                    await fetch("/api/rum", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true });
                  }
                } catch {}
              }}
            >
              {item.question}
            </button>
            <div className="pb-3" hidden={!isOpen}>
              <p className="opacity-80 text-sm">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
