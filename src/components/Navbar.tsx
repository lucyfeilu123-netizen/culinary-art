"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  const navLinks = [
    { href: "#philosophy", label: "Philosophy" },
    { href: "#menu", label: "Menu" },
    { href: "#chef", label: "Chef" },
    { href: "#reserve", label: "Reserve" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-500 ${
          scrolled ? "top-3" : ""
        }`}
        style={{ transitionTimingFunction: "var(--ease-smooth)" }}
      >
        <div
          className={`flex items-center gap-2 border border-[var(--border-subtle)] rounded-[var(--radius-pill)] py-2 pl-7 pr-2 transition-shadow duration-500`}
          style={{
            background: "var(--overlay-glass)",
            backdropFilter: "blur(20px) saturate(1.6)",
            WebkitBackdropFilter: "blur(20px) saturate(1.6)",
            boxShadow: scrolled
              ? "var(--shadow-elevated)"
              : "var(--shadow-soft)",
            transitionTimingFunction: "var(--ease-smooth)",
          }}
        >
          <a
            href="#"
            className="mr-3 whitespace-nowrap text-lg font-bold tracking-[0.12em]"
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "var(--espresso)",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            ATELIER
          </a>

          <div className="hidden md:flex items-center gap-7 mr-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.8125rem] font-medium whitespace-nowrap transition-colors duration-400 hover:text-[var(--terracotta)]"
                style={{
                  color: "var(--espresso-mid)",
                  transitionTimingFunction: "var(--ease-smooth)",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <button
            className="hidden md:block"
            aria-label="Book a Table"
            onClick={() => scrollTo("#reserve")}
          >
            <span
              className="inline-flex items-center rounded-[var(--radius-pill)] p-[3px] transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "var(--terracotta)",
                transitionTimingFunction: "var(--ease-smooth)",
              }}
            >
              <span
                className="inline-flex items-center rounded-[var(--radius-pill)] px-[22px] py-[10px] text-[0.8125rem] font-semibold text-[var(--cream)] transition-colors duration-400"
                style={{
                  background: "var(--terracotta)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.12)",
                  transitionTimingFunction: "var(--ease-smooth)",
                }}
              >
                Book a Table
              </span>
            </span>
          </button>

          <button
            className="flex md:hidden flex-col justify-center items-center w-11 h-11 gap-1.5 bg-transparent border-none cursor-pointer"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block w-5 h-0.5 rounded-sm transition-transform duration-400"
              style={{
                background: "var(--espresso)",
                transitionTimingFunction: "var(--ease-smooth)",
                transformOrigin: "center",
                transform: menuOpen
                  ? "translateY(4px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 rounded-sm transition-transform duration-400"
              style={{
                background: "var(--espresso)",
                transitionTimingFunction: "var(--ease-smooth)",
                transformOrigin: "center",
                transform: menuOpen
                  ? "translateY(-4px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] flex flex-col justify-center items-center gap-10 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(250, 247, 242, 0.92)",
          backdropFilter: "blur(40px) saturate(1.5)",
          WebkitBackdropFilter: "blur(40px) saturate(1.5)",
          transitionTimingFunction: "var(--ease-smooth)",
        }}
      >
        {[...navLinks, { href: "#reserve", label: "Book a Table" }].map(
          (l, i) => (
            <a
              key={l.label + i}
              href={l.href}
              className="text-[2.5rem] font-semibold transition-all duration-500 hover:text-[var(--terracotta)]"
              style={{
                fontFamily: "var(--font-playfair), serif",
                color: "var(--espresso)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(24px)",
                transitionDelay: menuOpen ? `${0.1 + i * 0.05}s` : "0s",
                transitionTimingFunction: "var(--ease-smooth)",
              }}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l.href);
              }}
            >
              {l.label}
            </a>
          )
        )}
      </div>
    </>
  );
}
