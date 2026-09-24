import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  number?: string;
  tagline?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  number,
  tagline,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 space-y-2', className)}>
      <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-accent dark:text-accent-dark">
        {number && <span className="font-semibold">{number}</span>}
        {number && tagline && <span className="text-borderLine-light dark:text-borderLine-dark">/</span>}
        {tagline && <span className="text-ink-secondary dark:text-ink-secondaryDark">{tagline}</span>}
      </div>
      <h2 className="section-heading font-semibold text-ink-primary dark:text-ink-primaryDark tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base text-ink-secondary dark:text-ink-secondaryDark max-w-2xl leading-relaxed pt-1">
          {description}
        </p>
      )}
    </div>
  );
}
