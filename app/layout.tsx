import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-body", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-display", display: "swap" });
export const metadata: Metadata = { metadataBase: new URL("https://nobodi.chat"), title: "NOBODI — Kim olduğunu söylemeden konuş", description: "Anonim mesajlar, yeni insanlar ve gerçek sohbetler. NOBODI çok yakında.", applicationName: "NOBODI", alternates: { canonical: "/" }, openGraph: { title: "NOBODI — Kim olduğunu söylemeden konuş", description: "Anonim mesajlar, yeni insanlar ve gerçek sohbetler. NOBODI çok yakında.", url: "/", siteName: "NOBODI", locale: "tr_TR", type: "website" }, twitter: { card: "summary_large_image", title: "NOBODI — Kim olduğunu söylemeden konuş", description: "Anonim mesajlar, yeni insanlar ve gerçek sohbetler. NOBODI çok yakında." }, icons: { icon: "/icon.svg" } };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080808", colorScheme: "dark" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="tr"><body className={`${manrope.variable} ${space.variable}`}>{children}</body></html>; }
