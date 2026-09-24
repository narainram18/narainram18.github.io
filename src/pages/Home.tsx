import { Container } from '@/components/layout/Container';
import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { EngineeringPreview } from '@/components/home/EngineeringPreview';
import { SkillsMatrix } from '@/components/home/SkillsMatrix';
import { EducationExperience } from '@/components/home/EducationExperience';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Reveal } from '@/components/ui/Reveal';
import { usePageMetadata } from '@/hooks/usePageMetadata';

export function Home() {
  usePageMetadata(
    'Narain Ram R M — Software Engineer',
    'Software Engineer specializing in Systems, Networking, Robotics, and Applied AI. Systems architecture, project case studies, and engineering notes.'
  );

  return (
    <div className="flex-1 w-full">
      <Container size="lg">
        {/* 1. Hero with Interactive Engineering Topology */}
        <Hero />

        {/* 2. About Preview */}
        <Reveal>
          <AboutPreview />
        </Reveal>

        {/* 3. Featured Projects */}
        <FeaturedProjects />

        {/* 4. Engineering Notes & Experiments */}
        <Reveal>
          <EngineeringPreview />
        </Reveal>

        {/* 5. Technical Skills Matrix */}
        <Reveal>
          <SkillsMatrix />
        </Reveal>

        {/* 6. Education & Experience */}
        <Reveal>
          <EducationExperience />
        </Reveal>

        {/* 7. Contact CTA */}
        <Reveal>
          <ContactCTA />
        </Reveal>
      </Container>
    </div>
  );
}
