import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { Phone, MessageCircle, MapPin, CheckCircle2, Plane, Building2, Train } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Ahmedabad | Best 24x7 Taxi & SVPI Airport Cab - Rajvee Cab',
  description: 'Book the best cab service in Ahmedabad with Rajvee Cab. Affordable taxi in Ahmedabad for local city travel, SVPI Airport drops, and outstation rides to Rajkot, Surat, and Mumbai. Call +91 97378 72972.',
  keywords: [
    'cab service in Ahmedabad',
    'taxi service Ahmedabad',
    'Ahmedabad airport taxi',
    'Ahmedabad to Rajkot cab',
    'Ahmedabad to Surat taxi',
    'cheap cab Ahmedabad',
    'SG highway taxi Ahmedabad',
  ],
};

export default function AhmedabadCabPage() {
  const ahmedabadSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Ahmedabad',
    url: 'https://rajvee-cab.github.io/cab-service-ahmedabad/',
    telephone: '+919737872972',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.0225,
      longitude: 72.5714,
    },
    areaServed: 'Ahmedabad',
    description: 'Premier cab service in Ahmedabad covering SVPI Airport, SG Highway, Kalupur Railway Station, Bopal, Prahlad Nagar, and outstation trips.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ahmedabadSchema) }}
      />

      {/* Light Hero */}
      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Ahmedabad Operational Hub - 24x7 Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                Fast & Reliable <span className="text-amber-600">Cab Service in Ahmedabad</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Seamless taxi rides to Ahmedabad SVPI International Airport, Kalupur Railway Station, SG Highway, GIFT City Gandhinagar, and outstation routes across Gujarat and Mumbai.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> SVPI Airport Taxi</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Kalupur Station Drops</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> SG Highway & Bopal</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Rajkot One-Way Cab</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Surat & Vadodara Taxi</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Statue of Unity Tour</div>
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
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab%20in%20Ahmedabad."
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
              <BookingForm defaultPickup="Ahmedabad" defaultDrop="Rajkot" />
            </div>
          </div>
        </div>
      </section>

      {/* Ahmedabad Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Plane className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">SVPI Airport Transfers</h3>
              <p className="text-sm text-slate-600">
                Guaranteed on-time pickups and drop-offs for Domestic Terminal 1 and International Terminal 2 with fixed upfront rates.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Train className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Kalupur Railway Station</h3>
              <p className="text-sm text-slate-600">
                Safe, comfortable pickups for Vande Bharat and Rajdhani express passengers heading to SG Highway, Bopal, or Gandhinagar.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Building2 className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Corporate & GIFT City</h3>
              <p className="text-sm text-slate-600">
                Reliable executive sedans and SUVs for business executives traveling to GIFT City, Prahlad Nagar, and Sanand industrial hub.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
