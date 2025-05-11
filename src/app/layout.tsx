import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; // Removed as it's not directly used and font-family is set in globals.css
import './globals.css'; // Ensure globals.css is imported before layout components
import { AppLayout } from '@/components/layout/app-layout';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/lib/config';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION, // Updated via lib/config.ts
  // Add more metadata as needed: openGraph, icons, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} style={{scrollBehavior: 'smooth'}}>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
