import { FadeUp } from "./FadeUp";
import { SectionTag } from "./SectionTag";
import { ReservationForm } from "./ReservationForm";

const details = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Location",
    text: (
      <>
        742 Rue de la Gastronomie
        <br />
        San Francisco, CA 94102
      </>
    ),
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Telephone",
    text: "+1 (415) 738-2941",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Hours",
    text: (
      <>
        Wed &ndash; Sun: 6:00 PM &ndash; 11:00 PM
        <br />
        Mon &ndash; Tue: Closed
      </>
    ),
  },
];

export function Reservations() {
  return (
    <section
      id="reserve"
      className="py-40 max-md:py-24 max-sm:py-[72px]"
      style={{ background: "var(--espresso)", color: "var(--cream)" }}
    >
      <div className="max-w-[1320px] mx-auto px-12 max-lg:px-9 max-md:px-6 max-sm:px-5">
        <div className="grid grid-cols-2 gap-20 items-start max-lg:gap-12 max-md:grid-cols-1">
          <div>
            <FadeUp>
              <SectionTag light>Reservations</SectionTag>
            </FadeUp>
            <FadeUp delay={90}>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                  color: "var(--cream)",
                }}
              >
                Reserve Your
                <br />
                <em className="italic" style={{ color: "var(--terracotta)" }}>
                  Experience
                </em>
              </h2>
            </FadeUp>
            <FadeUp delay={180}>
              <p
                className="text-base max-w-[48ch] mb-12"
                style={{ color: "rgba(250,247,242,0.7)", lineHeight: 1.8 }}
              >
                We welcome guests for dinner service Wednesday through Sunday.
                Due to the intimate nature of our space, reservations are
                strongly encouraged. For parties of eight or more, please
                contact us directly.
              </p>
            </FadeUp>

            <div className="flex flex-col gap-5">
              {details.map((d, i) => (
                <FadeUp key={d.title} delay={270 + i * 90}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(250,247,242,0.08)",
                        border: "1px solid rgba(250,247,242,0.1)",
                        color: "var(--gold-muted)",
                      }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <h4
                        className="text-sm font-semibold mb-0.5 tracking-wide"
                        style={{ color: "var(--cream)" }}
                      >
                        {d.title}
                      </h4>
                      <p
                        className="text-[0.8125rem]"
                        style={{
                          color: "rgba(250,247,242,0.6)",
                          lineHeight: 1.6,
                        }}
                      >
                        {d.text}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={180}>
            <ReservationForm />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
