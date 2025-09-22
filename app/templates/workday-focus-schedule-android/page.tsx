import Script from "next/script";
import ClientCTAButton from "@/components/ClientCTAButton";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = {
  title: "Workday Focus Schedule on Android (Calendar Template) | Pure Detox",
  description: "Block distractions during work hours with calendar‑synced schedules. Download ICS and get focused.",
};

export default function WorkdaySchedulePage() {
  const faqItems = [
    { question: "Block social media during work hours?", answer: "Yes, the workday template blocks social apps and sites during scheduled work hours automatically." },
    { question: "Schedule app blocks Android?", answer: "Import the ICS template to your calendar, then sync with Pure Detox for automatic focus windows." },
    { question: "Calendar focus template?", answer: "Download the ICS file, import to Google Calendar or Outlook, and sync with Pure Detox schedules." },
    { question: "What about weekend rules?", answer: "The template includes weekend flexibility; you can customize or disable weekend focus windows." },
  ];

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Workday Focus Schedule for Android (With Calendar Sync)",
    totalTime: "PT5M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    tool: [{ "@type": "HowToTool", name: "Pure Detox app" }, { "@type": "HowToTool", name: "Calendar app" }],
    supply: [{ "@type": "HowToSupply", name: "Android phone" }, { "@type": "HowToSupply", name: "ICS template file" }],
    step: [
      { "@type": "HowToStep", name: "Download Workday Template", text: "Download the ICS template file with predefined work focus hours." },
      { "@type": "HowToStep", name: "Import to Calendar", text: "Import the ICS file to Google Calendar, Outlook, or your preferred calendar app." },
      { "@type": "HowToStep", name: "Sync with Pure Detox", text: "Connect your calendar to Pure Detox schedules for automatic blocking." },
      { "@type": "HowToStep", name: "Choose Exceptions", text: "Set exceptions for critical work apps, meetings, and emergency contacts." },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Templates", item: "https://puredetox.app/templates" },
      { "@type": "ListItem", position: 2, name: "Workday Schedule", item: "https://puredetox.app/templates/workday-focus-schedule-android" },
    ],
  };

  const snippetSteps = [
    "Download the workday ICS template",
    "Import to calendar",
    "Sync with Pure Detox schedules",
    "Choose exceptions",
  ];

  return (
    <main className="container py-10 prose max-w-[760px]">
      <header className="not-prose mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold">Workday Focus Schedule for Android (With Calendar Sync)</h1>
        <p className="opacity-80 mt-2">Your workday is most productive when decisions are front‑loaded. This template lets you block distractions during work hours and automatically lift restrictions afterward.</p>
        <div className="mt-4">
          <ClientCTAButton label="Add Work Schedule" eventParams={{ cluster: "workday", source: "guide-hero", route: "/templates/workday-focus-schedule-android" }} />
        </div>
      </header>

      <ol className="not-prose list-decimal list-inside p-4 rounded bg-black/5">
        {snippetSteps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <section className="mt-8">
        <h2>Workday Template Download</h2>
        <p>Download the pre‑configured ICS file with standard work hours (9 AM‑5 PM) and focus windows. Customize times and days as needed for your schedule.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="ICS download interface" />
      </section>

      <section className="mt-8">
        <h2>Calendar Sync Integration</h2>
        <p>Import the ICS file to Google Calendar, Outlook, or Apple Calendar. The template creates recurring focus blocks that sync with Pure Detox automatically.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Calendar import screenshot" />
      </section>

      <section className="mt-8">
        <h2>Exceptions &amp; Mobile/Desktop Parity</h2>
        <p>Keep critical work apps available: Slack, email, project management tools. Set up the same schedule across mobile and desktop for consistent focus.</p>
        <div className="aspect-[16/9] bg-black/5 rounded" aria-label="Exception configuration screenshot" />
      </section>

      <section className="mt-8" id="faq">
        <h2>FAQ</h2>
        <FAQAccordion items={faqItems} />
      </section>

      <footer className="not-prose mt-10">
        <ClientCTAButton label="Download Workday Template" eventParams={{ cluster: "workday", source: "guide-footer", route: "/templates/workday-focus-schedule-android" }} />
      </footer>

      <Script id="jsonld-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <Script id="jsonld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="jsonld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </main>
  );
}
