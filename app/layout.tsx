import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "@/lib/settings";
import { SiteSettingsProvider } from "@/components/SiteSettingsProvider";
import { parseScriptSnippet } from "@/lib/parseScriptSnippet";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const defaultGtmHead = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5V3XFN2S');
(function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=AW-17874951036';document.head.appendChild(s);})();
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17874951036');
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-17874951036/x3CoCN-MxvobEPy2uMtC',
    'event_callback': callback
  });
  return false;
}`;

const defaultGtmBody = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5V3XFN2S" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const head = parseScriptSnippet(settings.gtmHeadScript || defaultGtmHead);
  const body = parseScriptSnippet(settings.gtmBodyScript || defaultGtmBody);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {head.scripts.map((script, i) =>
          script.src ? (
            <script key={i} src={script.src} async={script.async} />
          ) : (
            <script key={i} dangerouslySetInnerHTML={{ __html: script.content || "" }} />
          )
        )}
        {head.markup && <div dangerouslySetInnerHTML={{ __html: head.markup }} />}
      </head>
      <body
        className={`${jost.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {body.scripts.map((script, i) =>
          script.src ? (
            <script key={i} src={script.src} async={script.async} />
          ) : (
            <script key={i} dangerouslySetInnerHTML={{ __html: script.content || "" }} />
          )
        )}
        {body.markup && <div dangerouslySetInnerHTML={{ __html: body.markup }} />}
        <SiteSettingsProvider settings={settings}>
          {children}
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
