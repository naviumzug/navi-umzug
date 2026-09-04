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
};<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18068033913">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18068033913');
</script>

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
