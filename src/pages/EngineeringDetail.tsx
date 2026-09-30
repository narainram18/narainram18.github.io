import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  FlaskConical,
  CheckCircle2,
  Layers,
  Code,
  Lightbulb,
} from 'lucide-react';
import { ENGINEERING_ENTRIES } from '@/data/engineering';
import { PROJECTS } from '@/data/projects';
import { CodeSnippet } from '@/components/engineering/CodeSnippet';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function EngineeringDetail() {
  const { slug } = useParams<{ slug: string }>();

  const entryIndex = ENGINEERING_ENTRIES.findIndex((e) => e.slug === slug);
  const entry = ENGINEERING_ENTRIES[entryIndex];

  usePageMetadata(
    entry ? `${entry.title} // Codex — Narain Ram R M` : 'Codex Investigation — Narain Ram R M',
    entry ? entry.summary : 'Engineering notebook and systems investigation by Narain Ram R M.'
  );

  const prevEntry = entryIndex > 0 ? ENGINEERING_ENTRIES[entryIndex - 1] : null;
  const nextEntry =
    entryIndex < ENGINEERING_ENTRIES.length - 1
      ? ENGINEERING_ENTRIES[entryIndex + 1]
      : null;

  const relatedProject = entry?.relatedProjectSlug
    ? PROJECTS.find((p) => p.slug === entry.relatedProjectSlug)
    : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!entry) {
    return (
      <div className="pt-28 pb-24 px-4 max-w-2xl mx-auto text-center space-y-4">
        <div className="font-mono text-sm text-[#C5A059]">
          404 · CODEX RECORD NOT FOUND
        </div>
        <h1 className="font-serif text-3xl font-bold text-[#E6DFD5] uppercase">
          Codex Not Found
        </h1>
        <p className="font-sans text-sm text-[#9A8F80]">
          No technical investigation matches the requested slug: <code className="font-mono text-[#C5A059]">{slug}</code>.
        </p>
        <div className="pt-4">
          <Link
            to="/engineering"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] text-[#111319] font-mono text-xs font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Engineering Library</span>
          </Link>
        </div>
      </div>
    );
  }

  const isLabPlan = entry.isPlaceholder;

  return (
    <div className="pt-20 pb-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full select-none">
      {/* Top Command Bar */}
      <div className="bg-[#111319] border border-[#272A30] p-3 flex items-center justify-between gap-3 mb-6">
        <Link
          to="/engineering"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#9A8F80] hover:text-[#C5A059] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO CODICES</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6C093] animate-pulse" />
          <span className="font-mono text-[10px] text-[#E6C093] tracking-widest uppercase font-semibold">
            CODEX // 0{entryIndex + 1}
          </span>
        </div>
      </div>

      {/* Header Monolith */}
      <header className="stone-panel p-6 sm:p-8 space-y-4 mb-8 border-t-2 border-t-[#C5A059]">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#C5A059] px-2 py-0.5 bg-[#080C12] border border-[#272A30] uppercase font-bold">
              {entry.category}
            </span>
            <span className="font-mono text-[10px] text-[#9A8F80]">
              {entry.date} · {entry.readTime}
            </span>
          </div>

          {isLabPlan ? (
            <span className="font-mono text-[10px] px-2.5 py-0.5 bg-[#1D2025] text-[#D97736] border border-[#D97736]/40 flex items-center gap-1 font-semibold uppercase">
              <FlaskConical className="w-3.5 h-3.5 text-[#D97736]" />
              LAB PLAN (PLANNED EXPERIMENT)
            </span>
          ) : (
            <span className="font-mono text-[10px] px-2.5 py-0.5 bg-[#1D2025] text-[#C5A059] border border-[#C5A059]/40 flex items-center gap-1 font-semibold uppercase">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
              VERIFIED INVESTIGATION
            </span>
          )}
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E6DFD5] uppercase tracking-wide leading-tight">
          {entry.title}
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#9A8F80] leading-relaxed">
          {entry.summary}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#272A30]">
          {entry.topics.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2.5 py-0.5 bg-[#080C12] text-[#E6C093] border border-[#272A30]"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Main Codex Content Flow */}
      <div className="space-y-8">
        {/* Context & Core Question */}
        <section className="stone-panel p-6 space-y-4">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block font-semibold">
              01 · INVESTIGATION CONTEXT
            </span>
            <p className="font-sans text-sm text-[#E6DFD5] leading-relaxed">
              {entry.context}
            </p>
          </div>

          <div className="bg-[#080C12] p-4 border-l-2 border-l-[#C5A059]">
            <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block mb-1 font-semibold">
              CORE ENGINEERING QUESTION
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#E6C093] font-medium leading-relaxed">
              {entry.question}
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="stone-panel p-6 space-y-3">
          <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block font-semibold">
            02 · EVALUATION APPROACH &amp; METHOD
          </span>
          <p className="font-sans text-sm text-[#9A8F80] leading-relaxed">
            {entry.approach}
          </p>
        </section>

        {/* Observations (if completed) */}
        {entry.observations && entry.observations.length > 0 && (
          <section className="stone-panel p-6 space-y-3">
            <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block font-semibold">
              03 · EMPIRICAL OBSERVATIONS
            </span>
            <div className="space-y-2.5">
              {entry.observations.map((obs, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#080C12] p-3 border border-[#272A30]">
                  <span className="font-mono text-xs text-[#C5A059] font-bold shrink-0 mt-0.5">
                    [{idx + 1}]
                  </span>
                  <p className="font-sans text-xs text-[#E6DFD5] leading-relaxed">
                    {obs}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Results (if completed) */}
        {entry.results && entry.results.length > 0 && (
          <section className="stone-panel p-6 space-y-3 border-l-4 border-l-[#C5A059]">
            <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block font-semibold">
              04 · RESULTS &amp; VERIFIED OUTCOMES
            </span>
            <ul className="space-y-2">
              {entry.results.map((res, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-sans text-xs text-[#E6DFD5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Key Insights */}
        {entry.keyInsights && entry.keyInsights.length > 0 && (
          <section className="stone-panel p-6 space-y-3">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#C5A059]" />
              <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider font-semibold">
                05 · ARCHITECTURAL INSIGHTS &amp; TAKEAWAYS
              </span>
            </div>
            <div className="space-y-2 font-sans text-xs text-[#9A8F80]">
              {entry.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3 bg-[#080C12] border border-[#272A30] flex items-start gap-2.5">
                  <span className="text-[#C5A059]">&bull;</span>
                  <span className="text-[#E6DFD5]">{insight}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Code Snippet (if available) */}
        {entry.codeSnippet && (
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8C6D46] pb-1">
              <Code className="w-4 h-4 text-[#C5A059]" />
              <span>SOURCE IMPLEMENTATION // {entry.codeSnippet.language.toUpperCase()}</span>
            </div>
            <CodeSnippet
              code={entry.codeSnippet.code}
              language={entry.codeSnippet.language}
              caption={entry.codeSnippet.caption}
            />
          </section>
        )}

        {/* Related Project Link */}
        {relatedProject && (
          <div className="stone-panel p-5 border-l-4 border-l-[#C5A059] flex items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] text-[#8C6D46] uppercase block">
                RELATED PRODUCTION SYSTEM
              </span>
              <h3 className="font-serif text-base font-bold text-[#E6DFD5] uppercase mt-0.5">
                {relatedProject.title}
              </h3>
              <p className="font-sans text-xs text-[#9A8F80] mt-0.5">
                {relatedProject.summary}
              </p>
            </div>
            <Link
              to={`/projects/${relatedProject.slug}`}
              className="px-4 py-2 bg-[#C5A059] text-[#111319] hover:bg-[#E9C176] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0"
            >
              <span>INSPECT</span>
              <Layers className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Prev / Next Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#272A30]">
          {prevEntry ? (
            <Link
              to={`/engineering/${prevEntry.slug}`}
              className="stone-panel p-4 flex items-center gap-3 group hover:border-[#C5A059] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
              <div className="truncate">
                <span className="font-mono text-[9px] text-[#8C6D46] uppercase block">PREVIOUS CODEX</span>
                <span className="font-serif text-sm font-bold text-[#E6DFD5] truncate block uppercase">
                  {prevEntry.title}
                </span>
              </div>
            </Link>
          ) : <div />}

          {nextEntry && (
            <Link
              to={`/engineering/${nextEntry.slug}`}
              className="stone-panel p-4 flex items-center justify-between group hover:border-[#C5A059] transition-colors"
            >
              <div className="truncate text-right w-full mr-3">
                <span className="font-mono text-[9px] text-[#8C6D46] uppercase block">NEXT CODEX</span>
                <span className="font-serif text-sm font-bold text-[#E6DFD5] truncate block uppercase">
                  {nextEntry.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
