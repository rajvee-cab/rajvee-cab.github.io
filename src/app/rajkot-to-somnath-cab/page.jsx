import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import ConnectedRoutesSilo from '@/components/ConnectedRoutesSilo';
import { formatWhatsAppRoute, formatWhatsAppRouteCar, formatWhatsAppGeneral } from '@/utils/whatsapp';
import { Phone, MessageCircle, ArrowRightLeft, Clock, MapPin, CheckCircle2, ShieldCheck, Car, ChevronRight, HelpCircle, Navigation, Sparkles, Compass, Sun } from 'lucide-react';

export const metadata = {
  alternates: {
    canonical: 'https://rajvee-cab.github.io/rajkot-to-somnath-cab/',
  },
  title: 'Rajkot to Somnath Cab @ ₹2,499 | Jyotirlinga Darshan Taxi - Rajvee Cab',
  description: 'Book Rajkot to Somnath Cab & Somnath to Rajkot taxi with Rajvee Cab starting @ ₹2,499. Virpur & Junagadh stops, Somnath temple drop, clean AC Swift Dzire, Ertiga & Innova. 24x7 doorstep pickup. Call +91 97378 72972.',
  keywords: [
    'Rajkot to Somnath cab',
    'Rajkot to Somnath taxi fare',
    'one way cab Rajkot to Somnath',
    'Somnath to Rajkot cab',
    'Rajkot to Somnath car rental',
    'Somnath temple taxi from Rajkot',
    'Virpur stop cab Rajkot to Somnath',
    'Rajkot to Somnath Ertiga taxi',
    'Somnath Jyotirlinga cab service',
  ],
};

