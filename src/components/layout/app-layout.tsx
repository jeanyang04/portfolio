// src/components/layout/app-layout.tsx
"use client";

import type { ReactNode } from 'react';
import { MainSidebar } from "./main-sidebar";
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { SITE_TITLE } from '@/lib/config';
import { cn } from '@/lib/utils';

// This component is used to conditionally render the mobile header.
// It needs to be a client component because useSidebar is a hook.
function MobileHeader() {
  const { isMobile } = useSidebar();

  if (!isMobile) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 md:hidden">
      <h1 className="text-lg font-semibold text-foreground">{SITE_TITLE}</h1>
      <SidebarTrigger />
    </header>
  );
}

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true} onOpenChange={(isOpen) => {
      // Optional: handle sidebar state changes, e.g., save to localStorage or cookie
      // The ui/sidebar component already handles cookie saving for desktop.
    }}>
      <Sidebar
        collapsible="icon"
        className={cn("border-sidebar-border bg-sidebar")} // Ensure sidebar has its own background
      >
        <MainSidebar />
      </Sidebar>
      <SidebarInset className="flex flex-col bg-background">
        <MobileHeader />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  );
}
