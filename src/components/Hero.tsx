"use client";

import { FadeUp } from "./FadeUp";
import { SectionTag } from "./SectionTag";
import { ButtonPrimary } from "./ButtonPrimary";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center"
      style={{ minHeight: "100dvh", padding: "140px 0 96px" }}
    >
      <div className="max-w-[1280px] mx-auto px-16 max-lg:px-10 max-md:px-6 max-sm:px-5 w-full">
        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1 max-md:gap-12">
          <div className="max-md:order-1">
            <FadeUp>
              <SectionTag>Est. 2024 &mdash; Culinary Atelier</SectionTag>
            </FadeUp>
            <FadeUp delay={90}>
              <h1
                className="font-extrabold mb-7"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(3rem, 5.5vw, 5rem)",
                  lineHeight: 1.05,
                }}
              >
                The Art of
                <br />
                <em className="italic" style={{ color: "var(--terracotta)" }}>
                  Culinary
                </em>
                <br />
                Expression
              </h1>
            </FadeUp>
            <FadeUp delay={180}>
              <p
                className="text-[1.0625rem] max-w-[50ch] mb-10"
                style={{ color: "var(--espresso-mid)", lineHeight: 1.8 }}
              >
                Where every plate is a canvas and every ingredient tells a
                story. We craft experiences that transcend the ordinary, turning
                meals into moments of pure artistry.
              </p>
            </FadeUp>
            <FadeUp delay={270}>
              <div className="flex items-center gap-8 flex-wrap">
                <ButtonPrimary href="#menu">
                  Explore the Menu
                </ButtonPrimary>
                <a
                  href="#chef"
                  className="inline-flex items-center gap-2 font-semibold text-[0.9375rem] transition-all duration-400 hover:gap-3"
                  style={{
                    color: "var(--espresso)",
                    transitionTimingFunction: "var(--ease-smooth)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--terracotta)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--espresso)")
                  }
                >
                  Our Story &rarr;
                </a>
              </div>
            </FadeUp>
          </div>

          <div className="relative max-md:order-2">
            <FadeUp delay={180}>
              <div className="-mt-8 max-md:mt-0">
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
                      src="https://picsum.photos/seed/atelierhero/800/1000"
                      alt="Artfully plated dish"
                      className="transition-transform duration-700 hover:scale-[1.04]"
                      style={{
                        transitionTimingFunction: "var(--ease-smooth)",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="absolute bottom-12 left-4 z-2 max-md:left-3 max-md:bottom-6"
                  style={{
                    background: "var(--warm-white)",
                    padding: "22px 28px",
                    borderRadius: "var(--radius-inner)",
                    boxShadow: "var(--shadow-elevated)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    className="text-[1.75rem] font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      color: "var(--terracotta)",
                    }}
                  >
                    12+
                  </div>
                  <div
                    className="text-xs font-medium mt-1 tracking-wide"
                    style={{ color: "var(--mocha)" }}
                  >
                    Years of Culinary Excellence
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
