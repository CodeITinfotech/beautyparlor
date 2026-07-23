import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { businessInfo } from "@/data/business";
import { localBusinessSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL('https://codeitinfotech.io/beautyparlor'),
  title: {
    default: `${businessInfo.name} | Professional Beauty Services & Bridal Makeup`,
    template: `%s | ${businessInfo.name}`,
  },
  description: businessInfo.description,
  keywords: [
    'beauty parlour',
    'makeup artist',
    'bridal makeup',
    'party makeup',
    'hair styling',
    'facial',
    'beauty salon',
    'beauty studio',
    'nail art',
    'skin care',
    'beauty services',
    'Mumbai beauty parlour',
  ],
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://codeitinfotech.io/beautyparlor',
    siteName: businessInfo.name,
    title: `${businessInfo.name} | Professional Beauty Services & Bridal Makeup`,
    description: businessInfo.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: businessInfo.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: businessInfo.name,
    description: businessInfo.description,
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
