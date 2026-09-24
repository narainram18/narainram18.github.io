import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  FolderGit2,
  FileCode2,
  Terminal,
  ExternalLink,
  Sun,
  Moon,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { PROJECTS } from '@/data/projects';
import { ENGINEERING_ENTRIES } from '@/data/engineering';
import { useTheme } from '@/hooks/useTheme';
import { useCommandPalette } from '@/context/CommandPaletteContext';

export function GlobalCommandPalette() {
  const { isOpen, close } = useCommandPalette();
  return <CommandPalette isOpen={isOpen} onClose={close} />;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Projects' | 'Engineering' | 'External' | 'Preferences';
  title: string;
  detail?: string;
  action: () => void;
  icon: React.ReactNode;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const commands: CommandItem[] = [
    // Navigation
    {
      id: 'nav-home',
      category: 'Navigation',
      title: 'Home · Overview',
      detail: 'Overview, system topology & featured work',
      icon: <Terminal className="w-4 h-4 text-accent dark:text-accent-dark" />,
      action: () => {
        navigate('/');
        onClose();
      },
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Projects · Systems Catalog',
      detail: 'Curated software systems & architectures',
      icon: <FolderGit2 className="w-4 h-4 text-accent dark:text-accent-dark" />,
      action: () => {
        navigate('/projects');
        onClose();
      },
    },
    {
      id: 'nav-engineering',
      category: 'Navigation',
      title: 'Engineering · Notebook & Lab',
      detail: 'Systems, concurrency & networking investigations',
      icon: <FileCode2 className="w-4 h-4 text-accent dark:text-accent-dark" />,
      action: () => {
        navigate('/engineering');
        onClose();
      },
    },
    {
      id: 'nav-about',
      category: 'Navigation',
      title: 'About · Profile & Direction',
      detail: 'Background, disciplines & engineering trajectory',
      icon: <Sparkles className="w-4 h-4 text-accent dark:text-accent-dark" />,
      action: () => {
        navigate('/about');
        onClose();
      },
    },

    // Projects Quick Jump
    ...PROJECTS.map((project) => ({
      id: `proj-${project.slug}`,
      category: 'Projects' as const,
      title: project.title,
      detail: `${project.category} · ${project.technologies.slice(0, 3).join(', ')}`,
      icon: <FolderGit2 className="w-4 h-4 text-emerald-500" />,
      action: () => {
        navigate(`/projects/${project.slug}`);
        onClose();
      },
    })),

    // Engineering Notes Quick Jump
    ...ENGINEERING_ENTRIES.map((entry) => ({
      id: `eng-${entry.slug}`,
      category: 'Engineering' as const,
      title: entry.title,
      detail: `${entry.category} · ${entry.status}`,
      icon: <FileCode2 className="w-4 h-4 text-sky-500" />,
      action: () => {
        navigate(`/engineering/${entry.slug}`);
        onClose();
      },
    })),

    // Theme Toggle
    {
      id: 'pref-theme',
      category: 'Preferences',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      detail: 'Toggle system color scheme',
      icon:
        theme === 'dark' ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700" />
        ),
      action: () => {
        toggleTheme();
        onClose();
      },
    },

    // External Links
    {
      id: 'ext-resume',
      category: 'External',
      title: 'View Resume (PDF)',
      detail: 'Open centralized resume asset',
      icon: <ExternalLink className="w-4 h-4 text-accent" />,
      action: () => {
        window.open(SITE_CONFIG.resumeUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'ext-github',
      category: 'External',
      title: 'GitHub Profile',
      detail: 'github.com/narainram18',
      icon: <ExternalLink className="w-4 h-4 text-accent" />,
      action: () => {
        window.open(SITE_CONFIG.githubUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'ext-linkedin',
      category: 'External',
      title: 'LinkedIn Profile',
      detail: 'linkedin.com/in/narain-ram-207060290',
      icon: <ExternalLink className="w-4 h-4 text-accent" />,
      action: () => {
        window.open(SITE_CONFIG.linkedinUrl, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      (cmd.detail && cmd.detail.toLowerCase().includes(q)) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  // Focus input upon open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global keydown listener for palette navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="relative w-full max-w-xl rounded-xl glass-modal border border-borderLine-light dark:border-borderLine-dark overflow-hidden shadow-2xl animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <Search className="w-4 h-4 text-ink-muted dark:text-ink-mutedDark shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search systems..."
            className="w-full bg-transparent text-sm text-ink-primary dark:text-ink-primaryDark placeholder:text-ink-muted dark:placeholder:text-ink-mutedDark focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-ink-muted dark:text-ink-mutedDark rounded border border-borderLine-light dark:border-borderLine-dark bg-surface-elevatedLight/50 dark:bg-surface-elevatedDark/50">
            ESC
          </kbd>
          <button
            onClick={onClose}
            aria-label="Close Command Palette"
            className="p-1 rounded text-ink-muted hover:text-ink-primary dark:hover:text-ink-primaryDark transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2 space-y-1 font-sans text-xs">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-ink-muted dark:text-ink-mutedDark font-mono text-xs">
              No matching commands or systems found for "{query}".
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-accent/10 dark:bg-accent-dark/15 text-ink-primary dark:text-ink-primaryDark'
                      : 'text-ink-secondary dark:text-ink-secondaryDark hover:bg-surface-elevatedLight/50 dark:hover:bg-surface-elevatedDark/50'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className="shrink-0">{cmd.icon}</span>
                    <div className="truncate">
                      <div
                        className={`text-xs font-medium truncate ${
                          isSelected
                            ? 'text-accent dark:text-accent-dark font-semibold'
                            : 'text-ink-primary dark:text-ink-primaryDark'
                        }`}
                      >
                        {cmd.title}
                      </div>
                      {cmd.detail && (
                        <div className="text-[10px] text-ink-muted dark:text-ink-mutedDark truncate font-mono">
                          {cmd.detail}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-borderLine-light dark:border-borderLine-dark text-ink-muted dark:text-ink-mutedDark">
                      {cmd.category}
                    </span>
                    {isSelected && (
                      <ArrowRight className="w-3.5 h-3.5 text-accent dark:text-accent-dark" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Legend */}
        <div className="px-4 py-2 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark bg-surface-elevatedLight/40 dark:bg-surface-elevatedDark/40 flex items-center justify-between font-mono text-[10px] text-ink-muted dark:text-ink-mutedDark">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>Command Palette</span>
        </div>
      </div>
    </div>
  );
}
