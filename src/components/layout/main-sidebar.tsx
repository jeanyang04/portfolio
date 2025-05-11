// src/components/layout/main-sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Keep for potential future use, but not primary for hash logic
import React, { useEffect, useState, useRef } from "react";
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
import { NAV_ITEMS, SOCIAL_LINKS, RESUME_PATH } from "@/lib/config";
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
    aria-label="Site Logo"
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
  const { state: sidebarState, isMobile, toggleSidebar } = useSidebar();
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0]?.href.substring(2) || 'about');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement | null>>(new Map());


  useEffect(() => {
    // Function to initialize or update refs for all navigable sections
    const updateSectionRefs = () => {
      NAV_ITEMS.forEach(item => {
        const sectionId = item.href.substring(2); // Assumes href is '/#sectionId'
        sectionRefs.current.set(sectionId, document.getElementById(sectionId));
      });
    };
    updateSectionRefs(); // Call on mount and potentially if NAV_ITEMS could change

    // Ensure IntersectionObserver is created only once
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Prioritize entry that is more visible or higher on the page
              // A more sophisticated logic might be needed if sections overlap visibility significantly
               if (entry.intersectionRatio > 0.1) { // Check if at least 10% of the section is visible
                 const newActiveSection = entry.target.id;
                 setActiveSection(newActiveSection);
                 // Optionally update URL hash without adding to history (for scroll-driven changes)
                 // history.replaceState(null, '', `#${newActiveSection}`); 
               }
            }
          });
        },
        {
          rootMargin: "-20% 0px -60% 0px", // Adjust based on where you want the highlight to trigger
          threshold: 0.1, // Trigger when 10% of the element is visible
        }
      );
    }
    const currentObserver = observerRef.current;

    // Observe sections
    sectionRefs.current.forEach(el => {
      if (el) currentObserver.observe(el);
    });
    
    // Handle hash changes from link clicks or manual URL input
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && sectionRefs.current.has(hash)) {
        setActiveSection(hash);
      } else if (!hash && NAV_ITEMS.length > 0) {
         // Default to the first item if hash is empty or invalid
        setActiveSection(NAV_ITEMS[0].href.substring(2));
      }
    };

    window.addEventListener("hashchange", handleHashChange, false);
    handleHashChange(); // Initial check

    return () => {
      currentObserver.disconnect();
      window.removeEventListener("hashchange", handleHashChange, false);
      observerRef.current = null; // Clean up observer instance on unmount
    };
  }, []); // NAV_ITEMS are static, so empty dependency array is fine.

  const isActive = (href: string) => {
    const sectionName = href.substring(2); // href is like '/#about'
    return activeSection === sectionName;
  };

  const isSidebarCollapsed = sidebarState === "collapsed" && !isMobile;

  return (
    <>
      <SidebarHeader className="p-4 flex items-center justify-between">
        <Link href="/#about" className="flex items-center gap-2 overflow-hidden" onClick={() => { if(isMobile) toggleSidebar();}}>
          <Logo />
          {/* SITE_TITLE removed from here */}
        </Link>
        {!isMobile && (
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
                  isActive={isActive(item.href)}
                  tooltip={{ children: item.label, className: "bg-popover text-popover-foreground border-border" }}
                  className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
                  onClick={() => {
                    if(isMobile) toggleSidebar();
                    // Manually set active section on click for immediate feedback, IntersectionObserver will confirm
                    const sectionId = item.href.substring(2);
                    setActiveSection(sectionId);
                  }}
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
