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
        <link rel="stylesheet" href="https://chatbot-widget.trustoo.nl/trustoo-chatbot.css" />
        <Script
          src="https://chatbot-widget.trustoo.nl/trustoo-chatbot.iife.js"
          strategy="afterInteractive"
          data-id="YoDjaJ8hLqb_jreYuMubaEZ5-NXhTX-Jrvq6BBB_DkoGug"
          data-country-code="DE"
          data-language-code="de"
          data-main-language="de"
          data-bot-name="Navi Umzug &amp; Entrümpelung"
          data-avatar-color="#1F6FEB"
          data-primary-color="#18B486"
          data-launcher-icon="chat_filled"
          data-enable-callback="true"
          data-enable-whatsapp="true"
          data-enable-quote="true"
          data-enable-appointment="false"
          data-enable-ai="true"
          data-whatsapp-number="015565635650"
          data-quote-fields="name,phone,email,project"
          data-welcome-message="Hallo, ich bin Navi Umzug &amp; Entrümpelung, der virtuelle Assistent von Navi Umzug &amp; Entrümpelung. Wie kann ich Ihnen helfen?"
          data-teaser-enabled="true"
          data-teaser-text="👋 Sie möchten ein individuelles Angebot? Ich helfe Ihnen gerne!"
          data-auto-open="true"
          data-auto-open-delay="5"
          data-knowledge="Nenne dem Kunden niemals konkrete Preise, Preisbeispiele, Schätzungen oder ungefähre Kosten.&#10;&#10;Erkläre immer freundlich, dass die Preise individuell berechnet werden und von der Menge, dem Umfang und dem Aufwand des Auftrags abhängen.&#10;&#10;Frage den Kunden gezielt:&#10;&#10;* Was genau soll gemacht werden?&#10;* Um wie viele Teile oder Gegenstände handelt es sich?&#10;* Wie groß ist der Auftrag?&#10;* Gibt es besondere Wünsche oder Anforderungen?&#10;* Wo soll der Auftrag durchgeführt werden?&#10;&#10;Stelle die Fragen möglichst nacheinander und nicht alle auf einmal.&#10;&#10;Erfinde keine Preise und mache keine verbindlichen Zusagen zu Kosten.&#10;&#10;Sobald alle wichtigen Informationen vorliegen, frage nach dem Namen und einer Telefonnummer oder E-Mail-Adresse, damit wir dem Kunden ein individuelles Angebot erstellen können.&#10;&#10;Bleibe immer freundlich, professionell und hilfsbereit. Ziel ist es, möglichst viele qualifizierte Kundenanfragen zu sammeln."
          data-tone="friendly"
          data-address-form="u"
          data-auto-init="true"
        />
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
