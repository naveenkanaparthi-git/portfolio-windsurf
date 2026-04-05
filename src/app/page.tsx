"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Zap, Database, Cpu, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { person } from "@/lib/data";

const roles = [
  "Senior Data Engineer",
  "ML Pipeline Architect",
  "Data Platform Builder",
  "AI/ML Engineer",
  "Cloud Data Specialist",
];

const features = [
  {
    icon: Database,
    title: "Real-Time Streaming",
    description: "Kafka, Flink & Spark Streaming pipelines processing millions of events per second with sub-second latency.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Cpu,
    title: "Autonomous AI Agents",
    description: "NEXUS agent generates production-grade data engineering projects autonomously every 3 days. Zero manual effort.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: BarChart3,
    title: "Cloud Data Platforms",
    description: "End-to-end data lakehouse architectures on AWS & Azure with BigQuery, Snowflake, Delta Lake & dbt.",
    gradient: "from-purple-500 to-pink-600",
  },
];

const stats = [
  { label: "Years Experience", value: "4+", icon: "🚀" },
  { label: "Projects Built", value: "25+", icon: "⚡" },
  { label: "Technologies", value: "30+", icon: "🛠️" },
  { label: "AI Agents", value: "3", icon: "🤖" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-cyan-400 text-sm font-mono">
              <Zap size={12} className="animate-pulse" /> Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {person.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-4 font-light"
          >
            {person.title} • San Diego, CA
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building <span className="text-cyan-400 font-medium">autonomous AI agents</span> and{" "}
            <span className="text-indigo-400 font-medium">production-grade data pipelines</span>{" "}
            that power real-time analytics at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:border-indigo-500/50 hover:text-white px-8 py-3 rounded-xl bg-transparent">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-slate-400 hover:text-cyan-400 px-6 py-3">
              <a href={person.social.github} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-slate-400 hover:text-blue-400 px-6 py-3">
              <a href={person.social.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-indigo-500/30 transition-colors">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">What I Build</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Data Engineering Excellence</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              From raw data to production insights — building the infrastructure that powers modern AI applications
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.15} direction="up">
                <GlassCard className="p-8 h-full bg-white/3 border-white/8 hover:border-indigo-500/30 transition-colors">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${f.gradient} mb-6 flex items-center justify-center`}>
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{f.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-900/50 via-[#0a0a0f] to-purple-900/50 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open to Data Engineering Roles
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Looking for full-time opportunities in data engineering, ML infrastructure, and cloud data platforms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold">
                <Link href="/contact">
                  Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:border-indigo-500/50 hover:text-white px-8 py-3 rounded-xl bg-transparent">
                <Link href="/projects">See My Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
