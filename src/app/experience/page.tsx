import Image from 'next/image';
import { PageWrapper } from '@/components/page-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCE_DATA } from '@/lib/data';
import type { Metadata } from 'next';
import { Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'My professional journey, detailing roles, responsibilities, and achievements.',
};

export default function ExperiencePage() {
  return (
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
  );
}
