import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import { useCommandPalette } from '@/context/CommandPaletteContext';
import { useRealmMode } from '@/context/RealmModeContext';

export const RealmHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { open: openCommandPalette } = useCommandPalette();
  const { viewMode, toggleViewMode } = useRealmMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBreadcrumb = () => {
    const p = location.pathname;
    if (p === '/') return 'REALM // SECTOR 00';
    if (p === '/map') return 'WORLD MAP // CARTOGRAPHY';
    if (p.startsWith('/projects/')) return 'MISSION BRIEFING // DOSSIER';
    if (p === '/projects') return 'THE FORGE // PROJECTS';
    if (p.startsWith('/engineering/')) return 'ENGINEERING LIBRARY // CODEX';
    if (p === '/engineering') return 'ENGINEERING LIBRARY // RESEARCH';
    if (p === '/about') return 'MY CHAMBER // PHILOSOPHY';
    if (p === '/inventory') return 'ENGINEERING INVENTORY // ARSENAL';
    if (p === '/archive') return 'THE ARCHIVE // CHRONOLOGY';
    if (p === '/contact') return 'THE GATE // UPLINK PROTOCOL';
    return 'REALM // EXPLORATION';
  };

  const navLinks = [
    { name: 'Realm', path: '/' },
    { name: 'Map', path: '/map' },
    { name: 'Forge', path: '/projects' },
    { name: 'Library', path: '/engineering' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Chamber', path: '/about' },
    { name: 'Archive', path: '/archive' },
    { name: 'Gate', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111319]/95 backdrop-blur-xl border-b border-[#272A30] shadow-[0_4px_24px_rgba(0,0,0,0.8)]'
          : 'bg-[#111319]/80 backdrop-blur-md border-b border-[#272A30]/60'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 md:h-18 flex items-center justify-between gap-3">
          {/* Brand Identity / Crest */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059]"
          >
            <picture>
              <source type="image/avif" srcSet="/assets/realm/crest-96.avif" />
              <source type="image/webp" srcSet="/assets/realm/crest-96.webp" />
              <img
                src="/assets/realm/crest-96.jpg"
                alt="Narain Engineering Crest"
                width={36}
                height={36}
                decoding="async"
                className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </picture>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-sm md:text-base font-bold text-[#C5A059] tracking-wider uppercase group-hover:text-[#E9C176] transition-colors">
                  NARAIN
                </span>
                <span className="font-mono text-[9px] px-1 py-0.2 rounded bg-[#1D2025] text-[#8C6D46] border border-[#272A30]">
                  ᛟ
                </span>
              </div>
              <span className="font-mono text-[9px] md:text-[10px] text-[#9A8F80] tracking-wider uppercase truncate">
                REALM // SOFTWARE ENGINEER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-150 rounded ${
                    active
                      ? 'text-[#C5A059] bg-[#1D2025] border border-[#C5A059]/40 font-semibold shadow-xs'
                      : 'text-[#9A8F80] hover:text-[#E6DFD5] hover:bg-[#161B22]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2">
            {/* Search / Command Palette */}
            <button
              onClick={openCommandPalette}
              aria-label="Open Command Search (Cmd+K)"
              className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1.5 rounded bg-[#161B22] border border-[#272A30] text-[#9A8F80] hover:text-[#E6DFD5] hover:border-[#C5A059]/40 font-mono text-xs transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[10px] uppercase tracking-wider">Search</span>
              <kbd className="px-1.5 py-0.2 text-[9px] font-mono rounded bg-[#1D2025] text-[#9A8F80] border border-[#272A30]">
                ⌘K
              </kbd>
            </button>

            {/* REALM / SPEC Mode Toggle */}
            <button
              onClick={toggleViewMode}
              title="Toggle between Realm and Recruiter Spec mode"
              className="h-9 px-2.5 rounded bg-[#1D2025] border border-[#272A30] hover:border-[#C5A059]/50 flex items-center gap-1.5 transition-all text-[#8C6D46] active:scale-95"
            >
              <span className="text-[12px] text-[#C5A059]">ᛟ</span>
              <span
                className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                  viewMode === 'realm' ? 'text-[#C5A059] font-bold' : 'text-[#9A8F80]'
                }`}
              >
                REALM
              </span>
              <span className="text-[#4E4639] text-[10px]">/</span>
              <span
                className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                  viewMode === 'spec' ? 'text-[#C5A059] font-bold' : 'text-[#9A8F80]'
                }`}
              >
                SPEC
              </span>
            </button>

            {/* Profile Avatar / Chamber */}
            <Link
              to="/about"
              aria-label="Engineer Chamber Profile"
              className="w-8 h-8 rounded-full bg-[#C5A059] text-[#111319] hover:bg-[#E9C176] flex items-center justify-center shrink-0 transition-colors shadow-sm"
            >
              <User className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Atmospheric Sub-bar (Authentic information, no fake latency or ping) */}
      <div className="h-6 px-4 sm:px-6 bg-[#0B0E13]/90 border-t border-[#1E232A] flex items-center justify-between font-mono text-[9px] text-[#9A8F80] tracking-wider overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span className="text-[#C5A059] uppercase font-semibold">NORSE REALM</span>
          <span className="text-[#4E4639] hidden sm:inline">//</span>
          <span className="text-[#9A8F80] hidden sm:inline">VIT CHENNAI · CLASS OF 2027</span>
        </div>
        <div className="flex items-center gap-2 text-[#9A8F80] truncate">
          <span className="text-[#8C6D46]">{getBreadcrumb()}</span>
        </div>
      </div>
    </header>
  );
};
