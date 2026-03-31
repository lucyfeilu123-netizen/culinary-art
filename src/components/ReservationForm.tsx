"use client";

import { ButtonPrimary } from "./ButtonPrimary";

const inputStyle = {
  width: "100%",
  background: "var(--cream)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-inner)",
  padding: "14px 18px",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "0.9375rem",
  color: "var(--espresso)",
  outline: "none",
  transition:
    "border-color 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s cubic-bezier(0.22,1,0.36,1)",
  WebkitAppearance: "none" as const,
};

const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = "var(--terracotta)";
  e.target.style.boxShadow = "0 0 0 4px rgba(196,114,78,0.1)";
};
const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = "";
  e.target.style.boxShadow = "";
};

export function ReservationForm() {
  return (
    <div
      className="p-11 max-sm:p-7"
      style={{
        background: "var(--warm-white)",
        borderRadius: "var(--radius-outer)",
        boxShadow: "var(--shadow-elevated)",
      }}
    >
      <div className="mb-5">
        <label
          className="block text-xs font-semibold uppercase tracking-[0.06em] mb-2"
          style={{ color: "var(--espresso-mid)" }}
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="Your name"
          style={inputStyle}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5 max-sm:grid-cols-1">
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-[0.06em] mb-2"
            style={{ color: "var(--espresso-mid)" }}
          >
            Preferred Date
          </label>
          <input
            type="date"
            style={inputStyle}
            onFocus={focusHandler}
            onBlur={blurHandler}
          />
        </div>
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-[0.06em] mb-2"
            style={{ color: "var(--espresso-mid)" }}
          >
            Guests
          </label>
          <select
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={focusHandler as unknown as React.FocusEventHandler<HTMLSelectElement>}
            onBlur={blurHandler as unknown as React.FocusEventHandler<HTMLSelectElement>}
          >
            <option value="">Select</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
            <option value="7">7+ Guests</option>
          </select>
        </div>
      </div>

      <div className="mb-5">
        <label
          className="block text-xs font-semibold uppercase tracking-[0.06em] mb-2"
          style={{ color: "var(--espresso-mid)" }}
        >
          Email
        </label>
        <input
          type="email"
          placeholder="your@email.com"
          style={inputStyle}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
      </div>

      <div className="mb-5">
        <label
          className="block text-xs font-semibold uppercase tracking-[0.06em] mb-2"
          style={{ color: "var(--espresso-mid)" }}
        >
          Special Requests
        </label>
        <textarea
          rows={3}
          placeholder="Dietary requirements, celebrations, seating preferences..."
          style={{ ...inputStyle, resize: "vertical", minHeight: "80px" }}
          onFocus={focusHandler as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
          onBlur={blurHandler as unknown as React.FocusEventHandler<HTMLTextAreaElement>}
        />
      </div>

      <div className="mt-7">
        <ButtonPrimary fullWidth>Request Reservation</ButtonPrimary>
      </div>
    </div>
  );
}
