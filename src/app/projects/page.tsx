"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/data";

const domains = ["All", "ETL", "Real-time", "MLOps", "Analytics"];
const technologies = ["All", "Python", "Dagster", "Airflow", "Kafka", "BigQuery", "Snowflake", "dbt", "AWS", "GCP", "Azure", "Databricks", "Spark", "Terraform", "Delta Lake", "Great Expectations"];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDomain = 
      selectedDomain === "All" || 
      project.domain.toLowerCase().includes(selectedDomain.toLowerCase());
    
    const matchesTech = 
      selectedTech === "All" || 
      project.tags.some(tag => tag.toLowerCase().includes(selectedTech.toLowerCase()));

    return matchesSearch && matchesDomain && matchesTech;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedDomain("All");
    setSelectedTech("All");
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive collection of data engineering projects demonstrating expertise in 
          pipeline development, real-time analytics, MLOps, and scalable data architectures.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Domain Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Domain: {selectedDomain}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {domains.map((domain) => (
                <DropdownMenuItem
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                >
                  {domain}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Technology Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Tech: {selectedTech}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {technologies.map((tech) => (
                <DropdownMenuItem
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Clear Filters */}
          {(searchQuery || selectedDomain !== "All" || selectedTech !== "All") && (
            <Button variant="ghost" onClick={clearFilters}>
              Clear All
            </Button>
          )}
        </div>

        {/* Active Filters */}
        <div className="flex flex-wrap gap-2">
          {searchQuery && (
            <Badge variant="secondary" className="gap-1">
              Search: {searchQuery}
              <button
                onClick={() => setSearchQuery("")}
                className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
              >
                ×
              </button>
            </Badge>
          )}
          {selectedDomain !== "All" && (
            <Badge variant="secondary" className="gap-1">
              Domain: {selectedDomain}
              <button
                onClick={() => setSelectedDomain("All")}
                className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
              >
                ×
              </button>
            </Badge>
          )}
          {selectedTech !== "All" && (
            <Badge variant="secondary" className="gap-1">
              Tech: {selectedTech}
              <button
                onClick={() => setSelectedTech("All")}
                className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
              >
                ×
              </button>
            </Badge>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No projects found matching your criteria.</p>
          <Button onClick={clearFilters}>Clear Filters</Button>
        </div>
      )}
    </div>
  );
}
