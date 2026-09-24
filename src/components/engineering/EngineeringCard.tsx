import { Link } from 'react-router-dom';
import { ArrowRight, Link2 } from 'lucide-react';
import { EngineeringEntry } from '@/types/engineering';
import { Badge } from '@/components/ui/Badge';
import { PROJECTS } from '@/data/projects';

interface EngineeringCardProps {
  entry: EngineeringEntry;
  index: number;
}

export function EngineeringCard({ entry, index }: EngineeringCardProps) {
  const isFeatured = entry.featured;
  const relatedProject = entry.relatedProjectSlug
    ? PROJECTS.find((p) => p.slug === entry.relatedProjectSlug)
    : null;

  const getStatusBadge = (status: EngineeringEntry['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>VERIFIED NOTE</span>
          </span>
        );
      case 'Active Investigation':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-600 dark:text-sky-400">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span>IN PROGRESS</span>
          </span>
        );
      case 'Planned Experiment':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-600 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>LAB PLAN</span>
          </span>
        );
    }
  };

  if (isFeatured) {
    return (
      <div className="rounded-xl glass-panel overflow-hidden shadow-sm hover:border-ink-secondary/40 dark:hover:border-ink-secondaryDark/40 transition-all duration-200 hover:-translate-y-0.5">
        {/* Header Bar */}
        <div className="px-6 py-3.5 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark bg-surface-elevatedLight/50 dark:bg-surface-elevatedDark/50 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-accent dark:text-accent-dark">
              0{index + 1} // FEATURED_INVESTIGATION
            </span>
            <span className="text-borderLine-light dark:text-borderLine-dark">|</span>
            <span className="text-ink-secondary dark:text-ink-secondaryDark">
              {entry.category.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {getStatusBadge(entry.status)}
            <span className="text-ink-muted dark:text-ink-mutedDark text-[11px]">
              {entry.readTime}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-2 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-ink-primary dark:text-ink-primaryDark tracking-tight">
              {entry.title}
            </h3>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
              {entry.summary}
            </p>
          </div>

          {/* Key Insights Preview */}
          <div className="p-4 rounded-md border border-borderLine-light dark:border-borderLine-dark bg-canvas-light/50 dark:bg-canvas-dark/50 space-y-2 font-mono text-xs">
            <div className="text-ink-muted dark:text-ink-mutedDark uppercase tracking-wider text-[11px]">
              Key Findings & Mechanics:
            </div>
            <div className="space-y-1.5">
              {entry.keyInsights.slice(0, 3).map((insight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-ink-primary dark:text-ink-primaryDark">
                  <span className="text-accent dark:text-accent-dark shrink-0">→</span>
                  <span className="font-sans text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-normal">
                    {insight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Topics & Related Project Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {entry.topics.map((topic) => (
                <Badge key={topic} variant="outline" className="text-[11px]">
                  {topic}
                </Badge>
              ))}
            </div>

            {relatedProject && (
              <Link
                to={`/projects/${relatedProject.slug}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent dark:text-accent-dark hover:underline font-medium"
              >
                <Link2 className="w-3.5 h-3.5" />
                <span>Related System: {relatedProject.title}</span>
              </Link>
            )}
          </div>

          {/* Action Link */}
          <div className="pt-3 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex items-center justify-between">
            <Link
              to={`/engineering/${entry.slug}`}
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark hover:underline group"
            >
              <span>Read Full Engineering Investigation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <span className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
              {entry.date}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Standard Investigation Card
  return (
    <div className="rounded-xl glass-surface p-6 flex flex-col justify-between hover:border-ink-secondary/40 dark:hover:border-ink-secondaryDark/40 transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-accent dark:text-accent-dark font-medium">
            0{index + 1} // {entry.category.toUpperCase()}
          </span>
          {getStatusBadge(entry.status)}
        </div>

        <h3 className="font-bold text-base sm:text-lg text-ink-primary dark:text-ink-primaryDark tracking-tight leading-snug">
          {entry.title}
        </h3>

        <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
          {entry.summary}
        </p>

        {relatedProject && (
          <div className="pt-1">
            <Link
              to={`/projects/${relatedProject.slug}`}
              className="inline-flex items-center gap-1 font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              <Link2 className="w-3 h-3 text-accent" />
              <span>Context: {relatedProject.title}</span>
            </Link>
          </div>
        )}
      </div>

      <div className="pt-5 space-y-4">
        <div className="flex flex-wrap gap-1">
          {entry.topics.slice(0, 3).map((topic) => (
            <Badge key={topic} variant="subtle" className="text-[10px] px-1.5 py-0.5">
              #{topic}
            </Badge>
          ))}
        </div>

        <div className="pt-2 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex items-center justify-between">
          <Link
            to={`/engineering/${entry.slug}`}
            className="font-mono text-xs text-ink-primary dark:text-ink-primaryDark hover:text-accent dark:hover:text-accent-dark font-medium inline-flex items-center gap-1 group"
          >
            <span>Read Entry</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <span className="font-mono text-[11px] text-ink-muted dark:text-ink-mutedDark">
            {entry.readTime}
          </span>
        </div>
      </div>
    </div>
  );
}
