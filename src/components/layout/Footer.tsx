import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Container } from './Container';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#272A30] bg-[#0C0F14] pt-12 pb-24 lg:pb-12 text-[#9A8F80] transition-colors duration-200 mt-auto">
      <Container size="lg">
        {/* Runic Divider Strip */}
        <div className="text-center font-mono text-[9px] text-[#4E4639] tracking-[0.25em] uppercase py-2 select-none">
          ᚠ · ᚢ · ᚦ · ᚨ · ᚱ · ᚲ · ᚷ · ᚹ · ᚺ · ᚾ · ᛁ · ᛃ · ᛇ · ᛈ · ᛉ · ᛊ
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 border-y border-[#1E232A]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm text-[#E6DFD5] uppercase tracking-wider">
                {SITE_CONFIG.name}
              </span>
              <span className="font-mono text-[10px] text-[#C5A059]">
                · SOFTWARE ENGINEER
              </span>
            </div>
            <p className="font-mono text-xs text-[#9A8F80] mt-1">
              VIT Chennai · B.Tech CSE (AI &amp; Robotics) · Class of 2027
            </p>
          </div>

          {/* Real Contact & Profile Channels */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#9A8F80] hover:text-[#C5A059] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#9A8F80] hover:text-[#C5A059] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-1.5 text-[#9A8F80] hover:text-[#C5A059] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a
              href="/archive"
              className="inline-flex items-center gap-1.5 text-[#9A8F80] hover:text-[#C5A059] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>The Archive</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 text-xs text-[#6E6B65] font-mono">
          <p>
            Norse-Engineered Realm. Zero telemetry bloat. Built on React &amp; Tailwind.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Return to zenith"
            className="inline-flex items-center gap-1 text-[#9A8F80] hover:text-[#C5A059] transition-colors"
          >
            <span className="uppercase text-[10px] tracking-wider">Zenith</span>
            <ArrowUp className="w-3 h-3 text-[#C5A059]" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
