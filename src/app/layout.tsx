import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Cinzel, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BackgroundAtmosphere } from "@/components/BackgroundAtmosphere";
import { BottomNav } from "@/components/BottomNav";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { withBasePath } from "@/lib/base-path";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const siteUrl = "https://bunker-bar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BUNKER — секретний коктейльний бар в Одесі",
    template: "%s · BUNKER",
  },
  description:
    "BUNKER — бар, кухня та коктейлі у переобладнаному воєнному бункері. Маяковського 1, Одеса. Industrial luxury атмосфера, авторські коктейлі та віскі.",
  keywords: [
    "бар Одеса",
    "коктейльний бар",
    "BUNKER",
    "бар бункер",
    "кальян Одеса",
    "віскі бар",
  ],
  applicationName: "BUNKER",
  authors: [{ name: "BUNKER" }],
  icons: {
    icon: withBasePath("/favicon.ico"),
  },
  manifest: withBasePath("/manifest.webmanifest"),
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: "BUNKER",
    title: "BUNKER — секретний коктейльний бар в Одесі",
    description:
      "Бар · Кухня · Коктейлі. Маяковського 1, Одеса. Атмосфера воєнного бункера, бронза, віскі та авторські коктейлі.",
    images: [
      {
        url: withBasePath("/gallery/01.svg"),
        width: 900,
        height: 1200,
        alt: "BUNKER — інтер'єр бару",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUNKER — секретний коктейльний бар в Одесі",
    description: "Бар · Кухня · Коктейлі. Маяковського 1, Одеса.",
    images: [withBasePath("/gallery/01.svg")],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "BUNKER",
  servesCuisine: "Cocktail Bar",
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Маяковського 1",
    addressLocality: "Одеса",
    addressCountry: "UA",
  },
  telephone: "+380000000000",
  url: siteUrl,
  priceRange: "$$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={`${bebas.variable} ${cinzel.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <SmoothScrollProvider>
          <BackgroundAtmosphere />
          <div className="vignette-overlay" />
          <div className="noise-overlay" />
          <main className="relative pb-20 sm:pb-24">{children}</main>
          <BottomNav />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

