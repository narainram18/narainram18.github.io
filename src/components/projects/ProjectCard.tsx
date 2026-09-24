import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = project.featured;

  if (isFeatured) {
    return (
      <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark overflow-hidden shadow-sm hover:border-ink-secondary/40 dark:hover:border-ink-secondaryDark/40 transition-colors">
        {/* Header Bar */}
        <div className="px-6 py-3.5 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark bg-surface-elevatedLight/50 dark:bg-surface-elevatedDark/50 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-accent dark:text-accent-dark">
              0{index + 1} // FEATURED_SYSTEM
            </span>
            <span className="text-borderLine-light dark:text-borderLine-dark">|</span>
            <span className="text-ink-secondary dark:text-ink-secondaryDark">
              {project.category.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-ink-muted dark:text-ink-mutedDark">
              STATUS: {project.status.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-2 max-w-3xl">
            <h3 className="project-title font-bold text-ink-primary dark:text-ink-primaryDark tracking-tight">
              {project.title}
            </h3>
            <p className="text-accent dark:text-accent-dark font-mono text-sm font-medium">
              {project.subtitle}
            </p>
            <p className="text-sm sm:text-base text-ink-secondary dark:text-ink-secondaryDark leading-relaxed pt-1">
              {project.summary}
            </p>
          </div>

          {/* Quick Architecture Layers Preview */}
          <div className="p-4 rounded-md border border-borderLine-light dark:border-borderLine-dark bg-canvas-light/50 dark:bg-canvas-dark/50 space-y-2">
            <span className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark uppercase tracking-wider">
              Architecture Subsystems:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
              {project.architecture.layers.map((layer) => (
                <div
                  key={layer.layer}
                  className="p-2.5 rounded border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark"
                >
                  <div className="font-semibold text-ink-primary dark:text-ink-primaryDark text-[11px]">
                    {layer.layer}
                  </div>
                  <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark mt-0.5 truncate">
                    {layer.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
            <Link to={`/projects/${project.slug}`}>
              <Button variant="primary" size="md" className="gap-2 group">
                <span>Explore Technical Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>

            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="gap-1.5 font-mono text-xs">
                  <span>Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-ink-muted dark:text-ink-mutedDark" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Secondary Project Card
  return (
    <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-6 flex flex-col justify-between hover:border-ink-secondary/40 dark:hover:border-ink-secondaryDark/40 transition-colors">
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono text-[11px]">
          <span className="text-accent dark:text-accent-dark font-medium">
            0{index + 1} // {project.category.toUpperCase()}
          </span>
          <span className="text-ink-muted dark:text-ink-mutedDark">{project.year}</span>
        </div>

        <h3 className="font-bold text-lg text-ink-primary dark:text-ink-primaryDark tracking-tight">
          {project.title}
        </h3>

        <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
          {project.summary}
        </p>
      </div>

      <div className="pt-6 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0.5">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <span className="font-mono text-[10px] text-ink-muted dark:text-ink-mutedDark self-center">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="pt-3 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="font-mono text-xs text-ink-primary dark:text-ink-primaryDark hover:text-accent dark:hover:text-accent-dark font-medium inline-flex items-center gap-1 group"
          >
            <span>Inspect Case Study</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Repository for ${project.title}`}
              className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark hover:text-ink-primary dark:hover:text-ink-primaryDark inline-flex items-center gap-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
