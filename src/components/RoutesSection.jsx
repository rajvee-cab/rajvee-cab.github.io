import Link from 'next/link';
import { ArrowRightLeft, Clock, ChevronRight } from 'lucide-react';

const popularRoutes = [
  {
    from: 'Rajkot',
    to: 'Ahmedabad',
    time: '3.5 - 4 Hours',
    tag: 'Top Route',
    desc: 'Lowest one-way cab fares, daily commuter special & doorstep pickup/drop.',
    highlight: true,
    link: '/rajkot-to-ahmedabad-cab',
  },
  {
    from: 'Rajkot City',
    to: 'Hirasar Airport',
    time: '30 - 35 Mins',
    tag: 'Airport Special',
    desc: 'Fixed airport fares starting @ ₹699, guaranteed on-time drop & pickup.',
    highlight: false,
    link: '/rajkot-to-hirasar-airport-cab',
  },
  {
    from: 'Ahmedabad',
    to: 'Surat',
    time: '4.5 - 5 Hours',
    tag: 'One-Way Available',
    desc: 'Smooth highway drive on National Highway, business & family travel.',
    highlight: false,
    link: '/ahmedabad-to-surat-cab',
  },
  {
    from: 'Rajkot',
    to: 'Somnath Temple',
    time: '3.5 Hours',
    tag: 'Pilgrimage Special',
    desc: 'Custom Saurashtra Jyotirlinga tour packages starting @ ₹2499 with courteous drivers.',
    highlight: false,
    link: '/rajkot-to-somnath-cab',
  },
  {
    from: 'Rajkot',
    to: 'Dwarka & Beyt Dwarka',
    time: '4 Hours',
    tag: 'Devbhumi Route',
    desc: 'Lowest one-way taxi starting @ ₹2899, Sudarshan Setu & Shivrajpur Beach tour.',
    highlight: false,
    link: '/rajkot-to-dwarka-cab',
  },
  {
    from: 'Ahmedabad',
    to: 'Vadodara Express',
    time: '90 Mins',
    tag: 'NE-1 Expressway',
    desc: 'Direct highway cab starting @ ₹1499 for twin cities & Statue of Unity.',
    highlight: false,
    link: '/ahmedabad-to-vadodara-cab',
  },
];

export default function RoutesSection() {
  return (
    <section className="py-20 bg-white" id="routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-100 text-emerald-800 mb-3">
            Popular Cab Routes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Top Searched Gujarat & Outstation Routes
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Pay only for one-way drops with no return charges or choose discounted round-trip packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                route.highlight
                  ? 'border-amber-400 bg-amber-50/40 ring-1 ring-amber-400/50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                    {route.tag}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-amber-500" /> {route.time}
                  </span>
                </div>

                <div className="my-4">
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <span>{route.from}</span>
                    <ArrowRightLeft className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{route.to}</span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {route.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/919737872972?text=${encodeURIComponent(
                    `Hello Rajvee Cab, I want to inquire about cab fare from ${route.from} to ${route.to}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                >
                  Check Fare via WhatsApp
                </a>

                <Link
                  href={route.link}
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 transition"
                >
                  <span>View Details</span>
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
