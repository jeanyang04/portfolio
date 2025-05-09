
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageWrapper } from '@/components/page-wrapper';
import { RESUME_PATH, SOCIAL_LINKS } from '@/lib/config';
import { SKILLS_DATA } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Download, Github, Linkedin } from 'lucide-react';

export default function AboutPage() {
  return (
    <PageWrapper title="About Me">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-md leading-relaxed text-foreground/90">
                Hello! I&apos;m a passionate and results-driven professional with a strong background in AI and software development. 
                My journey in tech has been fueled by a relentless curiosity and a desire to build innovative solutions that tackle real-world problems.
              </p>
              <p className="mt-4 text-md leading-relaxed text-foreground/90">
                I specialize in creating intelligent applications, leveraging cutting-edge technologies like machine learning, natural language processing, and full-stack web development. 
                I thrive in collaborative environments and am always eager to learn and adapt to new challenges.
              </p>
              <p className="mt-4 text-md leading-relaxed text-foreground/90">
                This portfolio is a showcase of my skills, projects, and experiences. Feel free to explore and get in touch!
              </p>
            </CardContent>
          </Card>

          {/* Technical Skills Section */}
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
              <Button asChild className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={RESUME_PATH} target="_blank" download="resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
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
  );
}
