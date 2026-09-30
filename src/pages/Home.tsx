import { Link } from 'react-router-dom';
import {
  Hammer,
  BookOpen,
  LayoutGrid,
  User,
  ArrowRight,
  Compass,
  FileText,
  Radio,
  ExternalLink,
} from 'lucide-react';
import { EmberCanvas } from '@/components/ui/EmberCanvas';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { PROJECTS } from '@/data/projects';

export function Home() {
  usePageMetadata(
    'Narain Ram R M — Software Engineer | Norse Engineering Realm',
    'Software Engineer specializing in Systems, Networking, Robotics, and AI. Explore the Norse engineering realm, architectural blueprints, and technical codices.'
  );

  const flagshipProject = PROJECTS.find((p) => p.slug === 'enterprise-ai-workspace') || PROJECTS[0];

  return (
    <div className="flex-1 w-full bg-[#0C0F14] text-[#E6DFD5] overflow-hidden select-none">
      {/* ============================================================== */}
      {/* 1. CINEMATIC HERO STAGE                                         */}
      {/* ============================================================== */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Atmospheric Visual Backplate */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <picture>
            <source
              type="image/avif"
              srcSet="/assets/realm/hero-fortress-400.avif 400w, /assets/realm/hero-fortress-768.avif 768w"
              sizes="(max-width: 640px) 400px, 768px"
            />
            <source
              type="image/webp"
              srcSet="/assets/realm/hero-fortress-400.webp 400w, /assets/realm/hero-fortress-768.webp 768w"
              sizes="(max-width: 640px) 400px, 768px"
            />
            <img
              src="/assets/realm/hero-fortress-768.jpg"
              alt="Megalithic stone fortress in mist with runic machinery"
              width={768}
              height={1376}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center transform scale-105 filter brightness-75 contrast-125 opacity-70"
            />
          </picture>
          {/* Gradients blending into canvas */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111319]/90 via-[#0C0F14]/40 to-[#0C0F14]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F14] via-[#0C0F14]/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(12,15,20,0.9)_100%)]" />
        </div>

        {/* Ambient Floating Firelight Embers (Lightweight, low CPU) */}
        <EmberCanvas particleCount={20} />

        {/* Top Header Markers */}
        <div className="relative z-20 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1 rounded-none bg-[#111319]/90 border border-[#272A30]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="font-mono text-[10px] tracking-widest text-[#C5A059] uppercase font-semibold">
                CITADEL SANCTUM
              </span>
              <span className="text-[#4E4639]">//</span>
              <span className="font-mono text-[10px] tracking-wider text-[#E6C093]">
                CENTRAL HEARTH
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#161B22] border border-[#272A30] font-mono text-[10px] text-[#9A8F80]">
              <span className="text-[#C5A059]">ᛟ ᚱ ᛖ</span>
              <span className="text-[#4E4639]">|</span>
              <span className="tracking-widest uppercase">VIT CHENNAI '27</span>
            </div>
          </div>

          {/* Domain Badges Reel */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="shrink-0 px-2.5 py-0.5 rounded-none bg-[#161B22] border border-[#272A30] font-mono text-[10px] text-[#E6C093] tracking-widest">
              [ᚱ] SYSTEMS
            </span>
            <span className="shrink-0 px-2.5 py-0.5 rounded-none bg-[#161B22] border border-[#272A30] font-mono text-[10px] text-[#C5A059] tracking-widest">
              [ᛏ] NETWORKING
            </span>
            <span className="shrink-0 px-2.5 py-0.5 rounded-none bg-[#161B22] border border-[#272A30] font-mono text-[10px] text-[#D97736] tracking-widest">
              [ᚲ] ROBOTICS
            </span>
            <span className="shrink-0 px-2.5 py-0.5 rounded-none bg-[#161B22] border border-[#272A30] font-mono text-[10px] text-[#E6DFD5] tracking-widest">
              [ᛉ] APPLIED AI
            </span>
          </div>
        </div>

        {/* Hero Title Core (Strictly following user requirement) */}
        <div className="relative z-20 my-auto py-10 flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2.5">
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-mono text-[#C5A059] text-[11px] tracking-[0.2em] uppercase font-semibold">
              VIT CHENNAI // B.TECH CSE (AI &amp; ROBOTICS)
            </span>
          </div>

          <div className="flex flex-col">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#E6DFD5] tracking-wide uppercase drop-shadow-md leading-[1.08]">
              NARAIN <br />
              <span className="text-[#C5A059] bg-gradient-to-r from-[#C5A059] via-[#E9C176] to-[#C5A059] bg-clip-text text-transparent">
                RAM R M
              </span>
            </h1>
            <p className="font-mono text-[#C5A059] tracking-[0.16em] uppercase text-xs sm:text-sm font-semibold mt-2">
              SOFTWARE ENGINEER
            </p>
            <p className="font-mono text-[#9A8F80] tracking-[0.12em] uppercase text-[11px] sm:text-xs mt-0.5">
              SYSTEMS · NETWORKING · ROBOTICS · AI
            </p>
          </div>

          <p className="font-sans text-base sm:text-lg text-[#E6DFD5]/90 max-w-2xl leading-relaxed drop-shadow-sm mt-1">
            Building resilient low-level software systems meant to be rigorously understood, tested under pressure, and pushed beyond nominal limits.
          </p>

          {/* Genuine Technical Focus Pillars (Real data, no fabricated metrics) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2 pt-2">
            <div className="flex flex-col p-3 bg-[#161B22] border border-[#272A30] shadow-sm">
              <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                PRIMARY PLATFORM
              </span>
              <span className="font-mono text-xs text-[#C5A059] font-semibold mt-1">
                Local-First RAG &amp; SSE
              </span>
              <span className="font-sans text-[11px] text-[#9A8F80] mt-0.5">
                Java 21 · Spring Boot 3 · Qdrant
              </span>
            </div>

            <div className="flex flex-col p-3 bg-[#161B22] border border-[#272A30] shadow-sm">
              <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                SYSTEMS RUNTIME
              </span>
              <span className="font-mono text-xs text-[#E6C093] font-semibold mt-1">
                Multithreaded C++
              </span>
              <span className="font-sans text-[11px] text-[#9A8F80] mt-0.5">
                POSIX · Thread Pools · Mutex
              </span>
            </div>

            <div className="flex flex-col p-3 bg-[#161B22] border border-[#272A30] shadow-sm">
              <span className="font-mono text-[9px] text-[#9A8F80] uppercase tracking-wider">
                AUTONOMOUS CORE
              </span>
              <span className="font-mono text-xs text-[#D97736] font-semibold mt-1">
                ROS 2 &amp; Navigation
              </span>
              <span className="font-sans text-[11px] text-[#9A8F80] mt-0.5">
                DWA Local Planner · 2D Costmaps
              </span>
            </div>
          </div>
        </div>

        {/* Action Triggers */}
        <div className="relative z-20 flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            to="/map"
            className="group px-6 py-3.5 bg-[#C5A059] text-[#111319] hover:bg-[#E9C176] font-mono text-xs tracking-wider uppercase font-bold flex items-center justify-between sm:justify-center gap-3 transition-all duration-200 active:scale-[0.98] shadow-lg"
          >
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#111319]" />
              <span>ENTER THE REALM</span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/projects"
            className="px-6 py-3.5 bg-[#161B22]/90 hover:bg-[#1D2025] border border-[#8C6D46] text-[#E6DFD5] font-mono text-xs tracking-wider uppercase font-medium flex items-center justify-between sm:justify-center gap-3 transition-all duration-200 active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <Hammer className="w-4 h-4 text-[#C5A059]" />
              <span>EXPLORE THE FORGE</span>
            </div>
            <span className="font-mono text-[10px] text-[#C5A059]">[ 4 SYSTEMS ]</span>
          </Link>

          <Link
            to="/archive"
            className="px-6 py-3.5 bg-[#111319]/80 hover:bg-[#161B22] border border-[#272A30] text-[#9A8F80] hover:text-[#E6DFD5] font-mono text-xs tracking-wider uppercase flex items-center justify-between sm:justify-center gap-2 transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-[#8C6D46]" />
            <span>RECRUITER SPEC</span>
          </Link>
        </div>

        {/* Tactical Guidance Ribbon */}
        <div className="relative z-20 mt-8 pt-3 border-t border-[#272A30]/60 flex items-center justify-around text-center text-[#9A8F80] font-mono text-[10px] uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="text-[#C5A059]">ᛟ</span>
            TAP CITADEL
          </span>
          <span className="text-[#4E4639]">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#E6C093]">ᚲ</span>
            EXPLORE MAP
          </span>
          <span className="text-[#4E4639]">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#D97736]">ᛉ</span>
            INSPECT ARTIFACTS
          </span>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SYSTEM REALMS & CITADELS PREVIEW                             */}
      {/* ============================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#272A30]">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#272A30]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[#C5A059] text-xs font-bold">///</span>
            <h2 className="font-mono text-xs text-[#E6DFD5] tracking-[0.18em] uppercase font-bold">
              SYSTEM REALMS &amp; CODICES
            </h2>
          </div>
          <span className="font-mono text-[10px] text-[#9A8F80]">
            6 CITADELS CHARTED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: The Forge */}
          <Link
            to="/projects"
            className="stone-card p-5 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[#161B22] border border-[#272A30] flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] transition-colors">
                  <Hammer className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] text-[#C5A059] px-2 py-0.5 bg-[#161B22] border border-[#272A30]">
                  SYS-01
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#E6DFD5] group-hover:text-[#C5A059] transition-colors uppercase">
                The Forge
              </h3>
              <p className="font-mono text-[10px] text-[#8C6D46] uppercase tracking-wider mt-0.5">
                PROJECT WORKSTATION
              </p>
              <p className="font-sans text-xs text-[#9A8F80] mt-2.5 leading-relaxed">
                Production RAG platforms, bare-metal robotics controllers (ROS 2), and multithreaded systems utilities.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#272A30] font-mono text-[10px]">
              <span className="text-[#9A8F80]">4 Deployments</span>
              <span className="text-[#C5A059] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                EXPLORE ᚠ
              </span>
            </div>
          </Link>

          {/* Card 2: Engineering Library */}
          <Link
            to="/engineering"
            className="stone-card p-5 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[#161B22] border border-[#272A30] flex items-center justify-center text-[#E6C093] group-hover:border-[#E6C093] transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] text-[#E6C093] px-2 py-0.5 bg-[#161B22] border border-[#272A30]">
                  SYS-02
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#E6DFD5] group-hover:text-[#E6C093] transition-colors uppercase">
                The Library
              </h3>
              <p className="font-mono text-[10px] text-[#8C6D46] uppercase tracking-wider mt-0.5">
                TECHNICAL CODICES
              </p>
              <p className="font-sans text-xs text-[#9A8F80] mt-2.5 leading-relaxed">
                Deep dives on C++ thread pool sizing, Reciprocal Rank Fusion, ROS costmap inflation, and SSE protocols.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#272A30] font-mono text-[10px]">
              <span className="text-[#9A8F80]">6 Codices</span>
              <span className="text-[#E6C093] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                READ CODICES ᚱ
              </span>
            </div>
          </Link>

          {/* Card 3: Engineering Inventory */}
          <Link
            to="/inventory"
            className="stone-card p-5 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[#161B22] border border-[#272A30] flex items-center justify-center text-[#D97736] group-hover:border-[#D97736] transition-colors">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] text-[#D97736] px-2 py-0.5 bg-[#161B22] border border-[#272A30]">
                  SYS-04
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#E6DFD5] group-hover:text-[#D97736] transition-colors uppercase">
                Inventory
              </h3>
              <p className="font-mono text-[10px] text-[#8C6D46] uppercase tracking-wider mt-0.5">
                PRODUCTION ARSENAL
              </p>
              <p className="font-sans text-xs text-[#9A8F80] mt-2.5 leading-relaxed">
                Interactive technology artifact slots mapped to real production implementations and systems concepts.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#272A30] font-mono text-[10px]">
              <span className="text-[#9A8F80]">36 Artifacts</span>
              <span className="text-[#D97736] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                INSPECT ᛉ
              </span>
            </div>
          </Link>

          {/* Card 4: My Chamber */}
          <Link
            to="/about"
            className="stone-card p-5 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-[#161B22] border border-[#272A30] flex items-center justify-center text-[#E6DFD5] group-hover:border-[#C5A059] transition-colors">
                  <User className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] text-[#9A8F80] px-2 py-0.5 bg-[#161B22] border border-[#272A30]">
                  SYS-03
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#E6DFD5] group-hover:text-[#C5A059] transition-colors uppercase">
                My Chamber
              </h3>
              <p className="font-mono text-[10px] text-[#8C6D46] uppercase tracking-wider mt-0.5">
                ENGINEER PHILOSOPHY
              </p>
              <p className="font-sans text-xs text-[#9A8F80] mt-2.5 leading-relaxed">
                Academic trajectory at VIT Chennai, systems core principles, engineering workflow, and active investigations.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#272A30] font-mono text-[10px]">
              <span className="text-[#9A8F80]">Class of 2027</span>
              <span className="text-[#E6DFD5] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                ENTER ᛏ
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FLAGSHIP SYSTEM SPOTLIGHT                                   */}
      {/* ============================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#272A30]">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#272A30]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
            <span className="font-mono text-xs text-[#C5A059] font-bold uppercase tracking-wider">
              FLAGSHIP ARTIFACT SPOTLIGHT // SYS-RAG-01
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#9A8F80] uppercase">
            LOCAL-FIRST RAG
          </span>
        </div>

        <div className="stone-panel p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-15 pointer-events-none overflow-hidden">
            <picture>
              <source type="image/avif" srcSet="/assets/realm/blueprint-rag-640.avif" />
              <source type="image/webp" srcSet="/assets/realm/blueprint-rag-640.webp" />
              <img
                src="/assets/realm/blueprint-rag-640.jpg"
                alt="Blueprint Schematic"
                width={640}
                height={349}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-right-top filter contrast-150"
              />
            </picture>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[10px] text-[#C5A059] px-2 py-0.5 bg-[#080C12] border border-[#272A30]">
                ENTERPRISE SYSTEM
              </span>
              <span className="font-mono text-[10px] text-[#8C6D46]">
                Java 21 · Spring Boot 3 · Qdrant · PostgreSQL · React
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#E6DFD5] uppercase tracking-wide">
              {flagshipProject.title}
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#9A8F80] mt-3 leading-relaxed">
              {flagshipProject.summary}
            </p>

            <div className="flex flex-wrap gap-2 mt-4 pt-2">
              {flagshipProject.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] px-2.5 py-1 bg-[#1D2025] text-[#E6C093] border border-[#272A30]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[#272A30]">
              <Link
                to={`/projects/${flagshipProject.slug}`}
                className="px-5 py-2.5 bg-[#C5A059] text-[#111319] hover:bg-[#E9C176] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <span>OPEN MISSION BRIEFING</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={flagshipProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#161B22] hover:bg-[#1D2025] border border-[#272A30] text-[#E6DFD5] font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>SOURCE REPO</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. THE GATE // UPLINK DISPATCH BANNER                           */}
      {/* ============================================================== */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#272A30] mb-8">
        <div className="stone-panel p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-4 border-l-[#C5A059]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs text-[#C5A059] uppercase">
              <Radio className="w-4 h-4" />
              <span>THE GATE // DIRECT UPLINK</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#E6DFD5] uppercase">
              Open Channels for Engineering Collaboration
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#9A8F80] max-w-xl">
              Available for software engineering internships, systems architecture, and distributed engineering roles.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 bg-[#1D2025] hover:bg-[#C5A059] hover:text-[#111319] border border-[#C5A059] text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 shrink-0"
          >
            <span>TRANSMIT MESSAGE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
