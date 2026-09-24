import { Container } from './Container';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ label, title, description, className }: PageHeaderProps) {
  return (
    <div className={cn('border-b border-borderLine-light dark:border-borderLine-dark py-12 md:py-16 bg-surface-light/40 dark:bg-surface-dark/40', className)}>
      <Container size="lg">
        <div className="space-y-3 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-wider text-accent dark:text-accent-dark font-medium">
            {label}
          </div>
          <h1 className="hero-heading font-semibold text-ink-primary dark:text-ink-primaryDark tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-ink-secondary dark:text-ink-secondaryDark leading-relaxed pt-1">
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
