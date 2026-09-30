import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RealmHeader } from '@/components/layout/RealmHeader';
import { RealmDock } from '@/components/layout/RealmDock';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { CommandPaletteProvider } from '@/context/CommandPaletteContext';
import { RealmModeProvider } from '@/context/RealmModeContext';
import { GlobalCommandPalette } from '@/components/ui/CommandPalette';

// Route-level code splitting for non-landing pages
const WorldMap = lazy(() => import('@/pages/WorldMap').then((m) => ({ default: m.WorldMap })));
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const Projects = lazy(() => import('@/pages/Projects').then((m) => ({ default: m.Projects })));
const ProjectCaseStudy = lazy(() =>
  import('@/pages/ProjectCaseStudy').then((m) => ({ default: m.ProjectCaseStudy }))
);
const Engineering = lazy(() =>
  import('@/pages/Engineering').then((m) => ({ default: m.Engineering }))
);
const EngineeringDetail = lazy(() =>
  import('@/pages/EngineeringDetail').then((m) => ({ default: m.EngineeringDetail }))
);
const Inventory = lazy(() => import('@/pages/Inventory').then((m) => ({ default: m.Inventory })));
const Archive = lazy(() => import('@/pages/Archive').then((m) => ({ default: m.Archive })));
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })));

function RouteLoadingFallback() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto w-full flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-3 font-mono text-xs text-[#8C6D46]">
        <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
        <span className="tracking-widest uppercase">CONJURING CHAMBER...</span>
      </div>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <RealmModeProvider>
        <CommandPaletteProvider>
          <GlobalCommandPalette />
          <div className="min-h-screen flex flex-col bg-[#0C0F14] text-[#E6DFD5] selection:bg-[#C5A059]/25 selection:text-[#E9C176] font-sans antialiased">
            <RealmHeader />
            <main className="flex-1 flex flex-col relative w-full">
              <Suspense fallback={<RouteLoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/map" element={<WorldMap />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
                  <Route path="/engineering" element={<Engineering />} />
                  <Route path="/engineering/:slug" element={<EngineeringDetail />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/archive" element={<Archive />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <RealmDock />
          </div>
        </CommandPaletteProvider>
      </RealmModeProvider>
    </Router>
  );
}

export default App;
