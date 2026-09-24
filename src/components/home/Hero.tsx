import { ArrowRight, ExternalLink, Download } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { SystemTopology } from './SystemTopology';

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-borderLine-light dark:border-borderLine-dark">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Editorial Positioning & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Status & Category Tag */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark text-ink-primary dark:text-ink-primaryDark">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{SITE_CONFIG.role.toUpperCase()}</span>
            </span>
            <span className="text-xs font-mono text-ink-muted dark:text-ink-mutedDark">
              // CHENNAI, INDIA
            </span>
          </div>

          {/* Main Title & Positioning */}
          <div className="space-y-3">
            <h1 className="hero-heading font-bold text-ink-primary dark:text-ink-primaryDark tracking-tight">
              {SITE_CONFIG.name}
            </h1>
            <p className="font-mono text-sm sm:text-base text-accent dark:text-accent-dark font-medium tracking-wide">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* High-Impact Copy */}
          <p className="text-base sm:text-lg text-ink-secondary dark:text-ink-secondaryDark leading-relaxed max-w-xl">
            {SITE_CONFIG.heroCopy}
          </p>

          {/* Academic & Batch Metadata */}
          <div className="pt-1 pb-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
            <span className="font-medium text-ink-secondary dark:text-ink-secondaryDark">
              {SITE_CONFIG.shortDegree}
            </span>
            <span>·</span>
            <span>{SITE_CONFIG.institution}</span>
            <span>·</span>
            <span className="text-ink-secondary dark:text-ink-secondaryDark">Class of {SITE_CONFIG.graduationYear}</span>
            <span>·</span>
            <span>CGPA {SITE_CONFIG.cgpa}</span>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#projects">
              <Button variant="primary" size="md" className="gap-2 group">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>

            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="md" className="gap-1.5">
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-ink-muted dark:text-ink-mutedDark" />
              </Button>
            </a>

            <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="md" className="gap-1.5 font-mono text-xs">
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Engineering System Topology */}
        <div className="lg:col-span-6 w-full">
          <SystemTopology />
        </div>
      </div>
    </section>
  );
}
