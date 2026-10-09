import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
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
    url: 'https://rajvee-cab.github.io/cab-service-bhavnagar/',
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
    areaServed: 'Bhavnagar',
    description: 'Premier cab service in Bhavnagar covering Bhavnagar Airport, Palitana pilgrimage, Alang, Sihor, and direct drops to Ahmedabad.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bhavnagarSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Bhavnagar & Palitana Hub - 24x7 Cab Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                Affordable & Professional <span className="text-amber-600">Cab Service in Bhavnagar</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Travel comfortably across Bhavnagar with Rajvee Cab. Transparent per-KM pricing for Palitana pilgrimage tours, Alang Ship Recycling Yard visits, Bhavnagar Airport drops, and Ahmedabad one-way cabs.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Palitana Temple Tour</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bhavnagar to Ahmedabad</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Alang Ship Yard Taxi</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bhavnagar Airport Drop</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sihor & Botad Cabs</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Return Charges</div>
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
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab%20in%20Bhavnagar."
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
              <BookingForm defaultPickup="Bhavnagar" defaultDrop="Ahmedabad" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Landmark className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Palitana Shatrunjaya Yatra</h3>
              <p className="text-sm text-slate-600">
                Specialized early morning pickups and comfortable waiting options for pilgrims visiting holy Shatrunjaya Hills and Taleti.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Building2 className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Alang Industrial Visits</h3>
              <p className="text-sm text-slate-600">
                Professional chauffeurs and sturdy sedans/SUVs for ship buyers, scrap dealers, and international inspectors visiting Alang Port.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Plane className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Bhavnagar to Ahmedabad Taxi</h3>
              <p className="text-sm text-slate-600">
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
