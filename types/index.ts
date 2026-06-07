export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  techs: string[];
  github: string;
  live: string;
}

export interface Experience {
  date: string;
  role: string;
  org: string;
  points: string[];
  color: 'cyan' | 'violet';
}

export interface SkillGroup {
  category: string;
  color: 'cyan' | 'violet';
  skills: string[];
}

export interface StatCard {
  value?: string;
  label: string;
  subtext?: string;
}
