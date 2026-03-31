import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelier — Culinary Art",
  description:
    "Where every plate is a canvas and every ingredient tells a story. A premium culinary experience crafted with intention.",
  metadataBase: new URL("https://culinary-art.vercel.app"),
  openGraph: {
    title: "Atelier — Culinary Art",
    description:
      "Where every plate is a canvas and every ingredient tells a story.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body style={{ fontFamily: "var(--font-jakarta), sans-serif" }}>
        {children}
        <NoiseOverlay />
      </body>
    </html>
  );
}
