import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Play your own Steam, Epic, GOG and more in the Cloud - Cloudy Pad",
  description: "Cloud gaming platform for Steam, Epic, GOG and more. Play your favorite games on any device without expensive hardware. Free trial available!",
  keywords: "cloud gaming, steam cloud gaming, epic cloud gaming, linux cloud gaming, gog cloud gaming, macos gaming, game streaming, sunshine, moonlight",
  openGraph: {
    title: "Play your own Steam, Epic, GOG and more in the Cloud - Cloudy Pad",
    description: "Cloud gaming platform for Steam, Epic, GOG and more. Play your favorite games on any device without expensive hardware. Free trial available!",
    type: "website",
    url: "https://cloudypad.gg",
    images: [
      {
        url: "/gamepad-cloud-2.png",
        width: 1200,
        height: 630,
        alt: "CloudyPad Cloud Gaming Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Play your own Steam, Epic, GOG and more in the Cloud - Cloudy Pad",
    description: "Cloud gaming platform for Steam, Epic, GOG and more. Play your favorite games on any device without expensive hardware. Free trial available!",
    images: ["/gamepad-cloud-2.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CloudyPad",
    "description": "Cloud gaming platform for Steam, Epic, GOG and more. Play your favorite games on any device without expensive hardware. Free trial available!",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser, Windows, Mac, Linux, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free trial available"
    },
    "creator": {
      "@type": "Organization",
      "name": "CloudyPad"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
