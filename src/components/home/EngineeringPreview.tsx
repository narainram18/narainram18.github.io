import { Link } from 'react-router-dom';
import { ArrowRight, Terminal } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { ENGINEERING_NOTES } from '@/data/engineering';

export function EngineeringPreview() {
  return (
    <section className="py-16 md:py-24 border-b border-borderLine-light dark:border-borderLine-dark">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <SectionHeading
          number="03"
          tagline="ENGINEERING NOTEBOOK"
          title="Systems, Networking & Experiments"
          description="Technical investigations exploring mechanics beneath frameworks — from concurrency synchronization to protocol design."
          className="mb-0"
        />
        <Link
          to="/engineering"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-accent dark:text-accent-dark hover:underline font-medium"
        >
          <span>View all engineering notes</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Engineering Pillars Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark space-y-1">
          <div className="font-mono text-xs font-semibold text-ink-primary dark:text-ink-primaryDark">
            // SYSTEMS
          </div>
          <p className="text-[11px] text-ink-secondary dark:text-ink-secondaryDark leading-normal">
            Operating systems, worker pools, locks, POSIX primitives.
          </p>
        </div>

        <div className="p-4 rounded border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark space-y-1">
          <div className="font-mono text-xs font-semibold text-ink-primary dark:text-ink-primaryDark">
            // NETWORKING
          </div>
          <p className="text-[11px] text-ink-secondary dark:text-ink-secondaryDark leading-normal">
            TCP socket mechanics, SSE unidirectional streams, HTTP/2.
          </p>
        </div>

        <div className="p-4 rounded border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark space-y-1">
          <div className="font-mono text-xs font-semibold text-ink-primary dark:text-ink-primaryDark">
            // ROBOTICS
          </div>
          <p className="text-[11px] text-ink-secondary dark:text-ink-secondaryDark leading-normal">
            ROS costmaps, DWA local planning, sensor telemetry.
          </p>
        </div>

        <div className="p-4 rounded border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark space-y-1">
          <div className="font-mono text-xs font-semibold text-ink-primary dark:text-ink-primaryDark">
            // ALGORITHMS
          </div>
          <p className="text-[11px] text-ink-secondary dark:text-ink-secondaryDark leading-normal">
            Information retrieval, rank fusion, tree/graph traversal.
          </p>
        </div>
      </div>

      {/* Selected Technical Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ENGINEERING_NOTES.slice(0, 4).map((note) => (
          <div
            key={note.slug}
            className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-6 flex flex-col justify-between hover:border-ink-secondary/40 dark:hover:border-ink-secondaryDark/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent dark:text-accent-dark font-medium">
                  {note.category.toUpperCase()}
                </span>
                <span className="text-ink-muted dark:text-ink-mutedDark">{note.readTime}</span>
              </div>

              <h4 className="font-bold text-base text-ink-primary dark:text-ink-primaryDark tracking-tight leading-snug">
                {note.title}
              </h4>

              <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                {note.abstract}
              </p>

              {/* Key Insights Bullet List */}
              <div className="pt-2 space-y-1.5 font-mono text-[11px] text-ink-secondary dark:text-ink-secondaryDark">
                {note.keyInsights.slice(0, 2).map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-accent dark:text-accent-dark shrink-0">→</span>
                    <span className="leading-tight">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {note.tags.map((tag) => (
                  <Badge key={tag} variant="subtle" className="text-[10px] px-1.5 py-0.5">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <Link
                to={`/engineering/${note.slug}`}
                className="font-mono text-xs text-accent dark:text-accent-dark hover:underline font-medium inline-flex items-center gap-1 group"
              >
                <span>Read Note</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Expandable Notebook Banner */}
      <div className="mt-8 p-4 rounded border border-dashed border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/30 dark:bg-surface-elevatedDark/30 flex items-center justify-between text-xs font-mono text-ink-secondary dark:text-ink-secondaryDark">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-accent" />
          <span>Actively documenting systems benchmarks & networking experiments as new projects progress.</span>
        </div>
        <Link to="/engineering" className="text-accent hover:underline hidden sm:inline">
          View Index →
        </Link>
      </div>
    </section>
  );
}
