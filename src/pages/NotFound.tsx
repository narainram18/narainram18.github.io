import { Link } from 'react-router-dom';
import { Castle, ArrowLeft } from 'lucide-react';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function NotFound() {
  usePageMetadata('404 // Lost to the Mist — Narain Ram R M', 'The requested resource was not found.');

  return (
    <div className="py-32 my-auto px-4 max-w-xl mx-auto text-center w-full">
      <div className="stone-panel p-8 sm:p-10 border border-[#272A30] space-y-5">
        <div className="flex items-center justify-center gap-2 font-mono text-[10px] text-[#8C6D46] tracking-[0.25em] uppercase">
          <span>ᚦ CITADEL NOT FOUND</span>
          <span className="text-[#32353B]">/</span>
          <span className="text-[#C5A059]">SECTOR NULL</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#E6DFD5] tracking-wide uppercase">
          Lost to the Mist
        </h1>

        <p className="font-mono text-xs sm:text-sm text-[#9A8F80] max-w-md mx-auto leading-relaxed">
          The requested pathway does not correspond to any known citadel, project blueprint, or engineering codex in this realm.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#161B22] hover:bg-[#C5A059] hover:text-[#0C0F14] border border-[#C5A059] text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <Castle className="w-4 h-4" />
            <span>[ RETURN TO SANCTUM ]</span>
          </Link>

          <Link
            to="/map"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#080C12] hover:bg-[#161B22] border border-[#272A30] text-[#9A8F80] hover:text-[#E6DFD5] font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>CONSULT MAP</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
