import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.scss";
import Footer from "./sections/footer/footer";
import FloatingMenu from "./components/generic/floating_menu/floatingMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ondare | Fisioterapia y Salud de la Mujer",
  description: "Centro especializado en Fisioterapia del suelo pélvico, preparación al parto y rehabilitación postparto en Donostia / San Sebastián",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
