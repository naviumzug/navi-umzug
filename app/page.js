import Image from 'next/image';

const phone = '04084609605';
const mobile = '015565635650';
const whatsapp = '4915565635650';
const reviewUrl = 'https://maps.app.goo.gl/ckHjDCTyzEW8LDAd8?g_st=ic';

const services = [
  ['Umzüge', 'Privat- und Firmenumzüge mit Planung, Transport, Ab- und Aufbau.'],
  ['Entrümpelungen', 'Wohnung, Keller, Dachboden oder Büro – fachgerecht und besenrein.'],
  ['Haushaltsauflösungen', 'Komplettlösungen inklusive Räumung und fachgerechter Entsorgung.'],
  ['Möbelmontage', 'Demontage und Montage von Möbeln aller Art.'],
  ['Transport & Abholung', 'Zuverlässiger Transport von Möbeln und Gegenständen.'],
  ['Renovierung', 'Renovierungsarbeiten nach Absprache und passend zu Ihrem Auftrag.']
];

const steps = [
  ['01', 'Anfrage stellen', 'Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Formular.'],
  ['02', 'Besichtigung', 'Wir besprechen den Aufwand und besichtigen bei Bedarf vor Ort.'],
  ['03', 'Planung & Angebot', 'Transparentes Angebot und Terminvereinbarung.'],
  ['04', 'Durchführung', 'Sorgfältige Durchführung inklusive Ab- und Aufbau sowie Entsorgung.']
];

const gallery = [
  ['/images/vorher-nachher-dachboden.jpeg', 'Dachboden'],
  ['/images/vorher-nachher-wohnzimmer.jpeg', 'Wohnzimmer'],
  ['/images/vorher-nachher-flur.jpeg', 'Flur']
];

function Header() {
  return (
    <header className="header">
      <a href="#start" className="brand">
        <Image src="/images/logo.png" alt="Navi Umzug Logo" width={300} height={90} priority />
      </a>
      <nav>
        <a href="#leistungen">Leistungen</a>
        <a href="#ueber-uns">Über uns</a>
        <a href="#ablauf">Ablauf</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a className="btn small" href={`tel:${mobile}`}>Jetzt anrufen</a>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section id="start" className="hero">
        <Image
          src="/images/team-fuhrpark.jpeg"
          alt="Navi Umzug Team mit Transportern"
          fill
          priority
          className="heroImg"
        />
        <div className="overlay" />
        <div className="heroContent">
          <p className="eyebrow">Hamburg & Umgebung · 24 Stunden erreichbar</p>
          <h1>
            Umzug & Entrümpelung
            <br />
            <span>zuverlässig aus einer Hand.</span>
          </h1>
          <p>
            Umzüge, Entrümpelungen, Haushaltsauflösungen, Möbelmontage und Transporte – transparent,
            sorgfältig und stressfrei.
          </p>
          <div className="actions">
            <a className="btn" href="#kontakt">Kostenloses Angebot</a>
            <a className="btn ghost" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp schreiben</a>
          </div>
          <div className="trust">
            <span>✓ Kostenlose Besichtigung</span>
            <span>✓ Faire Angebote</span>
            <span>✓ Kurzfristige Termine</span>
          </div>
        </div>
      </section>

      <section id="leistungen" className="section">
        <p className="eyebrow gold">Leistungen</p>
        <h2>Alles rund um Umzug & Entrümpelung</h2>
        <div className="grid services">
          {services.map(([t, d]) => (
            <article className="card" key={t}>
              <div className="icon">◆</div>
              <h3>{t}</h3>
              <p>{d}</p>
              <a href="#kontakt">Anfragen →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="ueber-uns" className="section split darkPanel">
        <div>
          <p className="eyebrow gold">Über uns</p>
          <h2>Ihr zuverlässiges Team in Hamburg</h2>
          <p>
            Navi Umzug steht für Zuverlässigkeit, Transparenz und sorgfältige Arbeit. Unser Team begleitet Sie
            von der Planung bis zur Übergabe – zuverlässig und fair.
          </p>
        </div>
        <Image src="/images/team-lkw.jpeg" alt="Navi Umzug Team im LKW" width={900} height={1100} className="rounded" />
      </section>

      <section id="ablauf" className="section">
        <p className="eyebrow gold">Ablauf</p>
        <h2>In vier Schritten zum fertigen Auftrag</h2>
        <div className="grid steps">
          {steps.map(([num, title, desc]) => (
            <article className="step" key={num}>
              <div className="num">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery">
        <p className="eyebrow gold">Echte Projekte</p>
        <h2>Vorher & Nachher</h2>
        <p className="lead">Einblicke in echte Entrümpelungsarbeiten aus unserem Alltag.</p>
        <div className="grid beforeAfter">
          {gallery.map(([src, alt]) => (
            <figure key={src} className="beforeAfterItem">
              <Image src={src} alt={alt} width={600} height={400} />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section reviews">
        <p className="eyebrow gold">Bewertungen</p>
        <h2>Das sagen unsere Kunden</h2>
        <div className="reviewBox">
          <div className="stars">★★★★★</div>
          <p>Unsere aktuellen Google-Bewertungen finden Sie direkt in unserem Unternehmensprofil.</p>
          <a className="btn" href={reviewUrl} target="_blank" rel="noreferrer">Zu den Bewertungen</a>
        </div>
      </section>

      <section id="kontakt" className="section contact">
        <div>
          <p className="eyebrow gold">Kontakt</p>
          <h2>Jetzt kostenlos anfragen</h2>
          <p>Wir sind Montag bis Sonntag rund um die Uhr erreichbar.</p>
          <div className="contactList">
            <a href={`tel:${phone}`}>Festnetz: 040 84609605</a>
            <a href={`tel:${mobile}`}>Mobil: 0155 65635650</a>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

        <form action="mailto:info@naviumzug.com" method="post" encType="text/plain" className="form">
          <label>
            Name
            <input name="Name" required />
          </label>
          <label>
            Telefon
            <input name="Telefon" required />
          </label>
          <label>
            E-Mail
            <input type="email" name="E-Mail" />
          </label>
          <label>
            Leistung
            <select name="Leistung">
              <option>Umzüge</option>
              <option>Entrümpelungen</option>
              <option>Haushaltsauflösungen</option>
              <option>Möbelmontage</option>
              <option>Transport & Abholung</option>
              <option>Renovierung</option>
            </select>
          </label>
          <label>
            Nachricht
            <textarea name="Nachricht" />
          </label>
          <button className="btn" type="submit">Senden</button>
        </form>
      </section>

      <section className="map">
        <iframe
          title="Standort Navi Umzug"
          loading="lazy"
          src="https://www.google.com/maps?q=Karl-R%C3%BCther-Stieg+7,+21035+Hamburg&output=embed"
        />
      </section>

      <footer className="footer">
        <Image src="/images/logo.png" alt="Navi Umzug" width={240} height={80} />
        <div>
          <strong>Navi Umzug</strong>
          <br />Inhaber: Asif Asif
          <br />Karl-Rüther-Stieg 7 · 21035 Hamburg
        </div>
        <div>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </footer>

      <div className="floating">
        <a href={`tel:${mobile}`} aria-label="Anrufen">☎</a>
        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
      </div>
    </main>
  );
}
