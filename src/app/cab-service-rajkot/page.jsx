import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { formatWhatsAppCity } from '@/utils/whatsapp';
import { Phone, MessageCircle, MapPin, CheckCircle2, Plane, Building2, Train } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Rajkot | Best 24x7 Taxi & Hirasar Airport Cab - Rajvee Cab',
  description: 'Book the best cab service in Rajkot with Rajvee Cab. Lowest taxi fares for local Rajkot travel, Hirasar Airport drops, and outstation trips to Ahmedabad, Somnath, and Dwarka. Call +91 97378 72972.',
  keywords: [
    'cab service in Rajkot',
    'taxi service Rajkot',
    'Rajkot taxi booking',
    'Rajkot airport cab',
    'Hirasar airport taxi',
    'Rajkot to Ahmedabad cab',
    'cheap cab in Rajkot',
    'Greenland chokdi cab Rajkot',
  ],
};

export default function RajkotCabPage() {
  const rajkotSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Rajkot',
    serviceType: 'Cab and Taxi Service in Rajkot',
    url: 'https://rajvee-cab.github.io/cab-service-rajkot/',
    description: 'Premier cab and taxi booking service in Rajkot covering Hirasar Airport, Kalawad Road, Greenland Chokdi, and outstation trips.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
      '@type': 'PostalAddress',
      streetAddress: 'Greenland Chokdi',
      addressLocality: 'Rajkot',
      addressRegion: 'Gujarat',
      postalCode: '360003',
      addressCountry: 'IN',
    },
      geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.3039,
      longitude: 70.8022,
    },
    },
    areaServed: {
      '@type': 'City',
      name: 'Rajkot',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rajkotSchema) }}
      />

      {/* Light Hero */}
      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-6 max-w-full truncate">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate">Rajkot Main Headquarters - 24x7 Taxi Service</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4 sm:mb-6">
                Best & Most Affordable <span className="text-amber-600">Cab Service in Rajkot</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Whether you need a quick ride across Rajkot city, a transfer to Hirasar International Airport, or an outstation taxi to Ahmedabad, Somnath, or Dwarka — Rajvee Travels guarantees clean cars and on-time pickup.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8 text-[11px] sm:text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-sm"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" /> <span className="truncate">Greenland Chokdi</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-sm"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" /> <span className="truncate">Hirasar Airport</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-sm"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" /> <span className="truncate">Kalawad Road</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-sm"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" /> <span className="truncate">150ft Ring Road</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-sm"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" /> <span className="truncate">Somnath-Dwarka</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200 shadow-sm"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" /> <span className="truncate">Ahmedabad Drops</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="tel:+919737872972"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition min-h-[48px]"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call: +91 97378 72972</span>
                </a>
                <a
                  href={formatWhatsAppCity('Rajkot')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <BookingForm defaultPickup="Rajkot" defaultDrop="Ahmedabad" />
            </div>
          </div>
        </div>
      </section>

      {/* Rajkot Key Features */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            <div className="p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Hirasar Airport Taxi</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                24x7 fixed-fare transfers to and from Rajkot Hirasar International Airport. Never miss a flight with our punctuality guarantee.
              </p>
            </div>

            <div className="p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Train className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Railway Station Pickup</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct transfers from Rajkot Junction and Bhaktinagar Station with generous luggage assistance and clean AC sedans.
              </p>
            </div>

            <div className="p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Greenland Chokdi Hub</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Centrally stationed cabs on National Highway for rapid departures to Morbi, Jamnagar, Junagadh, and Ahmedabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
