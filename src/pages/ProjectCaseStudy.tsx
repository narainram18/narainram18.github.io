import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  HelpCircle,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Image as ImageIcon,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectArchitecture } from '@/components/projects/ProjectArchitecture';
import { TechnicalDecision } from '@/components/projects/TechnicalDecision';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState<string>('overview');

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  usePageMetadata(
    project ? `${project.title} — Narain Ram R M` : 'Project Case Study — Narain Ram R M',
    project ? project.summary : 'Detailed system architecture case study by Narain Ram R M.'
  );

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    if (!project) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [project, slug]);

  // Scroll to top upon slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <Container size="sm" className="py-24 text-center space-y-4">
        <div className="font-mono text-sm text-accent dark:text-accent-dark">
          404 · Project Not Found
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Project Not Found</h1>
        <p className="text-ink-secondary dark:text-ink-secondaryDark">
          No project matches the requested slug: <code className="font-mono">{slug}</code>.
        </p>
        <div className="pt-4">
          <Link to="/projects">
            <Button variant="secondary" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects Catalog</span>
            </Button>
          </Link>
        </div>
      </Container>
    );
  }

  // Define section navigation links dynamically based on available data
  const navItems = [
    { id: 'overview', label: 'Overview', show: Boolean(project.overview) },
    { id: 'problem', label: 'Problem', show: Boolean(project.problem) },
    { id: 'architecture', label: 'Architecture', show: Boolean(project.architecture) },
    { id: 'implementation', label: 'Implementation', show: project.implementation.length > 0 },
    { id: 'decisions', label: 'Decisions', show: project.technicalDecisions.length > 0 },
    { id: 'challenges', label: 'Challenges', show: project.challenges.length > 0 },
    { id: 'results', label: 'Results', show: project.results.length > 0 },
    { id: 'gallery', label: 'Screenshots', show: true },
    { id: 'lessons', label: 'Lessons', show: project.lessonsLearned.length > 0 },
  ].filter((item) => item.show);

  return (
    <div className="py-8 md:py-12">
      <Container size="lg">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-secondary dark:text-ink-secondaryDark hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Projects Catalog</span>
          </Link>
        </div>

        {/* Project Header (Technical, No Bloated Giant Hero) */}
        <header className="pb-8 border-b border-borderLine-light dark:border-borderLine-dark space-y-6">
          <div className="space-y-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
              <span className="font-semibold text-accent dark:text-accent-dark">
                Case Study · 0{projectIndex + 1}
              </span>
              <span className="text-ink-muted/50 dark:text-ink-mutedDark/50">·</span>
              <span className="text-ink-secondary dark:text-ink-secondaryDark">
                {project.category}
              </span>
              <span className="text-ink-muted/50 dark:text-ink-mutedDark/50">·</span>
              <span className="text-ink-muted dark:text-ink-mutedDark">{project.year}</span>
            </div>

            <h1 className="hero-heading font-bold text-ink-primary dark:text-ink-primaryDark tracking-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Action CTAs & Metadata Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Badge key={t} variant="default">
                  {t}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                    <ExternalLink className="w-3 h-3 text-ink-muted dark:text-ink-mutedDark" />
                  </Button>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="sm" className="gap-1.5 font-mono text-xs">
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Technical Metadata Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl glass-surface border border-borderLine-light dark:border-borderLine-dark font-mono text-xs">
            <div>
              <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                Architecture
              </span>
              <div className="font-semibold text-ink-primary dark:text-ink-primaryDark mt-0.5">
                {project.category}
              </div>
            </div>
            <div>
              <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                Timeline
              </span>
              <div className="font-semibold text-ink-primary dark:text-ink-primaryDark mt-0.5">
                {project.year}
              </div>
            </div>
            <div>
              <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                Build Status
              </span>
              <div className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{project.status}</span>
              </div>
            </div>
            <div>
              <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                Core Stack
              </span>
              <div className="font-semibold text-ink-primary dark:text-ink-primaryDark mt-0.5 truncate">
                {project.technologies.slice(0, 3).join(' · ')}
              </div>
            </div>
          </div>
        </header>

        {/* Two-Column Layout: Sticky Navigation (Left) + Content (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10">
          {/* Sticky Navigation Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 p-3.5 rounded-xl glass-panel space-y-3 font-mono text-xs">
              <div className="font-semibold text-ink-muted dark:text-ink-mutedDark uppercase tracking-wider text-[11px] pb-2 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                Navigation
              </div>

              <nav className="flex flex-col space-y-1" aria-label="Case study section navigation">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`px-3 py-1.5 rounded-lg transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-surface-elevatedLight dark:bg-surface-elevatedDark text-accent dark:text-accent-dark font-semibold border-l-2 border-accent dark:border-accent-dark shadow-xs'
                          : 'text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark hover:bg-surface-elevatedLight/50 dark:hover:bg-surface-elevatedDark/50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" />}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Compact Horizontal Sticky Navigation Bar (Mobile / Tablet) */}
          <div className="block lg:hidden col-span-1 sticky top-16 z-30 -mx-4 px-4 py-2 glass-panel border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark shadow-xs">
            <nav className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 font-mono text-xs">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`shrink-0 px-3 py-1 rounded-full text-[11px] transition-colors ${
                      isActive
                        ? 'bg-ink-primary text-canvas-light dark:bg-ink-primaryDark dark:text-canvas-dark font-medium'
                        : 'bg-surface-elevatedLight dark:bg-surface-elevatedDark text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Main Case Study Sections */}
          <main className="lg:col-span-9 space-y-16">
            {/* 01. OVERVIEW */}
            <section id="overview" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>01 · Overview</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                What Was Built
              </h2>
              <p className="text-base text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* 02. PROBLEM */}
            <section id="problem" className="scroll-mt-24 space-y-4 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>02 · Problem & Motivation</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                The Engineering Challenge
              </h2>
              <p className="text-base text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* 03. SYSTEM ARCHITECTURE */}
            <section id="architecture" className="scroll-mt-24 space-y-6 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>03 · System Architecture</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                Subsystems & Topology
              </h2>

              <ProjectArchitecture
                overview={project.architecture.overview}
                layers={project.architecture.layers}
                dataFlow={project.architecture.dataFlow}
                asciiDiagram={project.architecture.asciiDiagram}
              />
            </section>

            {/* 04. IMPLEMENTATION */}
            {project.implementation.length > 0 && (
              <section id="implementation" className="scroll-mt-24 space-y-6 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>04 · Implementation Deep Dive</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                  Core Engineering Subsystems
                </h2>

                <div className="space-y-6">
                  {project.implementation.map((subsystem, idx) => (
                    <div
                      key={subsystem.title}
                      className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-6 space-y-3 shadow-sm"
                    >
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark">
                        <span>0{idx + 1}.</span>
                        <span>{subsystem.title.toUpperCase()}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                        {subsystem.description}
                      </p>
                      <div className="pt-2 space-y-1.5 font-mono text-xs">
                        {subsystem.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-ink-primary dark:text-ink-primaryDark">
                            <span className="text-emerald-500 shrink-0">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 05. TECHNICAL DECISIONS */}
            {project.technicalDecisions.length > 0 && (
              <section id="decisions" className="scroll-mt-24 space-y-6 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>05 · Technical Decisions & Tradeoffs</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                  Architectural Rationale
                </h2>

                <div className="space-y-6">
                  {project.technicalDecisions.map((decision, idx) => (
                    <TechnicalDecision key={decision.topic} decision={decision} index={idx} />
                  ))}
                </div>
              </section>
            )}

            {/* 06. CHALLENGES */}
            {project.challenges.length > 0 && (
              <section id="challenges" className="scroll-mt-24 space-y-6 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>06 · Production Challenges & Resolutions</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                  Obstacles Overcome
                </h2>

                <div className="space-y-4">
                  {project.challenges.map((c, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-6 space-y-3"
                    >
                      <div className="font-mono text-xs font-semibold text-red-600 dark:text-red-400 flex items-start gap-2">
                        <span className="shrink-0">CHALLENGE 0{idx + 1}:</span>
                        <span className="text-ink-primary dark:text-ink-primaryDark font-sans text-sm font-medium">
                          {c.challenge}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark font-mono text-xs text-emerald-600 dark:text-emerald-400 flex items-start gap-2">
                        <span className="shrink-0">RESOLUTION:</span>
                        <span className="text-ink-secondary dark:text-ink-secondaryDark font-sans text-xs sm:text-sm">
                          {c.resolution}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 07. RESULTS */}
            {project.results.length > 0 && (
              <section id="results" className="scroll-mt-24 space-y-4 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>07 · Deliverables & Capabilities</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                  Factual Deliverables
                </h2>

                <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-6 space-y-3 font-mono text-xs">
                  {project.results.map((r, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-emerald-500 font-bold shrink-0">0{idx + 1}.</span>
                      <span className="font-sans text-xs sm:text-sm text-ink-primary dark:text-ink-primaryDark leading-relaxed">
                        {r}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 08. SCREENSHOTS / GALLERY */}
            <section id="gallery" className="scroll-mt-24 space-y-6 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <ImageIcon className="w-4 h-4" />
                <span>08 · Artifact Gallery</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                Interface & Execution Captures
              </h2>

              <ProjectGallery
                screenshots={project.screenshots}
                projectSlug={project.slug}
              />
            </section>

            {/* 09. LESSONS LEARNED */}
            {project.lessonsLearned.length > 0 && (
              <section id="lessons" className="scroll-mt-24 space-y-4 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>09 · Engineering Lessons</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark">
                  Retrospective & Engineering Insights
                </h2>

                <div className="space-y-3">
                  {project.lessonsLearned.map((lesson, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-md border border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/40 dark:bg-surface-elevatedDark/40 flex items-start gap-3 font-mono text-xs"
                    >
                      <span className="text-accent dark:text-accent-dark font-bold shrink-0">
                        0{idx + 1}.
                      </span>
                      <span className="font-sans text-xs sm:text-sm text-ink-primary dark:text-ink-primaryDark leading-relaxed">
                        {lesson}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Project Pagination Controls */}
            <div className="pt-10 border-t border-borderLine-light dark:border-borderLine-dark flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              {prevProject ? (
                <Link
                  to={`/projects/${prevProject.slug}`}
                  className="flex items-center gap-2 text-ink-secondary dark:text-ink-secondaryDark hover:text-accent dark:hover:text-accent-dark transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                  <div>
                    <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark">
                      PREVIOUS PROJECT
                    </div>
                    <div className="font-semibold text-ink-primary dark:text-ink-primaryDark">
                      {prevProject.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="flex items-center gap-2 text-right text-ink-secondary dark:text-ink-secondaryDark hover:text-accent dark:hover:text-accent-dark transition-colors group ml-auto"
                >
                  <div>
                    <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark">
                      NEXT PROJECT
                    </div>
                    <div className="font-semibold text-ink-primary dark:text-ink-primaryDark">
                      {nextProject.title}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
