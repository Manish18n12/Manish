export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
