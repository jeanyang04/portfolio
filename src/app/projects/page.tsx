import { PageWrapper } from '@/components/page-wrapper';
import { ProjectCard } from '@/components/project-card';
import { PROJECTS_DATA } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my projects, demonstrating my skills and experience in various technologies.',
};

export default function ProjectsPage() {
  return (
    <PageWrapper
      title="My Projects"
      description="Here are some of the projects I've worked on, showcasing my skills and passion for building innovative solutions."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {PROJECTS_DATA.length === 0 && (
        <p className="text-center text-muted-foreground">No projects to display yet. Check back soon!</p>
      )}
    </PageWrapper>
  );
}
