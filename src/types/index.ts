export interface Person {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    x?: string;
    medium?: string;
    kaggle?: string;
  };
  bio: string;
  shortBio: string;
  longBio: string;
  resumeUrl?: string;
  avatar?: string;
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  role: string;
  timeline: string;
  domain: string;
  tags: string[];
  impact: Array<{
    metric: string;
    value: string;
    trend: "up" | "down";
  }>;
  problem: string;
  solution_overview: string;
  architecture?: Array<{
    src: string;
    alt: string;
  }>;
  tech_stack: string[];
  my_contributions: string[];
  challenges?: string[];
  code_snippets?: Array<{
    language: string;
    caption: string;
    code: string;
  }>;
  results: string[];
  lessons?: string[];
  links?: {
    github?: string;
    blog?: string;
    video?: string;
    slides?: string;
    caseStudy?: string;
  };
  cta_label?: string;
  cover_image: {
    src: string;
    alt: string;
  };
}

export interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  publishedAt: string;
  readingMinutes: number;
  coverImage?: {
    src: string;
    alt: string;
  };
  tags: string[];
  content: string;
}

export interface SkillCategory {
  category: string;
  skills: Array<{
    name: string;
    proficiency: string;
    description: string;
    icon: string;
    logo?: string;
  }>;
}

export interface Skill {
  name: string;
  category: 'Data Platforms' | 'Orchestration' | 'Streaming' | 'Storage' | 'Infrastructure' | 'Languages' | 'Analytics';
  level: 'Working' | 'Proficient' | 'Expert';
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  timeline: string;
  description: string;
  achievements: string[];
}

export interface StatCard {
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: string;
}
