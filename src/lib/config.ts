import type { LucideIcon } from 'lucide-react';
import { User, Briefcase, AppWindow, Mail } from 'lucide-react';

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  matchSegments?: string[]; // For active state matching, less relevant for single-page scroll
};

export const NAV_ITEMS: NavItem[] = [
  { href: '/#about', label: 'About & Skills', icon: User },
  { href: '/#experience', label: 'Experience', icon: Briefcase },
  { href: '/#projects', label: 'Projects', icon: AppWindow },
  { href: '/#contact', label: 'Contact', icon: Mail },
];

export const SITE_TITLE = "AI Portfolio Pro";
export const SITE_DESCRIPTION = "A modern, AI-enhanced portfolio showcasing skills, experience, and projects on a single, navigable page.";


export const SOCIAL_LINKS = {
  github: "https://github.com/your-username", // Replace with actual username
  linkedin: "https://linkedin.com/in/your-profile", // Replace with actual profile
};

export const RESUME_PATH = "/placeholder-resume.pdf"; // User should place their resume here in public folder
