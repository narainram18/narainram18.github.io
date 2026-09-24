export interface TechnicalDecision {
  topic: string;
  problem: string;
  optionsConsidered: string[];
  chosenOption: string;
  rationale: string;
  tradeoffs: string;
}

export interface ArchitectureLayer {
  layer: string;
  title: string;
  components: string[];
  description: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  layer: string;
  status?: string;
}

export interface ArchitectureConnection {
  from: string;
  to: string;
  label: string;
}

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectScreenshot {
  url: string;
  caption: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Systems' | 'Distributed Systems' | 'Robotics' | 'AI & Systems' | 'Developer Tools';
  year: string;
  summary: string;
  featured: boolean;
  status: 'Production' | 'Complete' | 'Active Exploration';
  technologies: string[];
  metrics?: MetricItem[];
  githubUrl?: string;
  demoUrl?: string;
  overview: string;
  problem: string;
  architecture: {
    overview: string;
    layers: ArchitectureLayer[];
    dataFlow: string[];
    nodes?: ArchitectureNode[];
    connections?: ArchitectureConnection[];
    asciiDiagram?: string;
  };
  implementation: {
    title: string;
    description: string;
    highlights: string[];
  }[];
  technicalDecisions: TechnicalDecision[];
  challenges: {
    challenge: string;
    resolution: string;
  }[];
  results: string[];
  screenshots?: ProjectScreenshot[];
  lessonsLearned: string[];
}
