import { CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';
import { TechnicalDecision as TechnicalDecisionType } from '@/types/project';

interface TechnicalDecisionProps {
  decision: TechnicalDecisionType;
  index: number;
}

export function TechnicalDecision({ decision, index }: TechnicalDecisionProps) {
  return (
    <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark bg-surface-elevatedLight/50 dark:bg-surface-elevatedDark/50 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <span className="font-semibold text-accent dark:text-accent-dark">
          Decision 0{index + 1}
        </span>
        <span className="text-ink-primary dark:text-ink-primaryDark font-medium">
          {decision.topic}
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-5 text-xs sm:text-sm">
        {/* Engineering Problem Motivation */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-ink-muted dark:text-ink-mutedDark uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-ink-secondary dark:text-ink-secondaryDark" />
            <span>Problem / Engineering Constraint</span>
          </div>
          <p className="text-ink-primary dark:text-ink-primaryDark leading-relaxed pl-5">
            {decision.problem}
          </p>
        </div>

        {/* Options Considered */}
        <div className="space-y-1.5 pl-5 border-l-2 border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <span className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark uppercase tracking-wider">
            Alternatives Considered:
          </span>
          <div className="flex flex-wrap gap-2 pt-0.5">
            {decision.optionsConsidered.map((opt) => {
              const isChosen = opt === decision.chosenOption || opt.includes(decision.chosenOption);
              return (
                <span
                  key={opt}
                  className={`font-mono text-[11px] px-2.5 py-0.5 rounded border ${
                    isChosen
                      ? 'border-accent dark:border-accent-dark bg-accent/10 text-accent dark:text-accent-dark font-medium'
                      : 'border-borderLine-light dark:border-borderLine-dark text-ink-secondary dark:text-ink-secondaryDark bg-surface-elevatedLight/50 dark:bg-surface-elevatedDark/50 line-through opacity-70'
                  }`}
                >
                  {opt}
                </span>
              );
            })}
          </div>
        </div>

        {/* Chosen Decision & Rationale */}
        <div className="p-4 rounded-md border border-emerald-500/20 bg-emerald-500/5 space-y-1.5">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Chosen Approach: {decision.chosenOption}</span>
          </div>
          <p className="text-ink-primary dark:text-ink-primaryDark leading-relaxed pl-6 text-xs sm:text-sm">
            {decision.rationale}
          </p>
        </div>

        {/* Tradeoffs / What did it cost? */}
        <div className="p-4 rounded-md border border-amber-500/20 bg-amber-500/5 space-y-1.5">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Engineering Trade-Off / Cost</span>
          </div>
          <p className="text-ink-secondary dark:text-ink-secondaryDark leading-relaxed pl-6 text-xs sm:text-sm">
            {decision.tradeoffs}
          </p>
        </div>
      </div>
    </div>
  );
}
