export const metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzinformationen',
};

export default function DatenschutzPage() {
  return (
    <main style={{padding: '2rem', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
      <h1>Datenschutz</h1>
      <p>Diese Seite enthält Informationen zum Datenschutz.</p>
      <section>
        <h2>Welche Daten wir sammeln</h2>
        <p>Beispieltext: Wir sammeln nur die notwendigen Daten zur Bereitstellung der Dienste.</p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>Bei Fragen zum Datenschutz kontaktieren Sie uns bitte.</p>
      </section>
    </main>
  );
}
