import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-vercel-domain.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mosaic Tile Collection | Da Vinci Ceramics Sri Lanka",
    template: "%s | Da Vinci Ceramics",
  },
  description:
    "Explore mosaic tile design inspiration for bathrooms, kitchens, pools and feature walls. Contact Da Vinci Ceramics Sri Lanka on WhatsApp to enquire about the Mosaic Collection.",
  applicationName: "Da Vinci Ceramics Mosaic Collection",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "/",
    siteName: "Da Vinci Ceramics",
    title: "Mosaic Tile Collection | Da Vinci Ceramics Sri Lanka",
    description:
      "Discover mosaic tile inspiration for considered spaces. Enquire with Da Vinci Ceramics about the Mosaic Collection.",
    images: [{ url: "/og-mosaic.svg", width: 1200, height: 630, alt: "Da Vinci Ceramics Mosaic Collection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosaic Tile Collection | Da Vinci Ceramics Sri Lanka",
    description: "Mosaic tile inspiration for bathrooms, kitchens, pools and feature walls.",
    images: ["/og-mosaic.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f1e9",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Da Vinci Ceramics",
  url: siteUrl,
  email: "davinciceramics.digital@gmail.com",
  description: "Ceramics brand presenting a Mosaic Tile Collection for the Sri Lankan market.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-LK">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
