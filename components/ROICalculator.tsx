"use client";

import { useEffect, useId, useMemo, useState } from "react";

export default function ROICalculator({ planPriceMonthly = 8.99 }: { planPriceMonthly?: number }) {
  const [hours, setHours] = useState(10);
  const [valuePerHour, setValuePerHour] = useState(25);
  const monthlyValue = useMemo(() => hours * valuePerHour * 4.33, [hours, valuePerHour]);
  const paybackDays = useMemo(() => {
    const perDayValue = (hours * valuePerHour) / 7;
    return perDayValue > 0 ? planPriceMonthly / perDayValue : 0;
  }, [hours, valuePerHour, planPriceMonthly]);

  const liveId = useId();

  useEffect(() => {
    const node = document.getElementById(liveId);
    if (node) node.textContent = `Monthly value ≈ $${monthlyValue.toFixed(0)}; pays for itself in ≈ ${paybackDays.toFixed(2)} days`;
  }, [liveId, monthlyValue, paybackDays]);

  return (
    <section aria-label="ROI Calculator" className="py-8">
      <div className="container grid gap-6 md:grid-cols-3 items-start">
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="hours">Hours saved per week</label>
            <input id="hours" type="range" min={2} max={30} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full" />
            <div className="text-sm mt-1">{hours} h/week</div>
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="vph">Value per hour (USD)</label>
            <input id="vph" type="number" min={5} step={1} value={valuePerHour} onChange={(e) => setValuePerHour(Number(e.target.value))} className="border rounded px-2 py-1" />
          </div>
        </div>
        <div className="p-4 rounded-lg bg-black/5" aria-live="polite" id={liveId} />
      </div>
    </section>
  );
}


