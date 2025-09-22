"use client";

import { sendEvent } from "@/utils/events";

export type Plan = {
  id: "basic" | "focus" | "pro";
  name: string;
  monthly: number;
  annual: number;
  features: string[];
  isBestValue?: boolean;
};

function openPlayWithFallback(utm: string) {
  try {
    const pkg = "app.puredetox";
    const market = `market://details?id=${pkg}`;
    const web = `https://play.google.com/store/apps/details?id=${pkg}&${utm}`;
    const start = Date.now();
    const fallback = setTimeout(() => {
      if (Date.now() - start < 1500) {
        location.assign(web);
      }
    }, 250);
    // Attempt deep link
    location.assign(market);
    // Best effort fallback clear (browser will navigate away if market handled)
    setTimeout(() => clearTimeout(fallback), 2000);
  } catch {
    // always ensure web fallback
    location.assign(`https://play.google.com/store/apps/details?id=app.puredetox&${utm}`);
  }
}

export default function PlanTable({ plans, onSelect }: { plans: Plan[]; onSelect?: (plan: Plan) => void }) {
  const handleSelect = async (plan: Plan) => {
    await sendEvent("upgrade_click", { route: "/pricing", page_cluster: "pricing", plan: plan.id });
    onSelect?.(plan);
  };

  const handleStartTrial = async (plan?: Plan) => {
    await sendEvent("trial_cta_click", { route: "/pricing", page_cluster: "pricing", variant: "loss", plan: plan?.id ?? null });
    openPlayWithFallback("utm_source=web&utm_medium=pricing&utm_campaign=trial");
  };

  return (
    <section aria-label="Plans" className="py-8">
      <div className="container grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <article key={p.id} className={`rounded-lg border border-black/10 p-5 bg-white ${p.isBestValue ? "ring-2 ring-black" : ""}`} aria-label={`${p.name} plan`}>
            {p.isBestValue && <div className="text-xs font-medium mb-2">Best Value</div>}
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm opacity-80">
              <span className="font-medium">${p.annual.toFixed(2)}</span>/mo billed annually
              <span className="ml-2 opacity-70">or ${p.monthly.toFixed(2)}/mo</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <div className="mt-5 flex gap-2">
              <button className="cta h-11 px-5 rounded-full bg-black text-white" onClick={() => handleStartTrial(p)} aria-label={`Start 7-day rescue with ${p.name}`}>
                Start 7‑day rescue
              </button>
              <button className="h-11 px-5 rounded-full border border-black/10" onClick={() => handleSelect(p)} aria-label={`Choose ${p.name}`}>
                Choose plan
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


