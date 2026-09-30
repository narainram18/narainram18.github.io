import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Hammer,
  BookOpen,
  User,
  LayoutGrid,
  FileText,
  Radio,
  ArrowRight,
  ZoomIn,
  Layers,
  RotateCcw,
} from 'lucide-react';
import { usePageMetadata } from '@/hooks/usePageMetadata';

interface CitadelNode {
  id: string;
  name: string;
  sysId: string;
  tag: string;
  rune: string;
  subtitle: string;
  description: string;
  path: string;
  coords: { x: number; y: number }; // Precise percentage within 768x1376 image space
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  meta: string;
}

// Landmark coordinates verified against master artwork (768 x 1376 intrinsic dimensions)
const CITADEL_NODES: CitadelNode[] = [
  {
    id: 'forge',
    name: 'THE FORGE',
    sysId: 'SYS-01',
    tag: '4 Projects',
    rune: 'ᚠ',
    subtitle: 'Primary Systems & Robotics Implementations',
    description:
      'High-throughput local RAG platforms, bare-metal robotics controllers (ROS 2), multithreaded C++ utilities, and enterprise APIs.',
    path: '/projects',
    coords: { x: 32.55, y: 24.35 }, // px: (250, 335)
    icon: Hammer,
    accentColor: '#C5A059',
    meta: 'C++ · Java 21 · ROS 2 · Spring Boot',
  },
  {
    id: 'library',
    name: 'ENGINEERING LIBRARY',
    sysId: 'SYS-02',
    tag: '6 Codices',
    rune: 'ᚱ',
    subtitle: 'Deep Dives & Technical Investigations',
    description:
      'Rigorous engineering writeups on C++ worker pool sizing, Reciprocal Rank Fusion vs dense scoring, and ROS costmap inflation.',
    path: '/engineering',
    coords: { x: 76.17, y: 29.07 }, // px: (585, 400)
    icon: BookOpen,
    accentColor: '#E6C093',
    meta: 'Concurrency · IR · Robotics Kinematics',
  },
  {
    id: 'chamber',
    name: 'MY CHAMBER',
    sysId: 'SYS-03',
    tag: 'Class of 2027',
    rune: 'ᛏ',
    subtitle: 'Engineer Philosophy & Academic Trajectory',
    description:
      'Personal engineering approach, core tenets of looking beneath abstractions, academic coursework at VIT Chennai, and workflow.',
    path: '/about',
    coords: { x: 27.99, y: 47.24 }, // px: (215, 650)
    icon: User,
    accentColor: '#E6DFD5',
    meta: 'VIT Chennai · CGPA 7.9 · Principles',
  },
  {
    id: 'inventory',
    name: 'ENGINEERING INVENTORY',
    sysId: 'SYS-04',
    tag: '36 Artifacts',
    rune: 'ᛉ',
    subtitle: 'Production Tech Stack & Systems Arsenal',
    description:
      'Interactive technology artifact slots mapped to real production implementations, systems concepts, and codebase usages.',
    path: '/inventory',
    coords: { x: 76.17, y: 50.15 }, // px: (585, 690)
    icon: LayoutGrid,
    accentColor: '#D97736',
    meta: 'Languages · Runtimes · Storage · Tools',
  },
  {
    id: 'archive',
    name: 'THE ARCHIVE',
    sysId: 'SYS-05',
    tag: 'Verified',
    rune: 'ᛇ',
    subtitle: 'Official Career Chronology & Resume',
    description:
      'Curriculum Vitae, Software Development Internship at Eanwol, academic degrees, and downloadable verified PDF dossier.',
    path: '/archive',
    coords: { x: 73.57, y: 69.40 }, // px: (565, 955)
    icon: FileText,
    accentColor: '#8C6D46',
    meta: 'Eanwol Intern · Credentials · Resume PDF',
  },
  {
    id: 'gate',
    name: 'THE GATE',
    sysId: 'SYS-06',
    tag: 'Direct Uplink',
    rune: 'ᚨ',
    subtitle: 'Communication Portal & Dispatch',
    description:
      'Direct communication coordinates for internships, software engineering roles, and distributed systems discussions.',
    path: '/contact',
    coords: { x: 51.43, y: 82.85 }, // px: (395, 1140)
    icon: Radio,
    accentColor: '#C5A059',
    meta: 'Email · GitHub · LinkedIn · Dispatch',
  },
];

