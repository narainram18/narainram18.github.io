import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, Github, Search } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { ThemeToggle } from './ThemeToggle';
import { Container } from './Container';
import { useCommandPalette } from '@/context/CommandPaletteContext';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { open: openCommandPalette } = useCommandPalette();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-panel border-b border-borderLine-light/80 dark:border-borderLine-dark/80 shadow-sm'
          : 'bg-canvas-light/60 dark:bg-canvas-dark/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Identifier */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm"
          >
            <div className="w-8 h-8 rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/70 dark:bg-surface-elevatedDark/70 flex items-center justify-center font-mono font-semibold text-xs text-ink-primary dark:text-ink-primaryDark group-hover:border-accent group-hover:text-accent dark:group-hover:text-accent-dark transition-all duration-200 group-hover:scale-105">
              NR
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-ink-primary dark:text-ink-primaryDark tracking-tight group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
                {SITE_CONFIG.shortName}
              </span>
              <span className="font-mono text-[10px] text-ink-secondary dark:text-ink-secondaryDark tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-sans" aria-label="Main navigation">
            {SITE_CONFIG.navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 ${
                    active
                      ? 'text-ink-primary dark:text-ink-primaryDark bg-surface-elevatedLight dark:bg-surface-elevatedDark font-semibold shadow-xs'
                      : 'text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark hover:bg-surface-elevatedLight/50 dark:hover:bg-surface-elevatedDark/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Command Palette Trigger */}
          <div className="hidden md:flex items-center gap-2">
            {/* Quick Command Palette Button */}
            <button
              onClick={openCommandPalette}
              aria-label="Open Command Palette (Cmd+K)"
              className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/40 dark:bg-surface-elevatedDark/40 hover:bg-surface-elevatedLight dark:hover:bg-surface-elevatedDark text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark font-mono text-xs transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-ink-muted dark:text-ink-mutedDark" />
              <span className="font-sans text-[11px]">Search</span>
              <kbd className="px-1.5 py-0.5 text-[9px] font-mono rounded border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark text-ink-muted dark:text-ink-mutedDark">
                ⌘K
              </kbd>
            </button>

            {/* Resume Button */}
            <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark text-ink-primary dark:text-ink-primaryDark hover:border-accent hover:text-accent dark:hover:text-accent-dark hover:-translate-y-0.5 transition-all duration-150 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </a>

            {/* GitHub Profile */}
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-md border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark hover:border-ink-secondary/30 hover:-translate-y-0.5 transition-all duration-150"
            >
              <Github className="w-4 h-4" />
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={openCommandPalette}
              aria-label="Open Search"
              className="p-2 rounded-md border border-borderLine-light dark:border-borderLine-dark text-ink-secondary dark:text-ink-secondaryDark"
            >
              <Search className="w-4 h-4" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-md border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark text-ink-primary dark:text-ink-primaryDark"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Spatial Drawer / Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-borderLine-light dark:border-borderLine-dark glass-modal py-4 px-6 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'bg-surface-elevatedLight dark:bg-surface-elevatedDark text-ink-primary dark:text-ink-primaryDark font-semibold'
                    : 'text-ink-secondary dark:text-ink-secondaryDark hover:text-ink-primary dark:hover:text-ink-primaryDark'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-borderLine-light dark:border-borderLine-dark flex flex-col gap-2">
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium rounded-md border border-borderLine-light dark:border-borderLine-dark text-ink-primary dark:text-ink-primaryDark"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>View Resume</span>
              </a>
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono font-medium rounded-md border border-borderLine-light dark:border-borderLine-dark text-ink-primary dark:text-ink-primaryDark"
              >
                <Github className="w-4 h-4 text-accent" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
