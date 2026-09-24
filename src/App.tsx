import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Projects } from '@/pages/Projects';
import { ProjectCaseStudy } from '@/pages/ProjectCaseStudy';
import { Engineering } from '@/pages/Engineering';
import { EngineeringDetail } from '@/pages/EngineeringDetail';
import { NotFound } from '@/pages/NotFound';
import { CommandPaletteProvider } from '@/context/CommandPaletteContext';
import { GlobalCommandPalette } from '@/components/ui/CommandPalette';

export function App() {
  return (
    <Router>
      <CommandPaletteProvider>
        <GlobalCommandPalette />
        <div className="min-h-screen flex flex-col bg-canvas-light dark:bg-canvas-dark text-ink-primary dark:text-ink-primaryDark transition-colors duration-200">
          <Navbar />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/engineering/:slug" element={<EngineeringDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CommandPaletteProvider>
    </Router>
  );
}

export default App;
