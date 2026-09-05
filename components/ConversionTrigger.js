"use client";
import { useEffect } from 'react';

export default function ConversionTrigger() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let sent = false;

    const trySend = () => {
      if (sent) return;
      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', { send_to: 'AW-18068033913/EGs4CK6o_6IcEPmiwadD' });
          sent = true;
        } else {
          // If gtag not yet available but dataLayer exists, push so the tag library can pick it up later.
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'conversion', send_to: 'AW-18068033913/EGs4CK6o_6IcEPmiwadD' });
          sent = true;
        }
      } catch (e) {
        // swallow errors to avoid breaking the page
      }
    };

    // Try immediately and then poll until success or timeout to handle tag loading timing.
    trySend();
    const interval = setInterval(() => {
      if (sent) {
        clearInterval(interval);
        return;
      }
      trySend();
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
