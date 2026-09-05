"use client";
import { useEffect } from 'react';

export default function ConversionTrigger() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sendGtag = () => {
      try {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', { send_to: 'AW-18068033913/EGs4CK6o_6IcEPmiwadD' });
        } else {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'conversion', send_to: 'AW-18068033913/EGs4CK6o_6IcEPmiwadD' });
        }
      } catch (e) {
        // ignore errors to avoid breaking the page
      }
    };

    // Send once immediately and once after a short delay to account for loading timing
    sendGtag();
    const timer = setTimeout(sendGtag, 200);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
