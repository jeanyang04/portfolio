import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function PageWrapper({ title, description, children, className }: PageWrapperProps) {
  return (
    <div className={cn("flex-1 space-y-6 p-4 sm:p-6 md:p-8", className)}>
      {(title || description) && (
        <div className="space-y-1">
          {title && <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
