import { useState } from 'react';
import { WorkflowStage } from '@/data/about';
import { ArrowRight, CheckCircle2, CornerDownRight } from 'lucide-react';

interface EngineeringWorkflowProps {
  stages: WorkflowStage[];
}

export function EngineeringWorkflow({ stages }: EngineeringWorkflowProps) {
  const [activeStageId, setActiveStageId] = useState<string>(stages[0]?.id || 'problem');

  const activeIndex = stages.findIndex((s) => s.id === activeStageId);
  const activeStage = stages[activeIndex] || stages[0];

  return (
    <div className="space-y-6">
      {/* Pipeline Stages Strip / Stepper */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2"
        role="tablist"
        aria-label="Engineering Workflow Stages"
      >
        {stages.map((stage, idx) => {
          const isSelected = stage.id === activeStageId;
          const isPast = idx < activeIndex;

          return (
            <button
              key={stage.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`workflow-panel-${stage.id}`}
              id={`workflow-tab-${stage.id}`}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                isSelected
                  ? 'glass-panel border-accent dark:border-accent-dark shadow-sm ring-1 ring-accent/20'
                  : 'glass-surface border-borderLine-light dark:border-borderLine-dark hover:border-ink-secondary/30 dark:hover:border-ink-secondaryDark/30 hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[10px] w-full">
                <span
                  className={
                    isSelected
                      ? 'text-accent dark:text-accent-dark font-bold'
                      : isPast
                      ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-ink-muted dark:text-ink-mutedDark'
                  }
                >
                  {stage.number} // STAGE
                </span>
                {isSelected ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark animate-pulse" />
                ) : isPast ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                ) : (
                  <span className="w-1 h-1 rounded-full bg-borderLine-light dark:bg-borderLine-dark" />
                )}
              </div>

              <div className="mt-2">
                <div
                  className={`text-xs font-semibold tracking-tight leading-tight ${
                    isSelected
                      ? 'text-ink-primary dark:text-ink-primaryDark'
                      : 'text-ink-secondary dark:text-ink-secondaryDark group-hover:text-ink-primary dark:group-hover:text-ink-primaryDark'
                  }`}
                >
                  {stage.title}
                </div>
                <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark truncate font-mono mt-0.5">
                  {stage.summary.split(' ')[0]}...
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Inspector Panel */}
      <div
        id={`workflow-panel-${activeStage.id}`}
        role="tabpanel"
        aria-labelledby={`workflow-tab-${activeStage.id}`}
        className="rounded-xl glass-panel p-6 sm:p-8 space-y-6 border border-borderLine-light dark:border-borderLine-dark animate-in fade-in-50 duration-200 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-2 py-0.5 rounded bg-accent/10 dark:bg-accent-dark/15 text-accent dark:text-accent-dark font-bold">
              PHASE {activeStage.number}
            </span>
            <span className="text-borderLine-light dark:text-borderLine-dark">|</span>
            <h3 className="font-bold text-base sm:text-lg text-ink-primary dark:text-ink-primaryDark font-sans">
              {activeStage.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const prevIdx = activeIndex > 0 ? activeIndex - 1 : stages.length - 1;
                setActiveStageId(stages[prevIdx].id);
              }}
              aria-label="Previous workflow stage"
              className="p-1.5 rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/40 dark:bg-surface-elevatedDark/40 text-ink-secondary hover:text-ink-primary text-xs font-mono transition-colors"
            >
              ← Prev
            </button>
            <span className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark px-1">
              {activeIndex + 1}/{stages.length}
            </span>
            <button
              onClick={() => {
                const nextIdx = activeIndex < stages.length - 1 ? activeIndex + 1 : 0;
                setActiveStageId(stages[nextIdx].id);
              }}
              aria-label="Next workflow stage"
              className="p-1.5 rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/40 dark:bg-surface-elevatedDark/40 text-ink-secondary hover:text-ink-primary text-xs font-mono transition-colors flex items-center gap-1"
            >
              <span>Next</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Narrative & Focus */}
          <div className="lg:col-span-7 space-y-3">
            <div className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark uppercase tracking-wider">
              // METHODOLOGY & RIGOR
            </div>
            <p className="text-sm sm:text-base text-ink-primary dark:text-ink-primaryDark leading-relaxed">
              {activeStage.summary}
            </p>
            <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed pt-1">
              {activeStage.details}
            </p>
          </div>

          {/* Concrete Deliverables & Checkpoints */}
          <div className="lg:col-span-5 p-4 rounded-xl bg-surface-elevatedLight/40 dark:bg-surface-elevatedDark/40 border border-borderLine-subtleLight dark:border-borderLine-subtleDark space-y-3 font-mono text-xs">
            <div className="text-[11px] text-ink-muted dark:text-ink-mutedDark uppercase tracking-wider flex items-center gap-1.5">
              <CornerDownRight className="w-3.5 h-3.5 text-accent dark:text-accent-dark" />
              <span>CONCRETE CHECKPOINTS:</span>
            </div>

            <ul className="space-y-2 font-sans text-xs">
              {activeStage.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-ink-primary dark:text-ink-primaryDark"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step Progression Bar */}
        <div className="pt-2 flex items-center gap-1 font-mono text-[10px] text-ink-muted dark:text-ink-mutedDark">
          <span>PROGRESSION:</span>
          <div className="flex-1 flex items-center gap-1 ml-2">
            {stages.map((s, idx) => (
              <div
                key={s.id}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  idx <= activeIndex
                    ? 'bg-accent dark:bg-accent-dark'
                    : 'bg-borderLine-light dark:border-borderLine-dark'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 font-semibold text-ink-primary dark:text-ink-primaryDark">
            {Math.round(((activeIndex + 1) / stages.length) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
