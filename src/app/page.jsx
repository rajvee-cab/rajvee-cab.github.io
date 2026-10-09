import Image from 'next/image';
import Link from 'next/link';
import BookingBoxRenax from '@/components/BookingBoxRenax';
import RoutesSection from '@/components/RoutesSection';
import GujaratNetworkSection from '@/components/GujaratNetworkSection';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import {
  Check,
  ArrowUpRight,
  Phone,
  MessageCircle,
  MapPin,
  ArrowRightLeft,
  Clock,
  Car,
  ShieldCheck,
  Award,
  Users,
  FileText,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const carsData = [
    {
      name: 'Swift Dzire',
      category: 'Sedan (4+1)',
      img: '/frontend/imgs/car/SWIFT.webp',
      rate: '₹11 - ₹12 / KM',
      seats: '4 Passengers',
      bags: '2 Large Bags',
      ideal: 'Airport drops, solo commuters & small family trips',
    },
    {
      name: 'Hyundai Aura',
      category: 'Sedan (4+1)',
      img: '/frontend/imgs/car/AURA.webp',
      rate: '₹11 - ₹12 / KM',
      seats: '4 Passengers',
      bags: '2 Large Bags',
      ideal: 'Smooth highway cruising with maximum fuel efficiency',
    },
    {
      name: 'Maruti Ertiga',
      category: 'SUV (6+1)',
      img: '/frontend/imgs/car/ERTIGA.webp',
      rate: '₹14 - ₹15 / KM',
      seats: '6 Passengers',
      bags: '3-4 Bags',
      ideal: 'Large family vacations, group travel & outstation trips',
    },
    {
      name: 'Toyota Innova Crysta',
      category: 'Luxury (7+1)',
      img: '/frontend/imgs/car/INNOVA.webp',
      rate: '₹18 - ₹20 / KM',
      seats: '7 Passengers',
      bags: '5+ Bags',
      ideal: 'VIP corporate guests, executive comfort & long journeys',
    },
  ];

  const trustMetrics = [
    {
      icon: Award,
      num: '15,000+',
      label: 'Trips Completed',
      sub: 'Across 33 Districts',
    },
    {
      icon: ShieldCheck,
      num: 'Zero',
      label: 'Return Fare',
      sub: 'Pay only 1-way drop',
    },
    {
      icon: Clock,
      num: '100%',
      label: 'On-Time Trips',
      sub: 'Driver info 1 hr prior',
    },
    {
      icon: FileText,
      num: 'Official',
      label: 'GST Invoices',
      sub: 'For corporate travel',
    },
  ];

  const servicesData = [
    {
      num: '01.',
      title: 'One-Way Outstation Drops',
      desc: 'Travel between any two cities in Gujarat without paying return charges. Affordable door-to-door drops to Ahmedabad, Surat, Vadodara, and beyond.',
    },
    {
      num: '02.',
      title: '24x7 Airport Transfers',
      desc: 'Guaranteed on-time pickups and drops for Rajkot Hirasar International Airport and Ahmedabad SVPI Airport with live flight tracking.',
    },
    {
      num: '03.',
      title: 'Corporate Travel & Accounts',
      desc: 'Official transportation for business executives, delegates, and company tours with transparent GST tax billing and monthly accounts.',
    },
    {
      num: '04.',
      title: 'Pilgrimage Darshan Tours',
      desc: 'Comfortable family tour packages to holy shrines: Somnath Jyotirlinga, Dwarkadhish Dham, Ambaji, and Statue of Unity Kevadia.',
    },
    {
      num: '05.',
      title: 'Round-Trip & Sightseeing',
      desc: 'Full-day and multi-day packages with dedicated polite chauffeurs who know every state highway, eatery, and shortcut route.',
    },
    {
      num: '06.',
      title: 'Local City Hourly Rentals',
      desc: 'Flexible 4 Hours / 40 KM and 8 Hours / 80 KM packages for local shopping, hospital visits, weddings, and business meetings in Rajkot.',
    },
  ];



  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* 1. Hero Section - Executive Corporate Styling */}
      <section
        className="relative py-10 sm:py-16 lg:py-24 bg-slate-950 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.90), rgba(15, 23, 42, 0.94)), url('/frontend/imgs/Banner1.webp')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Corporate Value Proposition */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-wider max-w-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                <span className="truncate sm:whitespace-normal">
                  24x7 Outstation &amp; Airport Cab Service in Gujarat
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug sm:leading-tight break-words">
                Premium One-Way & Outstation <span className="text-amber-400">Cab Service</span> in Gujarat
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
                Travel comfortably across Rajkot, Ahmedabad, Surat, and 25+ cities. Professional chauffeurs, chilled AC sedans & SUVs, zero return charges, and transparent per-KM billing.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-300 pt-1">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Doorstep Pickup
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Zero Surge Charges
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" /> 24x7 Airport Transfers
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="tel:+919737872972"
                  aria-label="Call Rajvee Cab at +91 97378 72972"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2 whitespace-nowrap min-h-[48px]"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call: +91 97378 72972</span>
                </a>
                <a
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Rajvee Cab on WhatsApp"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center gap-2 whitespace-nowrap min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

            {/* Right Column: Clean Corporate Booking Box */}
            <div className="lg:col-span-6 w-full max-w-full">
              <BookingBoxRenax />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Corporate Trust Metrics Bar */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {trustMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-4 p-2.5 sm:p-0 rounded-xl bg-slate-50 sm:bg-transparent border sm:border-0 border-slate-100"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-700" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-2xl font-black text-slate-900 m-0 leading-tight truncate">
                      {item.num}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-bold text-slate-800 m-0 truncate">
                      {item.label}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 m-0 truncate">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. About Section - Corporate Overview */}
      <section className="py-14 sm:py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <span>About Rajvee Cab</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Your Dedicated Travel Partner Across <span className="text-amber-600">Rajkot & All Gujarat</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Headquartered at Greenland Chokdi, Rajkot, Rajvee Cab provides professional, punctual, and highly dependable cab services. Whether you need a midnight pickup for Hirasar Airport, an early-morning executive transfer to Ahmedabad, or a relaxing family pilgrimage tour to Somnath and Dwarka, our commercial fleet is ready 24 hours a day.
              </p>

              {/* 4 Feature Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
                {[
                  'Instant WhatsApp & Phone Booking',
                  'Verified, Chauffeur-Trained Drivers',
                  'Clean, Sanitized & Dual AC Cars',
                  'Zero Hidden Costs or Return Fares',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Inquire about Rajvee Cab services on WhatsApp"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400 shrink-0" />
                </a>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-80">
                <Image
                  src="/frontend/imgs/about-1.webp"
                  alt="About Rajvee Cab Gujarat"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Fleet & Transparent Rates Section */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200" id="cars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
              <Car className="w-3.5 h-3.5 text-amber-700" />
              <span>Commercial Fleet</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Fleet & <span className="text-amber-600">Transparent Tariffs</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Every vehicle is commercially registered, fully air-conditioned, sanitized, and driven by an experienced highway driver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {carsData.map((car, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Car Image Box */}
                  <div className="relative h-40 sm:h-44 w-full bg-slate-100 p-3 flex items-center justify-center">
                    <Image
                      src={car.img}
                      alt={car.name}
                      width={240}
                      height={140}
                      className="object-contain max-h-32 sm:max-h-36 hover:scale-105 transition duration-300"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      {car.category}
                    </div>
                  </div>

                  {/* Car Details */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {car.name}
                    </h3>
                    <p className="text-sm sm:text-base font-black text-amber-600 mb-2.5">
                      {car.rate}
                    </p>

                    <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-600 py-2 border-y border-slate-100 mb-3">
                      <span>{car.seats}</span>
                      <span>•</span>
                      <span>{car.bags}</span>
                      <span>•</span>
                      <span>Dual AC</span>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      {car.ideal}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={`https://wa.me/919737872972?text=${encodeURIComponent(
                      `Hello Rajvee Cab, I want to book ${car.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${car.name} on WhatsApp`}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition duration-150"
                  >
                    <span>Book {car.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Core Services Section */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
              <span>Mobility Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive <span className="text-amber-600">Travel Solutions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Designed for individual commuters, corporate business delegations, and family vacations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {servicesData.map((srv, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-md transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl sm:text-2xl font-black text-amber-600 font-mono">
                      {srv.num}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <a
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Inquire about ${srv.title} on WhatsApp`}
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition pt-2 border-t border-slate-200/60"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Popular Highway Routes (Interactive Rajkot HQ & Ahmedabad Hub) */}
      <RoutesSection />

      {/* 7. All Gujarat Coverage Network (25+ Cities) */}
      <GujaratNetworkSection />

      {/* 8. Client Reviews & Testimonials Section */}
      <ReviewsSection />

      {/* 9. FAQ Section */}
      <FaqSection />

      {/* 10. Call to Action Banner */}
      <section className="py-12 sm:py-16 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Book in 30 Seconds</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 text-white">
            Ready to Travel with Rajvee Cab?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 font-normal leading-relaxed">
            Contact us now to get instant fare estimates, verified vehicle details, and prompt chauffeur pickup at your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto">
            <a
              href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book cab via WhatsApp"
              className="w-full sm:w-auto sm:min-w-[220px] px-6 sm:px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2.5 whitespace-nowrap min-h-[50px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Book via WhatsApp</span>
            </a>
            <a
              href="tel:+919737872972"
              aria-label="Call Rajvee Cab at +91 97378 72972"
              className="w-full sm:w-auto sm:min-w-[220px] px-6 sm:px-8 py-3.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition flex items-center justify-center gap-2.5 whitespace-nowrap min-h-[50px]"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Call: +91 97378 72972</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
