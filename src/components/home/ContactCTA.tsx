import { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Check, Copy } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-24">
      <SectionHeading
        number="06"
        tagline="COLLABORATION & INQUIRIES"
        title="Let's Build Something"
        description="Open to software engineering opportunities, systems research, and technical discussions."
      />

      <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-8 md:p-12 shadow-sm">
        <div className="max-w-2xl space-y-6">
          <p className="text-base sm:text-lg text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
            If you'd like to discuss software engineering, distributed architectures, robotics, or an interesting systems problem, feel free to reach out directly.
          </p>

          {/* Email Interaction Block */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href={`mailto:${SITE_CONFIG.email}`}>
              <Button variant="primary" size="md" className="gap-2">
                <Mail className="w-4 h-4" />
                <span>{SITE_CONFIG.email}</span>
              </Button>
            </a>

            <Button
              variant="outline"
              size="md"
              onClick={copyEmail}
              className="gap-2 font-mono text-xs"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </Button>
          </div>

          {/* Direct Social & Asset Links */}
          <div className="pt-6 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex flex-wrap items-center gap-4 font-mono text-xs">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark transition-colors"
            >
              <Github className="w-4 h-4 text-ink-primary dark:text-ink-primaryDark" />
              <span>github.com/narainram18</span>
            </a>

            <span className="text-borderLine-light dark:text-borderLine-dark">|</span>

            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn Profile</span>
            </a>

            <span className="text-borderLine-light dark:text-borderLine-dark">|</span>

            <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark transition-colors"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
