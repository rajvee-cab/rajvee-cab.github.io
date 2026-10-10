import './globals.css';
import { Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import GlobalWhatsAppTracker from '@/components/GlobalWhatsAppTracker';
import Script from 'next/script';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL('https://rajvee-cab.github.io'),
  title: 'Rajvee Cab | 24x7 Cab Booking in Rajkot, Ahmedabad & Gujarat Taxi Service',
  description: 'Rajvee Cab provides reliable, affordable 24x7 cab services across Rajkot, Ahmedabad, Surat, and Gujarat. Best rates for One-Way taxi, Round-Trip, Airport Drops, and Outstation cabs. Book instantly via WhatsApp or Call: +91 97378 72972.',
  keywords: [
    'Rajvee Cab',
    'cab service Rajkot',
    'taxi service Ahmedabad',
    'Rajkot to Ahmedabad cab',
    'Ahmedabad to Rajkot taxi',
    'Hirasar airport cab Rajkot',
    'one way cab Gujarat',
    'Innova Crysta rental Rajkot',
    'Ertiga cab booking',
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
    title: 'Rajvee Cab | Best & Affordable Cab Service in Rajkot & Gujarat',
    description: 'Safe, sanitized, budget-friendly cabs in Rajkot, Ahmedabad, and outstation routes. Instant booking on WhatsApp & Call!',
    url: 'https://rajvee-cab.github.io',
    siteName: 'Rajvee Cab',
    images: [
      {
        url: '/images/welcome.jpg',
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
    title: 'Rajvee Cab | 24x7 Cab Service in Rajkot & Ahmedabad',
    description: 'Book One-Way & Round Trip Cabs across Gujarat at the best rates.',
    images: ['/images/welcome.jpg'],
  },
};

export default function RootLayout({ children }) {
  const schemaTaxiService = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajvee Cab',
    serviceType: 'One-Way Outstation & Airport Cab Service',
    url: 'https://rajvee-cab.github.io/',
    description: 'Rajvee Cab provides professional, on-time, and budget-friendly outstation, one-way, round-trip, and airport taxi services across Rajkot, Ahmedabad, Surat, Vadodara, and all 33 districts of Gujarat.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      alternateName: 'Rajvee Travels',
      url: 'https://rajvee-cab.github.io/',
      logo: 'https://rajvee-cab.github.io/frontend/imgs/logo-w.png',
      image: 'https://rajvee-cab.github.io/images/welcome.jpg',
      telephone: '+919737872972',
      priceRange: '₹₹',
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

  return (
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTaxiService) }}
        />
      </head>
      <body className={`${outfit.className} bg-white text-slate-900 antialiased min-h-screen flex flex-col pb-16 md:pb-0`}>
        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1G8Y8TLVZ"
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q1G8Y8TLVZ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <GlobalWhatsAppTracker />
        <Navbar />
        <main className="flex-grow pt-[68px] sm:pt-[76px]">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}

