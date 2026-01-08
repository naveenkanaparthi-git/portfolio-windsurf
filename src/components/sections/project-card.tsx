"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  showFullDescription?: boolean;
}

export function ProjectCard({ project, showFullDescription = false }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 h-full flex flex-col">
      {/* Cover Image */}
      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary/60">
            {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {project.role} • {project.timeline}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {showFullDescription ? project.problem : project.summary}
        </p>

        {/* Impact Metrics */}
        {project.impact && project.impact.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
              Impact
            </h4>
            <ul className="space-y-1">
              {project.impact.slice(0, 2).map((impact, index) => (
                <li key={index} className="text-sm text-foreground flex items-center">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></span>
{`${impact.metric}: ${impact.value}`}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <Button asChild variant="ghost" size="sm" className="group/btn">
            <Link href={`/projects/${project.slug}`}>
              {project.cta_label || "Read Case Study"}
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>

          {project.links?.github && (
            <Button asChild variant="ghost" size="sm">
              <Link 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View on GitHub"
              >
                <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
