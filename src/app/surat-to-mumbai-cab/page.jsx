import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { Phone, MessageCircle, ArrowRightLeft, Clock, MapPin, CheckCircle2, ShieldCheck, Car } from 'lucide-react';

export const metadata = {
  title: 'Surat to Mumbai Cab | Best One-Way Taxi Fare Starting @ ₹4499 - Rajvee Cab',
  description: 'Book Surat to Mumbai Cab & Mumbai to Surat taxi with Rajvee Cab. Lowest one-way fare starting @ ₹4499. Direct drops to Mumbai Airport (BOM), Borivali, Bandra, and South Bombay. Clean AC sedans & SUVs 24x7.',
  keywords: [
    'Surat to Mumbai cab',
    'Surat to Mumbai taxi fare',
    'one way cab Surat to Mumbai',
    'Surat to Mumbai airport cab',
    'Mumbai to Surat taxi',
    'car rental Surat to Mumbai',
  ],
};

export default function SuratToMumbaiPage() {
  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Surat to Mumbai Cab Service - Rajvee Cab',
    url: 'https://rajvee-cab.github.io/surat-to-mumbai-cab/',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Surat',
        addressRegion: 'Gujarat',
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '4499',
      description: 'One way sedan cab from Surat to Mumbai',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <ArrowRightLeft className="w-4 h-4 text-amber-600" />
                <span>Interstate Highway Corridor - 24x7 On-Time Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                Surat to Mumbai <span className="text-amber-600">Cab & Airport Taxi</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                Seamless highway travel connecting Surat to Mumbai via NH 48. Direct doorstep drops to Mumbai International Airport (T1 & T2), Borivali, Andheri, BKC, and Nariman Point with expert highway drivers and zero return toll stress.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Distance</div>
                  <div className="text-lg font-black text-slate-900">~285 KM</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Est. Time</div>
                  <div className="text-lg font-black text-slate-900">~5 Hours</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Sedan Fare</div>
                  <div className="text-lg font-black text-amber-600">₹4,499 Onwards</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="text-xs text-slate-500 font-semibold">Return Charge</div>
                  <div className="text-lg font-black text-emerald-600">₹0 (Zero)</div>
                </div>
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
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20Surat%20to%20Mumbai%20cab."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-md shadow-emerald-600/20 transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingForm defaultPickup="Surat" defaultDrop="Mumbai" />
            </div>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
