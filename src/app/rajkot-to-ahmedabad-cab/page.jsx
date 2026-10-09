import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
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
    telephone: '+919737872972',
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold mb-6">
                <ArrowRightLeft className="w-4 h-4 text-amber-600" />
                <span>Gujarat’s Most Popular Route - 24x7 On-Time Service</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900 mb-6">
                Rajkot ⇄ Ahmedabad <br />
                <span className="text-amber-600">One-Way & Round-Trip Cab</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                Travel comfortably between Rajkot and Ahmedabad with guaranteed doorstep pickup. Pay only for one-way drops with no return charges. Sedans and SUVs available immediately.
              </p>

              {/* Route Quick Stats */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm mb-8 text-center">
                <div>
                  <span className="block text-xs text-slate-500 font-semibold">Estimated Distance</span>
                  <span className="text-base sm:text-lg font-black text-slate-900">~215 KM</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-semibold">Travel Duration</span>
                  <span className="text-base sm:text-lg font-black text-slate-900">3.5 to 4 Hours</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-semibold">Starting One-Way</span>
                  <span className="text-base sm:text-lg font-black text-emerald-600">From ₹2,299</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+919737872972"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-black text-white font-extrabold text-sm flex items-center gap-2 shadow-md transition transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call: +91 97378 72972</span>
                </a>
                <a
                  href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20a%20cab%20from%20Rajkot%20to%20Ahmedabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center gap-2 shadow-md shadow-emerald-600/20 transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BookingForm defaultPickup="Rajkot" defaultDrop="Ahmedabad" />
            </div>
          </div>
        </div>
      </section>

      {/* Fare Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Rajkot ⇄ Ahmedabad Tariff & Fare Chart
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Transparent upfront pricing with zero hidden surcharges and doorstep pickup.
            </p>
          </div>

          <div className="overflow-x-auto shadow-sm rounded-2xl border border-slate-200">
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
                      href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20Dzire%20from%20Rajkot%20to%20Ahmedabad."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
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
                      href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20Aura%20from%20Rajkot%20to%20Ahmedabad."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
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
                      href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20Ertiga%20from%20Rajkot%20to%20Ahmedabad."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
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
                      href="https://wa.me/919737872972?text=Hello%20Rajvee%20Cab,%20I%20want%20to%20book%20Innova%20Crysta%20from%20Rajkot%20to%20Ahmedabad."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-block"
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
