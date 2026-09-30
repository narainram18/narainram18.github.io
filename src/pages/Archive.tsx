import {
  FileText,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '@/data/experience';
import { SITE_CONFIG } from '@/lib/constants';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function Archive() {
  usePageMetadata(
    'The Archive // Career Chronology — Narain Ram R M',
    'Official engineering credentials, curriculum vitae, and verified career chronology of Narain Ram R M.'
  );

  return (
    <div className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full select-none">
      {/* Top Location Breadcrumb */}
      <div className="flex flex-col gap-1 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-mono text-[11px] tracking-widest uppercase font-semibold">
              LOCATION // THE ARCHIVE [SYS-05]
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D46] animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5 bg-[#1D2025] px-2.5 py-0.5 border border-[#272A30] text-[10px] font-mono text-[#E6C093]">
            <FileText className="w-3 h-3 text-[#C5A059]" />
            <span>CAREER CHRONOLOGY</span>
          </div>
        </div>

        {/* Monumental Header Segment */}
        <div className="relative bg-[#161B22] p-6 sm:p-8 border border-[#272A30] overflow-hidden shadow-2xl mt-2">
          {/* Subtle Watermark */}
          <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none text-[#C5A059]">
            <FileText className="w-48 h-48" />
          </div>

          <div className="flex flex-col relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[#C5A059] tracking-widest text-[10px] uppercase font-semibold">
                ᛖᛈᛁᚷᚱᚨᛈᚺ // OFFICIAL ATTESTATION
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#C5A059] tracking-wide uppercase font-bold">
              THE ARCHIVE
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#9A8F80] mt-2 leading-relaxed">
              Curriculum Vitae, Software Development Internship at Eanwol, institutional education at VIT Chennai, and downloadable verified PDF documentation.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#C5A059] text-[#111319] hover:bg-[#E9C176] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#1D2025] hover:bg-[#272A30] border border-[#272A30] text-[#E6DFD5] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>GITHUB PROFILE</span>
              </a>

              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#1D2025] hover:bg-[#272A30] border border-[#272A30] text-[#E6DFD5] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>LINKEDIN DOSSIER</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Archival Records */}
      <div className="space-y-12 mt-6">
        {/* ============================================================== */}
        {/* 01. PROFESSIONAL EXPERIENCE                                   */}
        {/* ============================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[#C5A059] font-bold">[01]</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                ENGINEERING EXPERIENCE
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
              PROFESSIONAL RECORD
            </span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="stone-panel p-6 sm:p-8 space-y-4 border-l-4 border-l-[#C5A059]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#272A30]">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#1D2025] border border-[#C5A059] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#E6DFD5] uppercase">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-[#C5A059] font-semibold">
                        {exp.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-[11px] text-[#9A8F80]">
                    <span className="flex items-center gap-1.5 text-[#E6C093]">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#8C6D46] uppercase tracking-wider block font-semibold">
                    ENGINEERING CONTRIBUTIONS
                  </span>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-[#9A8F80] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#272A30]">
                  <span className="font-mono text-[10px] text-[#8C6D46] uppercase block mb-1.5">
                    TECHNOLOGIES APPLIED
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2.5 py-0.5 bg-[#080C12] text-[#E6C093] border border-[#272A30]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 02. EDUCATION & ACADEMIC CREDENTIALS                          */}
        {/* ============================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[#C5A059] font-bold">[02]</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                EDUCATION &amp; INSTITUTIONAL TRAINING
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
              ACADEMIC FOUNDATION
            </span>
          </div>

          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="stone-panel p-6 space-y-3 border-l-2 border-l-[#8C6D46]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#272A30]">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#1D2025] border border-[#272A30] flex items-center justify-center text-[#E6C093] shrink-0 mt-0.5">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#E6DFD5] uppercase">
                        {edu.institution}
                      </h3>
                      <p className="font-sans text-xs text-[#C5A059] font-semibold mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-[11px] text-[#9A8F80]">
                    <span className="text-[#E6C093]">{edu.period}</span>
                    <span className="text-[#C5A059] font-bold mt-0.5">{edu.score}</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  {edu.highlights.map((h, hIdx) => (
                    <p key={hIdx} className="font-sans text-xs text-[#9A8F80] leading-relaxed">
                      &bull; {h}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 03. CORE SYSTEMS ACCREDITATION & INTEGRITY                     */}
        {/* ============================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#272A30]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-[#C5A059] font-bold">[03]</span>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#E6DFD5] uppercase tracking-wide">
                SYSTEMS RECORD ATTESTATION
              </h2>
            </div>
            <span className="font-mono text-[10px] text-[#8C6D46] uppercase">
              ETHICAL DISCLOSURE
            </span>
          </div>

          <div className="stone-panel p-6 border-l-4 border-l-[#C5A059] space-y-2">
            <div className="flex items-center gap-2 text-[#C5A059]">
              <Award className="w-4 h-4" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                ENGINEERING VERIFICATION PRINCIPLE
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#9A8F80] leading-relaxed">
              Every project, system layer, and code snippet presented in this realm corresponds to genuine software engineered and tested by Narain Ram R M. Coursework is verified under the Department of Computer Science &amp; Engineering at Vellore Institute of Technology, Chennai.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
