export type EventParams = Record<string, unknown>;

export async function sendEvent(
  eventName: string,
  params: EventParams = {}
): Promise<void> {
  try {
    const payload = {
      event: eventName,
      route: typeof location !== "undefined" ? location.pathname : "",
      cluster: (document.documentElement.dataset.cluster as string) || null,
      variant: (document.documentElement.dataset.variant as string) || null,
      ts: Date.now(),
      params,
    };
    const body = JSON.stringify(payload);
    const usedBeacon =
      typeof navigator !== "undefined" &&
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon("/api/rum", body);
    if (!usedBeacon) {
      await fetch("/api/rum", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      });
    }
  } catch {
    // no-op
  }
}


