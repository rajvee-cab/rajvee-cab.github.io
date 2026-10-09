import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { formatWhatsAppCity } from '@/utils/whatsapp';
import { Phone, MessageCircle, MapPin, CheckCircle2, Landmark, Waves, Sun } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Somnath | Somnath Temple & Diu Taxi Booking - Rajvee Cab',
  description: 'Book reliable cab service in Somnath with Rajvee Cab. Clean AC taxis for Somnath Mahadev Jyotirlinga, Veraval Railway Station, Diu Island, Sasan Gir Safari, and one-way drops to Rajkot and Ahmedabad. Call +91 97378 72972.',
  keywords: [
    'cab service in Somnath',
    'taxi service Somnath',
    'Somnath to Diu cab',
    'Somnath to Rajkot taxi',
    'Somnath temple taxi booking',
    'Veraval railway station cab',
    'car rental Somnath',
  ],
};

export default function SomnathCabPage() {
  const somnathSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Somnath',
    serviceType: 'Cab and Taxi Service in Somnath',
    url: 'https://rajvee-cab.github.io/cab-service-somnath/',
    description: 'Premier pilgrimage and coastal cab service in Somnath covering Somnath Mahadev Temple, Bhalka Tirth, Veraval, Diu, and Rajkot outstation highway travel.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
      '@type': 'PostalAddress',
      addressLocality: 'Somnath',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
      geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.8880,
      longitude: 70.4012,
    },
    },
    areaServed: {
      '@type': 'City',
      name: 'Somnath',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(somnathSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Somnath Jyotirlinga Pilgrimage Hub - 24x7 Cab Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                Pilgrimage & Coastal <span className="text-amber-600">Cab Service in Somnath</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Experience divine darshan at First Jyotirlinga Somnath Mahadev. Hassle-free pickups at Veraval Railway Station, hotel transfers, scenic coastal rides to Diu Island, and comfortable one-way drops to Rajkot & Ahmedabad.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Somnath Temple Darshan</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Somnath to Diu Day Trip</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Rajkot One-Way Cab</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Veraval Station Pickups</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sasan Gir Safari Rides</div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Chilled AC Sedans & SUVs</div>
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
                  href={formatWhatsAppCity('Somnath')}
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
              <BookingForm defaultPickup="Somnath" defaultDrop="Rajkot" />
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
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Somnath Mahadev & Bhalka Tirth</h3>
              <p className="text-sm text-slate-600">
                Early morning Aarti pickups, Triveni Sangam, Geeta Mandir, and evening Sound & Light show waiting service with zero rush.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Waves className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Somnath to Diu Island Tour</h3>
              <p className="text-sm text-slate-600">
                Picturesque 90-minute coastal ride to Diu Fort, Nagoa Beach, Naida Caves, and St. Paul Church with round-trip waiting included.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Sun className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">Veraval Station & Airport Drops</h3>
              <p className="text-sm text-slate-600">
                Direct on-time transfers for trains at Veraval Junction, Keshod Airport flights, or direct highway journey to Rajkot Airport.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
