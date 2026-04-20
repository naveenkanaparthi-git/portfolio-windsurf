"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { person } from "@/lib/data";

const socialLinks = [
  {
    name: "GitHub",
    href: person.social.github,
    icon: Github,
    handle: "@naveenkanaparthi-git",
    desc: "Code & open source",
  },
  {
    name: "LinkedIn",
    href: person.social.linkedin,
    icon: Linkedin,
    handle: "naveenkumar-data",
    desc: "Professional network",
  },
].filter((s): s is typeof s & { href: string } => typeof s.href === "string");

const faqs = [
  {
    q: "What type of roles are you looking for?",
    a: "Full-time data engineering, ML infrastructure, and cloud data platform roles. Open to both IC and tech-lead positions.",
  },
  {
    q: "Are you open to remote work?",
    a: "Absolutely. I have extensive experience with distributed teams and async collaboration across time zones.",
  },
  {
    q: "Are you available for consulting?",
    a: "Yes — especially for data architecture design, pipeline optimization, and team mentoring. Let's chat.",
  },
  {
    q: "What's your preferred tech stack?",
    a: "Python, SQL, Airflow/Dagster, Kafka, BigQuery/Snowflake, and GCP/AWS. See my Stack page for the full picture.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const subject = `${form.subject} (from ${form.name})`;
      const body    = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
      window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setSent(true);
      toast.success("Your email client should open with the message pre-filled.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Couldn't open your email client. Please email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080810] pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* ── Page header ───────────────────────────────── */}
        <div className="mb-20">
          <span
            className="text-violet-400 text-xs tracking-[0.25em] uppercase block mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Get In Touch
          </span>
          <h1
            className="text-white leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Let&apos;s<br />
            <span className="gradient-text">Talk.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
            I&apos;m always open to discussing data engineering opportunities,
            interesting projects, or anything in the data space.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── Form ─────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle size={40} className="text-emerald-400" />
                  <h3
                    className="text-white text-xl"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Your email client should have opened. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-violet-400 hover:text-violet-300 text-sm transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                  </div>
                  <Field label="Subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="What's on your mind?" required />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-400 mb-2"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or question…"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-700 outline-none focus:border-violet-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/20 text-sm"
                  >
                    {submitting ? "Opening email…" : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── Sidebar ───────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Contact info */}
            <div className="glass-card p-6">
              <h3
                className="text-white text-sm font-semibold mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact Information
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors">
                    <Mail size={15} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs" style={{ fontFamily: "var(--font-mono)" }}>Email</p>
                    <p className="text-white text-sm group-hover:text-violet-300 transition-colors">{person.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-slate-500" />
                  </div>
                  <div>
                    <p className="text-slate-600 text-xs" style={{ fontFamily: "var(--font-mono)" }}>Location</p>
                    <p className="text-white text-sm">{person.location}</p>
                  </div>
                </div>
              </div>

              {/* Response time badge */}
              <div className="mt-5 pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                    Usually responds within 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass-card p-6">
              <h3
                className="text-white text-sm font-semibold mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Connect Online
              </h3>
              <div className="flex flex-col gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] hover:border-violet-500/25 hover:bg-violet-500/[0.04] transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                      <s.icon size={14} className="text-slate-400 group-hover:text-violet-400 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium">{s.name}</p>
                      <p className="text-slate-600 text-xs truncate">{s.desc}</p>
                    </div>
                    <ArrowUpRight size={13} className="text-slate-700 group-hover:text-violet-400 transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQ ───────────────────────────────────────── */}
        <section className="mt-24">
          <div className="divider mb-16" />
          <h2
            className="text-white mb-10"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card p-7">
                <h4
                  className="text-white text-sm font-semibold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {faq.q}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {faq.a}
                  {i === 2 && (
                    <Link href="/stack" className="text-violet-400 hover:text-violet-300 ml-1 transition-colors">
                      my tech stack
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

/* ── Input field helper ───────────────────────────────── */
function Field({
  label, name, type, value, onChange, placeholder, required,
}: {
  label: string; name: string; type: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium text-slate-400 mb-2"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-700 outline-none focus:border-violet-500/50 transition-colors"
      />
    </div>
  );
}
