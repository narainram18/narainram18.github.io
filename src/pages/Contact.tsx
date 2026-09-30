import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Check, Copy, Send, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { SITE_CONFIG } from '@/lib/constants';

export function Contact() {
  usePageMetadata(
    'The Gate // Uplink Protocol — Narain Ram R M',
    'Direct communication channels and dispatch protocol to contact Narain Ram R M.'
  );

  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Systems & Low-Level Architecture');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`[Dispatch] ${topic} - ${name}`);
    const body = encodeURIComponent(
      `Sender: ${name}\nEmail: ${email}\nDomain: ${topic}\n\nMessage:\n${message}\n\n---\nSent via The Gate Portal`
    );

    // Trigger user mail client
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const topicOptions = [
    'Systems & Low-Level Architecture',
    'Backend & Distributed Services',
    'Robotics & ROS 2 Navigation',
    'Applied AI & Retrieval Pipelines',
    'General Engineering Inquiry',
  ];

  return (
    <div className="pt-24 pb-28 px-4 max-w-7xl mx-auto w-full">
      {/* Citadel Location Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#8C6D46] tracking-[0.2em] uppercase mb-1">
          <span>LOCATION // THE GATE [SYS-06]</span>
          <span className="text-[#32353B]">/</span>
          <span className="text-[#C5A059]">ᚢᛈᛚᛁᚾᚲ // COMMUNICATION PORTAL</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#E6DFD5] tracking-wide uppercase font-bold">
          The Gate <span className="text-[#C5A059] font-mono text-xl sm:text-2xl font-normal">// Uplink Protocol</span>
        </h1>
        <p className="font-mono text-xs sm:text-sm text-[#9A8F80] max-w-3xl mt-2 leading-relaxed">
          Direct communication channels and dispatch protocol. Reach out for software engineering opportunities, systems research, robotics collaboration, or technical discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Communication Channels (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Primary Channel: Email Monolith */}
          <div className="stone-panel p-6 border border-[#272A30] relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-[#C5A059] tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#C5A059] inline-block" />
                PRIMARY CONDUIT
              </span>
              <span className="font-mono text-[10px] text-[#8C6D46]">DIRECT INBOX</span>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs text-[#9A8F80]">
                Electronic dispatch channel routed directly to personal inbox:
              </p>
              <div className="flex items-center justify-between bg-[#080C12] border border-[#272A30] px-3.5 py-2.5 font-mono text-xs text-[#E6DFD5]">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="truncate">{SITE_CONFIG.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  type="button"
                  className="ml-2 px-2 py-1 bg-[#161B22] hover:bg-[#272A30] border border-[#32353B] text-[10px] font-mono text-[#C5A059] transition-colors shrink-0 flex items-center gap-1"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#50FA7B]" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#161B22] hover:bg-[#C5A059] hover:text-[#0C0F14] border border-[#C5A059] text-[#C5A059] font-mono text-xs tracking-wider uppercase transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>[ LAUNCH MAIL CLIENT ]</span>
              </a>
            </div>
          </div>

          {/* Institutional Status & Base */}
          <div className="stone-panel p-6 border border-[#272A30]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] text-[#8C6D46] tracking-widest uppercase">
                OPERATIONAL BASE
              </span>
              <span className="font-mono text-[10px] text-[#C5A059]">
                CHENNAI, INDIA
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#E6DFD5] font-semibold">{SITE_CONFIG.location}</div>
                  <div className="text-[#9A8F80] text-[11px] mt-0.5">VIT Chennai Campus</div>
                </div>
              </div>

              <div className="border-t border-[#1E232A] pt-3">
                <span className="text-[10px] text-[#8C6D46] uppercase block mb-1">Affiliation</span>
                <div className="text-[#E6DFD5]">Vellore Institute of Technology, Chennai</div>
                <div className="text-[#9A8F80] text-[11px] mt-0.5">
                  B.Tech CSE (AI &amp; Robotics) · Class of 2027
                </div>
              </div>

              <div className="border-t border-[#1E232A] pt-3">
                <span className="text-[10px] text-[#8C6D46] uppercase block mb-1">Availability</span>
                <div className="text-[#C5A059] text-[11px] leading-relaxed">
                  Open to software engineering internships, backend architecture roles, robotics projects, and systems research.
                </div>
              </div>
            </div>
          </div>

          {/* Citadels & Registries */}
          <div className="stone-panel p-6 border border-[#272A30]">
            <span className="font-mono text-[10px] text-[#8C6D46] tracking-widest uppercase block mb-3">
              EXTERNAL REGISTRIES &amp; CITADELS
            </span>

            <div className="space-y-2 font-mono text-xs">
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#080C12] hover:bg-[#161B22] border border-[#272A30] hover:border-[#8C6D46] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-[#9A8F80] group-hover:text-[#C5A059]" />
                  <span className="text-[#E6DFD5] group-hover:text-[#C5A059]">GitHub Registry</span>
                </div>
                <span className="text-[11px] text-[#8C6D46] flex items-center gap-1">
                  <span>github.com/narainram18</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>

              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#080C12] hover:bg-[#161B22] border border-[#272A30] hover:border-[#8C6D46] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#9A8F80] group-hover:text-[#C5A059]" />
                  <span className="text-[#E6DFD5] group-hover:text-[#C5A059]">LinkedIn Network</span>
                </div>
                <span className="text-[11px] text-[#8C6D46] flex items-center gap-1">
                  <span>narain-ram-207060290</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>

              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-[#080C12] hover:bg-[#161B22] border border-[#272A30] hover:border-[#8C6D46] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-[#E6DFD5] group-hover:text-[#C5A059]">Curriculum Vitae</span>
                </div>
                <span className="text-[11px] text-[#C5A059] flex items-center gap-1">
                  <span>PDF Document</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Tactical Dispatch Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="stone-panel p-6 sm:p-8 border border-[#272A30] relative">
            {/* Header bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E232A]">
              <div>
                <span className="font-mono text-[10px] text-[#8C6D46] tracking-widest uppercase block">
                  TACTICAL INTERFACE
                </span>
                <h2 className="font-serif text-xl sm:text-2xl text-[#E6DFD5] font-semibold">
                  Prepare Dispatch
                </h2>
              </div>
              <span className="font-mono text-[10px] text-[#C5A059] bg-[#161B22] border border-[#8C6D46] px-2.5 py-1">
                ᚦ DIRECT UPLINK
              </span>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#080C12] border border-[#C5A059] space-y-4">
                <div className="flex items-center gap-2 text-[#50FA7B] font-mono text-xs font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>[ DISPATCH PREPARED ]</span>
                </div>
                <p className="font-mono text-xs text-[#E6DFD5] leading-relaxed">
                  Your message has been formatted and opened in your email client. If your client did not launch automatically, please transmit your note directly to:
                </p>
                <div className="font-mono text-sm text-[#C5A059] bg-[#161B22] p-3 border border-[#272A30] select-all">
                  {SITE_CONFIG.email}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#161B22] hover:bg-[#272A30] border border-[#8C6D46] font-mono text-xs text-[#E6DFD5] tracking-wider uppercase transition-colors"
                >
                  [ COMPOSE ANOTHER DISPATCH ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Sender Identity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sender-name"
                      className="block font-mono text-[11px] text-[#8C6D46] uppercase tracking-wider mb-1.5"
                    >
                      Your Name / Designation *
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Vance, Engineering Lead"
                      className="w-full bg-[#080C12] border border-[#272A30] focus:border-[#C5A059] px-3.5 py-2.5 font-mono text-xs text-[#E6DFD5] placeholder-[#4E4639] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sender-email"
                      className="block font-mono text-[11px] text-[#8C6D46] uppercase tracking-wider mb-1.5"
                    >
                      Return Address / Email *
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex.vance@company.com"
                      className="w-full bg-[#080C12] border border-[#272A30] focus:border-[#C5A059] px-3.5 py-2.5 font-mono text-xs text-[#E6DFD5] placeholder-[#4E4639] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Domain Selector */}
                <div>
                  <label
                    htmlFor="inquiry-topic"
                    className="block font-mono text-[11px] text-[#8C6D46] uppercase tracking-wider mb-1.5"
                  >
                    Domain of Inquiry
                  </label>
                  <select
                    id="inquiry-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-[#080C12] border border-[#272A30] focus:border-[#C5A059] px-3.5 py-2.5 font-mono text-xs text-[#E6DFD5] outline-none transition-colors"
                  >
                    {topicOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111319] text-[#E6DFD5]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Body */}
                <div>
                  <label
                    htmlFor="dispatch-message"
                    className="block font-mono text-[11px] text-[#8C6D46] uppercase tracking-wider mb-1.5"
                  >
                    Dispatch Details / Message *
                  </label>
                  <textarea
                    id="dispatch-message"
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Outline your engineering question, project scope, team role, or collaboration proposal..."
                    className="w-full bg-[#080C12] border border-[#272A30] focus:border-[#C5A059] p-3.5 font-mono text-xs text-[#E6DFD5] placeholder-[#4E4639] outline-none transition-colors resize-y leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#161B22] hover:bg-[#C5A059] hover:text-[#0C0F14] border border-[#C5A059] text-[#C5A059] font-mono text-xs tracking-widest uppercase transition-all duration-150 font-bold group shadow-sm"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    <span>[ TRANSMIT DISPATCH ]</span>
                  </button>
                  <p className="font-mono text-[10px] text-[#6E6B65] text-center mt-2.5">
                    Prepares formatted dispatch to {SITE_CONFIG.email} with direct encryption via your native mail client.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
