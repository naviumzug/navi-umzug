import './globals.css';

export const metadata = {
  title: 'Navi Umzug | Umzug & Entrümpelung in Hamburg',
  description: 'Navi Umzug: Umzüge, Entrümpelungen, Haushaltsauflösungen, Möbelmontage und Transporte in Hamburg und Umgebung.',
  metadataBase: new URL('https://www.naviumzug.de'),
  openGraph: {
    title: 'Navi Umzug & Entrümpelung',
    description: 'Zuverlässig, transparent und rund um die Uhr erreichbar in Hamburg.',
    url: 'https://www.naviumzug.de',
    siteName: 'Navi Umzug',
    locale: 'de_DE',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
