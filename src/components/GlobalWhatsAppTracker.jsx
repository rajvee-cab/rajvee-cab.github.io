'use client';
import { useEffect } from 'react';
import { recordLeadToGoogleSheet } from '@/utils/leads';
import { trackWhatsAppClick } from '@/utils/analytics';

/**
 * Global WhatsApp Click Tracker for Rajvee Cab
 * Captures 100% of WhatsApp clicks across the entire site (Navbar, Hero, Fleet,
 * Routes, City pages, Sticky Bar, Footer) and automatically records each lead
 * into Google Sheets and Google Analytics 4 in real time!
 */
export default function GlobalWhatsAppTracker() {
  useEffect(() => {
    const handleDocumentClick = (e) => {
      // Find closest anchor tag clicked
      const anchor = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';

      // Match WhatsApp links
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        try {
          let text = '';
          try {
            const urlObj = new URL(href, window.location.href);
            const rawText = urlObj.searchParams.get('text') || '';
            text = decodeURIComponent(rawText);
          } catch (_) {
            text = href;
          }

          let tripType = 'WhatsApp Click';
          let pickup = 'Rajkot / Gujarat';
          let drop = 'Gujarat Outstation';
          let carType = 'Swift Dzire (Sedan)';
          const date = 'Immediate / Today';

          const pickupMatch = text.match(/Pickup:\*?\s*([^\n\r]+)/i);
          const dropMatch = text.match(/(?:Destination|Drop):\*?\s*([^\n\r]+)/i);
          const routeMatch = text.match(/Route:\*?\s*([^\n\r➔\->]+)(?:➔|->)\s*([^\n\r]+)/i);
          const vehicleMatch = text.match(/Vehicle:\*?\s*([^\n\r]+)/i);
          const locationMatch = text.match(/Location:\*?\s*([^\n\r]+)/i);
          const purposeMatch = text.match(/inquire about ([^\n\r.]+)/i);
          const fareMatch = text.match(/(?:Tariff|Fare):\*?\s*([^\n\r]+)/i);

          if (routeMatch) {
            pickup = routeMatch[1].trim();
            drop = routeMatch[2].trim();
            tripType = 'Route Inquiry';
          } else {
            if (pickupMatch) pickup = pickupMatch[1].trim();
            if (dropMatch) drop = dropMatch[1].trim();
          }

          if (vehicleMatch) {
            carType = vehicleMatch[1].trim();
          } else if (fareMatch) {
            carType = fareMatch[1].trim();
          }

          if (locationMatch) {
            pickup = locationMatch[1].trim();
            drop = 'Outstation / Local';
            tripType = 'City Inquiry';
          }

          if (purposeMatch) {
            tripType = `WhatsApp: ${purposeMatch[1].trim()}`;
          }

          const btnLabel = (anchor.innerText || anchor.getAttribute('aria-label') || '').trim();
          if (btnLabel && tripType === 'WhatsApp Click') {
            tripType = `WhatsApp (${btnLabel.replace(/\s+/g, ' ').slice(0, 30)})`;
          }

          // If on a specific route or city page, use page context for fallback
          if (typeof document !== 'undefined' && document.title && pickup === 'Rajkot / Gujarat') {
            const pageName = document.title.split('|')[0].trim();
            if (pageName) pickup = pageName;
          }

          // 1. Record lead to Google Sheets (Google Excel)
          recordLeadToGoogleSheet({
            tripType,
            pickup,
            drop,
            carType,
            date,
          });

          // 2. Track event in Google Analytics 4
          trackWhatsAppClick(btnLabel || tripType);
        } catch (_) {}
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, []);

  return null;
}
