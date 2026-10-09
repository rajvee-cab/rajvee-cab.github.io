import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import { formatWhatsAppRoute, formatWhatsAppRouteCar } from '@/utils/whatsapp';
import { Phone, MessageCircle, ArrowRightLeft, Clock, MapPin, CheckCircle2, ShieldCheck, Car } from 'lucide-react';

export const metadata = {
  title: 'Rajkot to Ahmedabad Cab | Best One-Way Taxi Fare Starting @ ₹2299 - Rajvee Cab',
  description: 'Book Rajkot to Ahmedabad Cab & Ahmedabad to Rajkot taxi with Rajvee Cab. Lowest one-way fare starting @ ₹2299. Clean AC Swift Dzire, Hyundai Aura, Ertiga, and Innova Crysta. Doorstep pickup 24x7.',
  keywords: [
    'Rajkot to Ahmedabad cab',
    'Rajkot to Ahmedabad taxi fare',
    'one way cab Rajkot to Ahmedabad',
    'Ahmedabad to Rajkot cab',
    'Rajkot to Ahmedabad car rental',
    'Rajkot to Ahmedabad Dzire taxi',
  ],
};

export default function RajkotToAhmedabadPage() {
  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Rajkot to Ahmedabad Cab Service - Rajvee Cab',
    url: 'https://rajvee-cab.github.io/rajkot-to-ahmedabad-cab/',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rajvee Cab',
      telephone: '+919737872972',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Greenland Chokdi',
        addressLocality: 'Rajkot',
        addressRegion: 'Gujarat',
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '2299',
      description: 'One way sedan cab from Rajkot to Ahmedabad',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />

      <section className="bg-gradient-to-b from-amber-50/60 via-slate-50/40 to-white text-slate-900 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-4 sm:mb-6 max-w-full truncate">
                <ArrowRightLeft className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate">Gujarat’s Most Popular Route - 24x7 On-Time Service</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-4 sm:mb-6">
                Rajkot ⇄ Ahmedabad <br />
                <span className="text-amber-600">One-Way & Round-Trip Cab</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Travel comfortably between Rajkot and Ahmedabad with guaranteed doorstep pickup. Pay only for one-way drops with no return charges. Sedans and SUVs available immediately.
              </p>

              {/* Route Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm mb-6 sm:mb-8 text-center">
                <div>
                  <span className="block text-[10px] sm:text-xs text-slate-500 font-semibold">Estimated Distance</span>
                  <span className="text-sm sm:text-base lg:text-lg font-black text-slate-900">~215 KM</span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-slate-500 font-semibold">Travel Duration</span>
                  <span className="text-sm sm:text-base lg:text-lg font-black text-slate-900">3.5 - 4 Hrs</span>
                </div>
                <div>
                  <span className="block text-[10px] sm:text-xs text-slate-500 font-semibold">Starting One-Way</span>
                  <span className="text-sm sm:text-base lg:text-lg font-black text-emerald-600">From ₹2,299</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="tel:+919737872972"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition min-h-[48px]"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call: +91 97378 72972</span>
                </a>
                <a
                  href={formatWhatsAppRoute({ from: 'Rajkot', to: 'Ahmedabad', fare: '₹2,299' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <BookingForm defaultPickup="Rajkot" defaultDrop="Ahmedabad" />
            </div>
          </div>
        </div>
      </section>

      {/* Fare Comparison Table / Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Rajkot ⇄ Ahmedabad Tariff & Fare Chart
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Transparent upfront pricing with zero hidden surcharges and doorstep pickup.
            </p>
          </div>

          {/* Mobile Card View (For Phones - Clean & No Horizontal Scroll) */}
          <div className="block md:hidden space-y-3.5">
            {[
              {
                car: 'Maruti Swift Dzire',
                shortName: 'Dzire',
                capacity: '4 + 1 Passengers',
                fare: '₹2,299 - ₹2,500',
                rate: '₹11 - ₹12 / KM',
              },
              {
                car: 'Hyundai Aura',
                shortName: 'Aura',
                capacity: '4 + 1 Passengers',
                fare: '₹2,299 - ₹2,500',
                rate: '₹11 - ₹12 / KM',
              },
              {
                car: 'Maruti Ertiga (SUV)',
                shortName: 'Ertiga',
                capacity: '6 + 1 Passengers',
                fare: '₹3,400 - ₹3,600',
                rate: '₹14 - ₹15 / KM',
              },
              {
                car: 'Toyota Innova Crysta',
                shortName: 'Innova',
                capacity: '7 + 1 Passengers',
                fare: '₹4,500 - ₹4,800',
                rate: '₹18 - ₹20 / KM',
              },
            ].map((v, i) => (
              <div key={i} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm flex flex-col justify-between">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{v.car}</span>
                    </h3>
                    <span className="text-xs text-slate-500 font-semibold">{v.capacity}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-black text-emerald-600 block">{v.fare}</span>
                    <span className="text-[11px] font-bold text-slate-600">{v.rate}</span>
                  </div>
                </div>
                <a
                  href={formatWhatsAppRouteCar({ from: 'Rajkot', to: 'Ahmedabad', car: v.car, fare: v.fare })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm transition min-h-[42px]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book {v.shortName} via WhatsApp</span>
                </a>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet Table View */}
          <div className="hidden md:block overflow-x-auto shadow-sm rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-900 text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  <th className="p-4">Vehicle Model</th>
                  <th className="p-4">Seating Capacity</th>
                  <th className="p-4">One-Way Fare</th>
                  <th className="p-4">Round-Trip Rate</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-500" />
                    <span>Maruti Swift Dzire</span>
                  </td>
                  <td className="p-4">4 + 1 Driver</td>
                  <td className="p-4 font-bold text-emerald-600">₹2,299 - ₹2,500</td>
                  <td className="p-4 font-bold text-slate-900">₹11 - ₹12 / KM</td>
                  <td className="p-4 text-center">
                    <a
                      href={formatWhatsAppRouteCar({ from: 'Rajkot', to: 'Ahmedabad', car: 'Maruti Swift Dzire', fare: '₹2,299 - ₹2,500' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-500" />
                    <span>Hyundai Aura</span>
                  </td>
                  <td className="p-4">4 + 1 Driver</td>
                  <td className="p-4 font-bold text-emerald-600">₹2,299 - ₹2,500</td>
                  <td className="p-4 font-bold text-slate-900">₹11 - ₹12 / KM</td>
                  <td className="p-4 text-center">
                    <a
                      href={formatWhatsAppRouteCar({ from: 'Rajkot', to: 'Ahmedabad', car: 'Hyundai Aura', fare: '₹2,299 - ₹2,500' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 bg-amber-50/20">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-500" />
                    <span>Maruti Ertiga (SUV)</span>
                  </td>
                  <td className="p-4">6 + 1 Driver</td>
                  <td className="p-4 font-bold text-emerald-600">₹3,400 - ₹3,600</td>
                  <td className="p-4 font-bold text-slate-900">₹14 - ₹15 / KM</td>
                  <td className="p-4 text-center">
                    <a
                      href={formatWhatsAppRouteCar({ from: 'Rajkot', to: 'Ahmedabad', car: 'Maruti Ertiga', fare: '₹3,400 - ₹3,600' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <Car className="w-4 h-4 text-amber-500" />
                    <span>Toyota Innova Crysta</span>
                  </td>
                  <td className="p-4">7 + 1 Driver</td>
                  <td className="p-4 font-bold text-emerald-600">₹4,500 - ₹4,800</td>
                  <td className="p-4 font-bold text-slate-900">₹18 - ₹20 / KM</td>
                  <td className="p-4 text-center">
                    <a
                      href={formatWhatsAppRouteCar({ from: 'Rajkot', to: 'Ahmedabad', car: 'Toyota Innova Crysta', fare: '₹4,500 - ₹4,800' })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
                    >
                      Book Now
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FleetSection />
    </>
  );
}
