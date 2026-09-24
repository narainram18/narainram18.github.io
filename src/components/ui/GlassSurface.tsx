import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: 1 | 2 | 3;
  hoverLift?: boolean;
  children: React.ReactNode;
}

export function GlassSurface({
  level = 1,
  hoverLift = false,
  className,
  children,
  ...props
}: GlassSurfaceProps) {
  const levelClasses = {
    1: 'glass-surface',
    2: 'glass-panel',
    3: 'glass-modal',
  };

  return (
    <div
      className={cn(
        'rounded-lg transition-all duration-200',
        levelClasses[level],
        hoverLift &&
          'hover:-translate-y-0.5 hover:shadow-md hover:border-ink-secondary/30 dark:hover:border-ink-secondaryDark/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
