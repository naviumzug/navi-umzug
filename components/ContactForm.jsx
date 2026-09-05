"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    telefon: "",
    email: "",
    leistung: "Umzüge",
    nachricht: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Robust parsing: accept only JSON; otherwise read text and surface helpful message
      const contentType = (res.headers.get("content-type") || "").toLowerCase();
      let data = null;
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(`Ungültige Server-Antwort (${res.status}): ${text.slice(0, 1000)}`);
      }

      if (!res.ok) throw new Error(data?.error || `Server antwortete mit ${res.status}`);

      setStatus("success");

      // Trigger Google Ads conversion only after successful send
      const sendTo = process.env.NEXT_PUBLIC_GOOGLE_CONVERSION || "AW-18068033913/CONVERSION_LABEL";
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        try {
          window.gtag("event", "conversion", { send_to: sendTo });
        } catch (err) {
          // don't block user flow on tracking errors
          console.warn("gtag conversion failed", err);
        }
      }

      // Optionally redirect to a thank-you page instead of inline message:
      // window.location.href = "/danke";
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(err.message || "Fehler beim Senden");
    }
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label>
        Name
        <input name="name" required value={form.name} onChange={onChange} />
      </label>

      <label>
        Telefon
        <input name="telefon" required value={form.telefon} onChange={onChange} />
      </label>

      <label>
        E-Mail
        <input type="email" name="email" value={form.email} onChange={onChange} />
      </label>

      <label>
        Leistung
        <select name="leistung" value={form.leistung} onChange={onChange}>
          <option>Umzüge</option>
          <option>Entrümpelungen</option>
          <option>Haushaltsauflösungen</option>
          <option>Möbelmontage</option>
          <option>Transport &amp; Abholung</option>
          <option>Renovierung</option>
        </select>
      </label>

      <label>
        Nachricht
        <textarea name="nachricht" value={form.nachricht} onChange={onChange} />
      </label>

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sende..." : "Senden"}
      </button>

      {status === "success" && (
        <div className="success" role="status">
          Vielen Dank — Ihre Nachricht wurde gesendet.
        </div>
      )}
      {status === "error" && (
        <div className="error" role="alert">Fehler beim Senden: {error}</div>
      )}
    </form>
  );
}
