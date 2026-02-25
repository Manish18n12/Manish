import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'gym-assistant',
    title: 'AI-Based Gym Assistant',
    description: 'An AI-powered application that detects body movement to count exercise repetitions in real time using computer vision techniques for form correction.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Machine Learning'],
    image: '', // Removed image as requested
  },
  {
    id: 'marine-monitoring',
    title: 'IoT Marine Monitoring',
    description: 'A marine monitoring system using Raspberry Pi to collect and monitor environmental data in real time with automated alert mechanisms.',
    tags: ['Raspberry Pi', 'Python', 'Sensors', 'IoT'],
    image: '', // Removed image as requested
  },
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Frontend' },
  { name: 'Java', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'C++', category: 'Frontend' },
  { name: 'React', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TensorFlow', category: 'Backend' },
  { name: 'MySQL', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'HTML/CSS', category: 'Design' },
  { name: 'DSA', category: 'Design' },
  { name: 'DBMS', category: 'Design' },
  { name: 'OODP', category: 'Design' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: '1Stop.ai',
    role: 'Web Development Intern',
    period: 'Internship — Virtual',
    description: 'Completed a virtual full-stack web development internship. Developed database-driven applications using PHP and MySQL with CRUD operations and authentication. Built responsive user interfaces using HTML, CSS, and JavaScript.',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Oracle Cloud Infrastructure 2025 – AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Oct 2025',
  },
  {
    title: 'Full Stack Development with React & Node.js',
    issuer: 'GeeksforGeeks',
    date: 'May 2025',
  },
  {
    title: 'NPTEL – Programming in Java (Elite)',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'Oct 2024',
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Manish18n12',
  linkedin: 'https://www.linkedin.com/in/manish-n-20b3b3293/',
  email: 'manish18n12@gmail.com',
  calendly: 'https://calendly.com/manish18n12/30min?preview_source=et_card&month=2026-02'
};
