import { useState, useEffect } from 'react';
import { Activity, RefreshCw } from 'lucide-react';

interface TopologyNode {
  id: string;
  name: string;
  role: string;
  layer: string;
  x: number;
  y: number;
  protocol: string;
  detail: string;
  status: 'ONLINE' | 'ACTIVE' | 'ISOLATED';
  icon: 'client' | 'gateway' | 'service' | 'worker' | 'storage' | 'ai';
}

const NODES: TopologyNode[] = [
  {
    id: 'client',
    name: 'CLIENT_LAYER',
    role: 'React SPA / SSE Client',
    layer: 'Frontend Interface',
    x: 250,
    y: 35,
    protocol: 'HTTPS / TLS 1.3',
    detail: 'EventSource token streaming client with abort controller, optimistic cache, and stale response protection.',
    status: 'ONLINE',
    icon: 'client',
  },
  {
    id: 'gateway',
    name: 'API_GATEWAY',
    role: 'Spring Boot 3 Gateway',
    layer: 'Security Perimeter',
    x: 250,
    y: 115,
    protocol: 'JWT / Filter Chain',
    detail: 'Stateless claim extraction, hierarchical RBAC (USER / ADMIN / SUPER_ADMIN), and SSRF boundary guards.',
    status: 'ACTIVE',
    icon: 'gateway',
  },
  {
    id: 'services',
    name: 'CORE_SERVICES',
    role: 'Domain Orchestrator',
    layer: 'Service Layer',
    x: 130,
    y: 205,
    protocol: 'Internal Bus',
    detail: 'Reciprocal Rank Fusion (RRF) hybrid search orchestrator, conversation state engine, and token budgeting.',
    status: 'ACTIVE',
    icon: 'service',
  },
  {
    id: 'workers',
    name: 'TASK_WORKERS',
    role: 'Ingestion & Scraping',
    layer: 'Worker Mesh',
    x: 370,
    y: 205,
    protocol: 'Async Thread Pool',
    detail: 'Document chunking engine, recursive parsers, and SSRF-hardened web crawler with redirect disabled.',
    status: 'ACTIVE',
    icon: 'worker',
  },
  {
    id: 'storage',
    name: 'RELATIONAL_DB',
    role: 'PostgreSQL + FTS',
    layer: 'Persistence Tier',
    x: 130,
    y: 295,
    protocol: 'TCP / Port 5432',
    detail: 'ACID transactional state, document metadata, refresh token rotation, and BM25-equivalent tsvector index.',
    status: 'ONLINE',
    icon: 'storage',
  },
  {
    id: 'vector',
    name: 'VECTOR_&_AI',
    role: 'Qdrant + Local Ollama',
    layer: 'Inference Engine',
    x: 370,
    y: 295,
    protocol: 'gRPC / Local IPC',
    detail: 'HNSW vector collection with dynamic ConditionFactory zero-trust payload filtering + local Llama 3 models.',
    status: 'ONLINE',
    icon: 'ai',
  },
];

const CONNECTIONS = [
  { id: 'c1', from: 'client', to: 'gateway', label: 'HTTP / SSE' },
  { id: 'c2', from: 'gateway', to: 'services', label: 'Auth Token' },
  { id: 'c3', from: 'gateway', to: 'workers', label: 'Job Dispatch' },
  { id: 'c4', from: 'services', to: 'storage', label: 'SQL / FTS' },
  { id: 'c5', from: 'services', to: 'vector', label: 'RRF Query' },
  { id: 'c6', from: 'workers', to: 'vector', label: 'Embeddings' },
  { id: 'c7', from: 'workers', to: 'storage', label: 'Chunk Metadata' },
];

