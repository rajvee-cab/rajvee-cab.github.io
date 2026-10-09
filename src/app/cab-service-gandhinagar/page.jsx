import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { formatWhatsAppCity } from '@/utils/whatsapp';
import { Phone, MessageCircle, MapPin, CheckCircle2, Building2, Landmark, Plane } from 'lucide-react';

export const metadata = {
  title: 'Cab Service in Gandhinagar | GIFT City & Akshardham Taxi - Rajvee Cab',
  description: 'Book corporate & local cab service in Gandhinagar with Rajvee Cab. Premium AC cabs for GIFT City, Akshardham Temple, Mahatma Mandir, Ahmedabad Airport drops, and outstation trips across Gujarat. Call +91 97378 72972.',
  keywords: [
    'cab service in Gandhinagar',
    'taxi service Gandhinagar',
    'GIFT City cab service',
    'Gandhinagar to Ahmedabad airport taxi',
    'Akshardham taxi Gandhinagar',
    'car rental Gandhinagar',
    'corporate cab Gandhinagar',
  ],
};

export default function GandhinagarCabPage() {
  const gandhinagarSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab Gandhinagar',
    serviceType: 'Cab and Taxi Service in Gandhinagar',
    url: 'https://rajvee-cab.github.io/cab-service-gandhinagar/',
    description: 'Premier cab service in Gujarat Capital Gandhinagar covering GIFT City, Akshardham, Mahatma Mandir, Infocity, and SVPI Airport transfers.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gandhinagar',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
      geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.2156,
      longitude: 72.6369,
    },
    },
    areaServed: {
      '@type': 'City',
      name: 'Gandhinagar',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gandhinagarSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-8 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate sm:whitespace-normal">Gandhinagar & GIFT City Hub - 24x7 Cab Service</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4 sm:mb-6">
                Executive & Reliable <span className="text-amber-600">Cab Service in Gandhinagar</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Enjoy hassle-free travel across Gujarat's capital. Dedicated executive sedans and SUVs for GIFT City professionals, Mahatma Mandir conventions, Akshardham temple visitors, and 20-minute direct drops to Ahmedabad Airport.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">GIFT City Cabs</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Airport Transfers</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Akshardham Tours</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Rajkot Trips</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Sectors 1-30 Cabs</span></div>
                <div className="flex items-center gap-1.5 bg-white p-2 rounded-lg border border-slate-200 text-slate-800 shadow-sm min-w-0"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /><span className="truncate">Corporate Billing</span></div>
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
                  href={formatWhatsAppCity('Gandhinagar')}
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
              <BookingForm defaultPickup="Gandhinagar" defaultDrop="Rajkot" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">GIFT City Financial Hub</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Premium chauffeur service tailored for financial institutions, fintech executives, and international delegates visiting GIFT City.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Ahmedabad Airport Express</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Speedy and peaceful 20-minute rides directly to SVPI Airport Terminals 1 and 2, available 24 hours a day with zero surge pricing.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-500 transition">
              <Landmark className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Akshardham & Dandi Kutir</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comfortable family sightseeing packages covering Akshardham Water Show, Mahatma Mandir, Indroda Nature Park, and Adalaj Stepwell.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
