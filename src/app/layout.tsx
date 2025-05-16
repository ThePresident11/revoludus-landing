import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext"; // 👈 DODANO

// Lokalni fontovi
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata za stranicu
export const metadata: Metadata = {
  title: "Revoludus",
  description: "Revoludus Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <link rel="preload" href="/images/Americki-nogomet.svg" as="image" />
        <link rel="preload" href="/images/Futsal.svg" as="image" />
        <link rel="preload" href="/images/Hokej-na-ledu.svg" as="image" />
        <link rel="preload" href="/images/Hokej-na-travi.svg" as="image" />
        <link rel="preload" href="/images/Kosarka.svg" as="image" />
        <link rel="preload" href="/images/Nogomet.svg" as="image" />
        <link rel="preload" href="/images/Odbojka.svg" as="image" />
        <link rel="preload" href="/images/Ragbi.svg" as="image" />
        <link rel="preload" href="/images/Rukomet.svg" as="image" />
        <link rel="preload" href="/images/Tenis.svg" as="image" />
        <link rel="preload" href="/images/Vaterpolo.svg" as="image" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          {" "}
          {/* 👈 DODANO */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