export function SystemTopology() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('services');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeId = hoveredNodeId || selectedNodeId || 'services';
  const activeNode = NODES.find((n) => n.id === activeId) || NODES[2];

  const isConnected = (nodeA: string, nodeB: string) => {
    return CONNECTIONS.some(
      (c) =>
        (c.from === nodeA && c.to === nodeB) ||
        (c.from === nodeB && c.to === nodeA)
    );
  };

  // Keyboard shortcut to clear selection with Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedNodeId) {
        setSelectedNodeId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedNodeId]);

  return (
    <div className="w-full rounded-xl glass-panel p-5 sm:p-6 shadow-md transition-all duration-300">
      {/* Topology Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-ink-primary dark:text-ink-primaryDark tracking-wider">
            System Topology
          </span>
        </div>

        <div className="flex items-center gap-2">
          {selectedNodeId && (
            <button
              onClick={() => setSelectedNodeId(null)}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-ink-muted dark:text-ink-mutedDark hover:text-accent dark:hover:text-accent-dark hover:bg-surface-elevatedLight/50 dark:hover:bg-surface-elevatedDark/50 transition-colors"
              title="Reset selection (Esc)"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          )}
          <span className="text-ink-muted dark:text-ink-mutedDark hidden sm:inline text-[11px]">
            INTERACTIVE MESH
          </span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative my-4 flex items-center justify-center">
        <svg
          viewBox="0 0 500 340"
          className="w-full h-auto max-h-[360px] select-none"
          role="img"
          aria-label="Interactive architecture diagram showing Client, Gateway, Services, Workers, Storage, and Vector AI nodes."
        >
          {/* Connection Lines */}
          {CONNECTIONS.map((c) => {
            const source = NODES.find((n) => n.id === c.from)!;
            const target = NODES.find((n) => n.id === c.to)!;
            const isHighlighted =
              activeId === c.from || activeId === c.to;

            return (
              <g key={c.id}>
                {/* Background base path */}
                <line
                  x1={source.x}
                  y1={source.y + 12}
                  x2={target.x}
                  y2={target.y - 12}
                  stroke={isHighlighted ? '#0284C7' : 'currentColor'}
                  strokeWidth={isHighlighted ? 2 : 1}
                  strokeDasharray={isHighlighted ? '4 4' : '3 3'}
                  className={
                    isHighlighted
                      ? 'text-accent dark:text-accent-dark animate-data-flow transition-colors duration-200'
                      : 'text-borderLine-light/80 dark:text-borderLine-dark/80 transition-colors duration-200'
                  }
                />

                {/* Simulated Packet Pulse Circle */}
                {isHighlighted && (
                  <circle
                    r="2.5"
                    className="fill-accent dark:fill-accent-dark"
                  >
                    <animate
                      attributeName="cx"
                      from={source.x}
                      to={target.x}
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      from={source.y + 12}
                      to={target.y - 12}
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {NODES.map((node) => {
            const isSelected = selectedNodeId === node.id;
            const isActive = activeId === node.id;
            const isConnectedToActive = isConnected(activeId, node.id);
            const isSubdued =
              activeId && !isActive && !isConnectedToActive;

            return (
              <g
                key={node.id}
                onClick={() =>
                  setSelectedNodeId((prev) => (prev === node.id ? null : node.id))
                }
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                className="cursor-pointer focus:outline-none transition-all duration-200"
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={`Inspect ${node.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
                  }
                }}
              >
                {/* Node Box */}
                <rect
                  x={node.x - 70}
                  y={node.y - 18}
                  width="140"
                  height="36"
                  rx="6"
                  className={`transition-all duration-200 ${
                    isActive
                      ? 'fill-surface-light dark:fill-surface-dark stroke-accent dark:stroke-accent-dark stroke-[2px] filter drop-shadow(0 4px 6px rgba(2, 132, 199, 0.2))'
                      : isConnectedToActive
                      ? 'fill-surface-elevatedLight dark:fill-surface-elevatedDark stroke-ink-secondary/50 dark:stroke-ink-secondaryDark/50 stroke-[1.25px]'
                      : isSubdued
                      ? 'fill-surface-light/60 dark:fill-surface-dark/60 stroke-borderLine-light/60 dark:stroke-borderLine-dark/60 opacity-50'
                      : 'fill-surface-light dark:fill-surface-dark stroke-borderLine-light dark:stroke-borderLine-dark stroke-1 hover:stroke-ink-secondary dark:hover:stroke-ink-secondaryDark'
                  }`}
                />

                {/* Node Indicator Accent Pill */}
                <rect
                  x={node.x - 66}
                  y={node.y - 14}
                  width="3"
                  height="28"
                  rx="1.5"
                  className={
                    isActive
                      ? 'fill-accent dark:fill-accent-dark'
                      : isConnectedToActive
                      ? 'fill-emerald-500'
                      : 'fill-borderLine-light dark:fill-borderLine-dark'
                  }
                />

                {/* Node Title */}
                <text
                  x={node.x + 2}
                  y={node.y - 2}
                  textAnchor="middle"
                  className={`font-mono text-[11px] font-semibold tracking-wider select-none transition-colors ${
                    isActive
                      ? 'fill-accent dark:fill-accent-dark'
                      : 'fill-ink-primary dark:fill-ink-primaryDark'
                  }`}
                >
                  {node.name}
                </text>

                {/* Node Subtitle */}
                <text
                  x={node.x + 2}
                  y={node.y + 11}
                  textAnchor="middle"
                  className="font-mono text-[9px] fill-ink-secondary dark:fill-ink-secondaryDark select-none"
                >
                  {node.role}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Contextual Spatial Inspector Panel (Level 2 Glass) */}
      <div className="rounded-lg p-3.5 bg-surface-elevatedLight/60 dark:bg-surface-elevatedDark/60 border border-borderLine-subtleLight dark:border-borderLine-subtleDark font-mono text-xs transition-all duration-200">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-1.5 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-ink-muted dark:text-ink-mutedDark">
              INSPECTING:
            </span>
            <span className="font-semibold text-accent dark:text-accent-dark">
              {activeNode.name}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded border border-borderLine-light dark:border-borderLine-dark text-ink-secondary dark:text-ink-secondaryDark">
              {activeNode.protocol}
            </span>
          </div>

          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-emerald-500" />
            <span>{activeNode.layer}</span>
          </div>
        </div>

        <p className="text-ink-secondary dark:text-ink-secondaryDark text-[11px] font-sans pt-1.5 leading-relaxed">
          {activeNode.detail}
        </p>
      </div>
    </div>
  );
}
