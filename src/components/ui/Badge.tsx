import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'outline' | 'subtle';
  children: React.ReactNode;
}

export function Badge({ variant = 'default', children, className, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-surface-elevatedLight text-ink-primary dark:bg-surface-elevatedDark dark:text-ink-primaryDark border-borderLine-light dark:border-borderLine-dark',
    accent: 'bg-accent/10 text-accent dark:text-accent-dark border-accent/20 dark:border-accent-dark/30',
    outline: 'bg-transparent text-ink-secondary dark:text-ink-secondaryDark border-borderLine-light dark:border-borderLine-dark',
    subtle: 'bg-transparent text-ink-muted dark:text-ink-mutedDark border-transparent',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium border rounded transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
