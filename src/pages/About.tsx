import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  Network,
  Bot,
  Binary,
  Layers,
  GraduationCap,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  FileText,
  Compass,
  CheckCircle2,
  Terminal,
  ExternalLink,
  ShieldAlert,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { SITE_CONFIG } from '@/lib/constants';
import { EXPERIENCES, EDUCATION } from '@/data/experience';
import { ABOUT_DATA } from '@/data/about';
import { EngineeringWorkflow } from '@/components/about/EngineeringWorkflow';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function About() {
  const primaryExperience = EXPERIENCES[0];
  const primaryEducation = EDUCATION[0];

  usePageMetadata(
    'About — Narain Ram R M',
    'Background, engineering philosophy, technical capability map, credentials, and active laboratory focus of Narain Ram R M, Software Engineer.'
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getCapabilityIcon = (id: string) => {
    switch (id) {
      case 'systems':
        return <Cpu className="w-4 h-4 text-accent dark:text-accent-dark" />;
      case 'networking':
        return <Network className="w-4 h-4 text-accent dark:text-accent-dark" />;
      case 'distributed':
        return <Layers className="w-4 h-4 text-accent dark:text-accent-dark" />;
      case 'robotics':
        return <Bot className="w-4 h-4 text-accent dark:text-accent-dark" />;
      case 'ai-ml':
        return <Terminal className="w-4 h-4 text-accent dark:text-accent-dark" />;
      case 'algorithms':
        return <Binary className="w-4 h-4 text-accent dark:text-accent-dark" />;
      default:
        return <Cpu className="w-4 h-4 text-accent dark:text-accent-dark" />;
    }
  };

  return (
    <div>
      <PageHeader
        label="ABOUT // PROFILE"
        title="Background & Engineering Focus"
        description="Software engineering, systems architecture, and foundational mechanics beneath high-level abstractions."
      />

      <Container size="lg" className="py-12 md:py-16 space-y-16 lg:space-y-24">
        {/* ================================================== */}
        {/* 01. HERO / IDENTITY */}
        {/* ================================================== */}
        <section aria-labelledby="identity-heading" className="space-y-8">
          <Reveal>
            <div className="space-y-4 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-ink-muted dark:text-ink-mutedDark pb-2 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                <span className="font-semibold text-accent dark:text-accent-dark">
                  01 // IDENTITY & TRAJECTORY
                </span>
                <span>·</span>
                <span>VIT CHENNAI '27</span>
                <span>·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  CGPA {ABOUT_DATA.identity.metadata.cgpa}
                </span>
              </div>

              <h1
                id="identity-heading"
                className="hero-heading font-bold text-ink-primary dark:text-ink-primaryDark tracking-tight"
              >
                {ABOUT_DATA.identity.lead}
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                {ABOUT_DATA.identity.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contextual Spatial Metadata Strip */}
          <Reveal delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-4 rounded-xl glass-surface border border-borderLine-light dark:border-borderLine-dark font-mono text-xs">
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                  Location
                </span>
                <div className="font-semibold text-ink-primary dark:text-ink-primaryDark mt-0.5">
                  {ABOUT_DATA.identity.metadata.location}
                </div>
              </div>
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                  Institution
                </span>
                <div className="font-semibold text-ink-primary dark:text-ink-primaryDark mt-0.5">
                  {ABOUT_DATA.identity.metadata.institution}
                </div>
              </div>
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                  Graduation
                </span>
                <div className="font-semibold text-ink-primary dark:text-ink-primaryDark mt-0.5">
                  {ABOUT_DATA.identity.metadata.graduation}
                </div>
              </div>
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                  Degree
                </span>
                <div className="font-semibold text-ink-primary dark:text-ink-primaryDark mt-0.5 truncate">
                  B.Tech CSE (AI & Robotics)
                </div>
              </div>
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                  Academic Record
                </span>
                <div className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  CGPA {ABOUT_DATA.identity.metadata.cgpa}
                </div>
              </div>
              <div>
                <span className="text-ink-muted dark:text-ink-mutedDark text-[10px] uppercase">
                  Core Focus
                </span>
                <div className="font-semibold text-accent dark:text-accent-dark mt-0.5 truncate">
                  Systems & Software
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================================================== */}
        {/* 02. ENGINEERING PHILOSOPHY */}
        {/* ================================================== */}
        <section aria-labelledby="philosophy-heading" className="space-y-6 pt-6 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <Reveal>
            <div className="space-y-1">
              <div className="font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                02 // ENGINEERING PHILOSOPHY
              </div>
              <h2
                id="philosophy-heading"
                className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark"
              >
                Principles That Guide How I Reason About Systems
              </h2>
              <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark max-w-2xl">
                Real software engineering happens beneath frameworks. These principles govern how I model architectures, evaluate trade-offs, and debug failures.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ABOUT_DATA.principles.map((principle, idx) => (
              <Reveal key={principle.number} delay={idx * 60}>
                <div className="h-full rounded-xl glass-surface p-6 border border-borderLine-light dark:border-borderLine-dark hover:border-ink-secondary/40 dark:hover:border-ink-secondaryDark/40 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="text-accent dark:text-accent-dark font-bold">
                        {principle.number} // PRINCIPLE
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-ink-primary dark:text-ink-primaryDark tracking-tight leading-snug">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                      "{principle.statement}"
                    </p>
                  </div>

                  <p className="text-xs text-ink-muted dark:text-ink-mutedDark leading-relaxed pt-2 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                    {principle.rationale}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* 03. WHAT I WORK ON (Capability Map) */}
        {/* ================================================== */}
        <section aria-labelledby="capabilities-heading" className="space-y-6 pt-6 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <div className="font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                  03 // CAPABILITY MAP
                </div>
                <h2
                  id="capabilities-heading"
                  className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark"
                >
                  Technical Focus Areas
                </h2>
                <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark max-w-2xl">
                  An editorial map of the disciplines and mechanisms I build with, grounded in verified project and engineering implementations.
                </p>
              </div>

              <Link to="/projects" className="shrink-0 font-mono text-xs text-accent hover:underline flex items-center gap-1">
                <span>View Realized Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_DATA.capabilities.map((cap, idx) => (
              <Reveal key={cap.id} delay={idx * 50}>
                <div className="h-full rounded-xl glass-surface p-6 border border-borderLine-light dark:border-borderLine-dark hover:border-ink-secondary/40 dark:hover:border-ink-secondaryDark/40 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-surface-elevatedLight dark:bg-surface-elevatedDark border border-borderLine-light dark:border-borderLine-dark shrink-0">
                        {getCapabilityIcon(cap.id)}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-ink-primary dark:text-ink-primaryDark tracking-tight">
                          {cap.title}
                        </h3>
                        <span className="font-mono text-[10px] text-ink-muted dark:text-ink-mutedDark uppercase">
                          {cap.id.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark space-y-1.5 font-mono text-xs">
                    {cap.topics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-start gap-2 text-ink-primary dark:text-ink-primaryDark text-[11px]"
                      >
                        <span className="text-accent dark:text-accent-dark shrink-0">›</span>
                        <span className="leading-tight">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* 04. HOW I BUILD (Visual Engineering Workflow) */}
        {/* ================================================== */}
        <section aria-labelledby="workflow-heading" className="space-y-6 pt-6 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <Reveal>
            <div className="space-y-1">
              <div className="font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                04 // HOW I BUILD
              </div>
              <h2
                id="workflow-heading"
                className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark"
              >
                The Engineering Pipeline
              </h2>
              <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark max-w-2xl">
                A disciplined lifecycle: moving from mathematical and operational constraints to implementation, empirical benchmarking, and rigorous stress testing.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <EngineeringWorkflow stages={ABOUT_DATA.workflow} />
          </Reveal>
        </section>

        {/* ================================================== */}
        {/* 05. EXPERIENCE & EDUCATION */}
        {/* ================================================== */}
        <section aria-labelledby="credentials-heading" className="space-y-6 pt-6 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <Reveal>
            <div className="space-y-1">
              <div className="font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                05 // INDUSTRY & ACADEMIC CREDENTIALS
              </div>
              <h2
                id="credentials-heading"
                className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark"
              >
                Experience & Formal Education
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Experience Card */}
            <Reveal delay={50}>
              <div className="h-full rounded-xl glass-panel p-6 sm:p-7 border border-borderLine-light dark:border-borderLine-dark flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                    <div className="flex items-center gap-2 text-accent dark:text-accent-dark font-medium">
                      <Briefcase className="w-4 h-4" />
                      <span>ENGINEERING INTERNSHIP</span>
                    </div>
                    <span className="text-ink-muted dark:text-ink-mutedDark">
                      {primaryExperience.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-ink-primary dark:text-ink-primaryDark">
                      {primaryExperience.role}
                    </h3>
                    <div className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark font-medium mt-0.5">
                      {primaryExperience.company} · {primaryExperience.location}
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                    {primaryExperience.responsibilities.slice(0, 4).map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex flex-wrap gap-1.5">
                  {primaryExperience.technologies.map((tech) => (
                    <Badge key={tech} variant="default" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Education Card */}
            <Reveal delay={100}>
              <div className="h-full rounded-xl glass-panel p-6 sm:p-7 border border-borderLine-light dark:border-borderLine-dark flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
                    <div className="flex items-center gap-2 text-accent dark:text-accent-dark font-medium">
                      <GraduationCap className="w-4 h-4" />
                      <span>FORMAL EDUCATION</span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {primaryEducation.score}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-ink-primary dark:text-ink-primaryDark">
                      {primaryEducation.degree}
                    </h3>
                    <div className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark font-medium mt-0.5">
                      {primaryEducation.institution} · {primaryEducation.period}
                    </div>
                  </div>

                  <div className="space-y-3 font-sans text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                    <p>
                      Comprehensive technical coursework covering core computer science disciplines: Operating Systems, Computer Networks, Database Management Systems, Data Structures & Algorithms, and System Design.
                    </p>
                    <p>
                      Specialized engineering track in Robot Operating System (ROS 2), Autonomous Mobile Navigation, Path Planning, and Applied Machine Learning.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex items-center justify-between font-mono text-xs">
                  <span className="text-ink-muted dark:text-ink-mutedDark">Class of 2027</span>
                  <span className="text-ink-primary dark:text-ink-primaryDark font-medium">
                    Chennai, India
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================== */}
        {/* 06. CURRENTLY EXPLORING (Current Lab) */}
        {/* ================================================== */}
        <section aria-labelledby="exploring-heading" className="space-y-6 pt-6 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <Reveal>
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>06 // CURRENT LAB & INVESTIGATIONS</span>
              </div>
              <h2
                id="exploring-heading"
                className="text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark"
              >
                What I Am Actively Studying
              </h2>
              <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark max-w-2xl">
                These represent active learning trajectories and benchmark experiments currently in design, explicitly distinguished from completed production expertise.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ABOUT_DATA.exploring.map((topic, idx) => (
              <Reveal key={topic.id} delay={idx * 50}>
                <div className="h-full rounded-xl glass-surface p-5 border border-borderLine-light dark:border-borderLine-dark hover:border-ink-secondary/30 dark:hover:border-ink-secondaryDark/30 transition-all duration-150 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className="text-accent dark:text-accent-dark font-bold">
                        //{topic.label}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 rounded font-mono text-[9px] ${
                          topic.status === 'BENCHMARKING'
                            ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold'
                            : topic.status === 'EXPLORING'
                            ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold'
                            : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                        }`}
                      >
                        {topic.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-ink-primary dark:text-ink-primaryDark leading-snug">
                      {topic.title}
                    </h3>

                    <p className="text-xs text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark flex items-center justify-between font-mono text-[10px] text-ink-muted dark:text-ink-mutedDark">
                    <span>STATUS: IN PROGRESS</span>
                    <Link
                      to="/engineering"
                      className="text-accent hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Lab Notes</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* 07. PERSONAL ENGINEERING PROFILE */}
        {/* ================================================== */}
        <section aria-labelledby="profile-heading" className="pt-6 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <Reveal>
            <div className="rounded-xl glass-panel p-6 sm:p-10 border border-borderLine-light dark:border-borderLine-dark space-y-8">
              <div className="space-y-3 max-w-3xl">
                <div className="font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                  07 // IDENTITY FORMATION
                </div>
                <h2
                  id="profile-heading"
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark"
                >
                  {ABOUT_DATA.profile.heading}
                </h2>
                <p className="text-sm sm:text-base font-medium text-ink-secondary dark:text-ink-secondaryDark">
                  {ABOUT_DATA.profile.subheading}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Narrative */}
                <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                  {ABOUT_DATA.profile.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}

                  <div className="pt-2">
                    <div className="p-3.5 rounded-lg bg-surface-elevatedLight/50 dark:bg-surface-elevatedDark/50 border border-borderLine-subtleLight dark:border-borderLine-subtleDark font-mono text-xs flex items-start gap-2.5 text-ink-primary dark:text-ink-primaryDark">
                      <ShieldAlert className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">
                        I value building things deeply from foundational computer science over collecting superficial certificates or framework buzzwords.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Pillars */}
                <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                  {ABOUT_DATA.profile.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg glass-surface border border-borderLine-subtleLight dark:border-borderLine-subtleDark space-y-1"
                    >
                      <div className="font-semibold text-accent dark:text-accent-dark flex items-center gap-1.5">
                        <span>0{idx + 1}.</span>
                        <span>{pillar.label.toUpperCase()}</span>
                      </div>
                      <p className="text-[11px] font-sans text-ink-secondary dark:text-ink-secondaryDark leading-relaxed pl-4">
                        {pillar.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================================================== */}
        {/* 08. MINIMAL TECHNICAL CTA / CONTACT */}
        {/* ================================================== */}
        <section aria-labelledby="cta-heading" className="pt-6 border-t border-borderLine-subtleLight dark:border-borderLine-subtleDark">
          <Reveal>
            <div className="rounded-xl glass-surface p-6 sm:p-8 border border-borderLine-light dark:border-borderLine-dark flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
              <div className="space-y-2 max-w-xl">
                <div className="font-mono text-xs font-semibold text-accent dark:text-accent-dark uppercase tracking-wider">
                  08 // GET IN TOUCH
                </div>
                <h2
                  id="cta-heading"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-ink-primary dark:text-ink-primaryDark"
                >
                  {ABOUT_DATA.cta.heading}
                </h2>
                <p className="text-xs sm:text-sm text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
                  {ABOUT_DATA.cta.statement}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0 font-mono text-xs">
                <a href={`mailto:${SITE_CONFIG.email}`}>
                  <Button variant="primary" size="sm" className="gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </Button>
                </a>

                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-ink-muted dark:text-ink-mutedDark" />
                  </Button>
                </a>

                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-1.5">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-ink-muted dark:text-ink-mutedDark" />
                  </Button>
                </a>

                <a
                  href={SITE_CONFIG.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="glass" size="sm" className="gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-accent" />
                    <span>Resume (PDF)</span>
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </Container>
    </div>
  );
}
