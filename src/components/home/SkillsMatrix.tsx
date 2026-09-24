import { SectionHeading } from '@/components/ui/SectionHeading';
import { SKILL_CATEGORIES } from '@/data/skills';

export function SkillsMatrix() {
  return (
    <section className="py-16 md:py-24 border-b border-borderLine-light dark:border-borderLine-dark">
      <SectionHeading
        number="04"
        tagline="TECHNICAL COMPETENCIES"
        title="Skills & Engineering Tools"
        description="Structured by technical discipline. Only technologies backed by practical implementation and coursework are listed."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-6 space-y-4"
          >
            {/* Category Header */}
            <div className="border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark pb-3">
              <h3 className="font-mono text-xs font-semibold text-accent dark:text-accent-dark tracking-wider uppercase">
                {cat.title}
              </h3>
              <p className="text-[11px] text-ink-muted dark:text-ink-mutedDark mt-1 leading-normal">
                {cat.description}
              </p>
            </div>

            {/* Editorial Skill Rows */}
            <div className="space-y-2.5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-baseline justify-between text-xs py-1 border-b border-dashed border-borderLine-subtleLight dark:border-borderLine-subtleDark last:border-none"
                >
                  <span className="font-medium text-ink-primary dark:text-ink-primaryDark">
                    {skill.name}
                  </span>
                  {skill.focus && (
                    <span className="font-mono text-[10px] text-ink-secondary dark:text-ink-secondaryDark text-right pl-2">
                      {skill.focus}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
