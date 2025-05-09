export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  tags: string[];
};

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'AI Powered Code Reviewer',
    description: 'A tool that uses machine learning to automatically review code pull requests, suggest improvements, and identify potential bugs. Built with Python, TensorFlow, and integrated with GitHub Actions.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    imageHint: 'abstract code',
    githubUrl: 'https://github.com/your-username/ai-code-reviewer',
    liveDemoUrl: '#',
    tags: ['Python', 'TensorFlow', 'Machine Learning', 'DevOps'],
  },
  {
    id: '2',
    title: 'NextGen E-commerce Platform',
    description: 'A scalable e-commerce solution built with Next.js, TypeScript, and PostgreSQL. Features include personalized recommendations and a streamlined checkout process.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    imageHint: 'online shopping',
    githubUrl: 'https://github.com/your-username/nextgen-ecommerce',
    liveDemoUrl: '#',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'React'],
  },
  {
    id: '3',
    title: 'Portfolio Website (This one!)',
    description: 'My personal portfolio website designed to showcase my skills and projects. Built with Next.js and Tailwind CSS, featuring a clean, modern, and responsive design.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    imageHint: 'website design',
    githubUrl: 'https://github.com/your-username/portfolio-pro',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Portfolio'],
  },
];

export type SkillCategory = {
  name: string;
  skills: { name: string; level?: number }[]; // level 0-100 for progress bar
};

export const SKILLS_DATA: SkillCategory[] = [
  { 
    name: 'Programming Languages', 
    skills: [
      { name: 'TypeScript', level: 90 }, 
      { name: 'Python', level: 85 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'Java', level: 70 }
    ] 
  },
  { 
    name: 'Frameworks & Libraries', 
    skills: [
      { name: 'React', level: 95 }, 
      { name: 'Next.js', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'Tailwind CSS', level: 88 }
    ] 
  },
  { 
    name: 'Databases & Cloud', 
    skills: [
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'Firebase', level: 80 },
      { name: 'AWS', level: 60 }
    ]
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code', level: 95 }
    ]
  }
];

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  duration: string;
  descriptionPoints: string[];
  logoUrl?: string;
  logoHint?: string;
  tags?: string[];
};

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: '1',
    role: 'Senior AI Engineer',
    company: 'Innovatech Solutions',
    duration: 'Jan 2022 - Present',
    descriptionPoints: [
      'Led development of a cutting-edge NLP model, improving sentiment analysis accuracy by 15%.',
      'Designed and implemented scalable machine learning pipelines on AWS SageMaker.',
      'Collaborated with cross-functional teams to integrate AI features into flagship products.',
      'Mentored junior engineers in best practices for MLOps and model deployment.',
    ],
    logoUrl: 'https://picsum.photos/seed/company1/100/100',
    logoHint: 'modern office',
    tags: ['AI', 'NLP', 'AWS', 'Python', 'Leadership']
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Web Wizards Co.',
    duration: 'June 2020 - Dec 2021',
    descriptionPoints: [
      'Developed and maintained responsive web applications using React, Node.js, and Express.',
      'Built RESTful APIs and integrated with third-party services.',
      'Contributed to database design and optimization (PostgreSQL, MongoDB).',
      'Participated in Agile development cycles, including sprint planning and retrospectives.'
    ],
    logoUrl: 'https://picsum.photos/seed/company2/100/100',
    logoHint: 'creative workspace',
    tags: ['React', 'Node.js', 'Full Stack', 'Agile']
  },
];
