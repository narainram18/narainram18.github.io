import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  FolderGit2,
  FileCode2,
  Castle,
  Map as MapIcon,
  Hammer,
  BookOpen,
  LayoutGrid,
  User,
  FileText,
  Radio,
  ArrowRight,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { ENGINEERING_ENTRIES } from '@/data/engineering';
import { useRealmMode } from '@/context/RealmModeContext';
import { useCommandPalette } from '@/context/CommandPaletteContext';

export function GlobalCommandPalette() {
  const { isOpen, close } = useCommandPalette();
  return <CommandPalette isOpen={isOpen} onClose={close} />;
}

interface CommandItem {
  id: string;
  category: 'Citadels' | 'Projects' | 'Codices' | 'Settings';
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
  const { viewMode, toggleViewMode } = useRealmMode();

  const commands: CommandItem[] = [
    // Citadels / Core Navigation
    {
      id: 'citadel-realm',
      category: 'Citadels',
      title: 'Realm // Sanctum',
      detail: 'Cinematic landing & realm overview',
      icon: <Castle className="w-4 h-4 text-[#C5A059]" />,
      action: () => {
        navigate('/');
        onClose();
      },
    },
    {
      id: 'citadel-map',
      category: 'Citadels',
      title: 'World Map // Cartography',
      detail: 'Interactive realm map & 6 citadel waypoints',
      icon: <MapIcon className="w-4 h-4 text-[#C5A059]" />,
      action: () => {
        navigate('/map');
        onClose();
      },
    },
    {
      id: 'citadel-forge',
      category: 'Citadels',
      title: 'The Forge // Projects Workstation',
      detail: 'Enterprise AI Workspace, ROS 2 robotics & systems',
      icon: <Hammer className="w-4 h-4 text-[#D97736]" />,
      action: () => {
        navigate('/projects');
        onClose();
      },
    },
    {
      id: 'citadel-library',
      category: 'Citadels',
      title: 'Engineering Library // Codices',
      detail: 'Technical investigations, concurrency & benchmarks',
      icon: <BookOpen className="w-4 h-4 text-[#C5A059]" />,
      action: () => {
        navigate('/engineering');
        onClose();
      },
    },
    {
      id: 'citadel-inventory',
      category: 'Citadels',
      title: 'Engineering Inventory // Arsenal',
      detail: 'Interactive technology artifact slots & concepts',
      icon: <LayoutGrid className="w-4 h-4 text-[#8C6D46]" />,
      action: () => {
        navigate('/inventory');
        onClose();
      },
    },
    {
      id: 'citadel-chamber',
      category: 'Citadels',
      title: 'My Chamber // Philosophy',
      detail: 'Engineer background, VIT Chennai trajectory & principles',
      icon: <User className="w-4 h-4 text-[#C5A059]" />,
      action: () => {
        navigate('/about');
        onClose();
      },
    },
    {
      id: 'citadel-archive',
      category: 'Citadels',
      title: 'The Archive // Career Chronology',
      detail: 'Official resume & verified credentials',
      icon: <FileText className="w-4 h-4 text-[#8C6D46]" />,
      action: () => {
        navigate('/archive');
        onClose();
      },
    },
    {
      id: 'citadel-gate',
      category: 'Citadels',
      title: 'The Gate // Uplink Protocol',
      detail: 'Direct contact channels & communication portal',
      icon: <Radio className="w-4 h-4 text-[#D97736]" />,
      action: () => {
        navigate('/contact');
        onClose();
      },
    },

    // Projects Quick Jump
    ...PROJECTS.map((project) => ({
      id: `proj-${project.slug}`,
      category: 'Projects' as const,
      title: project.title,
      detail: `${project.category} · ${project.technologies.slice(0, 3).join(', ')}`,
      icon: <FolderGit2 className="w-4 h-4 text-[#C5A059]" />,
      action: () => {
        navigate(`/projects/${project.slug}`);
        onClose();
      },
    })),

    // Engineering Notes Quick Jump
    ...ENGINEERING_ENTRIES.map((entry) => ({
      id: `eng-${entry.slug}`,
      category: 'Codices' as const,
      title: entry.title,
      detail: `${entry.category} · ${entry.status}`,
      icon: <FileCode2 className="w-4 h-4 text-[#8C6D46]" />,
      action: () => {
        navigate(`/engineering/${entry.slug}`);
        onClose();
      },
    })),

    // View Mode Toggle
    {
      id: 'pref-mode',
      category: 'Settings',
      title: viewMode === 'realm' ? 'Switch to Spec Mode' : 'Switch to Realm Mode',
      detail: viewMode === 'realm' ? 'Recruiter-focused technical data sheet' : 'Atmospheric Norse realm view',
      icon: <span className="font-mono text-sm text-[#C5A059]">ᛟ</span>,
      action: () => {
        toggleViewMode();
        onClose();
      },
    },
  ];

  const filteredCommands = query
    ? commands.filter(
        (cmd) =>
          cmd.title.toLowerCase().includes(query.toLowerCase()) ||
          cmd.category.toLowerCase().includes(query.toLowerCase()) ||
          (cmd.detail && cmd.detail.toLowerCase().includes(query.toLowerCase()))
      )
    : commands;

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

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
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Realm Search Slate"
    >
      <div
        className="relative w-full max-w-xl rounded-none bg-[#161B22] border border-[#C5A059] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9),0_0_24px_rgba(197,160,89,0.2)] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Carved Specular Border Highlight */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#8C6D46] via-[#C5A059] to-[#8C6D46]" />

        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#272A30] bg-[#111319]">
          <Search className="w-4 h-4 text-[#C5A059] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search realm citadels, codices, projects, or technologies..."
            className="w-full bg-transparent text-sm text-[#E6DFD5] placeholder:text-[#6E6B65] focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[9px] font-mono text-[#9A8F80] rounded bg-[#1D2025] border border-[#272A30]">
            ESC
          </kbd>
          <button
            onClick={onClose}
            aria-label="Close Command Palette"
            className="p-1 rounded text-[#9A8F80] hover:text-[#E6DFD5] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2 space-y-1 font-sans text-xs">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-[#6E6B65] font-mono text-xs">
              No matching citadels or codices found for "{query}".
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-[#1D2025] border-l-2 border-[#C5A059] text-[#E6DFD5]'
                      : 'text-[#9A8F80] hover:bg-[#1D2025]/50 border-l-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className="shrink-0">{cmd.icon}</span>
                    <div className="truncate">
                      <div
                        className={`text-xs font-medium truncate ${
                          isSelected
                            ? 'text-[#C5A059] font-semibold'
                            : 'text-[#E6DFD5]'
                        }`}
                      >
                        {cmd.title}
                      </div>
                      {cmd.detail && (
                        <div className="text-[10px] text-[#9A8F80] truncate font-mono">
                          {cmd.detail}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#0B0E13] border border-[#272A30] text-[#9A8F80]">
                      {cmd.category}
                    </span>
                    {isSelected && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Legend */}
        <div className="px-4 py-2 border-t border-[#272A30] bg-[#0B0E13] flex items-center justify-between font-mono text-[10px] text-[#6E6B65]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Enter</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#8C6D46]">REALM DISPATCH</span>
        </div>
      </div>
    </div>
  );
}
