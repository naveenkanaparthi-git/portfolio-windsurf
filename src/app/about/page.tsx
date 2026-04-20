import { MapPin, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { person } from "@/lib/data";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "About",
  description: "Background, experience, and engineering philosophy of Naveen Kumar — Senior Data Engineer.",
  url: "/about",
});

const timeline = [
  {
    period: "Sep 2024 – Present",
    role: "Data Transformation Engineer",
    company: "Qualcomm Technologies Inc",
    via: "via TCS",
    current: true,
    achievements: [
      "Design and support production data workflows and automation for reporting and analytics",
      "Partner with cross-functional stakeholders to define data requirements and validate outputs",
      "Improve pipeline robustness through validation, monitoring, and operational best practices",
    ],
  },
  {
    period: "Nov 2023 – Aug 2024",
    role: "Data Engineer",
    company: "Apple Inc",
    via: "via TCS",
    current: false,
    achievements: [
      "Built and maintained data extraction and transformation workflows for analytics consumers",
      "Improved data quality through validation and repeatable checks across 95%+ schema coverage",
      "Collaborated with stakeholders to deliver reliable datasets enabling data-driven decisions",
    ],
  },
  {
    period: "Jan 2023 – Nov 2023",
    role: "Data Analyst",
    company: "Myriad Genetics",
    via: "",
    current: false,
    achievements: [
      "Developed Power BI & Tableau dashboards tracking key clinical metrics for 50+ users",
      "Wrote SQL queries for data extraction and validation processing 1M+ records/day",
      "Delivered actionable insights reducing report generation time by 75%",
    ],
  },
];

const principles = [
  { num: "01", title: "Reliability First",      body: "Data systems must be dependable. I design with failure modes in mind, implement comprehensive monitoring, and ensure graceful degradation at every layer." },
  { num: "02", title: "Performance Matters",    body: "Efficient data processing saves time and money. I optimize for query performance and resource utilization, treating compute cost as a product requirement." },
  { num: "03", title: "Quality by Design",      body: "Data quality issues compound quickly. Validation, testing, and observability are built into every pipeline from day one — not bolted on later." },
  { num: "04", title: "Scalable Architecture",  body: "Systems should grow with business needs. I design modular, extensible data platforms that handle increasing volumes without re-architecture." },
];

const certifications = [
  "Google Cloud Professional Data Engineer (In Progress)",
  "Apache Airflow Fundamentals",
  "Kafka Streams & ksqlDB",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080810] pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Page header ───────────────────────────────── */}
        <div className="mb-20">
          <span
            className="text-violet-400 text-xs tracking-[0.25em] uppercase block mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            About Me
          </span>
          <h1
            className="text-white mb-8"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            Data Engineer.<br />
            <span className="gradient-text">Problem Solver.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            {person.longBio}
          </p>
          <div className="flex items-center gap-2 mt-5 text-slate-600 text-sm">
            <MapPin size={13} />
            <span>{person.location}</span>
          </div>
        </div>

        <div className="divider mb-20" />

        {/* ── Engineering Principles ─────────────────────── */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              Engineering<br />Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {principles.map((p) => (
              <div
                key={p.num}
                className="bg-[#080810] hover:bg-[#0e0e1a] p-8 transition-colors duration-300"
              >
                <span
                  className="text-slate-700 text-xs block mb-5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {p.num}
                </span>
                <h3
                  className="text-white text-lg mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider mb-24" />

        {/* ── Experience Timeline ────────────────────────── */}
        <section className="mb-24">
          <h2
            className="text-white mb-14"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            Experience
          </h2>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/15 to-transparent hidden md:block" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  {/* dot */}
                  <div className="hidden md:flex flex-col items-center pt-1.5 shrink-0">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      item.current
                        ? "border-violet-400 bg-violet-400/20"
                        : "border-slate-700 bg-[#080810]"
                    }`}>
                      {item.current && (
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card p-8 hover:border-violet-500/15 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <h3
                          className="text-white text-lg mb-1"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                        >
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-violet-400 text-sm font-medium">{item.company}</span>
                          {item.via && (
                            <span className="text-slate-600 text-xs">{item.via}</span>
                          )}
                        </div>
                      </div>
                      <span
                        className={`shrink-0 text-xs px-3 py-1 rounded-full ${
                          item.current
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-white/[0.04] text-slate-500 border border-white/[0.07]"
                        }`}
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {item.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-500">
                          <span className="w-1 h-1 rounded-full bg-violet-500/60 mt-2 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider mb-24" />

        {/* ── Certifications & Interests ─────────────────── */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-8">
              <h3
                className="text-white text-base mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Certifications & Learning
              </h3>
              <ul className="flex flex-col gap-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-violet-500/60 mt-2 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3
                className="text-white text-base mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Interests & Community
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  "Open source contributions to data tools",
                  "Data engineering meetups and conferences",
                  "Technical writing and knowledge sharing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                    <span className="w-1 h-1 rounded-full bg-amber-500/60 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="divider mb-20" />

        {/* ── CTA ────────────────────────────────────────── */}
        <section className="text-center py-4">
          <h2
            className="text-white mb-5"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            Let&apos;s Build Something
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Always interested in challenging data engineering problems and innovative teams building the future of data-driven organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-bold rounded-xl hover:bg-violet-50 transition-all text-sm"
            >
              Get In Touch <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white font-semibold rounded-xl hover:border-white/30 hover:bg-white/[0.04] transition-all text-sm"
            >
              View Resume <ExternalLink size={14} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