export function WorldMap() {
  usePageMetadata(
    'World Map // Cartography — Narain Ram R M',
    'Interactive topological cartography and citadel navigation across the Norse engineering realm of Narain Ram R M.'
  );

  const [selectedNode, setSelectedNode] = useState<CitadelNode>(CITADEL_NODES[0]);
  const [zoomLevel, setZoomLevel] = useState<1 | 1.3 | 1.6>(1);
  const [viewMode, setViewMode] = useState<'cartography' | 'schema'>('cartography');

  const cycleZoom = () => {
    if (zoomLevel === 1) setZoomLevel(1.3);
    else if (zoomLevel === 1.3) setZoomLevel(1.6);
    else setZoomLevel(1);
  };

  const resetView = () => {
    setZoomLevel(1);
    setSelectedNode(CITADEL_NODES[0]);
  };

  return (
    <div className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none">
      {/* Top Banner */}
      <div className="flex flex-col gap-1 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span className="font-mono text-[10px] sm:text-[11px] text-[#C5A059] tracking-widest uppercase font-semibold">
              REALM CARTOGRAPHY · TOPOLOGY
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] text-[#9A8F80]">
            VIT CHENNAI · CSE &apos;27
          </span>
        </div>

        <div className="flex flex-wrap items-baseline justify-between gap-2 mt-1">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#E6DFD5] tracking-wide uppercase font-bold">
            CARTOGRAPHY
          </h1>
          <span className="font-mono text-[9px] sm:text-[10px] text-[#C5A059] bg-[#1D2025] px-2 sm:px-2.5 py-0.5 sm:py-1 border border-[#272A30] uppercase shrink-0">
            6 CHARTED CITADELS
          </span>
        </div>
      </div>

      {/* Main Responsive Layout: Side-by-Side on Desktop (lg:), Stacked on Mobile/Tablet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Interactive Map Viewport with Unified Canvas */}
        <div className="lg:col-span-7 flex flex-col items-center gap-3 w-full">
          {/* Mode & Zoom Controls Bar */}
          <div className="w-full flex items-center justify-between bg-[#161B22] p-1.5 sm:p-2 border border-[#272A30]">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                type="button"
                onClick={() => setViewMode('cartography')}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 transition-colors ${
                  viewMode === 'cartography'
                    ? 'bg-[#C5A059] text-[#111319] font-bold shadow-sm'
                    : 'bg-[#1D2025] text-[#9A8F80] hover:text-[#E6DFD5]'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="hidden xs:inline sm:hidden">Map</span>
                <span className="hidden sm:inline">Cartography</span>
                <span className="xs:hidden">Map</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('schema')}
                className={`px-2 sm:px-3 py-1 sm:py-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 transition-colors ${
                  viewMode === 'schema'
                    ? 'bg-[#C5A059] text-[#111319] font-bold shadow-sm'
                    : 'bg-[#1D2025] text-[#9A8F80] hover:text-[#E6DFD5]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Blueprint </span>
                <span>Schema</span>
              </button>
            </div>

            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                type="button"
                onClick={cycleZoom}
                title="Cycle Zoom Level (1.0x / 1.3x / 1.6x)"
                className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-[#1D2025] hover:bg-[#272A30] border border-[#272A30] text-[#E6C093] font-mono text-[9px] sm:text-[10px] flex items-center gap-1 transition-colors shrink-0"
              >
                <ZoomIn className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{zoomLevel.toFixed(1)}x</span>
              </button>

              <button
                type="button"
                onClick={resetView}
                title="Reset Map to 1.0x"
                className="p-1 sm:p-1.5 bg-[#1D2025] hover:bg-[#272A30] border border-[#272A30] text-[#9A8F80] hover:text-[#E6DFD5] transition-colors shrink-0"
              >
                <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          </div>

          {/* Map Viewport: dedicated frame with preserved 768/1376 aspect ratio */}
          <div
            className="relative rounded-xl overflow-hidden bg-[#080C12] border border-[#272A30] shadow-2xl transition-all duration-300 flex items-center justify-center"
            style={{
              maxHeight: 'min(780px, calc(100vh - 13rem))',
              maxWidth: 'min(100%, calc(min(780px, calc(100vh - 13rem)) * 768 / 1376))',
              aspectRatio: '768 / 1376',
              width: '100%',
            }}
          >
            {/* Unified Map Canvas: image + hotspots scale together as a single composed layer */}
            <div
              className="relative w-full h-full transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `scale(${zoomLevel}) translateZ(0)`,
                transformOrigin:
                  zoomLevel > 1
                    ? `${selectedNode.coords.x}% ${selectedNode.coords.y}%`
                    : 'center center',
              }}
            >
              {/* Complete, Uncropped Norse Cartography Artwork */}
              <picture>
                <source
                  type="image/avif"
                  srcSet="/assets/realm/world-map-480.avif 480w, /assets/realm/world-map-768.avif 768w"
                  sizes="(max-width: 640px) 480px, 768px"
                />
                <source
                  type="image/webp"
                  srcSet="/assets/realm/world-map-480.webp 480w, /assets/realm/world-map-768.webp 768w"
                  sizes="(max-width: 640px) 480px, 768px"
                />
                <img
                  src="/assets/realm/world-map-768.jpg"
                  alt="Complete illustrated ancient parchment map of Narain's Norse Engineering Realm showing all six citadels: The Forge, Engineering Library, My Chamber, Engineering Inventory, The Archive, and The Gate"
                  width={768}
                  height={1376}
                  loading="eager"
                  decoding="async"
                  className={`w-full h-full block object-contain select-none pointer-events-none transition-all duration-300 ${
                    viewMode === 'schema'
                      ? 'filter invert contrast-125 hue-rotate-180 brightness-90'
                      : 'brightness-95 contrast-105'
                  }`}
                />
              </picture>

              {/* Exact-Anchored Interactive Citadel Hotspots Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {CITADEL_NODES.map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  const Icon = node.icon;

                  return (
                    <Link
                      key={node.id}
                      to={node.path}
                      onClick={() => setSelectedNode(node)}
                      onMouseEnter={() => setSelectedNode(node)}
                      onFocus={() => setSelectedNode(node)}
                      style={{
                        left: `${node.coords.x}%`,
                        top: `${node.coords.y}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 pointer-events-auto focus:outline-none z-20"
                      aria-label={`Enter ${node.name} (${node.subtitle})`}
                    >
                      {/* Active Beacon Pulse Ring */}
                      {isSelected && (
                        <span className="absolute w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#C5A059] animate-ping opacity-60 pointer-events-none" />
                      )}

                      {/* Runic Beacon Glyph */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-115 shadow-xl ${
                          isSelected
                            ? 'bg-[#C5A059] text-[#111319] border-2 border-[#FFE8A3] shadow-[0_0_15px_rgba(233,193,118,0.7)]'
                            : 'bg-[#111319]/85 text-[#E6DFD5] border border-[#C5A059]/60 hover:border-[#E9C176] hover:bg-[#161B22]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>

                      {/* Subtle Floating Tooltip on Hover/Focus (does not obscure hand-drawn lettering) */}
                      <div className="absolute bottom-full mb-1.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30">
                        <span className="px-2 py-0.5 bg-[#0e1117]/95 border border-[#C5A059]/70 text-[#E9C176] font-mono text-[9px] uppercase tracking-wider shadow-lg flex items-center gap-1 backdrop-blur-sm">
                          <span>{node.rune}</span>
                          <span>{node.name}</span>
                          <ArrowRight className="w-2.5 h-2.5 ml-0.5" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* User Interaction Guidance */}
          <p className="font-mono text-[10px] text-[#8C6D46] tracking-wider text-center">
            CLICK LANDMARK TO ENTER CITADEL · HOVER TO INSPECT
          </p>
        </div>

        {/* Right Column: Selected Citadel Inspector + Waypoint Directory */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Selected Citadel Tactical Inspector */}
          <div className="stone-panel p-5 border-l-4 border-l-[#C5A059] flex flex-col gap-4 shadow-xl">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#C5A059] font-bold">
                  {selectedNode.rune} {selectedNode.sysId}
                </span>
                <span className="text-[#4E4639]">//</span>
                <h2 className="font-serif text-lg font-bold text-[#E6DFD5] uppercase tracking-wide">
                  {selectedNode.name}
                </h2>
                <span className="font-mono text-[9px] px-2 py-0.5 bg-[#1D2025] text-[#C5A059] border border-[#272A30] ml-auto">
                  {selectedNode.tag}
                </span>
              </div>

              <p className="font-mono text-[11px] text-[#C5A059] font-medium">
                {selectedNode.subtitle}
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#9A8F80] leading-relaxed">
                {selectedNode.description}
              </p>

              <div className="pt-2 border-t border-[#272A30] flex items-center justify-between font-mono text-[10px]">
                <span className="text-[#8C6D46]">CORE TECH:</span>
                <span className="text-[#E6C093] font-semibold">{selectedNode.meta}</span>
              </div>
            </div>

            <Link
              to={selectedNode.path}
              className="w-full px-5 py-3 bg-[#C5A059] text-[#111319] hover:bg-[#E9C176] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <span>ENTER {selectedNode.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Citadels Directory List */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
              <span className="font-mono text-xs text-[#C5A059] font-bold uppercase tracking-wider">
                REALM CITADELS // WAYPOINTS
              </span>
              <span className="font-mono text-[10px] text-[#9A8F80]">
                6 / 6 CHARTED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {CITADEL_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                const Icon = node.icon;

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedNode(node);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className={`p-3 cursor-pointer transition-all border text-left ${
                      isSelected
                        ? 'bg-[#1D2025] border-[#C5A059] shadow-[0_4px_16px_rgba(197,160,89,0.15)]'
                        : 'bg-[#161B22] border-[#272A30] hover:border-[#8C6D46]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-8 h-8 rounded flex items-center justify-center border shrink-0 ${
                            isSelected
                              ? 'bg-[#C5A059] text-[#111319] border-[#E9C176]'
                              : 'bg-[#1D2025] text-[#C5A059] border-[#272A30]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-serif text-xs sm:text-sm font-bold text-[#E6DFD5] uppercase truncate">
                              {node.name}
                            </span>
                            <span className="font-mono text-[9px] text-[#8C6D46] shrink-0">
                              [{node.sysId}]
                            </span>
                          </div>
                          <p className="font-sans text-[11px] text-[#9A8F80] truncate mt-0.5">
                            {node.subtitle}
                          </p>
                        </div>
                      </div>

                      <Link
                        to={node.path}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#C5A059] hover:underline font-mono text-[10px] font-bold flex items-center gap-1 shrink-0 pt-0.5"
                      >
                        <span>VISIT</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
