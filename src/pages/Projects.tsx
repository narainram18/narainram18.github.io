import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { PROJECTS } from '@/data/projects';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function Projects() {
  usePageMetadata(
    'Projects — Narain Ram R M',
    'Catalog of software systems, distributed architectures, OS utilities, and robotics platforms built by Narain Ram R M.'
  );

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => p.slug !== featuredProject.slug);

  return (
    <div>
      <PageHeader
        label="PROJECTS & ARCHITECTURE"
        title="Software & Systems"
        description="A catalog of distributed backends, operating systems utilities, and autonomous robotics platforms built with production rigor."
      />

      <Container size="lg" className="py-12 md:py-16 space-y-12">
        {/* Featured Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-ink-muted dark:text-ink-mutedDark pb-2 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
            <span className="font-semibold text-accent dark:text-accent-dark">
              // FLAGSHIP_SYSTEM
            </span>
            <span>DATA-DRIVEN SPOTLIGHT</span>
          </div>

          <ProjectCard project={featuredProject} index={0} />
        </div>

        {/* Other Projects Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between font-mono text-xs text-ink-muted dark:text-ink-mutedDark pb-2 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
            <span className="font-semibold text-ink-primary dark:text-ink-primaryDark">
              // SYSTEMS, NETWORKING & ROBOTICS
            </span>
            <span>{otherProjects.length} ADDITIONAL SYSTEMS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx + 1} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
