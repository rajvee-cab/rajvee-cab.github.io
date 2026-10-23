'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, ArrowRightLeft, Clock, Phone, MessageCircle, ChevronRight, Sparkles, Navigation, X } from 'lucide-react';
import { allRoutesData } from '@/data/allRoutesData';
import { formatWhatsAppRoute } from '@/utils/whatsapp';

export default function RoutesDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHub, setSelectedHub] = useState('All');
  const [displayCount, setDisplayCount] = useState(36);

  const hubFilters = [
    { label: 'All Routes (500+)', value: 'All' },
    { label: 'From Rajkot', value: 'Rajkot' },
    { label: 'From Ahmedabad', value: 'Ahmedabad' },
    { label: 'From Surat', value: 'Surat' },
    { label: 'From Vadodara', value: 'Vadodara' },
    { label: 'Airport Transfers', value: 'Airport' },
    { label: 'Pilgrimage (Somnath / Dwarka)', value: 'Pilgrimage' },
  ];

  const filteredRoutes = useMemo(() => {
    let list = allRoutesData;

    // Filter by selected hub
    if (selectedHub === 'Rajkot') {
      list = list.filter((r) => r.origin.toLowerCase().includes('rajkot'));
    } else if (selectedHub === 'Ahmedabad') {
      list = list.filter((r) => r.origin.toLowerCase().includes('ahmedabad'));
    } else if (selectedHub === 'Surat') {
      list = list.filter((r) => r.origin.toLowerCase().includes('surat'));
    } else if (selectedHub === 'Vadodara') {
      list = list.filter((r) => r.origin.toLowerCase().includes('vadodara'));
    } else if (selectedHub === 'Airport') {
      list = list.filter(
        (r) =>
          r.origin.toLowerCase().includes('airport') ||
          r.destination.toLowerCase().includes('airport') ||
          r.origin.toLowerCase().includes('hirasar') ||
          r.destination.toLowerCase().includes('hirasar')
      );
    } else if (selectedHub === 'Pilgrimage') {
      list = list.filter(
        (r) =>
          r.destination.toLowerCase().includes('somnath') ||
          r.destination.toLowerCase().includes('dwarka') ||
          r.destination.toLowerCase().includes('ambaji') ||
          r.destination.toLowerCase().includes('statue of unity')
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (r) =>
          r.origin.toLowerCase().includes(q) ||
          r.destination.toLowerCase().includes(q) ||
          r.slug.toLowerCase().includes(q)
      );
    }

    return list;
  }, [searchQuery, selectedHub]);

  const displayedRoutes = useMemo(() => {
    return filteredRoutes.slice(0, displayCount);
  }, [filteredRoutes, displayCount]);

  return (
    <div className="w-full">
      {/* Search & Filter Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-[68px] sm:top-[76px] z-30 py-4 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
          
          {/* Search Input Box */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(36);
              }}
              placeholder="Search pickup city, destination (e.g. Ahmedabad, Somnath, Airport)..."
              className="w-full pl-11 pr-10 py-3 sm:py-3.5 rounded-2xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-400 outline-none transition bg-slate-50 focus:bg-white shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs sm:text-sm justify-start sm:justify-center">
            {hubFilters.map((hub, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedHub(hub.value);
                  setDisplayCount(36);
                }}
                className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition cursor-pointer shrink-0 ${
                  selectedHub === hub.value
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {hub.label}
              </button>
            ))}
          </div>

          {/* Results count text */}
          <div className="text-center text-xs text-slate-500 font-semibold">
            Showing <span className="text-slate-900 font-bold">{displayedRoutes.length}</span> of{' '}
            <span className="text-slate-900 font-bold">{filteredRoutes.length}</span> Gujarat taxi routes
          </div>

        </div>
      </div>

      {/* Routes Grid Section */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {displayedRoutes.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-sm">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">No matching routes found</h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                We operate across all 33 districts of Gujarat. If your route is not listed here, contact our 24x7 desk for instant custom pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedHub('All');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition"
                >
                  Clear Filters
                </button>
                <a
                  href="tel:+919737872972"
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition"
                >
                  Call +91 97378 72972
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {displayedRoutes.map((route, idx) => {
                const sedanFare = route.fares?.sedan || '₹11/KM';
                const suvFare = route.fares?.suv || '₹14/KM';
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header: Route Origin -> Destination */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <Link
                          href={`/${route.slug}/`}
                          prefetch={false}
                          className="group-hover:text-amber-600 transition"
                        >
                          <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug m-0 flex items-center gap-1.5 flex-wrap">
                            <span>{route.origin}</span>
                            <ArrowRightLeft className="w-4 h-4 text-amber-500 shrink-0" />
                            <span>{route.destination}</span>
                          </h3>
                        </Link>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 shrink-0">
                          One-Way
                        </span>
                      </div>

                      {/* Distance & Duration Badges */}
                      <div className="flex items-center gap-3 text-xs text-slate-600 font-semibold mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>~{route.distanceKm} KM</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{route.durationText}</span>
                        </span>
                      </div>

                      {/* Pricing Box */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                            Sedan (Dzire/Aura)
                          </span>
                          <span className="text-base font-black text-emerald-600">
                            {sedanFare}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                            SUV (Ertiga 6+1)
                          </span>
                          <span className="text-sm font-bold text-slate-800">
                            {suvFare}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                      <Link
                        href={`/${route.slug}/`}
                        prefetch={false}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider text-center transition flex items-center justify-center gap-1 min-h-[40px]"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                      </Link>
                      <a
                        href={formatWhatsAppRoute({ from: route.origin, to: route.destination, fare: sedanFare })}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Book ${route.origin} to ${route.destination} cab on WhatsApp`}
                        className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center justify-center min-h-[40px] min-w-[40px] shadow-sm"
                        title="Book via WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Load More Button */}
          {displayedRoutes.length < filteredRoutes.length && (
            <div className="text-center mt-10 sm:mt-12">
              <button
                onClick={() => setDisplayCount((prev) => prev + 36)}
                className="px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition duration-200 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Load More Routes (+36)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-slate-500 mt-2.5">
                Showing {displayedRoutes.length} of {filteredRoutes.length} total routes
              </p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
