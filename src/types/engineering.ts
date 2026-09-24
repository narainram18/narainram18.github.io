export type EngineeringCategory =
  | 'Systems'
  | 'Networking'
  | 'Distributed Systems'
  | 'Algorithms'
  | 'Robotics';

export type EngineeringStatus =
  | 'Completed'
  | 'Active Investigation'
  | 'Planned Experiment';

export interface CodeSnippetItem {
  language: string;
  code: string;
  caption?: string;
}

export interface EngineeringEntry {
  slug: string;
  title: string;
  category: EngineeringCategory;
  summary: string;
  abstract: string; // Backward-compatible alias
  status: EngineeringStatus;
  date: string;
  readTime: string;
  topics: string[];
  tags: string[]; // Backward-compatible alias
  featured: boolean;

  // Deep-dive investigation sections
  context?: string;
  question?: string;
  approach?: string;
  observations?: string[];
  results?: string[];
  keyInsights: string[];
  codeSnippet?: CodeSnippetItem;

  // Inter-system relationship
  relatedProjectSlug?: string;
  isPlaceholder?: boolean;
}

export type EngineeringNote = EngineeringEntry;
