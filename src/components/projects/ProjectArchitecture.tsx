import { useState } from 'react';
import { Layers, Database, Cpu, Shield, ArrowDown, Info } from 'lucide-react';
import { ArchitectureLayer, ArchitectureNode, ArchitectureConnection } from '@/types/project';

interface ProjectArchitectureProps {
  overview: string;
  layers: ArchitectureLayer[];
  dataFlow: string[];
  nodes?: ArchitectureNode[];
  connections?: ArchitectureConnection[];
  asciiDiagram?: string;
}

export function ProjectArchitecture({
  overview,
  layers,
  dataFlow,
  asciiDiagram,
}: ProjectArchitectureProps) {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const [showAscii, setShowAscii] = useState<boolean>(false);

  const activeLayer = layers[activeLayerIndex] || layers[0];

  const getLayerIcon = (layerName: string) => {
    const lower = layerName.toLowerCase();
    if (lower.includes('client') || lower.includes('frontend') || lower.includes('ui')) {
      return <Layers className="w-4 h-4 text-accent dark:text-accent-dark" />;
    }
    if (lower.includes('gateway') || lower.includes('security') || lower.includes('auth')) {
      return <Shield className="w-4 h-4 text-emerald-500" />;
    }
    if (lower.includes('storage') || lower.includes('database') || lower.includes('persistence')) {
      return <Database className="w-4 h-4 text-amber-500" />;
    }
    return <Cpu className="w-4 h-4 text-sky-500" />;
  };

  return (
    <div className="space-y-6">
      {/* High-level Architecture Summary */}
      <p className="text-base text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
        {overview}
      </p>

      {/* Visual Multi-Tier Architectural Diagram */}
      <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm">
        {/* Header Bar with Toggle */}
        <div className="px-5 py-3 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark bg-surface-elevatedLight/50 dark:bg-surface-elevatedDark/50 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-ink-primary dark:text-ink-primaryDark tracking-wider">
              SYSTEM_TOPOLOGY // SUBSYSTEM_FLOW
            </span>
          </div>

          {asciiDiagram && (
            <button
              onClick={() => setShowAscii(!showAscii)}
              className="text-xs text-accent dark:text-accent-dark hover:underline font-mono"
            >
              {showAscii ? 'View Layer Breakdown' : 'View Text Topology'}
            </button>
          )}
        </div>

        {showAscii && asciiDiagram ? (
          <div className="p-6 bg-canvas-light/80 dark:bg-canvas-dark/80 font-mono text-xs overflow-x-auto text-ink-primary dark:text-ink-primaryDark leading-relaxed">
            <pre>{asciiDiagram}</pre>
          </div>
        ) : (
          <div className="p-5 sm:p-6 md:p-8 space-y-6">
            {/* Interactive Layer Flow */}
            <div className="space-y-3">
              {layers.map((layer, idx) => {
                const isActive = activeLayerIndex === idx;

                return (
                  <div key={layer.layer} className="space-y-2">
                    <button
                      onClick={() => setActiveLayerIndex(idx)}
                      className={`w-full text-left p-4 rounded-md border transition-all duration-150 ${
                        isActive
                          ? 'border-accent dark:border-accent-dark bg-accent/5 dark:bg-accent-dark/5 shadow-sm'
                          : 'border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark hover:border-ink-secondary/30'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          {getLayerIcon(layer.layer)}
                          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-ink-primary dark:text-ink-primaryDark">
                            {layer.layer}
                          </span>
                          <span className="text-borderLine-light dark:text-borderLine-dark">·</span>
                          <span className="text-xs font-medium text-accent dark:text-accent-dark">
                            {layer.title}
                          </span>
                        </div>

                        <span className="font-mono text-[10px] text-ink-muted dark:text-ink-mutedDark">
                          {isActive ? 'INSPECTING' : 'CLICK TO EXPAND'}
                        </span>
                      </div>

                      {/* Component Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {layer.components.map((comp) => (
                          <span
                            key={comp}
                            className="font-mono text-[11px] px-2 py-0.5 rounded border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark text-ink-secondary dark:text-ink-secondaryDark"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </button>

                    {/* Connecting Arrow */}
                    {idx < layers.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-3.5 h-3.5 text-borderLine-light dark:text-borderLine-dark" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Selected Layer Deep Dive Panel */}
            <div className="p-4 rounded-md border border-borderLine-subtleLight dark:border-borderLine-subtleDark bg-surface-elevatedLight/40 dark:bg-surface-elevatedDark/40 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-accent dark:text-accent-dark font-medium">
                <Info className="w-3.5 h-3.5" />
                <span>ACTIVE_LAYER_SPEC // {activeLayer.layer.toUpperCase()}</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                {activeLayer.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Sequential Data Flow Sequence */}
      <div className="space-y-3 pt-2">
        <h4 className="font-mono text-xs font-semibold text-ink-primary dark:text-ink-primaryDark uppercase tracking-wider">
          // EXECUTION_DATA_FLOW
        </h4>
        <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-5 space-y-3 font-mono text-xs">
          {dataFlow.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3 text-ink-secondary dark:text-ink-secondaryDark">
              <span className="font-semibold text-accent dark:text-accent-dark shrink-0">
                0{idx + 1}.
              </span>
              <span className="leading-relaxed font-sans text-xs sm:text-sm text-ink-primary dark:text-ink-primaryDark">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
