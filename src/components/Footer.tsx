const navLinks = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#menu", label: "Menu" },
  { href: "#chef", label: "The Chef" },
  { href: "#reserve", label: "Reservations" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "The Journal" },
  { href: "#", label: "Press Inquiries" },
];

export function Footer() {
  return (
    <footer
      className="pt-20 pb-10"
      style={{ background: "var(--charcoal)", color: "rgba(250,247,242,0.6)" }}
    >
      <div className="max-w-[1280px] mx-auto px-16 max-lg:px-10 max-md:px-6 max-sm:px-5">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16 max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-1">
          <div className="max-md:col-span-2 max-sm:col-span-1">
            <h3
              className="text-2xl font-bold mb-4 tracking-[0.12em]"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--cream)",
              }}
            >
              ATELIER
            </h3>
            <p className="text-sm max-w-[32ch]" style={{ lineHeight: 1.7 }}>
              A culinary atelier dedicated to the craft of exceptional dining.
              Where technique meets artistry, and every detail is intentional.
            </p>
          </div>

          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "var(--gold-muted)" }}
            >
              Navigate
            </h4>
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-sm mb-3 transition-colors duration-300 hover:text-[var(--cream)]"
                style={{ transitionTimingFunction: "var(--ease-smooth)" }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "var(--gold-muted)" }}
            >
              Visit
            </h4>
            <p className="text-sm mb-3">742 Rue de la Gastronomie</p>
            <p className="text-sm mb-3">San Francisco, CA 94102</p>
            <p className="text-sm mb-3">+1 (415) 590-1347</p>
          </div>

          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "var(--gold-muted)" }}
            >
              Connect
            </h4>
            {socialLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-sm mb-3 transition-colors duration-300 hover:text-[var(--cream)]"
                style={{ transitionTimingFunction: "var(--ease-smooth)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex justify-between items-center pt-7 text-[0.8125rem] max-md:flex-col max-md:gap-2 max-md:text-center"
          style={{ borderTop: "1px solid rgba(250,247,242,0.08)" }}
        >
          <span>&copy; 2026 Atelier. All rights reserved.</span>
          <span>Crafted with intention.</span>
        </div>
      </div>
    </footer>
  );
}
