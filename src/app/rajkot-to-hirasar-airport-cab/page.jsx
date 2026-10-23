import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { formatWhatsAppRoute, formatWhatsAppGeneral } from '@/utils/whatsapp';
import { Phone, MessageCircle, Plane, Clock, MapPin, CheckCircle2, ShieldCheck, Car, ChevronRight, HelpCircle } from 'lucide-react';

export const metadata = {
  alternates: {
    canonical: 'https://rajvee-cab.github.io/rajkot-to-hirasar-airport-cab/',
  },
  title: 'Rajkot to Hirasar Airport Cab @ ₹699 Fixed | 24x7 Airport Taxi - Rajvee Cab',
  description: 'Book Rajkot to Hirasar International Airport Cab (HSR) starting @ ₹699 fixed fare. 24x7 doorstep flight pickup & drop with live flight tracking. AC Dzire, Ertiga, and Innova Crysta. Call +91 97378 72972.',
  keywords: [
    'Rajkot to Hirasar airport cab',
    'Hirasar airport taxi Rajkot',
    'Rajkot international airport cab booking',
    'Hirasar taxi fare',
    'cab to Hirasar airport',
    'Rajkot airport pickup taxi',
  ],
};

export default function RajkotToHirasarAirportPage() {
  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRental'],
    name: 'Rajkot to Hirasar Airport Cab Service - Rajvee Cab',
    url: 'https://rajvee-cab.github.io/rajkot-to-hirasar-airport-cab/',
    telephone: '+919737872972',
    priceRange: '₹₹',
    image: 'https://rajvee-cab.github.io/frontend/imgs/logo-w.png',
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '1850',
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '699',
      availability: 'https://schema.org/InStock',
      description: 'Fixed rate cab from Rajkot city to Hirasar International Airport',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rajvee-cab.github.io/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Routes',
        item: 'https://rajvee-cab.github.io/routes/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Rajkot to Hirasar Airport Cab',
        item: 'https://rajvee-cab.github.io/rajkot-to-hirasar-airport-cab/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much is the taxi fare from Rajkot city to Hirasar Airport?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Taxi fare from Rajkot city to Rajkot Hirasar International Airport (HSR) starts at a fixed upfront price of ₹699 for AC Sedan (Swift Dzire / Hyundai Aura) with zero surge pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the distance and travel time to Hirasar Airport?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hirasar International Airport is approximately 30 KM from Rajkot city center, taking around 30 to 35 minutes via National Highway 27.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you provide early morning and midnight flight transfers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We operate 24 hours a day, 365 days a year. Whether your flight departs at 5:00 AM or arrives at midnight, our chauffeur will be ready at your doorstep.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book a cab for Hirasar Airport?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book immediately by calling +91 97378 72972 or messaging on WhatsApp. Share your pickup address and flight timing for instant confirmation.',
        },
      },
    ],
  };

  const faqs = faqSchema.mainEntity;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-8 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link href="/" className="hover:text-amber-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/routes" className="hover:text-amber-600 transition">Routes</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-700 font-bold">Rajkot to Hirasar Airport</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                <Plane className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate sm:whitespace-normal">Dedicated Airport Shuttle - Flight On-Time Guarantee</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4 sm:mb-6">
                Rajkot to Hirasar Airport <span className="text-amber-600">Cab & Taxi Service</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed font-normal">
                Catch your flight without anxiety. Rajvee Cab delivers prompt doorstep pickup from any corner of Rajkot City (Kalawad Road, 150 Feet Ring Road, Yagnik Road, Greenland Chokdi) directly to Hirasar International Airport (HSR) terminal gates in ~30 minutes starting @ ₹699.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-600 font-semibold">Distance</div>
                  <div className="text-base sm:text-lg font-black text-slate-900">~30 KM</div>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-600 font-semibold">Est. Time</div>
                  <div className="text-base sm:text-lg font-black text-slate-900">~30-35 Min</div>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-600 font-semibold">Fixed Fare</div>
                  <div className="text-base sm:text-lg font-black text-amber-600">₹699 Fixed</div>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="text-[11px] sm:text-xs text-slate-600 font-semibold">Flight Delay</div>
                  <div className="text-base sm:text-lg font-black text-emerald-600">Free Waiting</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="tel:+919737872972"
                  className="px-5 sm:px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition transform hover:-translate-y-0.5 text-center min-h-[48px]"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: +91 97378 72972</span>
                </a>
                <a
                  href={formatWhatsAppRoute({ from: 'Rajkot', to: 'Hirasar Airport', fare: '₹699' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition transform hover:-translate-y-0.5 text-center min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingForm defaultPickup="Rajkot" defaultDrop="Rajkot Hirasar Airport" />
            </div>

          </div>
        </div>
      </section>

      {/* Airport Specific FAQs */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Airport Travel Help</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Rajkot to Hirasar Airport FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Important details regarding airport pickups, drops, flight schedules, and luggage.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    Q
                  </span>
                  <span>{faq.name}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5 m-0 font-normal">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={formatWhatsAppGeneral('Hirasar Airport Cab Urgent Booking')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider transition shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Urgent Airport Booking on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
