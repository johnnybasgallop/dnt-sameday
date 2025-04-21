import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DNT Sameday | Professional Courier & Delivery Services UK",
  description: "Bracknell-based courier service offering same-day, next-day, and urgent delivery solutions across the UK. Family-run with 30+ years experience.",
  keywords: "courier service, same day delivery, next day delivery, urgent freight, UK courier, Bracknell courier, logistics",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "DNT Sameday | Professional Courier & Delivery Services UK",
    description: "Bracknell-based courier service offering same-day, next-day, and urgent delivery solutions across the UK.",
    url: "https://www.dntsameday.co.uk",
    siteName: "DNT Sameday",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1614976523626-d598aafd4fda?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3",
        width: 1200,
        height: 630,
        alt: "DNT Sameday - Professional Courier Services",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
