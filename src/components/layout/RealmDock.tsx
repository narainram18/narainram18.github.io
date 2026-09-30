import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Castle,
  Map as MapIcon,
  Hammer,
  BookOpen,
  User,
  LayoutGrid,
  FileText,
  Radio,
} from 'lucide-react';

interface DockItem {
  id: string;
  name: string;
  rune: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DOCK_ITEMS: DockItem[] = [
  { id: 'realm', name: 'Realm', rune: 'ᛟ', path: '/', icon: Castle },
  { id: 'map', name: 'Map', rune: 'ᚲ', path: '/map', icon: MapIcon },
  { id: 'forge', name: 'Forge', rune: 'ᚠ', path: '/projects', icon: Hammer },
  { id: 'library', name: 'Library', rune: 'ᚱ', path: '/engineering', icon: BookOpen },
  { id: 'chamber', name: 'Chamber', rune: 'ᛏ', path: '/about', icon: User },
  { id: 'inventory', name: 'Inventory', rune: 'ᛉ', path: '/inventory', icon: LayoutGrid },
  { id: 'archive', name: 'Archive', rune: 'ᛇ', path: '/archive', icon: FileText },
  { id: 'gate', name: 'Gate', rune: 'ᚨ', path: '/contact', icon: Radio },
];

export const RealmDock: React.FC = () => {
  return (
    <nav
      aria-label="Realm Citadels Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#111319]/95 backdrop-blur-xl border-t border-[#272A30] shadow-[0_-4px_24px_rgba(0,0,0,0.8)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="max-w-4xl mx-auto px-2 h-16 flex items-center justify-around overflow-x-auto no-scrollbar gap-1 sm:gap-2">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-w-[48px] sm:min-w-[56px] h-13 px-1.5 py-1 rounded transition-all duration-200 group ${
                  isActive
                    ? 'text-[#C5A059] font-bold bg-[#1D2025] shadow-[inset_0_1px_0_0_rgba(197,160,89,0.3)]'
                    : 'text-[#9A8F80] hover:text-[#E6DFD5] hover:bg-[#161B22]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <Icon
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isActive
                          ? 'scale-110 text-[#C5A059]'
                          : 'group-hover:scale-105 text-[#9A8F80] group-hover:text-[#E6DFD5]'
                      }`}
                    />
                    {isActive && (
                      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                    )}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider mt-0.5 leading-tight truncate">
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
