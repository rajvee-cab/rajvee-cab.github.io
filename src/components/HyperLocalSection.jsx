'use client';
import { MapPin, Clock, Navigation, Phone, MessageCircle, ShieldCheck, Sparkles, Building, CheckCircle2 } from 'lucide-react';
import { hyperLocalCityData } from '@/data/hyperLocalData';

export default function HyperLocalSection({ cityKey = 'rajkot' }) {
  const cityInfo = hyperLocalCityData[cityKey];

  if (!cityInfo) return null;

  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden" id="local-coverage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Hyper-Local Coverage Across {cityInfo.cityName}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Doorstep Taxi Pickup Across <span className="text-amber-500">{cityInfo.cityName} Localities</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-3 leading-relaxed">
            {cityInfo.subheadline}
          </p>
        </div>

        {/* Local Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cityInfo.areas.map((area, idx) => {
            const encodedArea = encodeURIComponent(`Hello Rajvee Cab, I need an immediate / scheduled cab pickup from ${area.name} in ${cityInfo.cityName}. Please share car availability and fare.`);
            const whatsappUrl = `https://wa.me/919737872972?text=${encodedArea}`;

            return (
              <div
                key={idx}
                className="bg-slate-950 p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-amber-500/60 shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Badge: Name & ETA */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block mb-1">
                        {area.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition leading-snug">
                        {area.name}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-extrabold shrink-0">
                      <Clock className="w-3 h-3" />
                      {area.pickupTime}
                    </span>
                  </div>

                  {/* Landmarks */}
                  <div className="mb-3.5 text-xs text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-300 block mb-0.5">Key Landmarks:</span>
                    <span>{area.landmarks}</span>
                  </div>

                  {/* Popular Outstation Routes */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 text-xs text-slate-300 mb-4">
                    <span className="text-[11px] font-bold text-amber-500/90 uppercase tracking-wider block mb-1">
                      Frequent Outstation Routes:
                    </span>
                    <span className="font-medium text-slate-200">{area.popularRoutes}</span>
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800/80">
                  <a
                    href="tel:+919737872972"
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition text-center shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">Don&apos;t see your specific address listed above?</span>
              <span className="text-slate-400 text-xs">We provide 100% doorstep pickup from every single colony, apartment, hospital, and hotel across {cityInfo.cityName}.</span>
            </div>
          </div>
          <a
            href="tel:+919737872972"
            className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition shrink-0 whitespace-nowrap"
          >
            Dispatch Nearest Cab
          </a>
        </div>

      </div>
    </section>
  );
}
