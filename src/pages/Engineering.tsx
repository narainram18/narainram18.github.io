import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  FlaskConical,
  CheckCircle2,
  FileCode,
  Tag,
} from 'lucide-react';
import { ENGINEERING_ENTRIES } from '@/data/engineering';
import { EngineeringCategory } from '@/types/engineering';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function Engineering() {
  usePageMetadata(
    'Engineering Library // Codices — Narain Ram R M',
    'Technical investigations, performance benchmarks, concurrency analysis, and laboratory experiments by Narain Ram R M.'
  );

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories: ('ALL' | EngineeringCategory)[] = [
    'ALL',
    'Systems',
    'Networking',
    'Robotics',
    'Algorithms',
    'Distributed Systems',
  ];

  const filteredEntries =
    selectedCategory === 'ALL'
      ? ENGINEERING_ENTRIES
      : ENGINEERING_ENTRIES.filter((e) => e.category === selectedCategory);

  const completedCount = ENGINEERING_ENTRIES.filter((e) => !e.isPlaceholder).length;
  const labPlanCount = ENGINEERING_ENTRIES.filter((e) => e.isPlaceholder).length;

  return (
    <div className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none">
      {/* Top Breadcrumb & Location */}
      <div className="flex flex-col gap-1 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-mono text-[11px] tracking-widest uppercase font-semibold">
              LOCATION // ENGINEERING LIBRARY [SYS-02]
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6C093] animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5 bg-[#1D2025] px-2.5 py-0.5 border border-[#272A30] text-[10px] font-mono text-[#E6C093]">
            <BookOpen className="w-3 h-3 text-[#C5A059]" />
            <span>TECHNICAL CODICES</span>
          </div>
        </div>

        {/* Monumental Header Segment */}
        <div className="relative bg-[#161B22] p-6 sm:p-8 border border-[#272A30] overflow-hidden shadow-2xl mt-2">
          {/* Subtle Stone Tablet Watermark */}
          <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none text-[#E6C093]">
            <BookOpen className="w-48 h-48" />
          </div>

          <div className="flex flex-col relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[#C5A059] tracking-widest text-[10px] uppercase font-semibold">
                ᚱᛖᛋᛖᚨᚱᚲᚺ // SYSTEM INVESTIGATIONS
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#C5A059] tracking-wide uppercase font-bold">
              ENGINEERING LIBRARY
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#9A8F80] mt-2 leading-relaxed">
              Technical tear-downs on Linux zero-copy networking, C++ worker thread pool sizing, asynchronous socket multiplexing, and autonomous robotics costmaps.
            </p>

            {/* Status Breakdown Ribbon (Strictly separating Completed vs Lab Plans) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5 bg-[#0B0E13]/80 p-3 border border-[#272A30]">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  Total Codices
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#E6DFD5] font-semibold mt-0.5">
                  {ENGINEERING_ENTRIES.length} Entries
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  Completed Investigations
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#C5A059] font-semibold mt-0.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  {completedCount} Verified Writeups
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  Laboratory Plans
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#D97736] font-semibold mt-0.5 flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5 text-[#D97736]" />
                  {labPlanCount} Planned Benchmarks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discipline Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 mb-6">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-[10px] px-3.5 py-1.5 uppercase font-bold tracking-wider shrink-0 transition-all ${
                isSelected
                  ? 'bg-[#C5A059] text-[#111319] shadow-md'
                  : 'bg-[#161B22] text-[#9A8F80] hover:text-[#E6DFD5] border border-[#272A30]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Codices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEntries.map((entry, idx) => {
          const isLabPlan = entry.isPlaceholder;

          return (
            <article
              key={entry.slug}
              className={`stone-card p-6 flex flex-col justify-between group border ${
                isLabPlan
                  ? 'border-[#272A30] hover:border-[#D97736]'
                  : 'border-[#272A30] hover:border-[#C5A059]'
              }`}
            >
              <div className="space-y-3">
                {/* Header status badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] px-2 py-0.5 bg-[#0B0E13] text-[#8C6D46] border border-[#272A30]">
                      CODEX 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] text-[#9A8F80]">
                      {entry.category}
                    </span>
                  </div>

                  {/* Explicit status marker conforming to user requirement */}
                  {isLabPlan ? (
                    <span className="font-mono text-[9px] px-2 py-0.5 bg-[#1D2025] text-[#D97736] border border-[#D97736]/40 flex items-center gap-1 font-semibold uppercase">
                      <FlaskConical className="w-3 h-3 text-[#D97736]" />
                      LAB PLAN
                    </span>
                  ) : (
                    <span className="font-mono text-[9px] px-2 py-0.5 bg-[#1D2025] text-[#C5A059] border border-[#C5A059]/40 flex items-center gap-1 font-semibold uppercase">
                      <CheckCircle2 className="w-3 h-3 text-[#C5A059]" />
                      COMPLETED
                    </span>
                  )}
                </div>

                <h2 className="font-serif text-lg font-bold text-[#E6DFD5] group-hover:text-[#C5A059] transition-colors uppercase leading-snug">
                  {entry.title}
                </h2>

                <p className="font-sans text-xs text-[#9A8F80] leading-relaxed line-clamp-3">
                  {entry.summary}
                </p>

                {/* Topics / Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {entry.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="font-mono text-[9px] px-2 py-0.5 bg-[#0B0E13] text-[#E6C093] border border-[#272A30]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer action */}
              <div className="mt-6 pt-4 border-t border-[#272A30] flex items-center justify-between font-mono text-[10px]">
                <span className="text-[#8C6D46] flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {entry.readTime}
                </span>

                <Link
                  to={`/engineering/${entry.slug}`}
                  className={`font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform ${
                    isLabPlan ? 'text-[#D97736]' : 'text-[#C5A059]'
                  }`}
                >
                  <span>{isLabPlan ? 'VIEW EXPERIMENT PLAN' : 'READ CODEX'}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Laboratory Policy Disclaimer */}
      <div className="mt-12 stone-panel p-5 border-l-4 border-l-[#C5A059] flex items-start gap-4">
        <FileCode className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <span className="font-mono font-bold text-[#E6DFD5] uppercase tracking-wider block">
            LABORATORY POLICY // DISCIPLINE OVER VOLUME
          </span>
          <p className="font-sans text-[#9A8F80] leading-relaxed">
            This engineering library strictly documents technical writeups grounded in actual codebases, systems, and coursework. Topics marked with <strong className="text-[#D97736] font-mono">LAB PLAN</strong> represent upcoming benchmarks currently being designed and structured. No planned experiments are presented as completed work.
          </p>
        </div>
      </div>
    </div>
  );
}
