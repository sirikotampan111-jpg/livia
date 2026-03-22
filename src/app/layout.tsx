import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Livia Real Estate | Rumah Nyaman & Strategis di Tangerang - Springhill Yume Lagoon",
  description: "Hunian siap huni, bebas banjir, dekat fasilitas & harga terjangkau. Springhill Yume Lagoon - Perumahan modern di Cisauk Tangerang dengan luas 15 hektar dan area hijau 1.2 hektar. Langsung dari sales resmi developer.",
  keywords: ["rumah Tangerang", "rumah murah Tangerang", "jual rumah Tangerang", "rumah siap huni Tangerang", "perumahan Tangerang", "rumah bebas banjir Tangerang", "Springhill Yume Lagoon", "Livia Real Estate"],
  authors: [{ name: "Livia Real Estate" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Livia Real Estate | Rumah Nyaman & Strategis di Tangerang",
    description: "Hunian siap huni, bebas banjir, dekat fasilitas & harga terjangkau di Springhill Yume Lagoon",
    url: "https://liviarealestate.com",
    siteName: "Livia Real Estate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Livia Real Estate | Rumah Nyaman & Strategis di Tangerang",
    description: "Hunian siap huni, bebas banjir, dekat fasilitas & harga terjangkau",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
