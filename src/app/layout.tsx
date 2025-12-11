import type { Metadata } from "next";
import { Inter, Roboto_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SellanyMotor",
  description: "Professional vehicle selling and services platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} ${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded-md border bg-background px-3 py-2 text-sm shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
