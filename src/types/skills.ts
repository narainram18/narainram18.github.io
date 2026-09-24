export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    focus?: string;
  }[];
}
