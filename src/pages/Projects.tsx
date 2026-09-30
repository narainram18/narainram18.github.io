import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Hammer,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Bot,
  Cpu,
  Database,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function Projects() {
  usePageMetadata(
    'The Forge // Projects & Systems — Narain Ram R M',
    'Catalog of software systems, distributed architectures, OS utilities, and robotics platforms engineered by Narain Ram R M.'
  );

  const [activeFilter, setActiveFilter] = useState<'ALL' | 'AI' | 'SYSTEMS' | 'ROBOTICS'>('ALL');

  const flagship = PROJECTS.find((p) => p.slug === 'enterprise-ai-workspace') || PROJECTS[0];
  const allSubsystems = PROJECTS.filter((p) => p.slug !== flagship.slug);

  const filteredSubsystems = allSubsystems.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AI') return p.category.includes('AI') || p.technologies.some(t => t.includes('AI') || t.includes('LLM'));
    if (activeFilter === 'SYSTEMS') return p.category.includes('Systems') || p.technologies.includes('C++') || p.technologies.includes('Multithreading');
    if (activeFilter === 'ROBOTICS') return p.category.includes('Robotics') || p.technologies.includes('ROS') || p.technologies.includes('Robotics');
    return true;
  });

  return (
    <div className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none">
      {/* Top Forge Telemetry Breadcrumb Banner */}
      <div className="flex flex-col gap-1 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-mono text-[11px] tracking-widest uppercase font-semibold">
              LOCATION // THE FORGE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97736] animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5 bg-[#1D2025] px-2.5 py-0.5 border border-[#272A30] text-[10px] font-mono text-[#E6C093]">
            <Hammer className="w-3 h-3 text-[#C5A059]" />
            <span>PROJECT WORKSTATION</span>
          </div>
        </div>

        {/* Monumental Header Segment */}
        <div className="relative bg-[#161B22] p-6 sm:p-8 border border-[#272A30] overflow-hidden shadow-2xl mt-2">
          {/* Decorative Runic Compass SVG Watermark */}
          <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none text-[#C5A059]">
            <svg
              fill="none"
              height="200"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 100 100"
              width="200"
            >
              <circle cx="50" cy="50" r="46" />
              <polygon points="50,4 62,38 98,38 68,60 80,94 50,72 20,94 32,60 2,38 38,38" />
              <circle cx="50" cy="50" r="16" />
            </svg>
          </div>

          <div className="flex flex-col relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[#C5A059] tracking-widest text-[10px] uppercase font-semibold">
                ᚠᛟᚱᚷᛖ // ENGINEERING RUNTIME
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#C5A059] tracking-wide uppercase font-bold">
              THE FORGE
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#9A8F80] mt-2 leading-relaxed">
              Production Systems, Robotics Kernels &amp; Distributed Infrastructure engineered for resilience and low-latency execution.
            </p>

            {/* Core Systems Telemetry Ribbon (Real facts, no fake stats) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5 bg-[#0B0E13]/80 p-3 border border-[#272A30]">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  Engineered Deployments
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#E6DFD5] font-semibold mt-0.5">
                  4 Active Systems
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  Flagship Architecture
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#C5A059] font-semibold mt-0.5">
                  Local Hybrid RAG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  Toolchain Focus
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#E6C093] font-semibold mt-0.5 truncate">
                  Java 21 · C++ · ROS 2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Segmenter */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 mb-6">
        <button
          onClick={() => setActiveFilter('ALL')}
          className={`font-mono text-[10px] px-3.5 py-1.5 uppercase font-bold tracking-wider flex items-center gap-1.5 shrink-0 transition-all ${
            activeFilter === 'ALL'
              ? 'bg-[#C5A059] text-[#111319] shadow-md'
              : 'bg-[#161B22] text-[#9A8F80] hover:text-[#E6DFD5] border border-[#272A30]'
          }`}
        >
          <span>All Artifacts ({PROJECTS.length})</span>
        </button>

        <button
          onClick={() => setActiveFilter('AI')}
          className={`font-mono text-[10px] px-3.5 py-1.5 uppercase tracking-wider shrink-0 transition-all ${
            activeFilter === 'AI'
              ? 'bg-[#C5A059] text-[#111319] font-bold shadow-md'
              : 'bg-[#161B22] text-[#9A8F80] hover:text-[#E6DFD5] border border-[#272A30]'
          }`}
        >
          <span>Applied AI &amp; RAG</span>
        </button>

        <button
          onClick={() => setActiveFilter('SYSTEMS')}
          className={`font-mono text-[10px] px-3.5 py-1.5 uppercase tracking-wider shrink-0 transition-all ${
            activeFilter === 'SYSTEMS'
              ? 'bg-[#C5A059] text-[#111319] font-bold shadow-md'
              : 'bg-[#161B22] text-[#9A8F80] hover:text-[#E6DFD5] border border-[#272A30]'
          }`}
        >
          <span>Systems &amp; Concurrency</span>
        </button>

        <button
          onClick={() => setActiveFilter('ROBOTICS')}
          className={`font-mono text-[10px] px-3.5 py-1.5 uppercase tracking-wider shrink-0 transition-all ${
            activeFilter === 'ROBOTICS'
              ? 'bg-[#C5A059] text-[#111319] font-bold shadow-md'
              : 'bg-[#161B22] text-[#9A8F80] hover:text-[#E6DFD5] border border-[#272A30]'
          }`}
        >
          <span>Robotics &amp; ROS 2</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* FEATURED MONOLITH: ENTERPRISE AI WORKSPACE                      */}
      {/* ============================================================== */}
      {(activeFilter === 'ALL' || activeFilter === 'AI') && (
        <article className="relative flex flex-col bg-[#161B22] border border-[#C5A059]/80 overflow-hidden shadow-2xl mb-12">
          {/* Blueprint Banner */}
          <div className="relative w-full h-52 sm:h-64 bg-[#080C12] overflow-hidden flex items-center justify-center">
            <picture>
              <source
                type="image/avif"
                srcSet="/assets/realm/blueprint-rag-640.avif 640w, /assets/realm/blueprint-rag-1200.avif 1200w"
                sizes="(max-width: 768px) 640px, 1200px"
              />
              <source
                type="image/webp"
                srcSet="/assets/realm/blueprint-rag-640.webp 640w, /assets/realm/blueprint-rag-1200.webp 1200w"
                sizes="(max-width: 768px) 640px, 1200px"
              />
              <img
                src="/assets/realm/blueprint-rag-1200.jpg"
                alt="Tactical architecture blueprint schematic of Enterprise AI Workspace"
                width={1200}
                height={654}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-60 filter contrast-125"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-[#161B22]/30 to-transparent" />

            <div className="absolute top-3 left-3 bg-[#0B0E13]/90 px-2.5 py-1 border border-[#272A30] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
              <span className="font-mono text-[9px] text-[#C5A059] tracking-widest uppercase font-semibold">
                FLAGSHIP ARTIFACT // SYS-RAG-01
              </span>
            </div>

            <div className="absolute top-3 right-3 bg-[#1D2025]/90 text-[#E6C093] px-2.5 py-1 border border-[#272A30] font-mono text-[9px] uppercase tracking-wider">
              ZERO EXTERNAL EGRESS
            </div>

            <div className="absolute bottom-3 left-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#1D2025] border border-[#C5A059] flex items-center justify-center text-[#C5A059] font-serif text-sm font-bold">
                ᚱ
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                  PRIMARY SUBSYSTEM
                </span>
                <span className="font-mono text-xs text-[#E6DFD5] font-semibold">
                  LOCAL-FIRST RETRIEVAL
                </span>
              </div>
            </div>
          </div>

          {/* Body Information Spec */}
          <div className="p-6 sm:p-8 flex flex-col gap-5">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] uppercase tracking-wide font-bold">
                {flagship.title}
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#9A8F80] mt-2 leading-relaxed">
                {flagship.summary}
              </p>
            </div>

            {/* Architecture Tech Stack Badges with Runic Indices */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#1D2025] text-[#E6C093] border border-[#272A30] font-mono text-[10px] px-2.5 py-1 flex items-center gap-1.5">
                <span className="text-[#C5A059]">ᚲ</span> Java 21 / Spring Boot 3
              </span>
              <span className="bg-[#1D2025] text-[#E6C093] border border-[#272A30] font-mono text-[10px] px-2.5 py-1 flex items-center gap-1.5">
                <span className="text-[#C5A059]">ᛉ</span> React / TypeScript
              </span>
              <span className="bg-[#1D2025] text-[#E6C093] border border-[#272A30] font-mono text-[10px] px-2.5 py-1 flex items-center gap-1.5">
                <span className="text-[#C5A059]">ᛏ</span> PostgreSQL (BM25 FTS)
              </span>
              <span className="bg-[#1D2025] text-[#E6C093] border border-[#272A30] font-mono text-[10px] px-2.5 py-1 flex items-center gap-1.5">
                <span className="text-[#C5A059]">ᛟ</span> Qdrant (HNSW Vector Store)
              </span>
              <span className="bg-[#1D2025] text-[#E6C093] border border-[#272A30] font-mono text-[10px] px-2.5 py-1 flex items-center gap-1.5">
                <span className="text-[#C5A059]">ᛃ</span> Ollama Local AI (Llama 3)
              </span>
              <span className="bg-[#1D2025] text-[#E6C093] border border-[#272A30] font-mono text-[10px] px-2.5 py-1 flex items-center gap-1.5">
                <span className="text-[#C5A059]">ᚺ</span> Docker Compose Mesh
              </span>
            </div>

            {/* End-to-End Pipeline Dispatch Terminal */}
            <div className="bg-[#080C12] p-4 border border-[#272A30] font-mono text-xs space-y-1.5">
              <div className="flex items-center justify-between text-[#9A8F80] text-[10px] pb-1 border-b border-[#1E232A]">
                <span>ARCHITECTURAL PIPELINE TOPOLOGY</span>
                <span className="text-[#C5A059]">6 STAGES DEPLOYED</span>
              </div>
              <div className="text-[#E6DFD5] space-y-1 pt-1 text-[11px] leading-relaxed">
                <div>
                  <span className="text-[#C5A059]">&gt;</span> ingest.doc(pdf, docx) →{' '}
                  <span className="text-[#E6C093]">chunk_hybrid(512, overlap=64)</span>
                </div>
                <div>
                  <span className="text-[#C5A059]">&gt;</span> qdrant.dense(hnsw) + postgres.sparse(bm25) →{' '}
                  <span className="text-[#D97736]">rrf_fusion_reranker(k=60)</span>
                </div>
                <div>
                  <span className="text-[#C5A059]">&gt;</span> spring_boot.security(rbac) →{' '}
                  <span className="text-[#C5A059]">sse_emitter(stream) → react_client</span>
                </div>
              </div>
            </div>

            {/* Tactical Triggers */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                to={`/projects/${flagship.slug}`}
                className="w-full sm:w-auto px-6 py-3 bg-[#C5A059] text-[#111319] hover:bg-[#E9C176] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <BookOpen className="w-4 h-4" />
                <span>OPEN MISSION BRIEFING</span>
              </Link>

              <a
                href={flagship.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 bg-[#1D2025] hover:bg-[#272A30] border border-[#272A30] text-[#E6DFD5] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>VIEW REPOSITORY</span>
              </a>
            </div>
          </div>
        </article>
      )}

      {/* ============================================================== */}
      {/* SUBSYSTEM MONOLITHS                                            */}
      {/* ============================================================== */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
          <span className="font-mono text-xs text-[#C5A059] font-bold uppercase tracking-wider">
            SUBSYSTEM MONOLITHS // DEPLOYED CODICES
          </span>
          <span className="font-mono text-[10px] text-[#9A8F80]">
            {filteredSubsystems.length} ARTIFACTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSubsystems.map((subsystem, idx) => {
            let Icon = Cpu;
            let rune = 'ᚲ';
            let sysCode = `SYS-0${idx + 2}`;

            if (subsystem.category.includes('Robotics')) {
              Icon = Bot;
              rune = 'ᛟ';
              sysCode = 'ROBOTICS // NAV-02';
            } else if (subsystem.category.includes('Systems')) {
              Icon = Cpu;
              rune = 'ᚲ';
              sysCode = 'SYSTEMS // POSIX-03';
            } else if (subsystem.category.includes('Distributed')) {
              Icon = Database;
              rune = 'ᛏ';
              sysCode = 'DISTRIBUTED // DB-04';
            }

            return (
              <article
                key={subsystem.slug}
                className="stone-card p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 bg-[#161B22] border border-[#272A30] flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-[#8C6D46] uppercase tracking-wider block">
                          {sysCode}
                        </span>
                        <span className="font-mono text-[10px] text-[#C5A059]">
                          {subsystem.category}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#C5A059] font-bold">
                      {rune}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#E6DFD5] group-hover:text-[#C5A059] transition-colors uppercase leading-snug">
                    {subsystem.title}
                  </h3>

                  <p className="font-sans text-xs text-[#9A8F80] leading-relaxed line-clamp-3">
                    {subsystem.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {subsystem.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] px-2 py-0.5 bg-[#0B0E13] text-[#E6C093] border border-[#272A30]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#272A30] flex items-center justify-between font-mono text-[10px]">
                  <a
                    href={subsystem.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9A8F80] hover:text-[#E6DFD5] flex items-center gap-1"
                  >
                    <span>REPO</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <Link
                    to={`/projects/${subsystem.slug}`}
                    className="text-[#C5A059] group-hover:translate-x-0.5 transition-transform font-bold flex items-center gap-1"
                  >
                    <span>MISSION BRIEFING</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
