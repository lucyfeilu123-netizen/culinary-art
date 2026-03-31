import type { ReactNode } from "react";

export function SectionTag({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center gap-4 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] mb-6"
      style={{ color: light ? "var(--gold-muted)" : "var(--mocha)" }}
    >
      <span
        className="w-10 h-px"
        style={{ background: "var(--gold-muted)" }}
      />
      {children}
    </span>
  );
}
