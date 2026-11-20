import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobile Tyre Service - Fast & Reliable Tyre Fitting",
  description: "Professional mobile tyre service at your location. Emergency callouts, same-day service, and expert tyre fitting available 24/7. Get your tyres fitted wherever you are.",
  keywords: ["mobile tyre service", "tyre fitting", "emergency tyre callout", "mobile mechanic", "tyre replacement", "24/7 tyre service"],
  authors: [{ name: "Mobile Tyre Service" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Mobile Tyre Service - Fast & Reliable Tyre Fitting",
    description: "Professional mobile tyre service at your location. Emergency callouts, same-day service, and expert tyre fitting available 24/7.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 1200,
        alt: "Mobile Tyre Service Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Tyre Service - Fast & Reliable Tyre Fitting",
    description: "Professional mobile tyre service at your location. Emergency callouts, same-day service, and expert tyre fitting available 24/7.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5V3XFN2S');`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1183789943911563"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${jost.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5V3XFN2S"
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
