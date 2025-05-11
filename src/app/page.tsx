
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageWrapper } from '@/components/page-wrapper';
import { RESUME_PATH, SOCIAL_LINKS } from '@/lib/config';
import { SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Download, Github, Linkedin, Mail, Briefcase, Send } from 'lucide-react';
import { ProjectCard } from '@/components/project-card';
import { ContactForm } from '@/components/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Portfolio Pro - Showcase',
  description: 'Explore my skills, professional experience, projects, and contact information all on one page.',
};

export default function SinglePagePortfolio() {
  return (
    <main className="flex flex-col">
      {/* About Me & Skills Section */}
      <section id="about" className="min-h-screen pt-16 -mt-16"> {/* pt and -mt for scroll spy offset */}
        <PageWrapper title="About Me & Skills">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm leading-relaxed text-foreground/90"> {/* Font size reduced */}
                    Hello! I&apos;m a passionate and results-driven professional with a strong background in AI and software development. 
                    My journey in tech has been fueled by a relentless curiosity and a desire to build innovative solutions that tackle real-world problems.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90"> {/* Font size reduced and margin adjusted */}
                    I specialize in creating intelligent applications, leveraging cutting-edge technologies like machine learning, natural language processing, and full-stack web development. 
                    I thrive in collaborative environments and am always eager to learn and adapt to new challenges.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90"> {/* Font size reduced and margin adjusted */}
                    This portfolio is a showcase of my skills, projects, and experiences. Feel free to explore and get in touch!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {SKILLS_DATA.map((category) => (
                    <div key={category.name}>
                      <h3 className="text-lg font-semibold text-primary mb-3">{category.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge 
                            key={skill.name} 
                            variant="secondary" 
                            className="text-sm bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors px-3 py-1"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                  {SKILLS_DATA.length === 0 && (
                     <p className="text-muted-foreground">Skills information coming soon!</p>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="order-first lg:order-none space-y-6 lg:col-span-1">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Image
                    src="https://picsum.photos/seed/profile/300/300"
                    alt="Profile Picture"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4 border-4 border-primary shadow-lg"
                    data-ai-hint="professional person"
                  />
                  <h2 className="text-2xl font-semibold text-foreground">Your Name</h2>
                  <p className="text-primary">AI Enthusiast & Software Developer</p>
                  <div className="mt-4 flex justify-center space-x-3">
                    <Button variant="outline" size="icon" asChild className="text-foreground hover:text-primary hover:border-primary">
                      <Link href={SOCIAL_LINKS.github} target="_blank" aria-label="GitHub">
                        <Github />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="text-foreground hover:text-primary hover:border-primary">
                      <Link href={SOCIAL_LINKS.linkedin} target="_blank" aria-label="LinkedIn">
                        <Linkedin />
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-6 space-y-2">
                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href={RESUME_PATH} target="_blank" download="resume.pdf">
                        <Download className="mr-2 h-4 w-4" /> Download Resume
                      </Link>
                    </Button>
                    <Button asChild className="w-full" variant="outline">
                      <Link href="/#contact">
                        <Mail className="mr-2 h-4 w-4" /> Contact Me
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-foreground/80">
                    <li>Exploring new AI research papers</li>
                    <li>Contributing to open-source projects</li>
                    <li>Futuristic technology trends</li>
                    <li>Hiking and outdoor activities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </PageWrapper>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen pt-16 -mt-16">
        <PageWrapper
          title="Professional Experience"
          description="A timeline of my career, highlighting key roles and contributions."
        >
          <div className="space-y-8">
            {EXPERIENCE_DATA.map((entry) => (
              <Card key={entry.id} className="overflow-hidden shadow-md hover:shadow-primary/10 transition-shadow duration-300">
                <CardHeader className="bg-card/50 p-4 sm:p-6 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-semibold text-primary">{entry.role}</CardTitle>
                      <p className="text-md font-medium text-foreground">{entry.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{entry.duration}</p>
                    </div>
                    {entry.logoUrl && (
                      <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-md overflow-hidden border border-border shrink-0 self-start sm:self-center">
                        <Image
                          src={entry.logoUrl}
                          alt={`${entry.company} logo`}
                          layout="fill"
                          objectFit="contain"
                          data-ai-hint={entry.logoHint || 'company logo'}
                        />
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-foreground/90">
                    {entry.descriptionPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
            {EXPERIENCE_DATA.length === 0 && (
              <div className="text-center py-10">
                <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">Professional experience will be listed here soon.</p>
              </div>
            )}
          </div>
        </PageWrapper>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen pt-16 -mt-16">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen pt-16 -mt-16">
        <PageWrapper
          title="Contact Me"
          description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Other Ways to Connect</h3>
              <p className="text-muted-foreground">
                If you prefer, you can also find me on these platforms:
              </p>
              <div className="space-y-3">
                <Button variant="outline" asChild className="w-full justify-start gap-3 text-foreground hover:text-primary hover:border-primary">
                  <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 text-primary" />
                    LinkedIn Profile
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start gap-3 text-foreground hover:text-primary hover:border-primary">
                  <Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-primary" />
                    GitHub Profile
                  </Link>
                </Button>
                 <Button variant="outline" asChild className="w-full justify-start gap-3 text-foreground hover:text-primary hover:border-primary">
                  <Link href="mailto:your-email@example.com"> {/* Replace with actual email */}
                    <Mail className="h-5 w-5 text-primary" />
                    your-email@example.com {/* Replace with actual email */}
                  </Link>
                </Button>
              </div>
              <div className="mt-8 p-4 border border-dashed border-border rounded-lg">
                <h4 className="font-semibold text-foreground">Availability</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  I typically respond within 24-48 hours. For urgent matters, please indicate so in your message.
                </p>
              </div>
            </div>
          </div>
        </PageWrapper>
      </section>
    </main>
  );
}
