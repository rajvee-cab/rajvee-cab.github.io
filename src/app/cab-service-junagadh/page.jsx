import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { Phone, MessageCircle, MapPin, CheckCircle2, Landmark, Compass, Trees } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Junagadh | Girnar Ropeway & Sasan Gir Safari Taxi - Rajvee Cab',
  description: 'Book trusted cab service in Junagadh with Rajvee Cab. Clean AC taxis for Girnar Ropeway, Bhavnath, Sasan Gir Lion Safari, Somnath Jyotirlinga, and Rajkot outstation drops. Call +91 97378 72972.',
  keywords: [
    'cab service in Junagadh',
    'taxi service Junagadh',
    'Girnar ropeway taxi',
    'Junagadh to Sasan Gir cab',
    'Junagadh to Somnath taxi',
    'Junagadh to Rajkot cab',
    'car rental Junagadh',
  ],
};

export default function JunagadhCabPage() {
  const junagadhSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Junagadh',
    url: 'https://rajvee-cab.github.io/cab-service-junagadh/',
    telephone: '+919737872972',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Junagadh',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.5222,
      longitude: 70.4579,
    },
    areaServed: 'Junagadh',
    description: 'Premier cab service in Junagadh covering Girnar Ropeway, Bhavnath Taleti, Sasan Gir, Somnath Temple, and Rajkot highway travel.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(junagadhSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Junagadh & Girnar Foothills - 24x7 Cab Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                Tour & Pilgrimage <span className="text-amber-600">Cab Service in Junagadh</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Experience holy Junagadh and Asiatic Lion country with Rajvee Cab. Early morning pickups for the Girnar Ropeway, Bhavnath Mahadev, safari transfers to Sasan Gir, and smooth one-way rides to Rajkot and Somnath.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Girnar Ropeway Drops</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sasan Gir Lion Safari Taxi</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Junagadh to Somnath Cab</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Rajkot One-Way Drop</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bhavnath & Uparkot Fort</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ertiga & Crysta For Families</div>
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
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab%20in%20Junagadh."
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
              <BookingForm defaultPickup="Junagadh" defaultDrop="Somnath" />
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
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Girnar Ropeway & Bhavnath</h3>
              <p className="text-sm text-slate-600">
                Early morning 5:00 AM hotel pickup to Asia's longest ropeway at Mount Girnar, Bhavnath Taleti, and ancient Jain temples.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Trees className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Sasan Gir Wildlife Safari</h3>
              <p className="text-sm text-slate-600">
                Comfortable 1-hour drive to Gir National Park Sinh Sadan, Devalia Safari Park, and forest jungle resorts with experienced local drivers.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Compass className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Junagadh to Somnath & Diu</h3>
              <p className="text-sm text-slate-600">
                Direct one-way and same-day return cabs connecting Junagadh to Somnath Jyotirlinga, Veraval beach, and Diu Island.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
