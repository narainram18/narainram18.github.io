import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  User,
  ArrowRight,
  GraduationCap,
  Cpu,
  Hammer,
  LayoutGrid,
} from 'lucide-react';
import { ABOUT_DATA } from '@/data/about';
import { EDUCATION } from '@/data/experience';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function About() {
  const primaryEducation = EDUCATION[0];

  usePageMetadata(
    'My Chamber // Philosophy & Trajectory — Narain Ram R M',
    'Engineer philosophy, academic background at VIT Chennai, systems tenets, and engineering workflow of Narain Ram R M.'
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none">
      {/* Top Location Breadcrumb */}
      <div className="flex flex-col gap-1 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-mono text-[11px] tracking-widest uppercase font-semibold">
              LOCATION // MY CHAMBER [SYS-03]
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6DFD5] animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5 bg-[#1D2025] px-2.5 py-0.5 border border-[#272A30] text-[10px] font-mono text-[#E6C093]">
            <User className="w-3 h-3 text-[#C5A059]" />
            <span>ENGINEER SANCTUM</span>
          </div>
        </div>

        {/* Monumental Header Segment */}
        <div className="relative bg-[#161B22] p-6 sm:p-8 border border-[#272A30] overflow-hidden shadow-2xl mt-2">
          {/* Subtle Watermark */}
          <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none text-[#C5A059]">
            <User className="w-48 h-48" />
          </div>

          <div className="flex flex-col relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[#C5A059] tracking-widest text-[10px] uppercase font-semibold">
                ᛋᚨᚾᚲᛏᚢᛗ // PHILOSOPHY &amp; TRAJECTORY
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#C5A059] tracking-wide uppercase font-bold">
              MY CHAMBER
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#9A8F80] mt-2 leading-relaxed">
              Software engineering, systems architecture, and looking beneath high-level abstractions to reason about operating systems, networks, and memory.
            </p>

            {/* Academic Credential Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5 bg-[#0B0E13]/80 p-3 border border-[#272A30]">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  Academic Base
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#E6DFD5] font-semibold mt-0.5">
                  VIT Chennai
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  Degree &amp; Specialization
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#C5A059] font-semibold mt-0.5 truncate">
                  B.Tech CSE (AI &amp; Robotics)
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  Graduation Class
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#E6C093] font-semibold mt-0.5">
                  Class of 2027 · CGPA 7.9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chamber Content Flow */}
      <div className="space-y-12 mt-6">
        {/* ============================================================== */}
        {/* 01. IDENTITY & CORE PRACTICE                                  */}
        {/* ============================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[#C5A059] font-bold">[01]</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                ENGINEERING IDENTITY &amp; CORE FOCUS
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
              BELOW THE ABSTRACTION
            </span>
          </div>

          <div className="stone-panel p-6 sm:p-8 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#C5A059] font-bold uppercase">
              {ABOUT_DATA.identity.lead}
            </h3>

            <div className="space-y-3 font-sans text-sm sm:text-base text-[#9A8F80] leading-relaxed">
              {ABOUT_DATA.identity.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Academic Highlight Card */}
            <div className="bg-[#080C12] p-5 border border-[#272A30] mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 bg-[#1D2025] border border-[#C5A059] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-[#8C6D46] uppercase block">
                    INSTITUTIONAL FOUNDATION
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#E6DFD5] uppercase">
                    {primaryEducation.institution}
                  </h4>
                  <p className="font-sans text-xs text-[#9A8F80] mt-0.5">
                    {primaryEducation.degree} · {primaryEducation.period}
                  </p>
                </div>
              </div>

              <span className="font-mono text-xs text-[#C5A059] bg-[#161B22] px-3 py-1 border border-[#272A30] shrink-0 font-semibold">
                {primaryEducation.score}
              </span>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 02. CORE PRINCIPLES                                           */}
        {/* ============================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[#C5A059] font-bold">[02]</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                ENGINEERING PRINCIPLES
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
              3 FOUNDATIONAL TENETS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_DATA.principles.map((pr) => (
              <div
                key={pr.number}
                className="stone-panel p-6 flex flex-col justify-between border-t-2 border-t-[#C5A059]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C5A059] font-bold">
                      TENET {pr.number}
                    </span>
                    <span className="font-mono text-xs text-[#8C6D46]">ᛟ</span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#E6DFD5] uppercase leading-snug">
                    {pr.title}
                  </h3>

                  <div className="bg-[#080C12] p-3 border border-[#272A30] font-sans text-xs text-[#E6C093] font-medium leading-relaxed">
                    "{pr.statement}"
                  </div>

                  <p className="font-sans text-xs text-[#9A8F80] leading-relaxed">
                    {pr.rationale}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 03. CAPABILITIES MAP                                          */}
        {/* ============================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[#C5A059] font-bold">[03]</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                SYSTEM CAPABILITIES &amp; SPECIALIZATIONS
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
              {ABOUT_DATA.capabilities.length} DOMAINS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ABOUT_DATA.capabilities.map((cap) => (
              <div key={cap.id} className="stone-card p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Cpu className="w-4 h-4" />
                  <h3 className="font-serif text-sm font-bold text-[#E6DFD5] uppercase">
                    {cap.title}
                  </h3>
                </div>

                <p className="font-sans text-xs text-[#9A8F80] leading-relaxed">
                  {cap.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {cap.topics.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] px-2 py-0.5 bg-[#080C12] text-[#E6C093] border border-[#272A30]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 04. ENGINEERING WORKFLOW                                      */}
        {/* ============================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[#C5A059] font-bold">[04]</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                ENGINEERING WORKFLOW
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
              PRACTICE &amp; EXECUTION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ABOUT_DATA.workflow.map((wf) => (
              <div key={wf.id} className="stone-panel p-5 space-y-2 border-l-2 border-l-[#C5A059]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C5A059] font-bold">
                    STAGE {wf.number}
                  </span>
                  <span className="font-serif text-sm font-bold text-[#E6DFD5] uppercase">
                    {wf.title}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#E6C093] font-medium">
                  {wf.summary}
                </p>
                <p className="font-sans text-xs text-[#9A8F80] leading-relaxed">
                  {wf.details}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-[#272A30]">
                  {wf.deliverables.map((d) => (
                    <span
                      key={d}
                      className="font-mono text-[9px] text-[#9A8F80] bg-[#080C12] px-2 py-0.5 border border-[#272A30]"
                    >
                      &check; {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Citadels Navigation */}
        <div className="pt-8 border-t border-[#272A30] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/projects"
              className="px-5 py-2.5 bg-[#161B22] hover:bg-[#1D2025] border border-[#272A30] text-[#E6DFD5] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Hammer className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>VISIT THE FORGE</span>
            </Link>
            <Link
              to="/inventory"
              className="px-5 py-2.5 bg-[#161B22] hover:bg-[#1D2025] border border-[#272A30] text-[#E6DFD5] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#D97736]" />
              <span>INVENTORY</span>
            </Link>
          </div>

          <Link
            to="/archive"
            className="px-6 py-2.5 bg-[#C5A059] text-[#111319] hover:bg-[#E9C176] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            <span>THE ARCHIVE (RESUME)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
