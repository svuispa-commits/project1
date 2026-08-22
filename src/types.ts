export type ProjectCategory = 'all' | 'agentic' | 'fullstack' | 'devtools';

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  fullDescription: string;
  featured: boolean;
  architectureHighlights: string[];
  promptStrategy: {
    title: string;
    technique: string;
    description: string;
    snippet?: string;
  };
  metrics: ProjectMetric[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  badge: string;
  gradientTheme: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Advanced", "Production-grade", "Mastery"
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  colorAccent: string;
  badge: string;
  highlightSummary: string;
  skills: SkillItem[];
  codePreview: {
    language: string;
    title: string;
    code: string;
  };
}

export interface PromptDemoCase {
  id: string;
  title: string;
  category: string;
  userGoal: string;
  rawPrompt: string;
  optimizedPrompt: string;
  technique: string;
  rawOutput: string;
  optimizedOutput: string;
  analysis: {
    tokenReduction: string;
    reliability: string;
    latencyDelta: string;
    notes: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Open Source';
  description: string;
  achievements: string[];
  skills: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  content: string;
  highlight: string;
}
