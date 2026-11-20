import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  Car,
  Sparkles,
  ArrowRight,
  Award,
  ChevronRight,
  Fuel,
  Users,
} from 'lucide-react';
import BookingBoxRenax from '@/components/BookingBoxRenax';
import FleetSection from '@/components/FleetSection';
import ReviewsSection from '@/components/ReviewsSection';
import PopularRoutesSection from '@/components/PopularRoutesSection';
import { formatWhatsAppRoute, formatWhatsAppCar } from '@/utils/whatsapp';
import { dynamicRoutesData, getRouteBySlug } from '@/data/allRoutesData';

export const dynamicParams = false;

// 1. Next.js Static Export Generator - Prerenders all dynamic routes at build time
export async function generateStaticParams() {
  return dynamicRoutesData.map((route) => ({
    slug: route.slug,
  }));
}

// 2. Dynamic SEO Metadata with Review Stars & Commercial Keywords
export async function generateMetadata({ params }) {
  const route = getRouteBySlug(params.slug);
  if (!route) return {};

  const title = `${route.origin} to ${route.destination} Cab @ ${route.fares.sedan} | One Way Taxi - Rajvee Cab`;
  const description = `Book verified ${route.origin} to ${route.destination} cab with Rajvee Cab starting @ ${route.fares.sedan}. AC Swift Dzire & Ertiga, zero return fare, doorstep pickup, 24x7 booking. Call/WhatsApp +91 97378 72972.`;
  const canonical = `https://rajvee-cab.github.io/${route.slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Rajvee Cab',
      type: 'website',
      images: [
        {
          url: 'https://rajvee-cab.github.io/frontend/imgs/logo-w.png',
          width: 800,
          height: 600,
          alt: `${route.origin} to ${route.destination} Cab Service`,
        },
      ],
    },
    keywords: [
      `${route.origin} to ${route.destination} cab`,
      `${route.origin} to ${route.destination} taxi`,
      `${route.origin} to ${route.destination} taxi service`,
      `${route.origin} to ${route.destination} one way cab`,
      `${route.origin} to ${route.destination} car rental`,
      `rent car from ${route.origin} to ${route.destination}`,
      `car hire with driver ${route.origin} to ${route.destination}`,
      `${route.origin} to ${route.destination} cab fare`,
      `Ertiga on rent ${route.origin} to ${route.destination}`,
      `Swift Dzire cab ${route.origin} to ${route.destination}`,
    ],
  };
}

export default function DynamicRoutePage({ params }) {
  const route = getRouteBySlug(params.slug);
  if (!route) {
    notFound();
  }

  // Structured Data: TaxiService Schema
  const taxiSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: `Rajvee Cab - ${route.origin} to ${route.destination} Cab Service`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      priceRange: '₹₹',
      image: 'https://rajvee-cab.github.io/frontend/imgs/logo-w.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: route.origin,
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
    serviceType: [
      'One Way Cab',
      'Outstation Taxi',
      'Car Rental with Driver',
      'Round Trip Taxi',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: route.origin,
      },
      {
        '@type': 'City',
        name: route.destination,
      },
    ],
    offers: {
      '@type': 'Offer',
      price: route.fares.sedan.replace(/[^0-9]/g, ''),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  // Structured Data: FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the cab fare from ${route.origin} to ${route.destination}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `One-way taxi fare from ${route.origin} to ${route.destination} starts at ${route.fares.sedan} for Sedan (Swift Dzire / Hyundai Aura) and ${route.fares.suv} for 6-seater SUV (Maruti Ertiga). Fares are transparent with zero hidden charges.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the distance and travel time from ${route.origin} to ${route.destination}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The road distance between ${route.origin} and ${route.destination} is approximately ${route.distanceKm} KM, which takes around ${route.durationText} of comfortable highway driving with experienced chauffeurs.`,
        },
      },
      {
        '@type': 'Question',
        name: `Do I have to pay return fare for a one-way trip from ${route.origin} to ${route.destination}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `No, absolutely not! With Rajvee Cab One-Way drop service, you pay ONLY for the one-sided journey from ${route.origin} to ${route.destination}. You never pay any empty return km or return taxi charges.`,
        },
      },
      {
        '@type': 'Question',
        name: `How can I book a cab from ${route.origin} to ${route.destination}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `You can book instantly by calling our 24x7 desk at +91 97378 72972 or via WhatsApp. Share your pickup address in ${route.origin}, destination in ${route.destination}, and preferred travel time for an instant driver and vehicle confirmation.`,
        },
      },
    ],
  };

  // Structured Data: Breadcrumb Schema
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
        name: 'Gujarat Cab Routes',
        item: 'https://rajvee-cab.github.io/routes/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${route.origin} to ${route.destination} Cab`,
        item: `https://rajvee-cab.github.io/${route.slug}/`,
      },
    ],
  };

  const fareCards = [
    {
      vehicle: 'Swift Dzire / Aura',
      category: 'Sedan (4+1)',
      price: route.fares.sedan,
      ratePerKm: route.fares.ratePerKmSedan,
      tag: 'Most Popular',
      badgeClass: 'bg-amber-500 text-slate-950',
      features: ['Air-Conditioned', 'Comfortable 4 Seats', '2-3 Luggage Bags', 'Doorstep Pickup'],
    },
    {
      vehicle: 'Maruti Suzuki Ertiga',
      category: 'Family SUV (6+1)',
      price: route.fares.suv,
      ratePerKm: route.fares.ratePerKmSuv,
      tag: 'Group Travel',
      badgeClass: 'bg-emerald-500 text-white',
      features: ['Spacious 6 Seats', 'Roof Carrier Available', '3-4 Luggage Bags', 'Dual AC Vents'],
    },
    {
      vehicle: 'Toyota Innova Crysta',
      category: 'Luxury SUV (7+1)',
      price: route.fares.luxury,
      ratePerKm: route.fares.ratePerKmLuxury,
      tag: 'VIP Luxury',
      badgeClass: 'bg-indigo-600 text-white',
      features: ['Captain Seats', 'Maximum Legroom', '5+ Luggage Bags', 'Executive Chauffeur'],
    },
  ];

  const originZones = [
    `${route.origin} City Center & Commercial Markets`,
    `${route.origin} Railway Junction & Central Bus Stand`,
    `All Residential Areas, Societies & Ring Roads in ${route.origin}`,
    `${route.origin} GIDC & Industrial Parks`,
    `Major Highway Bypass Points & Entry Circles`,
    `Local Airport / Air Strip Pickup (where available)`,
  ];

  const destinationZones = [
    `${route.destination} City Center & Business Hubs`,
    `All Major Hotels, Resorts & Dharamshalas in ${route.destination}`,
    `${route.destination} Railway Station & Key Terminals`,
    `Famous Religious Shrines & Tourist Attractions in ${route.destination}`,
    `Direct Doorstep Drop at Any Home or Office Address`,
    `Connecting Highway Junctions & Outer Ring Roads`,
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Hero Section - Executive Styling */}
      <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800/80 overflow-hidden">
        {/* Subtle decorative ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.12),rgba(15,23,42,0))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/routes/" className="hover:text-amber-400 transition">Routes</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">{route.origin} to {route.destination}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Route Value Proposition */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Verified Chauffeur • One-Way Drop Special</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {route.origin} To {route.destination} <span className="text-amber-400">Cab Service</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Book dependable one-way taxi &amp; round-trip car rental from {route.origin} to {route.destination}. Polite verified chauffeurs, chilled AC sedans &amp; SUVs, zero return fare, and transparent pricing.
              </p>

              {/* Quick Route Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Distance</span>
                  <span className="font-extrabold text-amber-400 text-sm">{route.distanceKm} KM</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Est. Time</span>
                  <span className="font-extrabold text-slate-200 text-sm">{route.durationText}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">One-Way Fare</span>
                  <span className="font-extrabold text-emerald-400 text-sm">{route.fares.sedan}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Rating</span>
                  <span className="font-extrabold text-amber-400 text-sm">★ 4.9 (1.8K+)</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="tel:+919737872972"
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: +91 97378 72972</span>
                </a>
                <a
                  href={formatWhatsAppRoute(route.origin, route.destination)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

            </div>

            {/* Right Column: Pre-filled Booking Form */}
            <div className="lg:col-span-6 w-full">
              <BookingBoxRenax
                defaultPickup={route.origin}
                defaultDrop={route.destination}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Transparent Fare Matrix */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-100 text-amber-900 mb-2">
              Transparent Tariffs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {route.origin} To {route.destination} Taxi Fares
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Zero return charges. Pay only for the one-sided journey with zero hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fareCards.map((car, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${car.badgeClass}`}>
                      {car.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {car.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    {car.vehicle}
                  </h3>
                  <p className="text-2xl font-black text-amber-600 mb-1">
                    {car.price}
                  </p>
                  <p className="text-xs font-semibold text-slate-500 mb-4">
                    Base Fare: {car.ratePerKm}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700 py-3 border-y border-slate-200 mb-6">
                    {car.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={formatWhatsAppCar({
                    name: car.vehicle,
                    category: `${route.origin} to ${route.destination}`,
                    rate: car.price,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-slate-950 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book {car.vehicle.split(' ')[0]}</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2B. Rajvee Cab vs Public Transit / Bus Comparison */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Rajvee Cab vs Bus &amp; Shared Transit ({route.origin} to {route.destination})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Why thousands of travelers choose private doorstep cab hire over crowded public transit.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="p-3.5 sm:p-4">Feature</th>
                  <th className="p-3.5 sm:p-4 text-amber-400">Rajvee Cab (Private AC)</th>
                  <th className="p-3.5 sm:p-4 text-slate-400">GSRTC / Private Bus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Pickup &amp; Drop</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-600">100% Doorstep Pickup &amp; Direct Drop</td>
                  <td className="p-3.5 sm:p-4">Travel to bus station with luggage</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Travel Time</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-600">{route.durationText} direct highway drive</td>
                  <td className="p-3.5 sm:p-4">1.5x longer with multi-city stops</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Comfort &amp; AC</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-600">Chilled private AC car, family privacy</td>
                  <td className="p-3.5 sm:p-4">Shared crowded seats &amp; fixed stops</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Return Fare Policy</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-600">Pay only one-way: {route.fares.sedan} (Zero return)</td>
                  <td className="p-3.5 sm:p-4">Individual tickets per seat + local autos</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Departure Flexibility</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-600">24x7 instant dispatch at your chosen time</td>
                  <td className="p-3.5 sm:p-4">Strict fixed bus timetable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2C. Hyper-Local Pickup & Drop Coverage */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-100 text-emerald-900 mb-2">
              Door-To-Door Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Doorstep Pickup in {route.origin} ➔ Direct Drop in {route.destination}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              No need to drag bags to a central taxi stand. Our chauffeur reaches directly at your home, hotel, or office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Pickup Across {route.origin} (24x7)</span>
              </h3>
              <div className="space-y-2 text-xs font-medium text-slate-700">
                {originZones.map((zone, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{zone}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Direct Drops Across {route.destination}</span>
              </h3>
              <div className="space-y-2 text-xs font-medium text-slate-700">
                {destinationZones.map((zone, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{zone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Reusable Fleet Section */}
      <FleetSection />

      {/* 4. FAQs Section */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about traveling from {route.origin} to {route.destination}.
            </p>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  {faq.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Customer Reviews Section */}
      <ReviewsSection />

      {/* 6. Competitor-Inspired Popular Taxi Services & Routes Component */}
      <PopularRoutesSection />

    </div>
  );
}
