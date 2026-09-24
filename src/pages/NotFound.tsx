import { Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Home } from 'lucide-react';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function NotFound() {
  usePageMetadata('404 Not Found — Narain Ram R M', 'The requested resource was not found.');

  return (
    <div className="py-24 my-auto">
      <Container size="sm" className="text-center space-y-4">
        <div className="font-mono text-sm text-accent dark:text-accent-dark">
          404 · Page Not Found
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Page Not Found</h1>
        <p className="text-ink-secondary dark:text-ink-secondaryDark max-w-md mx-auto">
          The requested routing target does not exist or has been relocated.
        </p>
        <div className="pt-4">
          <Link to="/">
            <Button variant="secondary" className="gap-2">
              <Home className="w-4 h-4" />
              <span>Return to Index</span>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
