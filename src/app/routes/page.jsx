import Link from 'next/link';
import RoutesDirectory from '@/components/RoutesDirectory';
import ReviewsSection from '@/components/ReviewsSection';
import { MapPin, ArrowRightLeft, ShieldCheck, Clock, Award, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { formatWhatsAppGeneral } from '@/utils/whatsapp';

export const metadata = {
  alternates: {
    canonical: 'https://rajvee-cab.github.io/routes/',
  },
  title: 'All Gujarat Cab & Taxi Routes | 500+ One-Way Outstation Taxi Hire - Rajvee Cab',
  description: 'Browse 500+ verified one-way and round-trip cab routes across Rajkot, Ahmedabad, Surat, Vadodara, Saurashtra, and all 33 districts of Gujarat. Lowest fares from ₹11/km, zero return charges, 24x7 booking.',
  keywords: [
    'Gujarat cab routes',
    'one way cab Gujarat',
    'outstation taxi Gujarat routes',
    'Rajkot cab routes',
    'Ahmedabad taxi routes',
    'Surat outstation cab',
    'Vadodara taxi hire',
    'Gujarat taxi fare chart',
    'Rajvee Cab all routes',
  ],
  openGraph: {
    title: 'All Gujarat Cab & Taxi Routes | 500+ Outstation Taxi Hire - Rajvee Cab',
    description: 'Explore 500+ verified one-way taxi routes across Gujarat. Transparent per-km rates, AC Swift Dzire, Ertiga & Innova Crysta.',
    url: 'https://rajvee-cab.github.io/routes/',
    siteName: 'Rajvee Cab',
    type: 'website',
  },
};

export default function RoutesPage() {
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
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRental'],
    name: 'Rajvee Cab - Gujarat Outstation Taxi Network',
    url: 'https://rajvee-cab.github.io/routes/',
    telephone: '+919737872972',
    priceRange: '₹₹',
    image: 'https://rajvee-cab.github.io/frontend/imgs/logo-w.png',
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
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800/80 overflow-hidden">
        {/* Subtle decorative ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.12),rgba(15,23,42,0))] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Breadcrumb Navigation */}
          <nav className="inline-flex items-center gap-2 text-xs text-slate-400 mb-6 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-semibold">All Gujarat Routes (500+)</span>
          </nav>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            All Gujarat Cab &amp; Taxi Routes <br />
            <span className="text-amber-400">500+ One-Way Outstation Drops</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-6">
            Explore Gujarat&apos;s most comprehensive highway cab network. Instant fixed upfront fares, verified polite drivers, zero return charges, and 24x7 dispatch.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-slate-300">
            <span className="inline-flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Return Fare</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>24x7 Instant Dispatch</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-xl">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Rated 4.9/5 by 1,800+ Riders</span>
            </span>
          </div>

        </div>
      </section>

      {/* Interactive Routes Directory with live search & filters */}
      <RoutesDirectory />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Call to Action Footer */}
      <section className="py-12 sm:py-16 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Can&apos;t find your specific route or pickup point?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
            We provide custom doorstep pickup across all villages, talukas, and industrial zones in Gujarat. Call our 24x7 desk for instant custom quotation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+919737872972"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +91 97378 72972</span>
            </a>
            <a
              href={formatWhatsAppGeneral('Custom Gujarat Route Inquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
