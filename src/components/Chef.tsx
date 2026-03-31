import { FadeUp } from "./FadeUp";
import { SectionTag } from "./SectionTag";

export function Chef() {
  return (
    <section id="chef" className="py-40 max-md:py-24 max-sm:py-[72px]">
      <div className="w-full max-md:px-6 max-sm:px-5" style={{ maxWidth: 1200, margin: "0 auto", paddingLeft: 64, paddingRight: 64 }}>
        <div className="grid grid-cols-2 gap-20 items-center max-lg:gap-12 max-md:grid-cols-1">
          <div>
            <FadeUp>
              <SectionTag>The Chef</SectionTag>
            </FadeUp>
            <FadeUp delay={90}>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                }}
              >
                A Lifetime Devoted
                <br />
                to{" "}
                <em className="italic" style={{ color: "var(--terracotta)" }}>
                  Flavor
                </em>
              </h2>
            </FadeUp>
            <FadeUp delay={180}>
              <blockquote
                className="text-[1.375rem] italic mb-7 pl-6"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  color: "var(--mocha)",
                  borderLeft: "3px solid var(--terracotta)",
                  lineHeight: 1.6,
                }}
              >
                &ldquo;Cooking is not about convenience. It is about adjustment
                &mdash; the constant negotiation between fire, time, and the
                integrity of what the earth provides.&rdquo;
              </blockquote>
            </FadeUp>
            <FadeUp delay={270}>
              <p
                className="text-base max-w-[56ch] mb-10"
                style={{ color: "var(--espresso-mid)", lineHeight: 1.8 }}
              >
                After two decades spanning the kitchens of Lyon, Copenhagen, and
                Tokyo, Chef Lucy Lu returned to build something deeply
                personal. Atelier is not merely a restaurant &mdash; it is an
                ongoing study in restraint, where the discipline of classical
                French technique meets the quiet boldness of modern Nordic
                expression. Every morning begins at the market. Every evening
                ends with a plate that could not have existed the day before.
              </p>
            </FadeUp>
            <FadeUp delay={360}>
              <div className="flex flex-col gap-1">
                <span
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Lucy Lu
                </span>
                <span
                  className="text-[0.8125rem] uppercase tracking-[0.1em] font-medium"
                  style={{ color: "var(--mocha)" }}
                >
                  Executive Chef &amp; Founder
                </span>
              </div>
            </FadeUp>
          </div>

          <FadeUp className="max-md:order-[-1]">
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
                  aspectRatio: "4 / 5",
                }}
              >
                <img
                  src="https://picsum.photos/seed/chefportrait26/600/750"
                  alt="Chef Lucy Lu"
                  loading="lazy"
                  className="transition-transform duration-700 hover:scale-[1.04]"
                  style={{ transitionTimingFunction: "var(--ease-smooth)" }}
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
