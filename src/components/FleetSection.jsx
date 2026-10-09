import Image from 'next/image';
import { Users, Briefcase, Snowflake, CheckCircle2, MessageCircle } from 'lucide-react';

const fleetData = [
  {
    name: 'Maruti Suzuki Dzire',
    category: 'Sedan (Most Popular)',
    image: '/images/car/SWIFT.webp',
    seats: '4 Passengers + Driver',
    luggage: '2-3 Luggage Bags',
    price: 'Starting @ ₹11 - ₹12 / KM',
    popular: true,
    features: ['Best for small families & airport drops', 'Chilled AC & comfortable legroom', 'Clean & sanitized interior'],
    waMsg: 'Hello Rajvee Cab, I want to book Maruti Dzire Sedan.',
  },
  {
    name: 'Hyundai Aura',
    category: 'Comfort Sedan',
    image: '/images/car/AURA.webp',
    seats: '4 Passengers + Driver',
    luggage: '2-3 Luggage Bags',
    price: 'Starting @ ₹11 - ₹12 / KM',
    popular: false,
    features: ['Smooth highway ride', 'Ample boot space for luggage', 'Affordable outstation pricing'],
    waMsg: 'Hello Rajvee Cab, I want to book Hyundai Aura Sedan.',
  },
  {
    name: 'Maruti Suzuki Ertiga',
    category: 'Spacious Family SUV',
    image: '/images/car/ERTIGA.webp',
    seats: '6 Passengers + Driver',
    luggage: '3-4 Luggage Bags',
    price: 'Starting @ ₹14 - ₹15 / KM',
    popular: false,
    features: ['Perfect for group & family trips', 'Dual AC vents for all rows', 'Superior riding comfort'],
    waMsg: 'Hello Rajvee Cab, I want to book Maruti Ertiga SUV.',
  },
  {
    name: 'Toyota Innova Crysta',
    category: 'Premium Luxury SUV',
    image: '/images/car/INNOVA.webp',
    seats: '7 Passengers + Driver',
    luggage: '5+ Luggage Bags',
    price: 'Starting @ ₹18 - ₹20 / KM',
    popular: false,
    features: ['VIP luxury & unmatched comfort', 'Captain seats with plush cushioning', 'High-speed highway stability'],
    waMsg: 'Hello Rajvee Cab, I want to book Toyota Innova Crysta.',
  },
];

export default function FleetSection() {
  return (
    <section className="py-20 bg-slate-50" id="fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-100 text-amber-800 mb-3">
            Our Vehicle Fleet
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clean, Comfortable & Modern Cab Fleet
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Choose from well-maintained sedans and SUVs with transparent per-KM and fixed route fares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetData.map((car, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl overflow-hidden border transition duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between ${
                car.popular ? 'border-amber-500 shadow-md ring-1 ring-amber-500/20' : 'border-slate-200 shadow-sm'
              }`}
            >
              {car.popular && (
                <div className="absolute top-3 left-3 z-10 bg-amber-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full shadow">
                  ★ Most Popular
                </div>
              )}

              <div>
                <div className="relative h-44 w-full bg-slate-50 p-4 flex items-center justify-center">
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={260}
                    height={150}
                    className="object-contain max-h-36 hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                    {car.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {car.name}
                  </h3>

                  <div className="flex flex-wrap gap-3 py-2.5 border-y border-slate-100 text-xs font-medium text-slate-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-amber-500" /> {car.seats}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-amber-500" /> {car.luggage}
                    </span>
                    <span className="flex items-center gap-1">
                      <Snowflake className="w-3.5 h-3.5 text-amber-500" /> AC
                    </span>
                  </div>

                  <p className="text-base font-extrabold text-amber-700 mb-3">
                    {car.price}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-600 mb-5">
                    {car.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/919737872972?text=${encodeURIComponent(car.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
                    car.popular
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book {car.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
