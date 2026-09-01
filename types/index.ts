// Global TypeScript types for Portfolio

export interface ProjectItem {
  title: string;
  subtitle: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: string;
  features?: string[];
  overview?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}
