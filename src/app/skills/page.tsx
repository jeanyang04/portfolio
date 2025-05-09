import { PageWrapper } from '@/components/page-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SKILLS_DATA } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'An overview of my technical skills and proficiencies across various domains.',
};

export default function SkillsPage() {
  return (
    <PageWrapper
      title="Technical Skills"
      description="A snapshot of my expertise across different technologies and tools."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS_DATA.map((category) => (
          <Card key={category.name} className="shadow-md hover:shadow-primary/10 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      {skill.level !== undefined && (
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      )}
                    </div>
                    {skill.level !== undefined ? (
                       <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2 [&>div]:bg-primary" />
                    ) : (
                      <div className="h-2 bg-muted rounded-full"></div> // Placeholder for skills without a level
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      {SKILLS_DATA.length === 0 && (
         <p className="text-center text-muted-foreground">Skills information coming soon!</p>
      )}
    </PageWrapper>
  );
}
