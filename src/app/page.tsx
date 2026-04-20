"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Github, Linkedin, Database, Cpu, BarChart3,
  ChevronDown, Layers, GitBranch, Activity,
} from "lucide-react";
import Link from "next/link";
import { person } from "@/lib/data";

/* ── Data ─────────────────────────────────────────────── */
const techTicker = [
  "Python", "Apache Kafka", "Apache Spark", "BigQuery",
  "Airflow", "dbt", "Terraform", "GCP", "AWS", "Azure",
  "Kubernetes", "Docker", "PostgreSQL", "Databricks", "Delta Lake",
];

const stats = [
  { value: "4+",  label: "Years Exp."    },
  { value: "25+", label: "Projects"      },
  { value: "30+", label: "Technologies"  },
  { value: "3",   label: "AI Agents"     },
];

const features = [
  {
    icon: Database,
    num: "01",
    title: "Real-Time Streaming",
    body: "Kafka, Flink & Spark Streaming pipelines processing 500K+ events/sec with sub-second latency.",
    accent: "#8b5cf6",
  },
  {
    icon: Cpu,
    num: "02",
    title: "Autonomous AI Agents",
    body: "NEXUS autonomously generates production-grade data engineering projects every 3 days. Zero manual effort.",
    accent: "#f59e0b",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "Cloud Data Platforms",
    body: "End-to-end lakehouse architectures on AWS, GCP & Azure with Delta Lake, dbt and Snowflake.",
    accent: "#34d399",
  },
];

const bento = [
  {
    icon: Layers,
    title: "Medallion Architecture",
    body: "Bronze → Silver → Gold layers built for reliability, SLA ≥ 99.9%.",
    span: "md:col-span-1",
  },
  {
    icon: GitBranch,
    title: "CI/CD Data Pipelines",
    body: "Automated testing, schema validation & blue-green deployments.",
    span: "md:col-span-1",
  },
  {
    icon: Activity,
    title: "Observability First",
    body: "Prometheus + Grafana dashboards with anomaly detection and lineage tracking.",
    span: "md:col-span-1",
  },
];

/* ── Animation Variants ───────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ── Component ────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080810]">

      {/* ╔══════════════════════════════════════════════╗
          ║   HERO                                       ║
          ╚══════════════════════════════════════════════╝ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

        {/* Background layer */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

        {/* Ambient orbs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%", right: "5%",
            width: 640, height: 640,
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "5%", left: "0%",
            width: 480, height: 480,
            background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24">

          {/* Status badge */}
          <motion.div {...fadeUp(0)} className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8 text-emerald-400 text-xs tracking-wide"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Open to Data Engineering Roles · San Diego, CA
            </span>
          </motion.div>

          {/* Name headline */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-white leading-[0.92] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(3.2rem, 11vw, 9rem)",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
              }}
            >
              Hi, I&apos;m<br />
              <span className="gradient-text">Naveen</span>
              <span className="text-white"> Kumar</span>
            </motion.h1>
          </div>

          {/* Role + bio + CTA row */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex flex-col lg:flex-row lg:items-end gap-10 mb-14"
          >
            <div className="lg:flex-1 max-w-xl">
              <p
                className="text-violet-400 text-xs tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {person.title}
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                Building{" "}
                <span className="text-white font-medium">autonomous AI agents</span> and{" "}
                <span className="text-white font-medium">production-grade data pipelines</span>{" "}
                that power real-time analytics at enterprise scale.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black text-sm font-bold rounded-xl hover:bg-violet-50 transition-all duration-200"
              >
                View Work
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 text-white text-sm font-semibold rounded-xl hover:border-white/30 hover:bg-white/[0.04] transition-all duration-200"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Stats + social */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-white/[0.07]"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span
                  className="text-white font-bold"
                  style={{ fontSize: "1.75rem", fontFamily: "var(--font-display)" }}
                >
                  {s.value}
                </span>
                <span className="text-slate-500 text-sm">{s.label}</span>
              </div>
            ))}

            <div className="ml-auto flex items-center gap-2">
              <a
                href={person.social.github}
                target="_blank" rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/[0.08] text-slate-500 hover:text-white hover:border-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={person.social.linkedin}
                target="_blank" rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/[0.08] text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Scroll
          </span>
          <ChevronDown size={14} className="animate-bounce" />
        </motion.div>
      </section>

      {/* ╔══════════════════════════════════════════════╗
          ║   TECH TICKER                                ║
          ╚══════════════════════════════════════════════╝ */}
      <section className="py-5 border-y border-white/[0.06] bg-[#0a0a14] overflow-hidden">
        <div className="flex animate-marquee">
          {[...techTicker, ...techTicker].map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-6 text-slate-500 text-sm shrink-0"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="w-1 h-1 bg-violet-500/60 rounded-full shrink-0" />
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════╗
          ║   WHAT I BUILD — 3-column feature strip     ║
          ╚══════════════════════════════════════════════╝ */}
      <section className="py-32 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span
                className="text-violet-400 text-xs tracking-[0.25em] uppercase block mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Expertise
              </span>
              <h2
                className="text-white leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                }}
              >
                What I<br />Build
              </h2>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed text-sm">
              From raw data ingestion to production insights — architecting the infrastructure that powers modern AI applications.
            </p>
          </div>

          {/* Feature grid: divided by hairlines */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-10 bg-[#080810] hover:bg-[#0e0e1a] transition-colors duration-300 flex flex-col gap-8"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-slate-700 text-xs"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {f.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${f.accent}14`,
                      border: `1px solid ${f.accent}25`,
                    }}
                  >
                    <f.icon size={18} style={{ color: f.accent }} />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-white text-lg mb-3"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional bento tiles */}
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {bento.map((b) => (
              <div
                key={b.title}
                className={`glass-card p-7 flex flex-col gap-3 hover:border-violet-500/20 transition-all duration-300 ${b.span}`}
              >
                <b.icon size={18} className="text-violet-400" />
                <h4
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {b.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════╗
          ║   CTA BANNER                                 ║
          ╚══════════════════════════════════════════════╝ */}
      <section className="py-32 px-6 bg-[#080810]">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.07] text-center py-20 px-8">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-[#080810] to-amber-950/30 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            {/* Orb decoration */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "-20%", left: "50%", transform: "translateX(-50%)",
                width: 600, height: 300,
                background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            <div className="relative z-10">
              <span
                className="text-violet-400 text-xs tracking-[0.25em] uppercase block mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Available Now
              </span>
              <h2
                className="text-white mb-6"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.75rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Open to Data<br />Engineering Roles
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                Seeking full-time opportunities in data engineering, ML infrastructure, and cloud data platforms.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-violet-50 transition-all duration-200 text-sm"
                >
                  Start a Conversation
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white font-semibold rounded-xl hover:border-white/30 hover:bg-white/[0.04] transition-all duration-200 text-sm"
                >
                  See My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
