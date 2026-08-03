# Navi Umzug Website

## Lokal starten

```bash
npm install
npm run dev
```

Dann `http://localhost:3000` öffnen.

## Auf GitHub hochladen

1. Alle Dateien und Ordner aus diesem Projekt in das Repository `navi-umzug` hochladen.
2. In Vercel das Repository importieren.
3. Framework Preset: Next.js (wird normalerweise automatisch erkannt).
4. Auf **Deploy** klicken.

## Domain verbinden

In Vercel: Project → Settings → Domains → `naviumzug.de` und `www.naviumzug.de` hinzufügen. Danach die von Vercel angezeigten DNS-Einträge beim Domain-Anbieter/Webador eintragen.

## Vor Veröffentlichung prüfen

- Telefonnummern, E-Mail und Adresse
- Impressum
- Datenschutzerklärung rechtlich prüfen lassen
- Kontaktformular: Aktuell öffnet es das lokale E-Mail-Programm. Für serverseitigen Versand später Formspree, Resend oder eine eigene API einrichten.
- Umsatzsteuer-ID nur eintragen, wenn tatsächlich vorhanden
