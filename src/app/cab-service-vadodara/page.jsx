import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { Phone, MessageCircle, MapPin, CheckCircle2, Plane, Building2, Landmark } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Vadodara | 24x7 Taxi & Statue of Unity Tour - Rajvee Cab',
  description: 'Book premium cab service in Vadodara with Rajvee Cab. Best rates for Vadodara Airport, Railway Station, Statue of Unity (Kevadia) tours, and outstation drops to Ahmedabad, Surat, and Mumbai. Call +91 97378 72972.',
  keywords: [
    'cab service in Vadodara',
    'taxi service Vadodara',
    'Vadodara to Statue of Unity cab',
    'Vadodara airport taxi',
    'Vadodara to Ahmedabad cab',
    'car rental Vadodara',
    'Baroda taxi booking',
  ],
};

export default function VadodaraCabPage() {
  const vadodaraSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Vadodara',
    url: 'https://rajvee-cab.github.io/cab-service-vadodara/',
    telephone: '+919737872972',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.3072,
      longitude: 73.1812,
    },
    areaServed: 'Vadodara',
    description: 'Premier 24x7 cab service in Vadodara covering Alkapuri, Vadodara Airport, Railway Station, Statue of Unity, and expressway rides to Ahmedabad and Surat.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vadodaraSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Vadodara (Baroda) Central Hub - 24x7 Cab Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                Reliable & Budget <span className="text-amber-600">Cab Service in Vadodara</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Book sanitized AC cabs for Vadodara Airport transfers, Alkapuri, Gotri, Manjalpur, and direct day packages for the Statue of Unity (Kevadia). Smooth highway connectivity to Ahmedabad via NE-1 Expressway.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Statue of Unity Day Trip</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Vadodara Airport Taxi</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Ahmedabad NE-1 Express</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Surat & Mumbai Outstation</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Alkapuri Doorstep Pickup</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Return Fare</div>
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
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab%20in%20Vadodara."
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
              <BookingForm defaultPickup="Vadodara" defaultDrop="Statue of Unity" />
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
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Statue of Unity Tour Package</h3>
              <p className="text-sm text-slate-600">
                Special round-trip packages from Vadodara to Kevadia (Statue of Unity, Valley of Flowers, Laser Show) with waiting options and courteous drivers.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Plane className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Vadodara Airport & Station Transfers</h3>
              <p className="text-sm text-slate-600">
                Always on time for flights at Harni Airport (BDQ) and train connections at Vadodara Junction. AC sedans and Ertiga SUVs ready 24x7.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Building2 className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Industrial Corridor Cabs (Halol & Savli)</h3>
              <p className="text-sm text-slate-600">
                Dedicated corporate cabs for visits to Halol GIDC, Savli Industrial Area, Nandesari, and Makarpura at predictable contract rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
