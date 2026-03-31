import { FadeUp } from "./FadeUp";
import { SectionTag } from "./SectionTag";

const stats = [
  { number: "12+", label: "Years of Craft" },
  { number: "3", label: "Michelin Stars" },
  { number: "247", label: "Original Dishes" },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-40 max-md:py-24 max-sm:py-[72px]">
      <div className="w-full max-md:px-6 max-sm:px-5" style={{ maxWidth: 1200, margin: "0 auto", paddingLeft: 64, paddingRight: 64 }}>
        <div className="grid grid-cols-2 gap-20 items-center max-lg:gap-12 max-md:grid-cols-1">
          <FadeUp>
            <div
              className="p-[10px] border border-[var(--border-subtle)]"
              style={{
                background: "var(--cream-dark)",
                borderRadius: "var(--radius-outer)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="overflow-hidden"
                style={{
                  borderRadius: "var(--radius-inner)",
                  aspectRatio: "3 / 4",
                }}
              >
                <img
                  src="https://picsum.photos/seed/atelierphilo/600/800"
                  alt="Fresh ingredients"
                  loading="lazy"
                  className="transition-transform duration-700 hover:scale-[1.04]"
                  style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                />
              </div>
            </div>
          </FadeUp>

          <div>
            <FadeUp>
              <SectionTag>Our Philosophy</SectionTag>
            </FadeUp>
            <FadeUp delay={90}>
              <h2
                className="mb-7"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                }}
              >
                Honoring Tradition,
                <br />
                Embracing{" "}
                <em className="italic" style={{ color: "var(--terracotta)" }}>
                  Innovation
                </em>
              </h2>
            </FadeUp>
            <FadeUp delay={180}>
              <p
                className="text-base max-w-[58ch] mb-12"
                style={{ color: "var(--espresso-mid)", lineHeight: 1.8 }}
              >
                We believe in the quiet power of seasonal ingredients and the
                discipline of classical technique, reimagined through a
                contemporary lens. Each dish is a dialogue between the land and
                the kitchen &mdash; a celebration of provenance, patience, and
                the pursuit of something genuinely memorable.
              </p>
            </FadeUp>
            <div
              className="grid grid-cols-3 gap-8 pt-9 max-sm:gap-4"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              {stats.map((s, i) => (
                <FadeUp key={s.label} delay={270 + i * 90}>
                  <div
                    className="text-[2.25rem] font-bold leading-none mb-1.5"
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      color: "var(--terracotta)",
                    }}
                  >
                    {s.number}
                  </div>
                  <div
                    className="text-[0.8125rem] font-medium"
                    style={{ color: "var(--mocha)" }}
                  >
                    {s.label}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
