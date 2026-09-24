import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ShieldCheck, Database, Layers, Cpu } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { PROJECTS } from '@/data/projects';

export function FeaturedProjects() {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const flagship = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-borderLine-light dark:border-borderLine-dark scroll-mt-20">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            number="02"
            tagline="FLAGSHIP ARCHITECTURE"
            title="Featured Systems"
            description="Production-grade architectures designed with focus on security boundaries, throughput, and system mechanics."
            className="mb-0"
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-accent dark:text-accent-dark hover:underline font-medium"
          >
            <span>View all {PROJECTS.length} projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Reveal>

      {/* Flagship Project Spotlight Card (Spatial Depth Level 2) */}
      <Reveal delay={100}>
        <div className="rounded-xl glass-panel overflow-hidden mb-12 shadow-md hover:shadow-lg transition-all duration-300">
          {/* Card Header Bar (Level 1 Glass) */}
          <div className="px-6 py-3.5 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark bg-surface-elevatedLight/40 dark:bg-surface-elevatedDark/40 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <span className="font-semibold text-accent dark:text-accent-dark">
                01 // FLAGSHIP SYSTEM
              </span>
              <span className="text-borderLine-light dark:text-borderLine-dark">|</span>
              <span className="text-ink-secondary dark:text-ink-secondaryDark">{flagship.category.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-ink-muted dark:text-ink-mutedDark">STATUS: {flagship.status.toUpperCase()}</span>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10 space-y-8">
            {/* Title & High-Level Problem */}
            <div className="space-y-3 max-w-3xl">
              <h3 className="project-title font-bold text-ink-primary dark:text-ink-primaryDark tracking-tight">
                {flagship.title}
              </h3>
              <p className="text-accent dark:text-accent-dark font-mono text-sm font-medium">
                {flagship.subtitle}
              </p>
              <p className="text-base text-ink-secondary dark:text-ink-secondaryDark leading-relaxed pt-1">
                {flagship.summary}
              </p>
            </div>

            {/* Architecture Blueprint Diagram with Spatial Interaction */}
            <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-canvas-light/60 dark:bg-canvas-dark/60 p-5 space-y-4">
              <div className="flex items-center justify-between font-mono text-xs text-ink-muted dark:text-ink-mutedDark pb-2 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                <span className="font-semibold text-ink-primary dark:text-ink-primaryDark">
                  ARCHITECTURE_FLOW // 4-TIER SUBSYSTEM
                </span>
                <span className="hidden sm:inline">INTERACTIVE SUBSYSTEM INSPECTOR</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
                <div
                  onMouseEnter={() => setActiveLayerIndex(0)}
                  className={`p-3.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                    activeLayerIndex === 0
                      ? 'border-accent dark:border-accent-dark bg-accent/10 dark:bg-accent-dark/15 shadow-sm -translate-y-0.5'
                      : 'border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark hover:border-ink-secondary/30'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-accent dark:text-accent-dark font-semibold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>01. CLIENT</span>
                  </div>
                  <div className="text-[11px] text-ink-secondary dark:text-ink-secondaryDark mt-1">
                    React 18 SPA with SSE streaming, abort signals & persistent conversation cache.
                  </div>
                </div>

                <div
                  onMouseEnter={() => setActiveLayerIndex(1)}
                  className={`p-3.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                    activeLayerIndex === 1
                      ? 'border-accent dark:border-accent-dark bg-accent/10 dark:bg-accent-dark/15 shadow-sm -translate-y-0.5'
                      : 'border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark hover:border-ink-secondary/30'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-accent dark:text-accent-dark font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>02. GATEWAY</span>
                  </div>
                  <div className="text-[11px] text-ink-secondary dark:text-ink-secondaryDark mt-1">
                    Spring Boot 3 API with JWT filter chain and hierarchical role-based authorization.
                  </div>
                </div>

                <div
                  onMouseEnter={() => setActiveLayerIndex(2)}
                  className={`p-3.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                    activeLayerIndex === 2
                      ? 'border-accent dark:border-accent-dark bg-accent/10 dark:bg-accent-dark/15 shadow-sm -translate-y-0.5'
                      : 'border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark hover:border-ink-secondary/30'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-accent dark:text-accent-dark font-semibold">
                    <Database className="w-3.5 h-3.5" />
                    <span>03. STORAGE</span>
                  </div>
                  <div className="text-[11px] text-ink-secondary dark:text-ink-secondaryDark mt-1">
                    PostgreSQL FTS + Qdrant vector database with ConditionFactory zero-trust filters.
                  </div>
                </div>

                <div
                  onMouseEnter={() => setActiveLayerIndex(3)}
                  className={`p-3.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                    activeLayerIndex === 3
                      ? 'border-accent dark:border-accent-dark bg-accent/10 dark:bg-accent-dark/15 shadow-sm -translate-y-0.5'
                      : 'border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark hover:border-ink-secondary/30'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-accent dark:text-accent-dark font-semibold">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>04. ENGINE</span>
                  </div>
                  <div className="text-[11px] text-ink-secondary dark:text-ink-secondaryDark mt-1">
                    Local Ollama execution (Llama 3 + mxbai-embed) ensuring complete privacy sovereignty.
                  </div>
                </div>
              </div>
            </div>

            {/* Key Engineering Decisions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {flagship.technicalDecisions.slice(0, 3).map((decision) => (
                <div
                  key={decision.topic}
                  className="space-y-2 border-l-2 border-borderLine-light dark:border-borderLine-dark pl-4"
                >
                  <div className="font-mono text-xs font-semibold text-ink-primary dark:text-ink-primaryDark">
                    {decision.topic}
                  </div>
                  <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                    {decision.rationale}
                  </p>
                  <div className="font-mono text-[11px] text-accent dark:text-accent-dark">
                    Decision: {decision.chosenOption}
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies Badges */}
            <div className="pt-2">
              <div className="text-xs font-mono text-ink-muted dark:text-ink-mutedDark mb-2.5 uppercase tracking-wider">
                System Technologies:
              </div>
              <div className="flex flex-wrap gap-2">
                {flagship.technologies.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
              <Link to={`/projects/${flagship.slug}`}>
                <Button variant="primary" size="md" className="gap-2 group">
                  <span>Explore Full Technical Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>

              {flagship.githubUrl && (
                <a
                  href={flagship.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="md" className="gap-1.5 font-mono text-xs">
                    <span>Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 text-ink-muted dark:text-ink-mutedDark" />
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Secondary Projects Grid with Spatial Level 1 Depth */}
      <div className="space-y-4">
        <div className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark uppercase tracking-wider">
          // ADDITIONAL_ENGINEERING_PROJECTS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 80}>
              <div
                className="h-full rounded-xl glass-surface p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-ink-secondary/30 dark:hover:border-ink-secondaryDark/30 transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-accent dark:text-accent-dark font-medium">
                      0{idx + 2} // {project.category.toUpperCase()}
                    </span>
                    <span className="text-ink-muted dark:text-ink-mutedDark">{project.year}</span>
                  </div>

                  <h4 className="font-bold text-base text-ink-primary dark:text-ink-primaryDark tracking-tight">
                    {project.title}
                  </h4>

                  <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((t) => (
                      <Badge key={t} variant="outline" className="text-[10px] px-2 py-0.5">
                        {t}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-mono text-[10px] text-ink-muted dark:text-ink-mutedDark self-center">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="pt-2 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="font-mono text-xs text-ink-primary dark:text-ink-primaryDark hover:text-accent dark:hover:text-accent-dark font-medium inline-flex items-center gap-1 group"
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark hover:text-ink-primary dark:hover:text-ink-primaryDark inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
