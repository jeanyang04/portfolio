// src/components/layout/main-sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SITE_TITLE, SOCIAL_LINKS, RESUME_PATH } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Github, Linkedin, FileText, PanelLeft } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

const Logo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary shrink-0"
    aria-label="AI Portfolio Pro Logo"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export function MainSidebar() {
  const pathname = usePathname();
  const { state: sidebarState, isMobile, toggleSidebar } = useSidebar();

  const isActive = (href: string, matchSegments?: string[]) => {
    if (href === '/') {
      // Special handling for the root path to avoid matching all sub-paths
      return pathname === '/';
    }
    if (matchSegments) {
      const currentSegment = pathname.split('/')[1] || '';
      return matchSegments.includes(currentSegment);
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isSidebarCollapsed = sidebarState === "collapsed" && !isMobile;

  return (
    <>
      <SidebarHeader className="p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 overflow-hidden">
          <Logo />
          <span className={cn(
            "font-semibold text-lg text-foreground whitespace-nowrap transition-opacity duration-300",
            isSidebarCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          )}>
            {SITE_TITLE}
          </span>
        </Link>
        {!isMobile && ( // Show desktop toggle only
           <Button variant="ghost" size="icon" onClick={toggleSidebar} className={cn("text-sidebar-foreground hover:text-primary", isSidebarCollapsed && "rotate-180")}>
             <PanelLeft />
           </Button>
        )}
      </SidebarHeader>
      <SidebarContent className="p-2 flex-1">
        <SidebarMenu>
          {NAV_ITEMS.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.href, item.matchSegments)}
                  tooltip={{ children: item.label, className: "bg-popover text-popover-foreground border-border" }}
                  className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
                >
                  <a>
                    <item.icon className="shrink-0" />
                    <span className={cn(isSidebarCollapsed && "sr-only")}>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className="p-4 space-y-3">
        <Button
          variant="outline"
          className={cn(
            "w-full justify-center gap-2",
            "border-primary text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary",
            !isSidebarCollapsed && "sm:justify-start" 
          )}
          asChild
        >
          <Link href={RESUME_PATH} target="_blank" rel="noopener noreferrer" download="resume.pdf">
            <FileText className="shrink-0" />
            <span className={cn(isSidebarCollapsed && "sr-only")}>Resume</span>
          </Link>
        </Button>
        <div className={cn(
          "flex items-center gap-2",
          isSidebarCollapsed ? "justify-center" : "justify-start"
        )}>
            <Button variant="ghost" size="icon" asChild className="text-sidebar-foreground hover:text-primary">
              <Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20}/>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-sidebar-foreground hover:text-primary">
              <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20}/>
              </Link>
            </Button>
        </div>
      </SidebarFooter>
    </>
  );
}
