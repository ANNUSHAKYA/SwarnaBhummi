import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#263D2C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://swarnabhummi.in"),
  title: "Swarna Bhummi | Luxury Marriage Hall & Lawn, Jaunpur",
  description:
    "Experience grandeur at Swarna Bhummi Marriage Hall & Lawn, Jaunpur. Featuring a 17,000 sq.ft. garden lawn, 2,000 sq.ft. AC indoor banquet hall, 9 luxury VIP suites, 2 stages, and 20,000 sq.ft. parking.",
  keywords: [
    "Swarna Bhummi",
    "Marriage Hall Jaunpur",
    "Wedding Lawn Jaunpur",
    "Wedding Venue Uttar Pradesh",
    "Banquet Hall Jaunpur",
    "Best Marriage Lawn Rampur Jaunpur",
    "Indian Wedding Venue 3D",
  ],
  authors: [{ name: "Swarna Bhummi" }],
  openGraph: {
    title: "Swarna Bhummi Marriage Hall & Lawn | Where Every Celebration Becomes a Memory",
    description:
      "A premier destination for weddings, receptions, and memorable celebrations in Jaunpur, Uttar Pradesh. Explore our venue in interactive 3D.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/venue/building-night.jpg",
        width: 1200,
        height: 630,
        alt: "Swarna Bhummi Marriage Hall & Lawn Facade",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased bg-[#F7F0E4] text-[#252720] selection:bg-[#C9A96E]/30 selection:text-[#263D2C]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
