'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRightLeft, Clock, ChevronRight, MapPin } from 'lucide-react';
import { formatWhatsAppRoute } from '@/utils/whatsapp';

const rajkotRoutes = [
  {
    from: 'Rajkot',
    to: 'Ahmedabad',
    time: '3.5 - 4 Hours',
    tag: 'Top Route',
    fare: '₹2,299 Onwards',
    desc: 'Lowest one-way cab fares, daily commuter special & doorstep pickup/drop.',
    highlight: true,
    link: '/rajkot-to-ahmedabad-cab',
  },
  {
    from: 'Rajkot City',
    to: 'Hirasar Airport (HSR)',
    time: '30 - 35 Mins',
    tag: 'Airport Special',
    fare: '₹699 Fixed',
    desc: 'Guaranteed on-time drop & flight arrival pickup with zero surge.',
    highlight: false,
    link: '/rajkot-to-hirasar-airport-cab',
  },
  {
    from: 'Rajkot',
    to: 'Surat',
    time: '7.5 Hours',
    tag: 'One-Way Drop',
    fare: '₹4,699 Onwards',
    desc: 'Smooth highway connection directly to Surat Diamond Bourse & Railway Station.',
    highlight: false,
    link: '/rajkot-to-surat-cab',
  },
  {
    from: 'Rajkot',
    to: 'Vadodara (Baroda)',
    time: '5 Hours',
    tag: 'Cultural Hub',
    fare: '₹3,499 Onwards',
    desc: 'Direct highway taxi to Alkapuri, Vadodara Station & Statue of Unity.',
    highlight: false,
    link: '/rajkot-to-vadodara-cab',
  },
  {
    from: 'Rajkot',
    to: 'Somnath Temple',
    time: '3.5 Hours',
    tag: 'Pilgrimage Special',
    fare: '₹2,499 Onwards',
    desc: 'Custom Jyotirlinga darshan, Bhalka Tirth, and Veraval coastal journey.',
    highlight: false,
    link: '/rajkot-to-somnath-cab',
  },
  {
    from: 'Rajkot',
    to: 'Dwarka & Beyt Dwarka',
    time: '4 Hours',
    tag: 'Devbhumi Route',
    fare: '₹2,899 Onwards',
    desc: 'Dwarkadhish darshan, Sudarshan Setu cable bridge, and Shivrajpur Beach.',
    highlight: false,
    link: '/rajkot-to-dwarka-cab',
  },
  {
    from: 'Rajkot',
    to: 'Jamnagar & Reliance Greens',
    time: '90 Mins',
    tag: 'Express Route',
    fare: '₹1,299 Onwards',
    desc: 'Fast commute to Jamnagar City, Motikhavdi, Nayara & Digjam Circle.',
    highlight: false,
    link: '/rajkot-to-jamnagar-cab',
  },
  {
    from: 'Rajkot',
    to: 'Morbi Ceramic Hub',
    time: '60 Mins',
    tag: 'Business Special',
    fare: '₹999 Onwards',
    desc: 'Hourly & one-way business trips to 8-A Ceramic Zone & Pipali Road.',
    highlight: false,
    link: '/rajkot-to-morbi-cab',
  },
];

