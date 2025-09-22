type Logo = { alt: string };
type Testimonial = { quote: string; name: string };

export default function ProofStrip({
  logos = [],
  testimonials = [],
}: {
  logos?: Logo[];
  testimonials?: Testimonial[];
}) {
  return (
    <section aria-label="Social proof" className="py-8">
      <div className="container">
        <div className="flex flex-wrap items-center gap-6 opacity-80">
          {logos.length === 0 ? (
            <p className="text-sm">Trusted by focused Android users worldwide</p>
          ) : (
            logos.map((l, i) => (
              <div key={i} className="h-6 w-24 bg-black/5 rounded" aria-label={l.alt} />
            ))
          )}
        </div>
        {testimonials.length > 0 && (
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="p-4 rounded-lg bg-black/5">
                <blockquote className="text-sm">“{t.quote}”</blockquote>
                <figcaption className="mt-2 text-xs opacity-70">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


