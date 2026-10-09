import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { Phone, MessageCircle, MapPin, CheckCircle2, Plane, Building2, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Morbi | Ceramic City Business Taxi Booking - Rajvee Cab',
  description: 'Book corporate & business cab service in Morbi Ceramic Hub with Rajvee Cab. On-time taxi to Rajkot Hirasar Airport, Ahmedabad, Mundra Port, and local ceramic industrial areas. Call +91 97378 72972.',
  keywords: [
    'cab service in Morbi',
    'taxi service Morbi',
    'Morbi to Rajkot cab',
    'Morbi to Ahmedabad taxi',
    'Morbi ceramic taxi',
    'Morbi to Hirasar airport taxi',
    'car rental Morbi',
  ],
};

export default function MorbiCabPage() {
  const morbiSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Morbi',
    serviceType: 'Cab and Taxi Service in Morbi',
    url: 'https://rajvee-cab.github.io/cab-service-morbi/',
    description: 'Premier cab service in Morbi Ceramic Zone covering 8-A National Highway, Pipali-Jetpar Road, Rajkot Airport transfers, and Ahmedabad business trips.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
      '@type': 'PostalAddress',
      addressLocality: 'Morbi',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
      geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.8120,
      longitude: 70.8384,
    },
    },
    areaServed: {
      '@type': 'City',
      name: 'Morbi',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(morbiSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Morbi Ceramic City - Corporate 24x7 Cab Hub</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                Punctual & Corporate <span className="text-amber-600">Cab Service in Morbi</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Reliable executive taxis for Morbi’s ceramic manufacturers, dealers, and international buyers. Swift pickups across 8-A Highway, Pipali Road, Jetpar Road, and direct airport transfers to Rajkot & Ahmedabad.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Rajkot Hirasar Airport Taxi</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Morbi to Ahmedabad Drop</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 8-A Ceramic Highway Cabs</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Mundra & Kandla Port Rides</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Corporate Billing For Businesses</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Innova Crysta & Sedans</div>
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
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab%20in%20Morbi."
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
              <BookingForm defaultPickup="Morbi" defaultDrop="Rajkot" />
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
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Ceramic Industrial Corridor Cabs</h3>
              <p className="text-sm text-slate-600">
                Punctual transfers for factory visits, tile showrooms, and plant inspections across Pipali, Jetpar, Matel, and Wankaner belt.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Plane className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Hirasar International Airport Drops</h3>
              <p className="text-sm text-slate-600">
                Direct highway route from Morbi to Rajkot Hirasar Airport in just ~60 minutes with polite drivers and ample luggage room.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <ShieldCheck className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Executive Luxury Travel</h3>
              <p className="text-sm text-slate-600">
                Spotless Toyota Innova Crysta and Maruti Ertiga SUVs with seasoned chauffeurs for corporate guests and export delegates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
