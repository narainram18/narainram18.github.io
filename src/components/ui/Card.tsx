import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface-light dark:bg-surface-dark border border-borderLine-light dark:border-borderLine-dark rounded-lg p-6 transition-all duration-200',
        hoverable && 'hover:border-ink-secondary/40 dark:hover:border-ink-secondaryDark/40 hover:shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
