import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { formatWhatsAppRoute } from '@/utils/whatsapp';
import { Phone, MessageCircle, ArrowRightLeft, Clock, MapPin, CheckCircle2, ShieldCheck, Car } from 'lucide-react';

export const metadata = {
  title: 'Ahmedabad to Mumbai Cab | Interstate Highway Taxi - Rajvee Cab',
  description: 'Book Ahmedabad to Mumbai Cab & Mumbai to Ahmedabad taxi with Rajvee Cab. Lowest one-way fare starting @ ₹7499. Clean AC Swift Dzire, Ertiga, and Innova Crysta. Direct drops to Mumbai Airport & South Bombay.',
  keywords: [
    'Ahmedabad to Mumbai cab',
    'Ahmedabad to Mumbai taxi fare',
    'one way cab Ahmedabad to Mumbai',
    'Mumbai to Ahmedabad cab',
    'Ahmedabad to Mumbai airport taxi',
  ],
};

export default function AhmedabadToMumbaiPage() {
  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Ahmedabad to Mumbai Cab Service - Rajvee Cab',
    url: 'https://rajvee-cab.github.io/ahmedabad-to-mumbai-cab/',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '7499',
      description: 'One way sedan cab from Ahmedabad to Mumbai',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-6 max-w-full truncate">
                <ArrowRightLeft className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate">Interstate Highway Express - 24x7 Reliable Journey</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4 sm:mb-6">
                Ahmedabad to Mumbai <span className="text-amber-600">Cab & Airport Taxi</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Direct highway travel from Ahmedabad to Mumbai via Vadodara and Surat along NH-48. Dedicated chauffeurs, comfortable ergonomic seating, luggage space, and direct drop to Mumbai Airport (BOM) or your hotel.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Distance</div>
                  <div className="text-base sm:text-lg font-black text-slate-900">~530 KM</div>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Est. Time</div>
                  <div className="text-base sm:text-lg font-black text-slate-900">~8.5 Hours</div>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Sedan Fare</div>
                  <div className="text-base sm:text-lg font-black text-amber-600">₹7,499 Onwards</div>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">Return Charge</div>
                  <div className="text-base sm:text-lg font-black text-emerald-600">₹0 (Zero)</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="tel:+919737872972"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition min-h-[48px]"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call: +91 97378 72972</span>
                </a>
                <a
                  href={formatWhatsAppRoute({ from: 'Ahmedabad', to: 'Mumbai', fare: '₹7,499' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <BookingForm defaultPickup="Ahmedabad" defaultDrop="Mumbai" />
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
