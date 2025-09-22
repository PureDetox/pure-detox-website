export const dynamic = "force-static";

export default function SchemaExamples() {
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pure Detox",
    operatingSystem: "Android",
    applicationCategory: "ProductivityApplication",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: 1287 },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Does Pure Detox require root?", acceptedAnswer: { "@type": "Answer", text: "No, Pure Detox works without root." } },
      { "@type": "Question", name: "Can I block TikTok and Shorts?", acceptedAnswer: { "@type": "Answer", text: "Yes, targeted blocks are supported." } },
    ],
  };
  const howto = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Block TikTok on Android (no root)",
    step: [
      { "@type": "HowToStep", text: "Install Pure Detox from Google Play." },
      { "@type": "HowToStep", text: "Enable App Blocking and select TikTok." },
      { "@type": "HowToStep", text: "Set schedule and confirm." },
    ],
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://puredetox.app/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://puredetox.app/guides" },
      { "@type": "ListItem", position: 3, name: "Block TikTok (Android)" },
    ],
  };

  return (
    <main className="container py-10">
      <h1 className="text-2xl font-semibold">Schema Examples</h1>
      <p className="opacity-80">These are seeded examples for validator testing.</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplication) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howto) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </main>
  );
}


