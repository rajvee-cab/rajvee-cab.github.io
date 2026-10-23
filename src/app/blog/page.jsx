import Link from 'next/link';
import BlogDirectory from '@/components/BlogDirectory';
import { Compass, Sparkles, MapPin, ShieldCheck, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { formatWhatsAppGeneral } from '@/utils/whatsapp';

export const metadata = {
  alternates: {
    canonical: 'https://rajvee-cab.github.io/blog/',
  },
  title: 'Gujarat Travel & Outstation Cab Guides | Tourism, Routes & Fares - Rajvee Cab',
  description: 'Expert travel guides for Gujarat road trips. Detailed itineraries, temple timings for Dwarka & Somnath, Hirasar Airport taxi rates, Statue of Unity day tours, and Sasan Gir safari cabs.',
  keywords: [
    'Gujarat travel guides',
    'Dwarka Somnath tour cab package',
    'Rajkot to Hirasar airport taxi fare',
    'Ahmedabad to Statue of Unity road trip',
    'Sasan Gir safari taxi guide',
    'Ahmedabad to Mumbai outstation cab',
    'Rajvee Cab blog',
    'Gujarat tourism taxi hire',
  ],
  openGraph: {
    title: 'Gujarat Travel & Outstation Cab Guides | Tourism, Routes & Fares - Rajvee Cab',
    description: 'Expert travel guides for Gujarat road trips. Detailed itineraries, temple timings for Dwarka & Somnath, Hirasar Airport taxi rates, Statue of Unity day tours, and Sasan Gir safari cabs.',
    url: 'https://rajvee-cab.github.io/blog/',
    siteName: 'Rajvee Cab',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BlogHubPage() {
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
        name: 'Travel Guides & Blog',
        item: 'https://rajvee-cab.github.io/blog/',
      },
    ],
  };

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Rajvee Cab Gujarat Travel & Tourism Desk',
    description: 'Authoritative guides on highway routes, airport transfers, pilgrimage tours, and taxi fare calculations across Gujarat.',
    url: 'https://rajvee-cab.github.io/blog/',
    publisher: {
      '@type': 'TaxiService',
      name: 'Rajvee Cab',
      url: 'https://rajvee-cab.github.io/',
      telephone: '+919737872972',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        
        {/* Executive Hero Banner */}
        <section className="relative pt-12 pb-14 sm:pt-20 sm:pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Trail */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-slate-400">
                <li>
                  <Link href="/" className="hover:text-amber-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </li>
                <li className="text-amber-400 font-semibold" aria-current="page">
                  Travel Guides
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Rajvee Cab Tourism Desk</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                Gujarat <span className="text-amber-500">Travel Guides</span> &amp; Highway Road Trips
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Explore in-depth itineraries, temple darshan timings, airport terminal guidance, and highway tips for Saurashtra, Ahmedabad, Kevadia, Gir, and Mumbai. Planned by local highway drivers for safe, hassle-free travel.
              </p>

              {/* Fast Booking CTA */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919737872972"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow hover:bg-amber-400 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 24x7: +91 97378 72972</span>
                </a>
                <a
                  href={formatWhatsAppGeneral('Custom Tour Planning Request')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow hover:bg-emerald-500 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Plan Tour on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Directory & Search */}
        <BlogDirectory />

      </main>
    </>
  );
}
