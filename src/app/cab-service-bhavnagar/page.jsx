import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { formatWhatsAppCity } from '@/utils/whatsapp';
import { Phone, MessageCircle, MapPin, CheckCircle2, Plane, Building2, Landmark } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Bhavnagar | Palitana & Alang Taxi Booking - Rajvee Cab',
  description: 'Book reliable cab service in Bhavnagar with Rajvee Cab. Clean AC taxis for Bhavnagar Airport, Palitana Jain Temples, Alang Ship Breaking Yard, and one-way drops to Ahmedabad and Rajkot. Call +91 97378 72972.',
  keywords: [
    'cab service in Bhavnagar',
    'taxi service Bhavnagar',
    'Bhavnagar to Ahmedabad cab',
    'Palitana taxi booking',
    'Alang taxi service',
    'Bhavnagar airport taxi',
    'car rental Bhavnagar',
  ],
};

export default function BhavnagarCabPage() {
  const bhavnagarSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Bhavnagar',
    serviceType: 'Cab and Taxi Service in Bhavnagar',
    url: 'https://rajvee-cab.github.io/cab-service-bhavnagar/',
    description: 'Premier cab service in Bhavnagar covering Bhavnagar Airport, Palitana pilgrimage, Alang, Sihor, and direct drops to Ahmedabad.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhavnagar',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
      geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.7645,
      longitude: 72.1519,
    },
    },
    areaServed: {
      '@type': 'City',
      name: 'Bhavnagar',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bhavnagarSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-8 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate sm:whitespace-normal">Bhavnagar & Palitana Hub - 24x7 Cab Service</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4 sm:mb-6">
                Affordable & Professional <span className="text-amber-600">Cab Service in Bhavnagar</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Travel comfortably across Bhavnagar with Rajvee Cab. Transparent per-KM pricing for Palitana pilgrimage tours, Alang Ship Recycling Yard visits, Bhavnagar Airport drops, and Ahmedabad one-way cabs.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Palitana Temple Tour</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Bhavnagar to Ahmedabad</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Alang Ship Yard Taxi</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Airport Drop 24x7</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Sihor & Botad Cabs</span></div>
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
                  href={formatWhatsAppCity('Bhavnagar')}
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
              <BookingForm defaultPickup="Bhavnagar" defaultDrop="Ahmedabad" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Landmark className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Palitana Shatrunjaya Yatra</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Specialized early morning pickups and comfortable waiting options for pilgrims visiting holy Shatrunjaya Hills and Taleti.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Alang Industrial Visits</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Professional chauffeurs and sturdy sedans/SUVs for ship buyers, scrap dealers, and international inspectors visiting Alang Port.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Bhavnagar to Ahmedabad Taxi</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fast and peaceful journey via Dholera Expressway corridor to Ahmedabad SVPI Airport or city center with transparent one-way billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
