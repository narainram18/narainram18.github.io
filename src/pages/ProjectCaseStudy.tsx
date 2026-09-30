import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  AlertTriangle,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { useRealmMode } from '@/context/RealmModeContext';

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const { viewMode, toggleViewMode } = useRealmMode();

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  usePageMetadata(
    project ? `${project.title} // Mission Briefing — Narain Ram R M` : 'Mission Briefing — Narain Ram R M',
    project ? project.summary : 'Detailed system architecture mission briefing by Narain Ram R M.'
  );

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-28 pb-24 px-4 max-w-2xl mx-auto text-center space-y-4">
        <div className="font-mono text-sm text-[#C5A059]">
          404 · CITADEL RECORD NOT FOUND
        </div>
        <h1 className="font-serif text-3xl font-bold text-[#E6DFD5] uppercase">
          Artifact Not Found
        </h1>
        <p className="font-sans text-sm text-[#9A8F80]">
          No engineered system matches the requested codex identifier: <code className="font-mono text-[#C5A059]">{slug}</code>.
        </p>
        <div className="pt-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A059] text-[#111319] font-mono text-xs font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to The Forge</span>
          </Link>
        </div>
      </div>
    );
  }

  const runicGlyphs = ['ᚱ', 'ᛏ', 'ᚲ', 'ᛉ', 'ᚠ', 'ᚨ', 'ᛟ', 'ᛃ', 'ᚺ', 'ᛈ'];

  return (
    <div className="pt-20 pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full select-none">
      {/* Top Command Bar & Mode Switch */}
      <div className="bg-[#111319] border border-[#272A30] p-3 flex items-center justify-between gap-3 mb-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#9A8F80] hover:text-[#C5A059] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO THE FORGE</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
          <span className="font-mono text-[10px] text-[#C5A059] tracking-widest uppercase font-semibold hidden sm:inline">
            DOSSIER // ARCHIVAL RECORD
          </span>
          <button
            onClick={toggleViewMode}
            className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider border transition-colors ${
              viewMode === 'realm'
                ? 'bg-[#1D2025] text-[#C5A059] border-[#C5A059]'
                : 'bg-[#161B22] text-[#9A8F80] border-[#272A30]'
            }`}
          >
            {viewMode === 'realm' ? '[ ᛉ REALM VIEW ]' : '[ SPEC VIEW ]'}
          </button>
        </div>
      </div>

      {/* Hero Briefing Header Monolith */}
      <section className="relative bg-[#161B22] border border-[#272A30] p-6 sm:p-8 overflow-hidden shadow-2xl mb-8">
        {/* Atmospheric Rune Watermark */}
        <div className="absolute right-0 top-0 translate-x-6 -translate-y-4 opacity-10 pointer-events-none text-[#C5A059] font-mono text-8xl font-black">
          ᚠᛟᚱᚷᛖ
        </div>

        <div className="relative z-10 flex flex-col gap-3 max-w-3xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[10px] text-[#111319] bg-[#C5A059] font-bold px-2 py-0.5 uppercase tracking-wider">
              CODE: PRJ-FORGE-0{projectIndex + 1}
            </span>
            <span className="font-mono text-[10px] text-[#8C6D46] tracking-wider uppercase">
              {project.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#E6DFD5] uppercase tracking-wide font-bold leading-tight">
            {project.title}
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#9A8F80] leading-relaxed">
            {project.subtitle}
          </p>

          {/* Metadata Telemetry Ribbon (Authentic data) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 bg-[#080C12] p-3 border border-[#272A30]">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-[#9A8F80] uppercase">STATUS</span>
              <span className="font-mono text-xs text-[#C5A059] font-semibold mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                {project.status.toUpperCase()}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-[#9A8F80] uppercase">TIMELINE</span>
              <span className="font-mono text-xs text-[#E6DFD5] mt-0.5">
                {project.year}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-[#9A8F80] uppercase">AUTHOR</span>
              <span className="font-mono text-xs text-[#E6C093] mt-0.5 truncate">
                NARAIN RAM R M
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-[#9A8F80] uppercase">REPOSITORY</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#C5A059] hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>GITHUB</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dossier Body Flow */}
      <div className="space-y-12">
        {/* ========================================================== */}
        {/* [01] STRATEGIC OVERVIEW                                     */}
        {/* ========================================================== */}
        <section className="space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[#C5A059] font-bold">[01]</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                STRATEGIC OVERVIEW &amp; PROBLEM SPACE
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
              ARCHITECTURAL OBJECTIVE
            </span>
          </div>

          <div className="stone-panel p-6 space-y-4">
            <p className="font-sans text-sm sm:text-base text-[#E6DFD5] leading-relaxed">
              {project.overview}
            </p>

            <div className="bg-[#1D2025] p-4 border-l-2 border-l-[#C5A059]">
              <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block mb-1">
                PROBLEM STATEMENT
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#9A8F80] leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* [02] PIPELINE TOPOLOGY & ARCHITECTURE                      */}
        {/* ========================================================== */}
        {project.architecture && (
          <section className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-[#C5A059] font-bold">[02]</span>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                  PIPELINE TOPOLOGY &amp; SYSTEM LAYERS
                </h2>
              </div>
              <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
                {project.architecture.layers.length} STAGES
              </span>
            </div>

            <div className="stone-panel p-6 space-y-6">
              <p className="font-sans text-sm text-[#9A8F80]">
                {project.architecture.overview}
              </p>

              {/* End-to-End Connected Stage Cards */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C6D46] pb-1">
                  <span>END-TO-END FLOW GRAPH</span>
                  <span className="text-[#C5A059]">CHANNELS: {project.architecture.layers.length} TIERS</span>
                </div>

                {project.architecture.layers.map((layer, idx) => (
                  <div key={layer.layer} className="space-y-2">
                    <div className="bg-[#080C12] p-4 border border-[#272A30] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-[#111319] bg-[#C5A059] font-bold px-2 py-0.5 shrink-0 mt-0.5">
                          0{idx + 1}
                        </span>
                        <div>
                          <span className="font-mono text-[10px] text-[#8C6D46] uppercase block">
                            {layer.layer}
                          </span>
                          <h3 className="font-serif text-base font-bold text-[#E6DFD5] uppercase">
                            {layer.title}
                          </h3>
                          <p className="font-sans text-xs text-[#9A8F80] mt-1">
                            {layer.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:justify-end shrink-0 max-w-sm">
                        {layer.components.map((comp) => (
                          <span
                            key={comp}
                            className="font-mono text-[9px] px-2 py-0.5 bg-[#161B22] text-[#E6C093] border border-[#272A30]"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Flow Connector Arrow */}
                    {idx < project.architecture.layers.length - 1 && (
                      <div className="flex justify-center -my-1 text-[#C5A059]/60">
                        <ChevronDown className="w-4 h-4 animate-bounce" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Data Flow Sequential Steps */}
              {project.architecture.dataFlow && (
                <div className="bg-[#1D2025] p-5 border border-[#272A30] space-y-2 mt-4">
                  <span className="font-mono text-[10px] text-[#C5A059] tracking-wider uppercase block mb-2 font-semibold">
                    EXECUTION STEP CHRONOLOGY
                  </span>
                  <div className="space-y-2 font-sans text-xs text-[#9A8F80]">
                    {project.architecture.dataFlow.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-[#C5A059] text-[10px] shrink-0 mt-0.5">
                          [{idx + 1}]
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ASCII Diagram (Recessed Terminal) */}
              {project.architecture.asciiDiagram && (
                <div className="bg-[#080C12] p-4 border border-[#272A30] overflow-x-auto">
                  <span className="font-mono text-[10px] text-[#8C6D46] block mb-2 uppercase">
                    TOPOLOGY SCHEMA
                  </span>
                  <pre className="font-mono text-[11px] text-[#E6DFD5] leading-relaxed select-text">
                    {project.architecture.asciiDiagram}
                  </pre>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* [03] SYSTEM TRADEOFFS & ENGINEERING DECISIONS             */}
        {/* ========================================================== */}
        {project.technicalDecisions && project.technicalDecisions.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-[#C5A059] font-bold">[03]</span>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                  SYSTEM TRADEOFFS &amp; DECISION MATRIX
                </h2>
              </div>
              <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
                {project.technicalDecisions.length} EVALUATIONS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.technicalDecisions.map((dec, idx) => (
                <div
                  key={idx}
                  className="stone-panel p-5 flex flex-col justify-between border-t-2 border-t-[#C5A059]"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#C5A059] font-bold">
                        {dec.topic}
                      </span>
                      <span className="font-mono text-[9px] px-1.5 py-0.2 bg-[#080C12] text-[#E6C093] border border-[#272A30]">
                        DECISION
                      </span>
                    </div>

                    <div className="text-xs font-sans text-[#9A8F80]">
                      <strong className="text-[#E6DFD5] font-semibold block">Context:</strong>
                      {dec.problem}
                    </div>

                    <div className="bg-[#080C12] p-3 border border-[#272A30] text-xs font-sans">
                      <span className="font-mono text-[10px] text-[#C5A059] uppercase block mb-1">
                        SELECTED APPROACH:
                      </span>
                      <p className="text-[#E6DFD5] font-semibold">
                        {dec.chosenOption}
                      </p>
                      <p className="text-[#9A8F80] text-[11px] mt-1 leading-relaxed">
                        {dec.rationale}
                      </p>
                    </div>

                    <div className="text-[11px] font-sans text-[#8C6D46] pt-1">
                      <strong>Trade-off Accepted:</strong> {dec.tradeoffs}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* [04] TACTICAL BOTTLENECK & HARDENING                      */}
        {/* ========================================================== */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-[#C5A059] font-bold">[04]</span>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                  TACTICAL BOTTLENECKS &amp; HARDENING
                </h2>
              </div>
              <span className="font-mono text-[10px] text-[#D97736] uppercase font-semibold">
                FAILURE MODES
              </span>
            </div>

            <div className="space-y-3">
              {project.challenges.map((ch, idx) => (
                <div
                  key={idx}
                  className="stone-panel p-5 border-l-4 border-l-[#D97736] space-y-2.5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#1D2025] border border-[#D97736] text-[#D97736] flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-[#D97736] uppercase tracking-wider block">
                        CHALLENGE 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-base font-bold text-[#E6DFD5]">
                        {ch.challenge}
                      </h3>
                    </div>
                  </div>

                  <div className="bg-[#080C12] p-3.5 border border-[#272A30] space-y-1">
                    <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-wider block font-semibold">
                      MITIGATION PROTOCOL:
                    </span>
                    <p className="font-sans text-xs text-[#9A8F80] leading-relaxed">
                      {ch.resolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* [05] TECH INVENTORY                                       */}
        {/* ========================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[#C5A059] font-bold">[05]</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                TECH ARSENAL &amp; MODULES
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
              {project.technologies.length} TECHNOLOGIES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {project.technologies.map((tech, idx) => (
              <div
                key={tech}
                className="bg-[#161B22] p-3 border border-[#272A30] flex items-center gap-2.5"
              >
                <span className="font-mono text-sm text-[#C5A059] font-bold">
                  {runicGlyphs[idx % runicGlyphs.length]}
                </span>
                <span className="font-mono text-xs text-[#E6DFD5] font-semibold truncate">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================== */}
        {/* [06] MISSION ARTIFACTS & ACTIONS                          */}
        {/* ========================================================== */}
        <section className="space-y-4 pt-4 border-t border-[#272A30]">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A059] text-[#111319] hover:bg-[#E9C176] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <span>VIEW SOURCE CODE (GITHUB)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              to="/projects"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#161B22] hover:bg-[#1D2025] border border-[#272A30] text-[#E6DFD5] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO FORGE</span>
            </Link>
          </div>

          {/* Prev / Next Project Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="stone-panel p-4 flex items-center gap-3 group hover:border-[#C5A059] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
                <div className="truncate">
                  <span className="font-mono text-[9px] text-[#8C6D46] uppercase block">PREVIOUS SYSTEM</span>
                  <span className="font-serif text-sm font-bold text-[#E6DFD5] truncate block uppercase">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : <div />}

            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="stone-panel p-4 flex items-center justify-between group hover:border-[#C5A059] transition-colors"
              >
                <div className="truncate text-right w-full mr-3">
                  <span className="font-mono text-[9px] text-[#8C6D46] uppercase block">NEXT SYSTEM</span>
                  <span className="font-serif text-sm font-bold text-[#E6DFD5] truncate block uppercase">
                    {nextProject.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            )}
          </div>

          {/* Author Verification Stamp */}
          <div className="bg-[#080C12] p-4 border border-[#272A30] flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1D2025] border border-[#C5A059] flex items-center justify-center font-serif text-xs font-bold text-[#C5A059]">
                NR
              </div>
              <div>
                <span className="font-serif text-sm font-bold text-[#E6DFD5] uppercase block">
                  Narain Ram R M
                </span>
                <span className="font-mono text-[10px] text-[#9A8F80]">
                  VIT CHENNAI · CLASS OF 2027
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#C5A059]">
              <ShieldCheck className="w-4 h-4" />
              <span>VERIFIED REPO</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
