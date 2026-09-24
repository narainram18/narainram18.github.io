import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  FileQuestion,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Link2,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CodeSnippet } from '@/components/engineering/CodeSnippet';
import { ENGINEERING_ENTRIES } from '@/data/engineering';
import { PROJECTS } from '@/data/projects';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function EngineeringDetail() {
  const { slug } = useParams<{ slug: string }>();

  const entryIndex = ENGINEERING_ENTRIES.findIndex((e) => e.slug === slug);
  const entry = ENGINEERING_ENTRIES[entryIndex];

  usePageMetadata(
    entry ? `${entry.title} — Narain Ram R M` : 'Engineering Investigation — Narain Ram R M',
    entry ? entry.summary : 'Engineering notebook and systems investigation by Narain Ram R M.'
  );

  const prevEntry = entryIndex > 0 ? ENGINEERING_ENTRIES[entryIndex - 1] : null;
  const nextEntry =
    entryIndex < ENGINEERING_ENTRIES.length - 1
      ? ENGINEERING_ENTRIES[entryIndex + 1]
      : null;

  const relatedProject = entry?.relatedProjectSlug
    ? PROJECTS.find((p) => p.slug === entry.relatedProjectSlug)
    : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!entry) {
    return (
      <Container size="sm" className="py-24 text-center space-y-4">
        <div className="font-mono text-sm text-accent dark:text-accent-dark">
          404 · Entry Not Found
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Engineering Entry Not Found</h1>
        <p className="text-ink-secondary dark:text-ink-secondaryDark">
          No investigation matches the requested slug: <code className="font-mono">{slug}</code>.
        </p>
        <div className="pt-4">
          <Link to="/engineering">
            <Button variant="secondary" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Engineering Notebook</span>
            </Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div className="py-8 md:py-12">
      <Container size="md">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/engineering"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-secondary dark:text-ink-secondaryDark hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Engineering Notebook</span>
          </Link>
        </div>

        {/* Entry Header */}
        <header className="pb-8 border-b border-borderLine-light dark:border-borderLine-dark space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="font-semibold text-accent dark:text-accent-dark">
              Engineering · {entry.category}
            </span>
            <span className="text-ink-muted/50 dark:text-ink-mutedDark/50">·</span>
            <span className="text-ink-muted dark:text-ink-mutedDark">{entry.date}</span>
            <span className="text-ink-muted/50 dark:text-ink-mutedDark/50">·</span>
            <span className="text-ink-secondary dark:text-ink-secondaryDark">{entry.readTime}</span>
          </div>

          <h1 className="hero-heading font-bold text-ink-primary dark:text-ink-primaryDark tracking-tight">
            {entry.title}
          </h1>

          <p className="text-lg text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
            {entry.summary}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {entry.topics.map((t) => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>

            <div className="font-mono text-xs">
              {entry.status === 'Completed' ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>VERIFIED INVESTIGATION</span>
                </span>
              ) : (
                <span className="text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>LAB PLAN / IN DESIGN</span>
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Sections */}
        <main className="py-10 space-y-12">
          {/* CONTEXT */}
          {entry.context && (
            <section className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>01 · Context</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                Why Investigate This?
              </h2>
              <p className="text-base text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                {entry.context}
              </p>
            </section>
          )}

          {/* QUESTION */}
          {entry.question && (
            <section className="space-y-3 p-5 rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/30 dark:bg-surface-elevatedDark/30">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <FileQuestion className="w-4 h-4" />
                <span>02 · Core Engineering Question</span>
              </div>
              <p className="text-base font-medium text-ink-primary dark:text-ink-primaryDark leading-relaxed">
                "{entry.question}"
              </p>
            </section>
          )}

          {/* APPROACH */}
          {entry.approach && (
            <section className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>03 · Approach & Implementation</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                Methodology & Setup
              </h2>
              <p className="text-base text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                {entry.approach}
              </p>

              {/* Optional Code Snippet */}
              {entry.codeSnippet && (
                <CodeSnippet
                  language={entry.codeSnippet.language}
                  code={entry.codeSnippet.code}
                  caption={entry.codeSnippet.caption}
                />
              )}
            </section>
          )}

          {/* OBSERVATIONS */}
          {entry.observations && entry.observations.length > 0 && (
            <section className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>04 · System Observations</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                Behavior Observed Under Test
              </h2>
              <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-5 space-y-3 font-mono text-xs">
                {entry.observations.map((obs, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-accent dark:text-accent-dark font-bold shrink-0">
                      0{idx + 1}.
                    </span>
                    <span className="font-sans text-xs sm:text-sm text-ink-primary dark:text-ink-primaryDark leading-relaxed">
                      {obs}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* RESULTS */}
          {entry.results && entry.results.length > 0 && (
            <section className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>05 · Results & Measurements</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                Empirical Takeaways
              </h2>
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-5 space-y-2.5">
                {entry.results.map((r, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-primary dark:text-ink-primaryDark">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{r}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* WHAT I LEARNED */}
          {entry.keyInsights.length > 0 && (
            <section className="space-y-3 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>06 · What I Learned</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                Core Engineering Conclusions
              </h2>
              <div className="space-y-3">
                {entry.keyInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-md border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark flex items-start gap-3 font-mono text-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                    <span className="font-sans text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                      {insight}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* RELATED PROJECT CARD */}
          {relatedProject && (
            <section className="pt-6 border-t border-borderLine-light dark:border-borderLine-dark">
              <div className="rounded-lg border border-accent/20 dark:border-accent-dark/30 bg-accent/5 dark:bg-accent-dark/5 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs text-accent dark:text-accent-dark font-semibold">
                    <Link2 className="w-4 h-4" />
                    <span>Related System · Case Study</span>
                  </div>
                  <h3 className="text-base font-bold text-ink-primary dark:text-ink-primaryDark">
                    {relatedProject.title}
                  </h3>
                  <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark max-w-xl">
                    {relatedProject.subtitle}
                  </p>
                </div>

                <Link to={`/projects/${relatedProject.slug}`}>
                  <Button variant="primary" size="sm" className="gap-1.5 shrink-0">
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </section>
          )}

          {/* Bottom Pagination */}
          <div className="pt-8 border-t border-borderLine-light dark:border-borderLine-dark flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            {prevEntry ? (
              <Link
                to={`/engineering/${prevEntry.slug}`}
                className="flex items-center gap-2 text-ink-secondary dark:text-ink-secondaryDark hover:text-accent dark:hover:text-accent-dark transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <div>
                  <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark">
                    PREVIOUS INVESTIGATION
                  </div>
                  <div className="font-semibold text-ink-primary dark:text-ink-primaryDark">
                    {prevEntry.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextEntry ? (
              <Link
                to={`/engineering/${nextEntry.slug}`}
                className="flex items-center gap-2 text-right text-ink-secondary dark:text-ink-secondaryDark hover:text-accent dark:hover:text-accent-dark transition-colors group ml-auto"
              >
                <div>
                  <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark">
                    NEXT INVESTIGATION
                  </div>
                  <div className="font-semibold text-ink-primary dark:text-ink-primaryDark">
                    {nextEntry.title}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>
      </Container>
    </div>
  );
}
