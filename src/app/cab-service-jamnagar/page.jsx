import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
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

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Jamnagar & Motikhavdi - 24x7 Cab Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                On-Time & Safe <span className="text-amber-600">Cab Service in Jamnagar</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Whether commuting to Reliance Greens, Nayara Refinery, Jamnagar Airport, or embarking on a spiritual trip to Dwarkadhish & Beyt Dwarka, Rajvee Cab offers premium sedans and SUVs at direct per-KM rates.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Reliance Greens Taxi</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Jamnagar to Dwarka Drop</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Rajkot One-Way Cab</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Jamnagar Airport Transfers</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Nayara Energy Trips</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Commercial Taxi Permit</div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+919737872972"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-sm flex items-center gap-2 shadow-md transition transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: +91 97378 72972</span>
                </a>
                <a
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab%20in%20Jamnagar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-md shadow-emerald-600/20 transition transform hover:-translate-y-0.5"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Building2 className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Reliance Greens & Refinery Cabs</h3>
              <p className="text-sm text-slate-600">
                Regular daily cabs for engineers, executives, and guests between Jamnagar City, Motikhavdi, Reliance Township, and Nayara Vadinar.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Landmark className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Dwarka & Shivrajpur Beach Tours</h3>
              <p className="text-sm text-slate-600">
                Comfortable family day trips to Dwarkadhish Temple, Nageshwar Jyotirlinga, Beyt Dwarka, and pristine Shivrajpur Blue Flag Beach.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Plane className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Jamnagar & Rajkot Airport Drops</h3>
              <p className="text-sm text-slate-600">
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
