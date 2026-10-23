'use client';
import Link from 'next/link';
import { Compass, Clock, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/data/blogData';

export default function TravelGuidesSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden" id="travel-guides">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Gujarat Travel &amp; Tour Desk</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-amber-500">Travel Guides</span> &amp; Tour Itineraries
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              Complete itineraries, temple darshan timings, airport taxi rates, and highway advice written by Gujarat’s local chauffeurs.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-amber-400 font-bold text-xs uppercase tracking-wider hover:bg-slate-700 hover:text-amber-300 transition shrink-0 self-start md:self-auto"
          >
            <span>Explore All Travel Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-slate-950 rounded-2xl border border-slate-800/90 shadow-lg hover:border-amber-500/50 hover:shadow-2xl transition duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    {post.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition leading-snug mb-2.5">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {post.summary}
                </p>

                {/* Key Facts Pill */}
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 space-y-1 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Distance:</span>
                    <span className="font-bold text-white">{post.keyFacts.distance}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Driving Time:</span>
                    <span className="font-bold text-white">{post.keyFacts.drivingTime}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-900 mt-2">
                <div className="flex items-center justify-between pt-4">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {post.publishedDate}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300 transition"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
