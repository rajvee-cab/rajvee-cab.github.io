'use client';
import { useState, useEffect, useRef } from 'react';
import { Star, ShieldCheck, CheckCircle2, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

const reviews = [
  {
    name: 'Dr. Rajesh Patel',
    role: 'Senior Consultant, Rajkot',
    route: 'Rajkot ➔ Ahmedabad Airport (SVPI)',
    car: 'Swift Dzire (AC)',
    rating: 5,
    date: '2 days ago',
    comment:
      'Booked a Dzire at 4:00 AM for an early morning flight from Ahmedabad. The chauffeur arrived 15 minutes before time at Greenland Chokdi. The car was spotless, AC was great, and highway driving was exceptionally smooth. 100% dependable for airport drops.',
  },
  {
    name: 'Amitabh Trivedi',
    role: 'Regional Sales Head, Vadodara',
    route: 'Ahmedabad ➔ Surat (Corporate Outstation)',
    car: 'Toyota Innova Crysta',
    rating: 5,
    date: '1 week ago',
    comment:
      'Our corporate team frequently books Rajvee Cab for executive travel across South Gujarat. The billing is completely transparent, zero surge pricing, and they provided GST invoice instantly. Professional service at its best.',
  },
  {
    name: 'Nirali & Parth Shah',
    role: 'Family Vacation, Ahmedabad',
    route: 'Rajkot ➔ Dwarka & Somnath (3 Days Tour)',
    car: 'Maruti Ertiga (6+1)',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Travelled with my elderly parents for Somnath Jyotirlinga and Dwarkadhish darshan. The driver, Sanjaybhai, was extremely courteous and assisted my parents with luggage and temple gates. Very comfortable and memorable trip.',
  },
  {
    name: 'Chetan Jadeja',
    role: 'Business Owner, Rajkot',
    route: 'Rajkot City ➔ Hirasar International Airport',
    car: 'Hyundai Aura',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'Finding reliable cabs for Hirasar airport used to be a headache. Rajvee Cab offers fixed upfront fares without any bargaining. Booking on WhatsApp took literally 30 seconds.',
  },
  {
    name: 'Kavita Desai',
    role: 'Tech Lead, Gandhinagar',
    route: 'Vadodara ➔ Rajkot (One-Way Drop)',
    car: 'Swift Dzire',
    rating: 5,
    date: '1 month ago',
    comment:
      'As a solo female traveler on long highway routes, safety is always top priority. The car had live GPS tracking, the driver was verified and respectful, and I felt completely safe throughout the journey.',
  },
  {
    name: 'Maheshbhai Vora',
    role: 'Family Event, Jamnagar',
    route: 'Rajkot ➔ Jamnagar & Reliance Greens',
    car: 'Innova Crysta Luxury',
    rating: 5,
    date: '1 month ago',
    comment:
      'Booked Innova Crysta for a family function. The car condition was showroom fresh with recliner captain seats. Punctual, courteous, and very reasonable per-KM pricing.',
  },
  {
    name: 'Paresh Dave',
    role: 'Textile Merchant, Surat',
    route: 'Surat ➔ Ahmedabad Express Highway',
    car: 'Swift Dzire (AC)',
    rating: 5,
    date: '1 month ago',
    comment:
      'Needed urgent morning travel for business meeting. Cab reached my address on time. Experienced driver with smooth driving on express highway.',
  },
  {
    name: 'Bhavna Solanki',
    role: 'Teacher, Junagadh',
    route: 'Junagadh ➔ Rajkot Hirasar Airport',
    car: 'Hyundai Aura',
    rating: 5,
    date: '2 months ago',
    comment:
      'Super clean car, polite driver who arrived on time. Very fair pricing with zero return charges. Highly recommended for Saurashtra travelers.',
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Responsive items per page
  // Mobile: 1 card, Tablet: 2 cards, Desktop: 3 cards
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch Swipe handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200 overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Over <span className="text-amber-600">15,000+ Travelers</span> Across Gujarat
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Real experiences from corporate professionals, families, and daily highway commuters.
          </p>
        </div>

        {/* Rating Highlights Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm mb-8 sm:mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3.5 sm:gap-5">
            <div className="w-13 h-13 sm:w-16 sm:h-16 p-2 rounded-2xl bg-amber-500 text-slate-950 flex flex-col items-center justify-center font-black shrink-0">
              <span className="text-xl sm:text-2xl leading-none">4.9</span>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-slate-900">/ 5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 m-0">
                Google Business & Direct Client Rating
              </p>
              <p className="text-[11px] sm:text-xs text-slate-500 m-0">
                Based on 480+ authentic reviews across Rajkot & Gujarat
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 100% Verified Chauffeurs
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Transparent Per KM Tariffs
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> GST Corporate Invoices
            </span>
          </div>
        </div>

        {/* Interactive Review Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Slider Viewport with Carousel Track */}
          <div className="overflow-hidden py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="px-2 sm:px-3 shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between h-full min-h-[300px]">
                    <div>
                      {/* Rating Stars & Date */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1 text-amber-500">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] font-semibold text-slate-600">{rev.date}</span>
                      </div>

                      {/* Route Pill */}
                      <div className="inline-block bg-slate-100 text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-md mb-3 border border-slate-200/60 max-w-full truncate">
                        {rev.route}
                      </div>

                      {/* Review Text */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5 line-clamp-4">
                        &ldquo;{rev.comment}&rdquo;
                      </p>
                    </div>

                    {/* Author & Verified Badge */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 m-0 truncate">
                          {rev.name}
                        </h4>
                        <p className="text-[11px] text-slate-600 m-0 truncate">
                          {rev.role}
                        </p>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                        Verified Trip
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots Pagination */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx
                      ? 'w-6 bg-amber-500'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Left / Right Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 hover:border-slate-400 text-slate-700 flex items-center justify-center transition shadow-sm active:scale-95"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 hover:border-slate-400 text-slate-700 flex items-center justify-center transition shadow-sm active:scale-95"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
