import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { formatWhatsAppRoute } from '@/utils/whatsapp';
import { Phone, MessageCircle, Plane, Clock, MapPin, CheckCircle2, ShieldCheck, Car } from 'lucide-react';

export const metadata = {
  title: 'Rajkot to Hirasar Airport Cab | Fixed Fare Taxi Booking @ ₹699 - Rajvee Cab',
  description: 'Book Rajkot to Hirasar International Airport Cab (HSR) with Rajvee Cab. Lowest fixed fare starting @ ₹699. 24x7 doorstep flight pickup and drop. Clean AC Dzire, Ertiga, and Innova Crysta.',
  keywords: [
    'Rajkot to Hirasar airport cab',
    'Hirasar airport taxi Rajkot',
    'Rajkot international airport cab booking',
    'Hirasar taxi fare',
    'cab to Hirasar airport',
    'Rajkot airport pickup taxi',
  ],
};

export default function RajkotToHirasarAirportPage() {
  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajkot to Hirasar Airport Cab Service - Rajvee Cab',
    url: 'https://rajvee-cab.github.io/rajkot-to-hirasar-airport-cab/',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rajkot',
        addressRegion: 'Gujarat',
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '699',
      description: 'Fixed rate cab from Rajkot city to Hirasar International Airport',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-8 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <Plane className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate sm:whitespace-normal">Dedicated Airport Shuttle - Flight On-Time Guarantee</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4 sm:mb-6">
                Rajkot to Hirasar Airport <span className="text-amber-600">Cab & Taxi Service</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Catch your flight without anxiety. Rajvee Cab delivers prompt doorstep pickup from any corner of Rajkot City (Kalawad Road, 150 Feet Ring Road, Yagnik Road, Greenland Chokdi) directly to Hirasar International Airport (HSR) terminal gates in ~30 minutes.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Distance</div>
                  <div className="text-base sm:text-lg font-black text-slate-900">~30 KM</div>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Est. Time</div>
                  <div className="text-base sm:text-lg font-black text-slate-900">~30-35 Min</div>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Fixed Fare</div>
                  <div className="text-base sm:text-lg font-black text-amber-600">₹699 Onwards</div>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Flight Delay</div>
                  <div className="text-base sm:text-lg font-black text-emerald-600">Free Waiting</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="tel:+919737872972"
                  className="px-5 sm:px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition transform hover:-translate-y-0.5 text-center"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: +91 97378 72972</span>
                </a>
                <a
                  href={formatWhatsAppRoute({ from: 'Rajkot', to: 'Hirasar Airport', fare: '₹699' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition transform hover:-translate-y-0.5 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingForm defaultPickup="Rajkot" defaultDrop="Hirasar Airport" />
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
