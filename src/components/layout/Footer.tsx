import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Container } from './Container';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-borderLine-light dark:border-borderLine-dark bg-canvas-light dark:bg-canvas-dark py-12 transition-colors duration-200 mt-auto">
      <Container size="lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-ink-primary dark:text-ink-primaryDark">
                {SITE_CONFIG.name}
              </span>
              <span className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark">
                · {SITE_CONFIG.degree.split('(')[0]}
              </span>
            </div>
            <p className="font-mono text-xs text-ink-secondary dark:text-ink-secondaryDark mt-1">
              VIT Chennai · Class of 2027
            </p>
          </div>

          {/* Social & Contact Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-1.5 text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 text-xs text-ink-muted dark:text-ink-mutedDark font-mono">
          <p>
            Static-first architecture. React + TypeScript + Tailwind. Zero tracking.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="inline-flex items-center gap-1 hover:text-ink-primary dark:hover:text-ink-primaryDark transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
