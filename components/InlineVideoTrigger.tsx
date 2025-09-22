"use client";

export default function InlineVideoTrigger({ label = "Play 60s overview" }: { label?: string }) {
  return (
    <button
      type="button"
      className="btn bg-black text-white mt-3"
      onClick={async () => {
        try {
          const body = JSON.stringify({ metric: { name: "video_play", id: "overview", value: 1 }, url: location.href, ts: Date.now() });
          const usedBeacon = navigator.sendBeacon?.("/api/rum", body);
          if (!usedBeacon) {
            await fetch("/api/rum", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true });
          }
        } catch {}
      }}
    >
      {label}
    </button>
  );
}


