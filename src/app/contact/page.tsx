import { PageWrapper } from '@/components/page-wrapper';
import { ContactForm } from '@/components/contact-form';
import { SOCIAL_LINKS } from '@/lib/config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for collaborations, questions, or just to say hi!',
};

export default function ContactPage() {
  return (
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
  );
}
