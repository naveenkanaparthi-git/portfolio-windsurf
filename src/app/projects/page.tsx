"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Star, Zap, Search } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

interface Project {
  id: string;
  name: string;
  repo_name: string;
  description: string;
  github_url: string;
  category: string;
  tech_stack: string[];
  date: string;
  built_by_nexus: boolean;
  wow_factor: number;
  summary: string;
}

interface ProjectsData {
  last_updated: string;
  total_projects: number;
  projects: Project[];
}

export default function ProjectsPage() {
  const [data, setData] = useState<ProjectsData | null>(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects_data.json")
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const categories = data
    ? ["All", ...Array.from(new Set(data.projects.map((p) => p.category)))]
    : ["All"];

  const filtered = data?.projects.filter((p) => {
    const matchCat = category === "All" || p.category === category;
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tech_stack.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  }) ?? [];

  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">
            Data Engineering{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Production-grade projects built by the{" "}
            <span className="text-purple-400 font-mono font-semibold">NEXUS AI Agent</span> — auto-updated weekly.
          </p>
          {data && (
            <div className="mt-4 text-slate-600 text-sm font-mono">
              {data.total_projects} projects • last synced {data.last_updated.slice(0, 10)}
            </div>
          )}
        </AnimatedSection>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects, tech stack..."
              className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 placeholder:text-slate-600 text-sm outline-none focus:border-indigo-500/50 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  category === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 hover:border-indigo-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/3 rounded-2xl h-64 animate-pulse border border-white/5" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-600">
            <Zap size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg">
              {data?.total_projects === 0
                ? "NEXUS agent is generating the first project now..."
                : "No projects match your search."}
            </p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/3 border border-white/8 rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {project.built_by_nexus && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-mono">
                            NEXUS
                          </span>
                        )}
                        <span className="text-slate-600 text-xs font-mono">{project.date}</span>
                      </div>
                      <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-indigo-300 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 ml-2 shrink-0">
                      <Star size={13} fill="currentColor" />
                      <span className="text-xs font-mono">{project.wow_factor}</span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech_stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-indigo-500/10 text-cyan-400 border border-indigo-500/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech_stack.length > 4 && (
                      <span className="text-xs px-2 py-0.5 text-slate-600">
                        +{project.tech_stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                    <span className="text-xs px-2 py-1 rounded-lg bg-white/5 text-slate-500">
                      {project.category}
                    </span>
                    <div className="flex-1" />
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-500 hover:text-indigo-400 transition-colors text-sm"
                    >
                      <Github size={14} /> Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        <div className="text-center mt-10 text-slate-600 text-sm font-mono">
          Showing {filtered.length} of {data?.total_projects ?? 0} projects •{" "}
          <a
            href="https://github.com/naveenkanaparthi-git"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-500 hover:text-indigo-400 transition-colors"
          >
            github.com/naveenkanaparthi-git
          </a>
        </div>
      </div>
    </main>
  );
}
