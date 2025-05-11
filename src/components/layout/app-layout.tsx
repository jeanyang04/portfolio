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
// SITE_TITLE import removed as it's no longer used directly in this component's UI
import { cn } from '@/lib/utils';

// This component is used to conditionally render the mobile header.
// It needs to be a client component because useSidebar is a hook.
function MobileHeader() {
  const { isMobile } = useSidebar();

  if (!isMobile) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-end gap-4 border-b bg-background px-4 md:hidden">
      {/* SITE_TITLE h1 removed */}
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
        collapsible="icon" // This enables icon-only collapse
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
