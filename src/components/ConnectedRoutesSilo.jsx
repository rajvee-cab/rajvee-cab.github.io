import Link from 'next/link';
import { MapPin, ArrowRightLeft, ChevronRight } from 'lucide-react';

const topCorridors = [
  { origin: 'Surat', destination: 'Mumbai (BOM)', fare: '₹4,499 Onwards', link: '/surat-to-mumbai-cab/' },
  { origin: 'Ahmedabad', destination: 'Surat', fare: '₹3,499 Onwards', link: '/ahmedabad-to-surat-cab/' },
  { origin: 'Ahmedabad', destination: 'Vadodara (Baroda)', fare: '₹1,499 Onwards', link: '/ahmedabad-to-vadodara-cab/' },
  { origin: 'Vadodara', destination: 'Statue of Unity', fare: '₹1,999 Onwards', link: '/ahmedabad-to-statue-of-unity-cab/' },
  { origin: 'Rajkot', destination: 'Ahmedabad', fare: '₹2,299 Onwards', link: '/rajkot-to-ahmedabad-cab/' },
  { origin: 'Rajkot', destination: 'Somnath Temple', fare: '₹2,499 Onwards', link: '/rajkot-to-somnath-cab/' },
  { origin: 'Rajkot', destination: 'Dwarka Dham', fare: '₹2,899 Onwards', link: '/rajkot-to-dwarka-cab/' },
  { origin: 'Rajkot', destination: 'Hirasar Airport (HSR)', fare: '₹699 Fixed', link: '/rajkot-to-hirasar-airport-cab/' },
  { origin: 'Ahmedabad', destination: 'Mumbai', fare: '₹7,499 Onwards', link: '/ahmedabad-to-mumbai-cab/' },
  { origin: 'Rajkot', destination: 'Jamnagar & Reliance', fare: '₹1,299 Onwards', link: '/rajkot-to-jamnagar-cab/' },
  { origin: 'Rajkot', destination: 'Morbi Ceramic Hub', fare: '₹999 Onwards', link: '/rajkot-to-morbi-cab/' },
  { origin: 'Surat', destination: 'Rajkot', fare: '₹4,699 Onwards', link: '/rajkot-to-surat-cab/' },
];

const keyCities = [
  { name: 'Surat City Hub', link: '/cab-service-surat/' },
  { name: 'Vadodara City Hub', link: '/cab-service-vadodara/' },
  { name: 'Ahmedabad Airport Hub', link: '/cab-service-ahmedabad/' },
  { name: 'Rajkot Headquarters', link: '/cab-service-rajkot/' },
  { name: 'Gandhinagar GIFT City', link: '/cab-service-gandhinagar/' },
  { name: 'Bhavnagar & Palitana', link: '/cab-service-bhavnagar/' },
  { name: 'Somnath Jyotirlinga', link: '/cab-service-somnath/' },
  { name: 'Dwarka Devbhumi', link: '/cab-service-dwarka/' },
];

export default function ConnectedRoutesSilo({ currentSlug = '' }) {
  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-2.5">
            Gujarat Highway Network
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Popular Connected Outstation Taxi Corridors
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Seamless one-way drops across Gujarat&apos;s primary commercial, airport, and pilgrimage routes with transparent per-KM pricing.
          </p>
        </div>

        {/* Top Route Corridors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {topCorridors
            .filter((c) => !c.link.includes(currentSlug))
            .slice(0, 8)
            .map((c, idx) => (
              <Link
                key={idx}
                href={c.link}
                prefetch={false}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-amber-400/80 transition duration-200 group block"
              >
                <div className="flex items-center justify-between text-xs font-black text-slate-200 group-hover:text-amber-400 transition mb-1.5">
                  <span className="flex items-center gap-1.5 truncate">
                    <span>{c.origin}</span>
                    <ArrowRightLeft className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{c.destination}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-emerald-400">{c.fare}</span>
                  <span className="text-slate-500 group-hover:text-slate-300 transition flex items-center gap-0.5">
                    View <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
        </div>

        {/* Major City Taxi Portals */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 text-center sm:text-left">
            Major City Departure Hubs &amp; Local Car Rental
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            {keyCities.map((city, idx) => (
              <Link
                key={idx}
                href={city.link}
                prefetch={false}
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-400 text-slate-300 hover:text-white transition flex items-center justify-between group"
              >
                <span className="truncate">{city.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 shrink-0 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* View All Routes Banner */}
        <div className="mt-8 text-center">
          <Link
            href="/routes/"
            prefetch={false}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition"
          >
            <span>Explore All 500+ Gujarat Routes Directory</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