const ahmedabadRoutes = [
  {
    from: 'Ahmedabad',
    to: 'Rajkot',
    time: '3.5 - 4 Hours',
    tag: 'Top Route',
    fare: '₹2,299 Onwards',
    desc: 'Airport & SG Highway pickups directly to Rajkot City with zero return fare.',
    highlight: true,
    link: '/rajkot-to-ahmedabad-cab',
  },
  {
    from: 'Ahmedabad',
    to: 'Surat',
    time: '4.5 Hours',
    tag: 'Expressway Route',
    fare: '₹3,499 Onwards',
    desc: 'Express highway travel to Surat textile & diamond industrial clusters.',
    highlight: false,
    link: '/ahmedabad-to-surat-cab',
  },
  {
    from: 'Ahmedabad',
    to: 'Vadodara (Baroda)',
    time: '90 Mins',
    tag: 'NE-1 Express',
    fare: '₹1,499 Onwards',
    desc: 'National Expressway 1 express corridor between Ahmedabad & Vadodara.',
    highlight: false,
    link: '/ahmedabad-to-vadodara-cab',
  },
  {
    from: 'Ahmedabad',
    to: 'Statue of Unity (Kevadia)',
    time: '3.5 Hours',
    tag: 'Tourist Day Tour',
    fare: '₹3,299 Onwards',
    desc: 'Full day sightseeing round-trip with viewing gallery & laser show waiting.',
    highlight: false,
    link: '/ahmedabad-to-statue-of-unity-cab',
  },
  {
    from: 'Ahmedabad',
    to: 'Mumbai',
    time: '8.5 Hours',
    tag: 'Interstate Express',
    fare: '₹7,499 Onwards',
    desc: 'Direct drops to Mumbai International Airport (BOM), Borivali & South Bombay.',
    highlight: false,
    link: '/ahmedabad-to-mumbai-cab',
  },
  {
    from: 'Ahmedabad',
    to: 'Gandhinagar & GIFT City',
    time: '25 Mins',
    tag: 'Capital Hub',
    fare: '₹599 Fixed',
    desc: 'Quick airport transfers to GIFT City, Infocity, and Mahatma Mandir.',
    highlight: false,
    link: '/cab-service-gandhinagar',
  },
  {
    from: 'Ahmedabad',
    to: 'Somnath Jyotirlinga',
    time: '7 Hours',
    tag: 'Pilgrimage Special',
    fare: '₹4,999 Onwards',
    desc: 'Direct highway journey to Somnath Mahadev temple with comfortable stops.',
    highlight: false,
    link: '/cab-service-somnath',
  },
  {
    from: 'Ahmedabad',
    to: 'Bhavnagar & Palitana',
    time: '3.5 Hours',
    tag: 'Pilgrim & Trade',
    fare: '₹2,699 Onwards',
    desc: 'Via Dholera Expressway corridor to Bhavnagar City & Shatrunjaya Yatra.',
    highlight: false,
    link: '/cab-service-bhavnagar',
  },
];

export default function RoutesSection() {
  const [activeHub, setActiveHub] = useState('rajkot');
  const currentRoutes = activeHub === 'rajkot' ? rajkotRoutes : ahmedabadRoutes;

  return (
    <section className="py-20 bg-white" id="routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-100 text-amber-900 mb-3 border border-amber-300">
            Priority Gujarat Departure Hubs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Top Outstation Cab Routes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Headquartered in <strong className="text-slate-900">Rajkot</strong> with full operational hub in <strong className="text-slate-900">Ahmedabad</strong>. Pay strictly for one-way drops with zero return fare!
          </p>

          {/* Interactive Hub Switcher Tabs */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl mt-8 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveHub('rajkot')}
              className={`px-5 sm:px-8 py-3 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition ${
                activeHub === 'rajkot'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <MapPin className={`w-4 h-4 ${activeHub === 'rajkot' ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>Cabs from Rajkot (HQ)</span>
            </button>

            <button
              onClick={() => setActiveHub('ahmedabad')}
              className={`px-5 sm:px-8 py-3 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition ${
                activeHub === 'ahmedabad'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <MapPin className={`w-4 h-4 ${activeHub === 'ahmedabad' ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>Cabs from Ahmedabad (Hub)</span>
            </button>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentRoutes.map((route, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                route.highlight
                  ? 'border-amber-400 bg-amber-50/40 ring-1 ring-amber-400/50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded bg-slate-100 text-slate-800">
                    {route.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500">
                    <Clock className="w-3 h-3 text-amber-500" /> {route.time}
                  </span>
                </div>

                <div className="my-3">
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-1.5 flex-wrap">
                    <span>{route.from}</span>
                    <ArrowRightLeft className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{route.to}</span>
                  </h3>
                  <div className="text-xs font-black text-amber-600 mt-1">
                    {route.fare}
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {route.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={formatWhatsAppRoute({ from: route.from, to: route.to, fare: route.fare })}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp fare inquiry for cab from ${route.from} to ${route.to}`}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                >
                  WhatsApp Fare
                </a>

                <Link
                  href={route.link}
                  aria-label={`Book cab from ${route.from} to ${route.to}`}
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-0.5 transition"
                >
                  <span>Book</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
