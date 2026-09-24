import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { EXPERIENCES, EDUCATION } from '@/data/experience';

export function EducationExperience() {
  return (
    <section className="py-16 md:py-24 border-b border-borderLine-light dark:border-borderLine-dark">
      <SectionHeading
        number="05"
        tagline="BACKGROUND & TRAJECTORY"
        title="Experience & Education"
        description="Verified industry internship experience and formal academic background at VIT Chennai."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Professional Experience */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark tracking-wider pb-2 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
            <Briefcase className="w-4 h-4" />
            <span>// PROFESSIONAL EXPERIENCE</span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.company}
                className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-6 space-y-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base text-ink-primary dark:text-ink-primaryDark">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-xs text-accent dark:text-accent-dark font-medium">
                      {exp.company} · <span className="text-ink-secondary dark:text-ink-secondaryDark">{exp.type}</span>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-ink-muted dark:text-ink-mutedDark text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent dark:text-accent-dark shrink-0 mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Education & Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark tracking-wider pb-2 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
            <GraduationCap className="w-4 h-4" />
            <span>// FORMAL EDUCATION</span>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-6 space-y-3"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base text-ink-primary dark:text-ink-primaryDark">
                      {edu.institution}
                    </h3>
                    <div className="text-xs text-ink-secondary dark:text-ink-secondaryDark mt-0.5">
                      {edu.degree}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-right">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {edu.score}
                    </span>
                    <div className="text-ink-muted dark:text-ink-mutedDark text-[11px]">{edu.period}</div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                  {edu.highlights.map((h, idx) => (
                    <p key={idx}>{h}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Hackathon & Certifications Box */}
            <div className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/30 dark:bg-surface-elevatedDark/30 p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-ink-primary dark:text-ink-primaryDark text-[11px] uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-accent" />
                <span>// HACKATHON & RECOGNITION</span>
              </div>
              <div className="space-y-2 text-ink-secondary dark:text-ink-secondaryDark text-[11px]">
                <div>
                  <span className="font-semibold text-ink-primary dark:text-ink-primaryDark">AIQoD Hackathon 2025:</span> Developed automated CV pipeline separating stamps and signatures from scanned document images.
                </div>
                <div>
                  <span className="font-semibold text-ink-primary dark:text-ink-primaryDark">Certifications:</span> Artificial Intelligence (Skill Vertex, 2024), Game Development (Udemy, 2024).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
