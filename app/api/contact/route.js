import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    // Basic server-side validation
    const name = (data.name || data.Name || '').trim();
    const telefon = (data.telefon || data.Telefon || '').trim();
    const email = (data.email || data['E-Mail'] || '').trim();
    const leistung = data.leistung || data.Leistung || 'Umzüge';
    const nachricht = data.nachricht || data.Nachricht || '';

    if (!name || !telefon) {
      return new Response(JSON.stringify({ error: 'Name und Telefon sind erforderlich.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check SMTP configuration in environment
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const port = process.env.SMTP_PORT || 587;
    const secure = process.env.SMTP_SECURE === 'true';
    const from = process.env.FROM_EMAIL || `noreply@${process.env.VERCEL_URL || 'naviumzug.de'}`;
    const to = process.env.TO_EMAIL || 'info@naviumzug.com';

    if (!host || !user || !pass) {
      return new Response(JSON.stringify({ error: 'SMTP nicht konfiguriert. Bitte SMTP_HOST, SMTP_USER und SMTP_PASS als Environment-Variables setzen.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: secure || Number(port) === 465, // true for 465, false for other ports
      auth: { user, pass },
    });

    const subject = `Kontakt-Anfrage von ${name}`;
    const text = `Neue Kontaktanfrage\n\nName: ${name}\nTelefon: ${telefon}\nE-Mail: ${email}\nLeistung: ${leistung}\n\nNachricht:\n${nachricht}`;

    await transporter.sendMail({ from, to, subject, text });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error in /api/contact', err);
    // Always return JSON (avoid HTML error pages) so client can parse
    return new Response(JSON.stringify({ error: err.message || 'Interner Serverfehler' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
