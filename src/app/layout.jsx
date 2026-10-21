import './globals.css';
import { Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import GlobalWhatsAppTracker from '@/components/GlobalWhatsAppTracker';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
};

export const metadata = {
  metadataBase: new URL('https://rajvee-cab.github.io'),
  title: 'Rajvee Cab | 24x7 Cab Booking & Car Rental in Rajkot, Ahmedabad, Gujarat Taxi Hire',
  description: 'Book 24x7 cab service & car rental with driver across Rajkot, Ahmedabad, Surat, Vadodara & Gujarat with Rajvee Cab. Best rates for One-Way taxi, rent Ertiga, Innova Crysta & Dzire. Call/WhatsApp +91 97378 72972.',
  alternates: {
    canonical: 'https://rajvee-cab.github.io/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/frontend/imgs/logo-w.png',
  },
  keywords: [
    'Rajvee Cab',
    'cab service Rajkot',
    'taxi service Ahmedabad',
    'car rental in Rajkot',
    'rent car Ahmedabad',
    'rent cab Gujarat',
    'rent taxi Rajkot',
    'car hire with driver',
    'Rajkot to Ahmedabad cab',
    'Ahmedabad to Rajkot taxi',
    'Hirasar airport cab Rajkot',
    'one way cab Gujarat',
    'Innova Crysta rental Rajkot',
    'Ertiga on rent in Rajkot',
    'Swift Dzire cab rental',
    'Rajvee Travels',
  ],
  authors: [{ name: 'Rajvee Cab' }],
  creator: 'Rajvee Cab',
  publisher: 'Rajvee Cab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Rajvee Cab | Best Cab Service & Car Rental in Rajkot, Ahmedabad & Gujarat',
    description: 'Safe, sanitized, budget-friendly cabs and car rental with driver in Rajkot, Ahmedabad, and outstation routes. Instant booking on WhatsApp & Call!',
    url: 'https://rajvee-cab.github.io/',
    siteName: 'Rajvee Cab',
    images: [
      {
        url: 'https://rajvee-cab.github.io/images/welcome.jpg',
        width: 1200,
        height: 630,
        alt: 'Rajvee Cab Gujarat',
      },
    ],
    locale: 'gu_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajvee Cab | 24x7 Cab Service & Car Rental in Gujarat',
    description: 'Book One-Way & Round Trip Cabs across Gujarat at the best rates. Rent Swift Dzire, Ertiga, Innova Crysta.',
    images: ['https://rajvee-cab.github.io/images/welcome.jpg'],
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Rajkot, Gujarat, India',
    'geo.position': '22.3039;70.8022',
    'ICBM': '22.3039, 70.8022',
    'coverage': 'Gujarat, India',
    'distribution': 'Local',
    'rating': 'General',
  },
};

export default function RootLayout({ children }) {
  const schemaTaxiService = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRental'],
    name: 'Rajvee Cab',
    alternateName: 'Rajvee Travels',
    serviceType: 'Cab Service, Taxi Booking, and Car Rental with Driver',
    url: 'https://rajvee-cab.github.io/',
    logo: 'https://rajvee-cab.github.io/frontend/imgs/logo-w.png',
    image: 'https://rajvee-cab.github.io/images/welcome.jpg',
    telephone: '+919737872972',
    priceRange: '₹₹',
    description: 'Rajvee Cab provides professional, on-time, and budget-friendly outstation, one-way, round-trip, and airport taxi services and car rental across Rajkot, Ahmedabad, Surat, Vadodara, and all 33 districts of Gujarat.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1850',
    },
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
    sameAs: [
      'https://www.facebook.com/rajveecab/',
      'https://www.instagram.com/rajveecab/',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      { '@type': 'City', name: 'Rajkot' },
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Surat' },
      { '@type': 'City', name: 'Vadodara' },
      { '@type': 'City', name: 'Jamnagar' },
      { '@type': 'City', name: 'Bhavnagar' },
      { '@type': 'City', name: 'Junagadh' },
      { '@type': 'City', name: 'Gandhinagar' },
      { '@type': 'City', name: 'Morbi' },
      { '@type': 'City', name: 'Somnath' },
      { '@type': 'City', name: 'Dwarka' },
      { '@type': 'City', name: 'Bhuj' },
      { '@type': 'City', name: 'Bharuch' },
      { '@type': 'City', name: 'Anand' },
      { '@type': 'City', name: 'Vapi' },
      { '@type': 'City', name: 'Valsad' },
      { '@type': 'City', name: 'Porbandar' },
      { '@type': 'City', name: 'Sasan Gir' },
      { '@type': 'City', name: 'Statue of Unity Kevadia' },
      { '@type': 'State', name: 'Gujarat' },
      { '@type': 'City', name: 'Mumbai' },
    ],
  };

  const schemaWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rajvee Cab',
    alternateName: ['Rajvee Cab Rajkot', 'RajveeCab', 'Rajvee Travels'],
    url: 'https://rajvee-cab.github.io/',
  };

  return (
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Google Site Name Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
        {/* Taxi Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTaxiService) }}
        />
        {/* Google Analytics (gtag.js) - High Performance Deferred Execution */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q158Y8TLVZ', {
                page_path: window.location.pathname,
              });

              function loadGtag() {
                if (window.__gtagLoaded) return;
                window.__gtagLoaded = true;
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q158Y8TLVZ';
                document.head.appendChild(s);
              }
              if (document.readyState === 'complete') {
                loadGtag();
              } else {
                window.addEventListener('load', function() {
                  if ('requestIdleCallback' in window) {
                    requestIdleCallback(loadGtag);
                  } else {
                    setTimeout(loadGtag, 1200);
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${outfit.className} bg-white text-slate-900 antialiased min-h-screen flex flex-col pb-16 md:pb-0`}>
        <GlobalWhatsAppTracker />
        <Navbar />
        <main className="flex-grow pt-[68px] sm:pt-[76px]">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}

