"use client";

import type { ReactNode } from "react";

export function ButtonPrimary({
  children,
  href,
  fullWidth = false,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}) {
  const handleClick = () => {
    if (href) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick?.();
  };

  return (
    <button
      className="bg-transparent border-none cursor-pointer p-0"
      style={{ fontFamily: "inherit" }}
      onClick={handleClick}
    >
      <span
        className={`inline-flex items-center rounded-[var(--radius-pill)] p-1 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(196,114,78,0.35)] active:scale-[0.98] ${fullWidth ? "w-full" : ""}`}
        style={{
          background: "var(--terracotta)",
          transitionTimingFunction: "var(--ease-smooth)",
        }}
      >
        <span
          className={`inline-flex items-center gap-2.5 rounded-[var(--radius-pill)] px-8 py-3.5 text-[0.9375rem] font-semibold tracking-[0.02em] text-[var(--cream)] transition-colors duration-400 ${fullWidth ? "w-full justify-center" : ""}`}
          style={{
            background: "var(--terracotta)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.12)",
            transitionTimingFunction: "var(--ease-smooth)",
          }}
        >
          {children}
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm transition-transform duration-400"
            style={{
              background: "rgba(0,0,0,0.12)",
              transitionTimingFunction: "var(--ease-smooth)",
            }}
          >
            &rarr;
          </span>
        </span>
      </span>
    </button>
  );
}
