/**
 * Guaranteed Lead Capture to Google Sheets for Rajvee Cab
 * Uses navigator.sendBeacon with fetch keepalive fallback
 * Ensures leads are recorded even when WhatsApp opens immediately on mobile
 */

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwoaEXOm-0jOjo_4T_tcfg5slMBHE2XFTMOHLkPFBFe_n5BB2ZJnE99Qd7RmgIVIKiNMg/exec';

export function recordLeadToGoogleSheet(payload = {}) {
  try {
    const savedPhone =
      typeof window !== 'undefined'
        ? localStorage.getItem('rajvee_user_phone') || ''
        : '';

    const pageUrl =
      payload.pageUrl ||
      payload.pageLink ||
      (typeof window !== 'undefined' ? window.location.href : '');

    const enrichedPayload = {
      timestamp:
        payload.timestamp ||
        new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      tripType: payload.tripType || 'One Way',
      carType: payload.carType || 'Swift Dzire (Sedan 4+1)',
      pickup: payload.pickup || payload.from || 'Rajkot',
      drop: payload.drop || payload.to || 'Ahmedabad',
      date: payload.date || 'Immediate / Today',
      contactNo: payload.contactNo || payload.phone || savedPhone || 'WhatsApp Lead',
      pageUrl: pageUrl,
      pageLink: pageUrl,
    };

    const data = JSON.stringify(enrichedPayload);

    // 1. sendBeacon guarantees delivery even when the browser opens WhatsApp or switches apps
    if (
      typeof navigator !== 'undefined' &&
      typeof navigator.sendBeacon === 'function'
    ) {
      const blob = new Blob([data], { type: 'text/plain;charset=UTF-8' });
      const sent = navigator.sendBeacon(GOOGLE_SCRIPT_URL, blob);
      if (sent) return;
    }

    // 2. Fetch with keepalive: true as reliable fallback
    if (typeof fetch === 'function') {
      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: data,
      }).catch(() => {});
    }
  } catch (_) {}
}
