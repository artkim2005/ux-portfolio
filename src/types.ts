export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  heroColor: string;
  overview: string;
  role: string;
  duration: string;
  team: string;
  problem: string;
  process: ProcessStep[];
  outcomes: Outcome[];
  learnings: string;
  coverLink: string;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
}

export interface Outcome {
  metric: string;
  value: string;
  description: string;
}
