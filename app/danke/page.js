export const metadata = {
  title: 'Danke – Navi Umzug',
  description: 'Vielen Dank — Ihre Anfrage wurde erfolgreich gesendet.',
  robots: 'noindex'
};

import ConversionTrigger from '../../components/ConversionTrigger';

export default function DankePage() {
  return (
    <main style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'60vh',padding:'2rem'}}>
      <ConversionTrigger />
      <div style={{maxWidth:720,textAlign:'center'}}>
        <h1>Vielen Dank</h1>
        <p>Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns so schnell wie möglich bei Ihnen.</p>
        <p>
          <a href="/" style={{color:'#0b66c3',textDecoration:'underline'}}>Zurück zur Startseite</a>
        </p>
      </div>
    </main>
  );
}
