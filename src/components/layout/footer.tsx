"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { person } from "@/lib/data";

const nav = [
  { name: "Projects", href: "/projects" },
  { name: "Stack",    href: "/stack"    },
  { name: "About",    href: "/about"    },
  { name: "Resume",   href: "/resume"   },
  { name: "Contact",  href: "/contact"  },
];

const socials = [
  { name: "GitHub",   href: person.social.github,   icon: Github   },
  { name: "LinkedIn", href: person.social.linkedin,  icon: Linkedin },
  { name: "Email",    href: `mailto:${person.email}`, icon: Mail    },
].filter((s): s is typeof s & { href: string } => typeof s.href === "string");

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#08080f]">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Brand column */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-amber-500 flex items-center justify-center shrink-0">
                <span
                  className="text-[11px] font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  NK
                </span>
              </div>
              <span
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Naveen Kumar
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Senior Data Engineer building autonomous AI agents and
              production-grade data pipelines that power real-time analytics.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.name !== "Email" ? "_blank" : undefined}
                  rel={s.name !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={s.name}
                  className="p-2 rounded-xl border border-white/[0.07] text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16">
            <div>
              <p
                className="text-white text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Pages
              </p>
              <ul className="flex flex-col gap-3">
                {nav.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-500 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1 group"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="text-white text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${person.email}`}
                    className="text-slate-500 hover:text-violet-400 text-sm transition-colors"
                  >
                    {person.email}
                  </a>
                </li>
                <li>
                  <span className="text-slate-600 text-sm">{person.location}</span>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 transition-colors mt-1"
                  >
                    Send a message <ArrowUpRight size={12} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            © {year} Naveen Kumar · All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <Link href="/legal" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              Privacy
            </Link>
            <span className="text-slate-700">·</span>
            <p className="text-slate-700 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
