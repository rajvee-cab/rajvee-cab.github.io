import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import {
  Compass,
  Clock,
  Calendar,
  User,
  ChevronRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Car,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { formatWhatsAppGeneral } from '@/utils/whatsapp';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    alternates: {
      canonical: `https://rajvee-cab.github.io/blog/${post.slug}/`,
    },
    title: post.metaTitle || `${post.title} - Rajvee Cab`,
    description: post.metaDescription || post.summary,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.summary,
      url: `https://rajvee-cab.github.io/blog/${post.slug}/`,
      siteName: 'Rajvee Cab',
      locale: 'en_IN',
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

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
        name: 'Travel Guides',
        item: 'https://rajvee-cab.github.io/blog/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://rajvee-cab.github.io/blog/${post.slug}/`,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    url: `https://rajvee-cab.github.io/blog/${post.slug}/`,
    datePublished: '2026-10-23T00:00:00+05:30',
    dateModified: '2026-10-23T00:00:00+05:30',
    author: {
      '@type': 'Organization',
      name: 'Rajvee Cab Travel Desk',
      url: 'https://rajvee-cab.github.io/',
    },
    publisher: {
      '@type': 'TaxiService',
      name: 'Rajvee Cab',
      url: 'https://rajvee-cab.github.io/',
      telephone: '+919737872972',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rajvee-cab.github.io/blog/${post.slug}/`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const whatsappMessage = `Hello Rajvee Cab, I am reading your guide "${post.title}". I would like to book a cab / get a quote for this tour. Please share vehicle availability.`;
  const whatsappUrl = `https://wa.me/919737872972?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-800">
        
        {/* Article Header Hero */}
        <section className="bg-slate-950 text-white pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Trail */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <li>
                  <Link href="/" className="hover:text-amber-400 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </li>
                <li>
                  <Link href="/blog" className="hover:text-amber-400 transition">
                    Travel Guides
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                </li>
                <li className="text-amber-400 font-medium truncate max-w-xs sm:max-w-sm" aria-current="page">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedDate}
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {post.summary}
            </p>

          </div>
        </section>

        {/* Article Body Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          
          {/* Key Facts Summary Card */}
          <div className="bg-white rounded-2xl border border-amber-200/80 shadow-md p-6 sm:p-8 mb-10">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <Compass className="w-5 h-5 text-amber-500" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 m-0">
                Quick Highway &amp; Trip Facts
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-[11px] font-bold uppercase">Estimated Distance</span>
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">{post.keyFacts.distance}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] font-bold uppercase">Driving Time</span>
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">{post.keyFacts.drivingTime}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px] font-bold uppercase">Main Highway</span>
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">{post.keyFacts.highway}</span>
              </div>
              {post.keyFacts.sedanFare && (
                <div>
                  <span className="text-slate-400 block text-[11px] font-bold uppercase">Sedan AC Fare</span>
                  <span className="font-extrabold text-amber-600 text-sm sm:text-base">{post.keyFacts.sedanFare}</span>
                </div>
              )}
              {post.keyFacts.suvFare && (
                <div>
                  <span className="text-slate-400 block text-[11px] font-bold uppercase">Ertiga SUV Fare</span>
                  <span className="font-extrabold text-emerald-600 text-sm sm:text-base">{post.keyFacts.suvFare}</span>
                </div>
              )}
              {post.keyFacts.bestTimeToVisit && (
                <div>
                  <span className="text-slate-400 block text-[11px] font-bold uppercase">Best Season</span>
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base">{post.keyFacts.bestTimeToVisit}</span>
                </div>
              )}
            </div>
          </div>

          {/* Highlights Box */}
          <div className="bg-amber-50/60 rounded-2xl border border-amber-200/70 p-6 mb-10">
            <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Key Route Highlights</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {post.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Article Sections */}
          <div className="space-y-10 sm:space-y-12">
            {post.sections.map((section, idx) => (
              <section key={idx} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 pb-3 border-b border-slate-100 leading-snug">
                  {section.heading}
                </h2>
                <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4 whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Inline Booking Callout Card */}
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3">
                <Car className="w-3.5 h-3.5" />
                <span>Verified Highway Fleet</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Need a Cab for This Trip?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                Book a clean, sanitised AC Swift Dzire, Maruti Ertiga, or Toyota Innova with a courteous, experienced highway chauffeur. Transparent per-km billing, zero return charges.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919737872972"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow hover:bg-amber-400 transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Chauffeur Desk: +91 97378 72972</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow hover:bg-emerald-500 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm mb-10">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
              <HelpCircle className="w-5 h-5 text-amber-500" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 m-0">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Commercial Route Links */}
          {post.relatedRoutes && post.relatedRoutes.length > 0 && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Popular Related Cab Booking Routes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {post.relatedRoutes.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${r.slug}`}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/40 transition flex items-center justify-between group"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-700">
                      {r.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition shrink-0" />
                  </Link>
                ))}
              </div>
              <div className="mt-5 text-center">
                <Link
                  href="/routes"
                  className="text-xs font-extrabold text-amber-600 hover:text-amber-700 transition inline-flex items-center gap-1"
                >
                  <span>Explore all 500+ Gujarat commercial routes directory</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Back to Guides link */}
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-bold text-slate-600 hover:text-amber-600 transition inline-flex items-center gap-1.5"
            >
              <span>← Back to all Gujarat Travel Guides</span>
            </Link>
          </div>

        </div>

      </main>
    </>
  );
}
