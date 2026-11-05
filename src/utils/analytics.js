/**
 * Google Analytics 4 (GA4) Event Tracking Helper for Rajvee Cab
 */

export function trackEvent(eventName, eventParams = {}) {
  try {
    if (typeof window !== 'undefined') {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventParams);
      } else if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: eventName,
          ...eventParams,
        });
      }
    }
  } catch (_) {}
}

export function trackLeadSubmission(params = {}) {
  trackEvent('generate_lead', {
    event_category: 'Booking',
    event_label: `${params.pickup || ''} to ${params.drop || ''}`,
    trip_type: params.tripType || '',
    car_type: params.carType || '',
    pickup: params.pickup || '',
    drop: params.drop || '',
    currency: 'INR',
  });
}

export function trackCallClick(source = 'general') {
  trackEvent('click_to_call', {
    event_category: 'Contact',
    event_label: source,
    method: 'phone',
  });
  trackEvent('phone_call_click', {
    event_category: 'Contact',
    event_label: source,
  });
  trackEvent('generate_lead', {
    event_category: 'Lead',
    event_label: `Phone Call (${source})`,
    method: 'phone',
  });
}

export function trackWhatsAppClick(source = 'general') {
  trackEvent('click_to_whatsapp', {
    event_category: 'Contact',
    event_label: source,
    method: 'whatsapp',
  });
  trackEvent('whatsapp_click', {
    event_category: 'Contact',
    event_label: source,
  });
  trackEvent('generate_lead', {
    event_category: 'Lead',
    event_label: `WhatsApp (${source})`,
    method: 'whatsapp',
  });
}
