'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, MapPin, Navigation } from 'lucide-react';
import { allRoutesData } from '@/data/allRoutesData';

const popularCities = [
  { name: 'Ahmedabad', link: '/cab-service-ahmedabad/' },
  { name: 'Bhavnagar', link: '/cab-service-bhavnagar/' },
  { name: 'Bhuj', link: '/cab-service-bhuj/' },
  { name: 'Diu', link: '/rajkot-to-diu-cab/' },
  { name: 'Dwarka', link: '/cab-service-dwarka/' },
  { name: 'Gandhidham', link: '/rajkot-to-gandhidham-cab/' },
  { name: 'Gandhinagar', link: '/cab-service-gandhinagar/' },
  { name: 'Hirasar', link: '/rajkot-to-hirasar-airport-cab/' },
  { name: 'Jamnagar', link: '/cab-service-jamnagar/' },
  { name: 'Junagadh', link: '/cab-service-junagadh/' },
  { name: 'Kutch', link: '/cab-service-bhuj/' },
  { name: 'Morbi', link: '/cab-service-morbi/' },
  { name: 'Mumbai', link: '/ahmedabad-to-mumbai-cab/' },
  { name: 'Patan', link: '/ahmedabad-to-patan-cab/' },
  { name: 'Porbandar', link: '/rajkot-to-porbandar-cab/' },
  { name: 'Rajkot', link: '/cab-service-rajkot/' },
  { name: 'Rajkot Hirasar Airport', link: '/rajkot-to-hirasar-airport-cab/' },
  { name: 'Sarangpur', link: '/rajkot-to-sarangpur-cab/' },
  { name: 'Sasan Gir', link: '/rajkot-to-sasan-gir-cab/' },
  { name: 'Somnath', link: '/cab-service-somnath/' },
  { name: 'Surat', link: '/cab-service-surat/' },
  { name: 'Surendranagar', link: '/rajkot-to-surendranagar-cab/' },
  { name: 'Vadodara', link: '/cab-service-vadodara/' },
];

export default function PopularRoutesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-amber-400 text-slate-950 py-12 sm:py-16 border-t border-amber-500/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Popular Taxi Services in Cities */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Popular Taxi Services in Cities
          </h2>
          <div className="w-16 h-1 bg-slate-950 mx-auto mt-2.5 rounded-full opacity-30"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2.5 text-xs sm:text-[13px] font-semibold text-slate-900 mb-8">
          {popularCities.map((city, idx) => (
            <Link
              key={idx}
              href={city.link}
              className="hover:text-black hover:underline transition truncate"
              title={`Cab hire in ${city.name}`}
            >
              Cab hire in {city.name}
            </Link>
          ))}
        </div>

        {/* View More / View Less Toggle Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2.5 bg-white text-slate-950 font-black text-xs uppercase tracking-wider rounded-full shadow-md hover:bg-slate-950 hover:text-white transition flex items-center gap-1.5 cursor-pointer"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'View Less' : 'View More'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Section 2: Most Popular Routes */}
        <div className="text-center mb-8 pt-4 border-t border-slate-950/10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Most Popular Routes
          </h2>
          <div className="w-16 h-1 bg-slate-950 mx-auto mt-2.5 rounded-full opacity-30"></div>
        </div>

        {/* Routes Grid - Collapsible for human UX, yet semantic in DOM for Googlebot */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isExpanded ? 'max-h-[9999px]' : 'max-h-[380px]'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-2 text-[11px] sm:text-xs font-medium text-slate-900 leading-snug">
            {allRoutesData.map((route, idx) => (
              <Link
                key={idx}
                href={`/${route.slug}/`}
                className="hover:text-black hover:underline transition truncate"
                title={`${route.origin} To ${route.destination} Taxi Service`}
              >
                {route.origin} To {route.destination} Taxi Service
              </Link>
            ))}
          </div>
        </div>

        {/* Second View More button at bottom if collapsed */}
        {!isExpanded && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsExpanded(true)}
              className="px-6 py-2.5 bg-slate-950 text-white font-black text-xs uppercase tracking-wider rounded-full shadow hover:bg-slate-800 transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All 500+ Gujarat Routes</span>
              <ChevronDown className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
