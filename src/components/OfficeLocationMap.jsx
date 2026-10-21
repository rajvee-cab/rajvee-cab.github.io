import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink, ShieldCheck, Star } from 'lucide-react';
import { formatWhatsAppGeneral } from '@/utils/whatsapp';

export default function OfficeLocationMap() {
  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden" id="office-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Official Operating Hub</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visit Our <span className="text-amber-500">Rajkot Office</span> &amp; Service Network
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2.5 max-w-xl mx-auto leading-relaxed">
            Headquartered strategically at Greenland Chokdi, Rajkot for instantaneous highway dispatch to Ahmedabad, Hirasar Airport, Saurashtra, and all 33 Gujarat districts.
          </p>
        </div>

        {/* 2-Column Grid: Office Info + Live Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Address Details */}
          <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              {/* Badge & Rating */}
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white m-0">Rajvee Cab</h3>
                  <span className="text-xs text-amber-400 font-semibold block mt-0.5">Gujarat Taxi &amp; Car Rental Headquarters</span>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-xl">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-black text-amber-400">4.9 / 5</span>
                </div>
              </div>

              {/* Info Rows */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Office Address</span>
                    <p className="text-sm font-semibold text-slate-100 m-0 mt-0.5 leading-snug">
                      Greenland Chokdi, National Highway 27, Rajkot, Gujarat - 360003
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Business Hours</span>
                    <p className="text-sm font-semibold text-slate-100 m-0 mt-0.5">
                      Open 24 Hours / 7 Days a Week (24x7 Dispatch)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Direct Helpline</span>
                    <a
                      href="tel:+919737872972"
                      className="text-sm font-extrabold text-amber-400 hover:text-amber-300 transition block mt-0.5"
                    >
                      +91 97378 72972
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-5 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Greenland+Chokdi,+Rajkot,+Gujarat+360003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition shadow-md min-h-[44px]"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </a>
              <a
                href={formatWhatsAppGeneral('Office Location Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs uppercase tracking-wider transition min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl min-h-[350px] relative bg-slate-950">
            <iframe
              src="https://maps.google.com/maps?q=Greenland+Chokdi,+Rajkot,+Gujarat+360003&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rajvee Cab Official Location Map - Greenland Chokdi, Rajkot"
              className="w-full h-full min-h-[350px] lg:min-h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
