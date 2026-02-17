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
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17874951036"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17874951036');
            `,
          }}
        />
      </head>
      <body
        className={`${jost.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
