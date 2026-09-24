import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { EngineeringCard } from '@/components/engineering/EngineeringCard';
import { ENGINEERING_ENTRIES } from '@/data/engineering';
import { EngineeringCategory } from '@/types/engineering';
import { Terminal, Filter } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function Engineering() {
  usePageMetadata(
    'Engineering Notebook — Narain Ram R M',
    'Technical investigations, performance benchmarks, concurrency analysis, and systems experiments by Narain Ram R M.'
  );

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories: ('ALL' | EngineeringCategory)[] = [
    'ALL',
    'Systems',
    'Networking',
    'Robotics',
    'Algorithms',
    'Distributed Systems',
  ];

  const filteredEntries =
    selectedCategory === 'ALL'
      ? ENGINEERING_ENTRIES
      : ENGINEERING_ENTRIES.filter((e) => e.category === selectedCategory);

  const featuredEntry =
    selectedCategory === 'ALL'
      ? ENGINEERING_ENTRIES.find((e) => e.featured) || ENGINEERING_ENTRIES[0]
      : null;

  const standardEntries = featuredEntry
    ? filteredEntries.filter((e) => e.slug !== featuredEntry.slug)
    : filteredEntries;

  return (
    <div>
      <PageHeader
        label="ENGINEERING NOTEBOOK"
        title="Systems, Networking & Experiments"
        description="Notes from building systems, experimenting with software, and studying the mechanisms beneath the abstractions."
      />

      <Container size="lg" className="py-12 md:py-16 space-y-10">
        {/* Category Filter Tabs */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-xl glass-surface border border-borderLine-light dark:border-borderLine-dark">
            <div className="flex items-center gap-2 font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
              <Filter className="w-3.5 h-3.5 text-accent dark:text-accent-dark" />
              <span>DISCIPLINE_FILTER:</span>
            </div>

            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg transition-all duration-150 ${
                      isSelected
                        ? 'bg-ink-primary text-canvas-light dark:bg-ink-primaryDark dark:text-canvas-dark font-medium shadow-xs'
                        : 'bg-surface-elevatedLight/50 dark:bg-surface-elevatedDark/50 text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark hover:bg-surface-elevatedLight dark:hover:bg-surface-elevatedDark'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Featured Investigation (shown when viewing ALL or matching category) */}
        {featuredEntry && (
          <Reveal delay={100}>
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-ink-muted dark:text-ink-mutedDark pb-1">
                <span className="font-semibold text-accent dark:text-accent-dark">
                  // FEATURED_SYSTEM_INVESTIGATION
                </span>
                <span>CONCURRENCY & OS PRIMITIVES</span>
              </div>

              <EngineeringCard entry={featuredEntry} index={0} />
            </div>
          </Reveal>
        )}

        {/* Technical Investigations Grid */}
        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between font-mono text-xs text-ink-muted dark:text-ink-mutedDark pb-2 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
            <span className="font-semibold text-ink-primary dark:text-ink-primaryDark">
              // TECHNICAL_ENTRIES & BENCHMARK_LOGS
            </span>
            <span>
              {standardEntries.length} {standardEntries.length === 1 ? 'ENTRY' : 'ENTRIES'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standardEntries.map((entry, idx) => (
              <Reveal key={entry.slug} delay={idx * 60}>
                <EngineeringCard
                  entry={entry}
                  index={featuredEntry ? idx + 1 : idx}
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Expandable Technical Laboratory Notice */}
        <Reveal>
          <div className="rounded-xl glass-panel p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-ink-secondary dark:text-ink-secondaryDark">
            <div className="flex items-start gap-3">
              <Terminal className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold text-ink-primary dark:text-ink-primaryDark">
                  LAB_POLICY // DISCIPLINE OVER CONTENT VOLUME
                </span>
                <p className="text-[11px] font-sans leading-relaxed">
                  This engineering laboratory strictly documents technical investigations grounded in actual codebases, systems, and coursework. Entries marked with <strong className="font-mono text-amber-600 dark:text-amber-400">LAB PLAN</strong> represent upcoming benchmarks currently being designed.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
