import React, { createContext, useContext, useState, useEffect } from 'react';

export type RealmViewMode = 'realm' | 'spec';

interface RealmModeContextType {
  viewMode: RealmViewMode;
  toggleViewMode: () => void;
  setViewMode: (mode: RealmViewMode) => void;
  isSpecMode: boolean;
}

const RealmModeContext = createContext<RealmModeContextType | undefined>(undefined);

export const RealmModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewMode, setViewModeState] = useState<RealmViewMode>(() => {
    if (typeof window === 'undefined') return 'realm';
    const stored = localStorage.getItem('narain_realm_mode') as RealmViewMode | null;
    return stored === 'spec' ? 'spec' : 'realm';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (viewMode === 'spec') {
      root.classList.add('spec-mode');
      root.classList.remove('realm-mode');
    } else {
      root.classList.add('realm-mode');
      root.classList.remove('spec-mode');
    }
    localStorage.setItem('narain_realm_mode', viewMode);
  }, [viewMode]);

  const toggleViewMode = () => {
    setViewModeState((prev) => (prev === 'realm' ? 'spec' : 'realm'));
  };

  const setViewMode = (mode: RealmViewMode) => {
    setViewModeState(mode);
  };

  return (
    <RealmModeContext.Provider
      value={{
        viewMode,
        toggleViewMode,
        setViewMode,
        isSpecMode: viewMode === 'spec',
      }}
    >
      {children}
    </RealmModeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRealmMode = (): RealmModeContextType => {
  const context = useContext(RealmModeContext);
  if (!context) {
    throw new Error('useRealmMode must be used within a RealmModeProvider');
  }
  return context;
};
