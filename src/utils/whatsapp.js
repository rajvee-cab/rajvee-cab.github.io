/**
 * Generates clean, professional, and readable WhatsApp inquiry URLs for Rajvee Cab
 */

const RAJVEE_PHONE = '919737872972';

export function formatWhatsAppBooking({
  tripType = 'One Way',
  carType = 'Swift Dzire (Sedan)',
  pickup = 'Rajkot',
  drop = 'Ahmedabad',
  date = 'Immediate / Today',
  phone = '',
}) {
  const parts = [
    '🚕 *RAJVEE CAB - CAB BOOKING INQUIRY*',
    '',
    `📍 *Pickup:* ${pickup}`,
    `🏁 *Drop:* ${drop}`,
    `🚗 *Vehicle:* ${carType}`,
    `🧭 *Trip Type:* ${tripType}`,
    `📅 *Date:* ${date || 'Immediate / Today'}`,
  ];

  if (phone && phone !== 'WhatsApp Lead') {
    parts.push(`📞 *Customer Phone:* ${phone}`);
  }

  parts.push('');
  parts.push('Hello Rajvee Cab! Please share the best fare quote and confirm cab availability. Thank you!');

  return `https://wa.me/${RAJVEE_PHONE}?text=${encodeURIComponent(parts.join('\n'))}`;
}

export function formatWhatsAppRoute({ from, to, fare = '' }) {
  const parts = [
    '🚕 *RAJVEE CAB - ROUTE INQUIRY*',
    '',
    `📍 *Pickup:* ${from}`,
    `🏁 *Destination:* ${to}`,
  ];

  if (fare) {
    parts.push(`🏷️ *Estimated Fare:* ${fare}`);
  }

  parts.push('');
  parts.push(`Hello! I want to inquire about a cab from ${from} to ${to}. Please share available car options and final rate.`);

  return `https://wa.me/${RAJVEE_PHONE}?text=${encodeURIComponent(parts.join('\n'))}`;
}

export function formatWhatsAppCar({ name, category = '', rate = '' }) {
  const parts = [
    '🚕 *RAJVEE CAB - CAR BOOKING*',
    '',
    `🚗 *Vehicle:* ${name}${category ? ` (${category})` : ''}`,
  ];

  if (rate) {
    parts.push(`🏷️ *Tariff:* ${rate}`);
  }

  parts.push('');
  parts.push(`Hello! I want to book ${name}. Please confirm availability and share fare details.`);

  return `https://wa.me/${RAJVEE_PHONE}?text=${encodeURIComponent(parts.join('\n'))}`;
}

export function formatWhatsAppCity(cityName) {
  const parts = [
    '🚕 *RAJVEE CAB - CITY INQUIRY*',
    '',
    `📍 *Location:* ${cityName}, Gujarat`,
    '🕒 *Service:* 24x7 Doorstep Cab & Airport Transfer',
    '',
    `Hello Rajvee Cab! I need a cab in/from ${cityName}. Please share available routes and fare details.`,
  ];

  return `https://wa.me/${RAJVEE_PHONE}?text=${encodeURIComponent(parts.join('\n'))}`;
}

export function formatWhatsAppGeneral(purpose = 'Cab Booking') {
  const parts = [
    '🚕 *RAJVEE CAB - 24x7 DESK*',
    '',
    `Hello Rajvee Cab! I want to inquire about ${purpose}.`,
    'Please connect me with your 24x7 booking desk.',
  ];

  return `https://wa.me/${RAJVEE_PHONE}?text=${encodeURIComponent(parts.join('\n'))}`;
}

export function formatWhatsAppRouteCar({ from, to, car, fare = '' }) {
  const parts = [
    '🚕 *RAJVEE CAB - ROUTE BOOKING*',
    '',
    `📍 *Route:* ${from} ➔ ${to}`,
    `🚗 *Vehicle:* ${car}`,
  ];

  if (fare) {
    parts.push(`🏷️ *Tariff / Fare:* ${fare}`);
  }

  parts.push('');
  parts.push(`Hello Rajvee Cab! I want to book a ${car} from ${from} to ${to}. Please confirm cab availability and total fare.`);

  return `https://wa.me/${RAJVEE_PHONE}?text=${encodeURIComponent(parts.join('\n'))}`;
}

