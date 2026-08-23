import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xmedia Print & Technologies | Printing in Douala",
  description:
    "Bold, dependable printing in Douala: banners, business cards, flyers, brochures, custom apparel, signage and more.",
  keywords: [
    "printing Douala",
    "Xmedia Printing",
    "banners Cameroon",
    "business cards Douala",
    "brochures",
    "custom apparel",
  ],
  openGraph: {
    title: "Xmedia Print & Technologies",
    description: "Print boldly. Show up brilliantly.",
    type: "website",
    locale: "en_CM",
    alternateLocale: "fr_CM",
  },
};

export const viewport: Viewport = {
  themeColor: "#071a37",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
