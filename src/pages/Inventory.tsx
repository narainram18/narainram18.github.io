import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Layers,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/skills';
import { usePageMetadata } from '@/hooks/usePageMetadata';

interface ArtifactDetail {
  name: string;
  category: string;
  focus: string;
  rune: string;
  projects: { name: string; slug: string }[];
  concepts: string[];
}

export function Inventory() {
  usePageMetadata(
    'Engineering Inventory // Arsenal — Narain Ram R M',
    'Interactive technology artifact slots and production systems arsenal of Narain Ram R M.'
  );

  const runicGlyphs = ['ᚱ', 'ᛏ', 'ᚲ', 'ᛉ', 'ᚠ', 'ᚨ', 'ᛟ', 'ᛃ', 'ᚺ', 'ᛈ', 'ᛇ', 'ᛊ'];

  // Flatten all skills with rich real metadata
  const allArtifacts: ArtifactDetail[] = SKILL_CATEGORIES.flatMap((cat, catIdx) =>
    cat.skills.map((skill, sIdx) => {
      const rune = runicGlyphs[(catIdx * 6 + sIdx) % runicGlyphs.length];

      // Map real projects where used
      const projects: { name: string; slug: string }[] = [];
      const concepts: string[] = [];

      const n = skill.name.toLowerCase();

      if (n.includes('java') || n.includes('spring') || n.includes('jwt') || n.includes('sse')) {
        projects.push({ name: 'Enterprise AI Workspace', slug: 'enterprise-ai-workspace' });
      }
      if (n.includes('c++') || n.includes('concurrency') || n.includes('operating systems') || n.includes('multithreading')) {
        projects.push({ name: 'Multithreaded System File Manager', slug: 'system-file-manager' });
      }
      if (n.includes('ros') || n.includes('robotics') || n.includes('navigation') || n.includes('python')) {
        projects.push({ name: 'Autonomous Grocery Navigator', slug: 'autonomous-grocery-navigator' });
      }
      if (n.includes('sql server') || n.includes('rest') || n.includes('postman')) {
        projects.push({ name: 'Enterprise Vessel API System', slug: 'enterprise-vessel-api' });
      }
      if (n.includes('qdrant') || n.includes('ollama') || n.includes('rag') || n.includes('semantic search')) {
        projects.push({ name: 'Enterprise AI Workspace', slug: 'enterprise-ai-workspace' });
      }
      if (n.includes('react') || n.includes('typescript') || n.includes('vite') || n.includes('tailwind')) {
        projects.push({ name: 'Enterprise AI Workspace', slug: 'enterprise-ai-workspace' });
      }
      if (n.includes('docker') || n.includes('git')) {
        projects.push({ name: 'Enterprise AI Workspace', slug: 'enterprise-ai-workspace' });
        projects.push({ name: 'Autonomous Grocery Navigator', slug: 'autonomous-grocery-navigator' });
      }

      // Add real concepts based on technology
      if (n.includes('c++')) concepts.push('Thread Pools', 'Mutex Synchronization', 'Condition Variables', 'POSIX / Win32 I/O');
      else if (n.includes('java')) concepts.push('Project Loom Virtual Threads', 'Spring Security Filter Chains', 'Hierarchical RBAC');
      else if (n.includes('qdrant')) concepts.push('HNSW Vector Indexing', 'ConditionFactory Payload Filtering', 'Cosine Similarity');
      else if (n.includes('postgresql')) concepts.push('BM25 Full Text Search', 'GIN Indexes', 'Relational Schemas', 'Transaction Isolation');
      else if (n.includes('ros')) concepts.push('2D Costmap Inflation', 'Dynamic Window Approach (DWA)', 'MoveBase ActionLib');
      else if (n.includes('sse')) concepts.push('Unidirectional Token Streaming', 'EventSource Abort Signals', 'Heartbeat Keep-Alive');
      else if (n.includes('react')) concepts.push('Streaming State Buffers', 'Component Decoupling', 'Synthetic Event Routing');
      else if (n.includes('typescript')) concepts.push('Discriminated Unions', 'Strict Null Checks', 'Contract Typings');
      else if (n.includes('docker')) concepts.push('Multi-Stage Builds', 'Sovereign Network Bridges', 'Volume Mounts');
      else if (n.includes('concurrency')) concepts.push('Deadlock Prevention', 'Lock Granularity', 'Thread Sizing Dynamics');
      else if (n.includes('networking')) concepts.push('TCP Congestion Control', 'Socket Buffers', 'HTTP/2 Transports');
      else concepts.push('Algorithmic Efficiency', 'Modular Architecture', 'Production Verification');

      return {
        name: skill.name,
        category: cat.title,
        focus: skill.focus || 'Core engineering competency',
        rune,
        projects,
        concepts,
      };
    })
  );

  const categories = ['ALL', ...SKILL_CATEGORIES.map((c) => c.title)];
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactDetail>(allArtifacts[0]);

  const filteredArtifacts =
    selectedCategory === 'ALL'
      ? allArtifacts
      : allArtifacts.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none">
      {/* Header Banner */}
      <div className="flex flex-col gap-1 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="font-mono text-[10px] text-[#C5A059] tracking-widest uppercase font-semibold">
              LOCATION // ENGINEERING INVENTORY [SYS-04]
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#8C6D46]">
            PRODUCTION ARSENAL
          </span>
        </div>

        <div className="flex items-baseline justify-between gap-4 mt-1">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#E6DFD5] tracking-wide uppercase font-bold">
            ENGINEERING INVENTORY
          </h1>
          <span className="font-mono text-[10px] text-[#C5A059] bg-[#1D2025] px-2.5 py-1 border border-[#272A30] uppercase">
            {allArtifacts.length} ARTIFACT SLOTS
          </span>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#9A8F80] mt-1 max-w-2xl">
          Production software stack and systems toolchain presented as explorable engineering artifacts. Select any slot to inspect its implementation role, codebase deployments, and core concepts.
        </p>

        {/* Real Inventory Telemetry Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 bg-[#161B22] p-3 border border-[#272A30]">
          <div>
            <span className="font-mono text-[9px] text-[#9A8F80] uppercase block">TOTAL ARTIFACTS</span>
            <span className="font-mono text-xs sm:text-sm text-[#C5A059] font-bold">
              {allArtifacts.length} Verified Slots
            </span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-[#9A8F80] uppercase block">DOMAINS</span>
            <span className="font-mono text-xs sm:text-sm text-[#E6C093] font-bold">
              {SKILL_CATEGORIES.length} Disciplines
            </span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-[#9A8F80] uppercase block">CORE RUNTIMES</span>
            <span className="font-mono text-xs sm:text-sm text-[#E6DFD5] font-bold truncate block">
              Java 21 · C++ · ROS 2
            </span>
          </div>
          <div>
            <span className="font-mono text-[9px] text-[#9A8F80] uppercase block">DATA STORES</span>
            <span className="font-mono text-xs sm:text-sm text-[#D97736] font-bold truncate block">
              Qdrant · PostgreSQL
            </span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2 mb-6">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-[10px] px-3 py-1.5 uppercase tracking-wider shrink-0 transition-all ${
                isSelected
                  ? 'bg-[#C5A059] text-[#111319] font-bold shadow-sm'
                  : 'bg-[#161B22] text-[#9A8F80] hover:text-[#E6DFD5] border border-[#272A30]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Two-Column Grid: Slot Matrix (Left) + Tactical Inspector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Artifact Grid Matrix (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-1 border-b border-[#272A30]">
            <span className="font-mono text-[11px] text-[#8C6D46] uppercase font-semibold">
              ARSENAL SLOTS ({filteredArtifacts.length})
            </span>
            <span className="font-mono text-[10px] text-[#9A8F80]">
              TAP SLOT TO INSPECT
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {filteredArtifacts.map((artifact) => {
              const isSelected = selectedArtifact.name === artifact.name;

              return (
                <button
                  key={artifact.name}
                  onClick={() => setSelectedArtifact(artifact)}
                  className={`p-3.5 flex flex-col justify-between text-left transition-all border ${
                    isSelected
                      ? 'bg-[#1D2025] border-[#C5A059] shadow-[0_4px_16px_rgba(197,160,89,0.2)]'
                      : 'bg-[#161B22] border-[#272A30] hover:border-[#8C6D46]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="font-mono text-sm text-[#C5A059] font-bold">
                      {artifact.rune}
                    </span>
                    <span className="font-mono text-[9px] text-[#8C6D46] uppercase truncate max-w-[80px]">
                      {artifact.category.split(' ')[0]}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#E6DFD5] uppercase truncate">
                      {artifact.name}
                    </h3>
                    <p className="font-sans text-[11px] text-[#9A8F80] line-clamp-1 mt-0.5">
                      {artifact.focus}
                    </p>
                  </div>

                  <div className="mt-2.5 pt-1.5 border-t border-[#272A30] flex items-center justify-between font-mono text-[9px]">
                    <span className="text-[#8C6D46]">
                      {artifact.projects.length > 0 ? `${artifact.projects.length} Deployment` : 'Core CS'}
                    </span>
                    {isSelected && (
                      <span className="text-[#C5A059] font-bold uppercase">ACTIVE</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Tactical Artifact Inspector Drawer (5 Cols) */}
        <div className="lg:col-span-5 sticky top-28 space-y-4">
          <div className="stone-panel p-6 border-t-4 border-t-[#C5A059] space-y-5">
            {/* Inspector Header */}
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#080C12] border border-[#C5A059] flex items-center justify-center font-mono text-base font-bold text-[#C5A059]">
                    {selectedArtifact.rune}
                  </span>
                  <div>
                    <span className="font-mono text-[9px] text-[#8C6D46] uppercase block">
                      {selectedArtifact.category}
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#E6DFD5] uppercase">
                      {selectedArtifact.name}
                    </h2>
                  </div>
                </div>

                <span className="font-mono text-[10px] text-[#C5A059] bg-[#080C12] px-2 py-0.5 border border-[#272A30]">
                  INSPECTED
                </span>
              </div>

              {/* Implementation Role / Focus */}
              <div className="mt-4 bg-[#080C12] p-3.5 border border-[#272A30]">
                <span className="font-mono text-[10px] text-[#C5A059] uppercase block mb-1 font-semibold">
                  IMPLEMENTATION FOCUS
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#E6DFD5]">
                  {selectedArtifact.focus}
                </p>
              </div>
            </div>

            {/* Codebase Deployments */}
            <div>
              <span className="font-mono text-[10px] text-[#8C6D46] uppercase block mb-2 font-semibold">
                DEPLOYED IN PRODUCTION SYSTEMS
              </span>

              {selectedArtifact.projects.length > 0 ? (
                <div className="space-y-2">
                  {selectedArtifact.projects.map((proj) => (
                    <Link
                      key={proj.slug}
                      to={`/projects/${proj.slug}`}
                      className="bg-[#1D2025] hover:bg-[#272A30] p-3 border border-[#272A30] hover:border-[#C5A059] flex items-center justify-between transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span className="font-serif text-xs font-bold text-[#E6DFD5] uppercase group-hover:text-[#C5A059]">
                          {proj.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-[#9A8F80] group-hover:text-[#C5A059]" />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-[#080C12] p-3 border border-[#272A30] text-xs font-sans text-[#9A8F80]">
                  Applied as fundamental systems coursework and underlying operating system primitives.
                </div>
              )}
            </div>

            {/* Related Engineering Concepts */}
            <div>
              <span className="font-mono text-[10px] text-[#8C6D46] uppercase block mb-2 font-semibold">
                RELATED SYSTEMS CONCEPTS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedArtifact.concepts.map((concept) => (
                  <span
                    key={concept}
                    className="font-mono text-[10px] px-2.5 py-1 bg-[#080C12] text-[#E6C093] border border-[#272A30]"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-2 border-t border-[#272A30] flex items-center justify-between text-xs font-mono">
              <span className="text-[#9A8F80]">ZERO FAKE XP / STATS</span>
              <Link
                to="/projects"
                className="text-[#C5A059] hover:underline flex items-center gap-1 font-bold"
              >
                <span>THE FORGE</span>
                <span className="text-[12px]">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
