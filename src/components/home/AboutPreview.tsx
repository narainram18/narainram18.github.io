import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, Network } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants';

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 border-b border-borderLine-light dark:border-borderLine-dark">
      <SectionHeading
        number="01"
        tagline="ABOUT"
        title="Engineering Approach & Focus"
        description="Bridging theoretical computer science with production system mechanics."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Core Narrative */}
        <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-ink-secondary dark:text-ink-secondaryDark leading-relaxed">
          <p>
            I am a Computer Science undergraduate specializing in Artificial Intelligence and Robotics at{' '}
            <strong className="text-ink-primary dark:text-ink-primaryDark font-medium">VIT Chennai</strong> (Class of {SITE_CONFIG.graduationYear}, CGPA {SITE_CONFIG.cgpa}). My primary focus is on software engineering and the mechanics underlying scalable systems.
          </p>
          <p>
            Rather than treating frameworks as opaque black boxes, I am driven to understand what occurs underneath: from operating system thread pools and concurrency synchronization in C++, to relational query planning and network transport protocols like SSE and WebSockets.
          </p>
          <p>
            Through my internship at <strong className="text-ink-primary dark:text-ink-primaryDark font-medium">Eanwol</strong> and hands-on projects, I have engineered full-stack enterprise API services, local-first RAG pipelines with Qdrant and Spring Boot, and autonomous navigation architectures in ROS.
          </p>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-accent dark:text-accent-dark hover:underline font-medium group"
            >
              <span>More about my engineering background</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Technical Cornerstones Card */}
        <div className="lg:col-span-4 rounded-lg border border-borderLine-light dark:border-borderLine-dark bg-surface-light dark:bg-surface-dark p-5 space-y-4 font-mono text-xs">
          <div className="text-ink-primary dark:text-ink-primaryDark font-semibold uppercase tracking-wider text-[11px] pb-2 border-b border-borderLine-subtleLight dark:border-borderLine-subtleDark">
            Core Pillars
          </div>

          <div className="space-y-3.5">
            <div className="flex items-start gap-2.5">
              <Cpu className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-ink-primary dark:text-ink-primaryDark">Systems & Concurrency</div>
                <div className="text-ink-muted dark:text-ink-mutedDark text-[11px] font-sans">Thread pools, mutexes, memory allocation, POSIX primitives.</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Network className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-ink-primary dark:text-ink-primaryDark">Distributed APIs</div>
                <div className="text-ink-muted dark:text-ink-mutedDark text-[11px] font-sans">Spring Boot 3, zero-trust RBAC, RESTful contracts, SSE.</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Terminal className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-ink-primary dark:text-ink-primaryDark">Robotics & Vision</div>
                <div className="text-ink-muted dark:text-ink-mutedDark text-[11px] font-sans">ROS navigation stack, trajectory planning, real-time sensing.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
