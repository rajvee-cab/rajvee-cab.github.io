import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { formatWhatsAppCity } from '@/utils/whatsapp';
import { Phone, MessageCircle, MapPin, CheckCircle2, Plane, Building2, Landmark } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Jamnagar | Reliance Greens & Dwarka Taxi - Rajvee Cab',
  description: 'Book trusted cab service in Jamnagar with Rajvee Cab. Clean AC cabs for Reliance Greens (Motikhavdi), Nayara Energy, Jamnagar Airport, and one-way taxi to Dwarka, Rajkot, and Ahmedabad. Call +91 97378 72972.',
  keywords: [
    'cab service in Jamnagar',
    'taxi service Jamnagar',
    'Jamnagar to Dwarka taxi',
    'Jamnagar to Rajkot cab',
    'Reliance Greens taxi Jamnagar',
    'Jamnagar airport cab',
    'car rental Jamnagar',
  ],
};

export default function JamnagarCabPage() {
  const jamnagarSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Jamnagar',
    serviceType: 'Cab and Taxi Service in Jamnagar',
    url: 'https://rajvee-cab.github.io/cab-service-jamnagar/',
    description: 'Premier cab service in Jamnagar covering Jamnagar Airport, Reliance Greens Motikhavdi, Nayara Energy, Dwarka pilgrimage, and Rajkot outstation rides.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jamnagar',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
      geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.4707,
      longitude: 70.0577,
    },
    },
    areaServed: {
      '@type': 'City',
      name: 'Jamnagar',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jamnagarSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-8 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate sm:whitespace-normal">Jamnagar & Motikhavdi - 24x7 Cab Service</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4 sm:mb-6">
                On-Time & Safe <span className="text-amber-600">Cab Service in Jamnagar</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Whether commuting to Reliance Greens, Nayara Refinery, Jamnagar Airport, or embarking on a spiritual trip to Dwarkadhish & Beyt Dwarka, Rajvee Cab offers premium sedans and SUVs at direct per-KM rates.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Reliance Greens Taxi</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Jamnagar to Dwarka</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Rajkot One-Way Cab</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Airport Transfers</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Nayara Energy Trips</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Zero Return Fare</span></div>
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
                  href={formatWhatsAppCity('Jamnagar')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition transform hover:-translate-y-0.5 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingForm defaultPickup="Jamnagar" defaultDrop="Dwarka" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Reliance Greens & Refinery</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Regular daily cabs for engineers, executives, and guests between Jamnagar City, Motikhavdi, Reliance Township, and Nayara Vadinar.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Landmark className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Dwarka & Shivrajpur Beach</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comfortable family day trips to Dwarkadhish Temple, Nageshwar Jyotirlinga, Beyt Dwarka, and pristine Shivrajpur Blue Flag Beach.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Jamnagar & Airport Drops</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct connections from Jamnagar to Jamnagar Airport (JGA) or Hirasar International Airport Rajkot (HSR) with zero delay guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
