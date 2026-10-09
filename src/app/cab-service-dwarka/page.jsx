import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { Phone, MessageCircle, MapPin, CheckCircle2, Landmark, Compass, Waves } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Dwarka | Jagat Mandir & Beyt Dwarka Taxi - Rajvee Cab',
  description: 'Book trusted cab service in Dwarka with Rajvee Cab. Clean AC taxis for Dwarkadhish Temple, Beyt Dwarka, Nageshwar Jyotirlinga, Shivrajpur Blue Flag Beach, and outstation drops to Jamnagar, Rajkot, and Somnath. Call +91 97378 72972.',
  keywords: [
    'cab service in Dwarka',
    'taxi service Dwarka',
    'Dwarka to Somnath cab',
    'Dwarka to Rajkot taxi',
    'Beyt Dwarka taxi booking',
    'Shivrajpur beach cab',
    'car rental Dwarka',
  ],
};

export default function DwarkaCabPage() {
  const dwarkaSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Dwarka',
    url: 'https://rajvee-cab.github.io/cab-service-dwarka/',
    telephone: '+919737872972',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dwarka',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.2442,
      longitude: 68.9685,
    },
    areaServed: 'Dwarka',
    description: 'Premier pilgrimage and coastal cab service in Dwarka covering Dwarkadhish Jagat Mandir, Beyt Dwarka, Nageshwar, Shivrajpur Beach, and Rajkot outstation highway travel.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dwarkaSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Dwarka Holy Land & Coastal Hub - 24x7 Cab Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                Spiritual & Coastal <span className="text-amber-600">Cab Service in Dwarka</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Travel with peace of mind across Mokshapuri Dwarka. Convenient family taxis for Dwarkadhish Jagat Mandir darshan, Sudama Setu, Beyt Dwarka ferry point, Nageshwar Jyotirlinga, Shivrajpur Beach, and one-way drops to Jamnagar and Rajkot.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Dwarkadhish Temple Drops</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Beyt Dwarka & Okha Ferry</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Nageshwar Jyotirlinga Trip</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Shivrajpur Blue Beach Taxi</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Dwarka to Somnath Tour</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Rajkot One-Way Cab</div>
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
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab%20in%20Dwarka."
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
              <BookingForm defaultPickup="Dwarka" defaultDrop="Rajkot" />
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
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Dwarkadhish & Nageshwar</h3>
              <p className="text-sm text-slate-600">
                Punctual early morning Mangla Aarti and evening Shringar Aarti transfers for Jagat Mandir, Gomti Ghat, and Nageshwar Jyotirlinga.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Compass className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Beyt Dwarka & Sudarshan Setu</h3>
              <p className="text-sm text-slate-600">
                Smooth highway rides over India's longest cable-stayed bridge (Sudarshan Setu) to Beyt Dwarka island temple with zero hassle.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Waves className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Shivrajpur Beach & Coastal Leisure</h3>
              <p className="text-sm text-slate-600">
                Family day tour packages to Shivrajpur Blue Flag Beach for water sports, scuba diving, and stunning sunset views with round-trip waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
