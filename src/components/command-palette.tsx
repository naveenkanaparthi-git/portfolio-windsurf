"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, User, Briefcase, Mail, Download } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { projects } from "@/lib/data";

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  group: string;
}

const staticCommands: CommandItem[] = [
  {
    id: "home",
    title: "Home",
    description: "Go to homepage",
    href: "/",
    icon: User,
    group: "Navigation",
  },
  {
    id: "projects",
    title: "Projects",
    description: "View all projects",
    href: "/projects",
    icon: Briefcase,
    group: "Navigation",
  },
  {
    id: "stack",
    title: "Tech Stack",
    description: "View skills and technologies",
    href: "/stack",
    icon: FileText,
    group: "Navigation",
  },
  {
    id: "about",
    title: "About",
    description: "Learn more about me",
    href: "/about",
    icon: User,
    group: "Navigation",
  },
  {
    id: "resume",
    title: "Resume",
    description: "View and download resume",
    href: "/resume",
    icon: Download,
    group: "Navigation",
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch",
    href: "/contact",
    icon: Mail,
    group: "Navigation",
  },
];

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  // Generate project commands
  const projectCommands: CommandItem[] = projects.map((project) => ({
    id: `project-${project.slug}`,
    title: project.title,
    description: project.summary,
    href: `/projects/${project.slug}`,
    icon: Briefcase,
    group: "Projects",
  }));

  const allCommands = [...staticCommands, ...projectCommands];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Navigation">
          {staticCommands.map((command) => (
            <CommandItem
              key={command.id}
              value={command.title}
              onSelect={() => {
                runCommand(() => router.push(command.href));
              }}
            >
              <command.icon className="mr-2 h-4 w-4" />
              <span>{command.title}</span>
              {command.description && (
                <span className="ml-auto text-xs text-muted-foreground">
                  {command.description}
                </span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Projects">
          {projectCommands.map((command) => (
            <CommandItem
              key={command.id}
              value={command.title}
              onSelect={() => {
                runCommand(() => router.push(command.href));
              }}
            >
              <command.icon className="mr-2 h-4 w-4" />
              <span>{command.title}</span>
              <span className="ml-auto text-xs text-muted-foreground truncate max-w-[200px]">
                {command.description}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

// Hook to trigger command palette
export function useCommandPalette() {
  const [open, setOpen] = React.useState(false);

  const toggle = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return { open, setOpen, toggle };
}