export default function RajkotToSomnathPage() {
  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajkot to Somnath Cab Service - Rajvee Cab',
    url: 'https://rajvee-cab.github.io/rajkot-to-somnath-cab/',
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
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '2499',
      availability: 'https://schema.org/InStock',
      description: 'One way sedan cab from Rajkot to Somnath Jyotirlinga',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rajvee-cab.github.io/' },
      { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://rajvee-cab.github.io/routes/' },
      { '@type': 'ListItem', position: 3, name: 'Rajkot to Somnath Cab', item: 'https://rajvee-cab.github.io/rajkot-to-somnath-cab/' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the taxi fare from Rajkot to Somnath?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'One-way AC Sedan taxi (Swift Dzire / Hyundai Aura) from Rajkot to Somnath starts at ₹2,499. For family pilgrimage groups, 6-seater Maruti Ertiga starts at ₹3,600 and Toyota Innova Crysta starts at ₹4,800. Fares are transparent with zero return charges.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the travel distance and duration between Rajkot and Somnath?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The travel distance from Rajkot to Somnath is approximately 195 KM via National Highway 27 and NH 151 passing through Gondal and Junagadh, taking around 3.5 to 4 hours of comfortable highway driving.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we stop for darshan at Virpur Jalaram Bapa Temple on the way?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our chauffeurs are happy to accommodate darshan stops at Virpur (Shree Jalaram Bapa Mandir), Gondal BAPS Akshar Mandir, or Junagadh Girnar foothills along the pilgrimage route with zero hassle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you drop directly at Somnath Temple and nearby hotels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide 100% doorstep drops directly at Somnath Mahadev Temple gate, Sagar Darshan, Triveni Sangam, Bhalka Tirth, or any hotel/dharamshala in Somnath and Veraval.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I have to pay return charges for a one-way cab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, you pay only for the one-sided journey from Rajkot to Somnath. There are zero hidden fees or return kms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book a cab from Rajkot to Somnath?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Instant booking is available by calling +91 97378 72972 or messaging on WhatsApp for immediate vehicle confirmation.',
        },
      },
    ],
  };

  const faqs = faqSchema.mainEntity;

  const highwayStops = [
    {
      km: '0 KM',
      name: 'Rajkot City',
      detail: 'Free doorstep pickup anywhere in Rajkot (150ft Ring Rd, Kalawad Rd, Greenland Chokdi, Mavdi, Raiya Rd).',
    },
    {
      km: '40 KM',
      name: 'Gondal (BAPS Akshar Mandir)',
      detail: 'Historic princely city, famous for Naulakha Palace and BAPS Akshardham pilgrim complex.',
    },
    {
      km: '60 KM',
      name: 'Virpur (Jalaram Bapa Temple)',
      detail: 'World-famous pilgrimage shrine of Pujya Jalaram Bapa with continuous Mahaprasad.',
    },
    {
      km: '105 KM',
      name: 'Junagadh (Girnar Gateway)',
      detail: 'Historic city surrounded by Mount Girnar, Uparkot Fort, and Bhavnath Taleti.',
    },
    {
      km: '195 KM',
      name: 'Somnath Temple & Veraval',
      detail: 'First among the 12 sacred Jyotirlingas of Lord Shiva, Triveni Sangam, and Arabian Sea promenade.',
    },
  ];

  const rajkotPickupAreas = [
    '150 Feet Ring Road',
    'Kalawad Road',
    'Greenland Chokdi',
    'Mavdi & Mavdi Main Road',
    'Raiya Road & Raiya Chokdi',
    'Madhapar Chokdi',
    'University Road',
    'Gondal Road & Kothariya',
    'Bhaktinagar & Kotecha Chokdi',
    'Rajkot Railway Junction',
    'Hirasar Airport',
  ];

  const somnathDropAreas = [
    'Shree Somnath Jyotirlinga Temple Gate',
    'Somnath Trust VIP Guest House',
    'Sagar Darshan & Triveni Sangam',
    'Bhalka Tirth & Gita Mandir',
    'Veraval City & Railway Station',
    'Prabhas Patan',
    'Somnath Bypass & Dharamshalas',
    'Gir National Park / Sasan Gir connector',
  ];

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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-8 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
            <Link href="/" className="hover:text-amber-600 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/routes/" className="hover:text-amber-600 transition">Routes</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-700 font-bold">Rajkot to Somnath Cab</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-6 max-w-full truncate">
                <Sun className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate">Sacred Jyotirlinga Pilgrim Highway - 24x7 Guaranteed Dispatch</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4 sm:mb-6">
                Rajkot to Somnath <br />
                <span className="text-amber-600">Cab & One-Way Taxi</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed font-normal">
                Smooth 3.5-hour highway drive via Gondal and Junagadh to Somnath Mahadev Jyotirlinga. Doorstep pickup anywhere in Rajkot, chilled AC cars, professional drivers, optional Virpur temple stop, and zero return fare.
              </p>

              {/* Route Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm mb-6 sm:mb-8 text-center">
                <div>
                  <span className="block text-[10px] sm:text-xs text-slate-600 font-semibold">Highway Distance</span>
                  <span className="text-sm sm:text-base lg:text-lg font-black text-slate-900">~195 KM (NH 27)</span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-slate-600 font-semibold">Travel Duration</span>
                  <span className="text-sm sm:text-base lg:text-lg font-black text-slate-900">3.5 - 4 Hrs</span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-slate-600 font-semibold">Starting One-Way</span>
                  <span className="text-sm sm:text-base lg:text-lg font-black text-emerald-600">From ₹2,499</span>
                </div>
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
                  href={formatWhatsAppRoute({ from: 'Rajkot', to: 'Somnath', fare: '₹2,499' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <BookingForm defaultPickup="Rajkot" defaultDrop="Somnath" />
            </div>
          </div>
        </div>
      </section>

      {/* Fare Comparison Table / Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Rajkot ⇄ Somnath Tariff & Fare Chart
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Transparent upfront pricing for pilgrim families with zero return fare charges.
            </p>
          </div>

          {/* Desktop/Tablet Table View */}
          <div className="overflow-x-auto shadow-sm rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-900 text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  <th className="p-4">Vehicle Model</th>
                  <th className="p-4">Seating Capacity</th>
                  <th className="p-4">One-Way Fare</th>
                  <th className="p-4">Round-Trip Rate</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-500" />
                    <span>Maruti Swift Dzire / Aura</span>
                  </td>
                  <td className="p-4">4 + 1 Driver</td>
                  <td className="p-4 font-bold text-emerald-600">₹2,499 - ₹2,700</td>
                  <td className="p-4 font-bold text-slate-900">₹11 / KM</td>
                  <td className="p-4 text-center">
                    <a
                      href={formatWhatsAppRouteCar({ from: 'Rajkot', to: 'Somnath', car: 'Maruti Swift Dzire', fare: '₹2,499 - ₹2,700' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 bg-amber-50/20">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-500" />
                    <span>Maruti Ertiga (SUV)</span>
                  </td>
                  <td className="p-4">6 + 1 Driver</td>
                  <td className="p-4 font-bold text-emerald-600">₹3,600 - ₹3,900</td>
                  <td className="p-4 font-bold text-slate-900">₹14 / KM</td>
                  <td className="p-4 text-center">
                    <a
                      href={formatWhatsAppRouteCar({ from: 'Rajkot', to: 'Somnath', car: 'Maruti Ertiga', fare: '₹3,600 - ₹3,900' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-500" />
                    <span>Toyota Innova Crysta</span>
                  </td>
                  <td className="p-4">7 + 1 Driver</td>
                  <td className="p-4 font-bold text-emerald-600">₹4,800 - ₹5,200</td>
                  <td className="p-4 font-bold text-slate-900">₹18 / KM</td>
                  <td className="p-4 text-center">
                    <a
                      href={formatWhatsAppRouteCar({ from: 'Rajkot', to: 'Somnath', car: 'Toyota Innova Crysta', fare: '₹4,800 - ₹5,200' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Highway Route, Stops & Pilgrim Milestones */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>Saurashtra Highway Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Rajkot to Somnath Route & Pilgrim Stops
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl mx-auto">
              Scenic Saurashtra pilgrimage corridor via Gondal, Virpur Jalaram Mandir, and Junagadh.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-amber-400" />
                <span>Highway Route Timeline</span>
              </h3>
              <div className="relative pl-6 border-l-2 border-amber-500/30 space-y-6">
                {highwayStops.map((stop, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-900" />
                    <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/60">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white text-sm sm:text-base">{stop.name}</span>
                        <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 text-xs font-mono font-bold">{stop.km}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed m-0">{stop.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Pilgrim Convenience Highlights</span>
              </h3>
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase font-bold tracking-wider">Virpur Temple Halt</h4>
                    <p className="text-xs text-slate-300 m-0">30-45 min darshan stop at Jalaram Bapa temple included without extra charge.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 uppercase font-bold tracking-wider">Direct Temple Gate Drop</h4>
                    <p className="text-xs text-slate-300 m-0">No walking with heavy luggage. Chauffeur drops right at temple entrance and Sagar Darshan.</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700">
                  <a
                    href="tel:+919737872972"
                    className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Helpline: +91 97378 72972</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hyper-Local Coverage (Rajkot Pickups & Somnath Drops) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pickup Anywhere in Rajkot ➔ Direct Drop in Somnath
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Free doorstep pickup across Rajkot and direct drop at Somnath hotels, dharamshalas, and temple gates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Rajkot Pickup Zones (24x7)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                {rajkotPickupAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Somnath & Veraval Drop Points</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                {somnathDropAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Cab vs Bus Comparison */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Rajvee Cab vs GSRTC Bus for Somnath Yatra
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="p-3.5 sm:p-4">Feature</th>
                  <th className="p-3.5 sm:p-4 text-amber-400">Rajvee Cab (Private AC)</th>
                  <th className="p-3.5 sm:p-4 text-slate-400">GSRTC Bus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Doorstep Pickup</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-600">Yes, from your home in Rajkot</td>
                  <td className="p-3.5 sm:p-4">Travel to Shastri Maidan bus station</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Travel Time</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-600">3.5 Hours direct</td>
                  <td className="p-3.5 sm:p-4">5.5+ Hours with numerous stops</td>
                </tr>
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Virpur Temple Stop</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-600">Custom stop for family darshan</td>
                  <td className="p-3.5 sm:p-4">Not possible</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Senior Citizens & Luggage</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-600">100% comfortable, boot space</td>
                  <td className="p-3.5 sm:p-4">Crowded, difficult with elderly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions (Rajkot to Somnath Cab)
            </h2>
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
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+919737872972"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Helpline: +91 97378 72972</span>
              </a>
              <a
                href={formatWhatsAppGeneral('Rajkot to Somnath Pilgrim Cab Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ConnectedRoutesSilo currentSlug="rajkot-to-somnath-cab" />
      <FleetSection />
    </>
  );
}
