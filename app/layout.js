import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Navi Umzug und Entrümpelungsservice | Hamburg',
  description: 'Navi Umzug und Entrümpelungsservice: Umzüge, Entrümpelungen, Haushaltsauflösungen, Möbelmontage, Transporte und Servicearbeiten in Hamburg und Umgebung.',
  metadataBase: new URL('https://www.naviumzug.de'),
  openGraph: {
    title: 'Navi Umzug und Entrümpelungsservice',
    description: 'Zuverlässig, transparent und rund um die Uhr erreichbar in Hamburg.',
    url: 'https://www.naviumzug.de',
    siteName: 'Navi Umzug und Entrümpelungsservice',
    locale: 'de_DE',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18068033913"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18068033913');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
