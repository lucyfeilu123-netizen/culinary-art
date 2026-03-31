"use client";

import { useRef, useEffect } from "react";

export function DishCard({
  name,
  desc,
  img,
}: {
  name: string;
  desc: string;
  img: string;
  span?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const card = cardRef.current;
    const outer = outerRef.current;
    if (!card || !outer) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      outer.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
      outer.style.transition = "transform 0.15s ease-out";
    };
    const onLeave = () => {
      outer.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale(1)";
      outer.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="relative h-full">
      <div
        ref={outerRef}
        className="h-full p-[10px] border border-[var(--border-subtle)]"
        style={{
          background: "var(--cream)",
          borderRadius: "var(--radius-outer)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          className="relative h-full overflow-hidden"
          style={{ borderRadius: "var(--radius-inner)" }}
        >
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="absolute inset-0 transition-transform duration-700 hover:scale-[1.04]"
            style={{ transitionTimingFunction: "var(--ease-smooth)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 p-8 z-[2]"
            style={{
              background:
                "linear-gradient(to top, rgba(44,24,16,0.75) 0%, rgba(44,24,16,0.2) 60%, transparent 100%)",
              borderRadius: "0 0 var(--radius-inner) var(--radius-inner)",
            }}
          >
            <div
              className="text-xl font-semibold mb-1"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--cream)",
              }}
            >
              {name}
            </div>
            <div className="text-[0.8125rem]" style={{ color: "rgba(250,247,242,0.7)" }}>
              {desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
