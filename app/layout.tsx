import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Recursos para docentes de Primaria y Educación Física`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    title: siteConfig.name,
    description: siteConfig.description
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        {/*
          Google AdSense: cuando tu cuenta esté aprobada, descomenta el script
          siguiente y sustituye ca-pub-XXXXXXXXXXXXXXXX por tu client ID real
          (también en lib/site.ts -> siteConfig.adsense.client).

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
            crossOrigin="anonymous"
          />
        */}
      </head>
      <body>
        {/*
          Google Analytics (GA4): sustituye G-XXXXXXXXXX en lib/site.ts,
          añade arriba `import Script from "next/script";` y descomenta
          este bloque para activar el seguimiento de visitas.

          <Script src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.analytics.gaId}');
            `}
          </Script>
        */}

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
