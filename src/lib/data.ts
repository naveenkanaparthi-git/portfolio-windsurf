import { Person, Project, SkillCategory } from '@/types';
import personData from '@/data/person.json';
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';

export const person: Person = personData as Person;
export const projects: Project[] = projectsData as Project[];
export const skills: SkillCategory[] = skillsData as SkillCategory[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getProjectsByDomain(domain: string): Project[] {
  return projects.filter(project => 
    project.domain.toLowerCase().includes(domain.toLowerCase())
  );
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter(project => 
    project.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

export function getSkillsByCategory(category: string): SkillCategory | undefined {
  return skills.find(skillCategory => skillCategory.category === category);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return projects.slice(0, count);
}

export const skillCategories = [
  'Data Platforms',
  'Orchestration', 
  'Streaming',
  'Storage',
  'Infrastructure',
  'Languages',
  'Analytics'
] as const;
