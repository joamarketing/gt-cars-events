import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GT Cars Events — Exclusief Rijdevenement | 13 September 2026",
  description:
    "Beleef de ultieme rijervaring op 13 september 2026. GT Cars Events organiseert exclusieve rijevents met Ferrari, Lamborghini, Mercedes en meer.",
  openGraph: {
    title: "GT Cars Events — 13 September 2026",
    description: "Exclusief rijdevenement met de meest uitzonderlijke wagens.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-obsidian text-ivory antialiased">{children}</body>
    </html>
  );
}
