import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary:
        'bg-ink-primary text-canvas-light hover:bg-ink-primary/90 dark:bg-ink-primaryDark dark:text-canvas-dark dark:hover:bg-ink-primaryDark/90 shadow-sm border border-transparent hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
      secondary:
        'bg-surface-elevatedLight text-ink-primary hover:bg-borderLine-light dark:bg-surface-elevatedDark dark:text-ink-primaryDark dark:hover:bg-borderLine-dark border border-borderLine-light dark:border-borderLine-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
      outline:
        'bg-transparent text-ink-primary hover:bg-surface-elevatedLight dark:text-ink-primaryDark dark:hover:bg-surface-elevatedDark border border-borderLine-light dark:border-borderLine-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
      ghost:
        'bg-transparent text-ink-secondary hover:text-ink-primary dark:text-ink-secondaryDark dark:hover:text-ink-primaryDark hover:bg-surface-elevatedLight/60 dark:hover:bg-surface-elevatedDark/60 border border-transparent',
      glass:
        'glass-panel text-ink-primary dark:text-ink-primaryDark hover:border-accent dark:hover:border-accent-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs tracking-wide',
      md: 'px-4 py-2 text-sm tracking-wide',
      lg: 'px-6 py-2.5 text-base tracking-wide',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-md transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none gap-2 select-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
