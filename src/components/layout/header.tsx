"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Stack",    href: "/stack"    },
  { name: "About",    href: "/about"    },
  { name: "Resume",   href: "/resume"   },
];

export function Header() {
  const pathname  = usePathname();
  const { setTheme, theme } = useTheme();
  const [mounted,    setMounted]    = React.useState(false);
  const [scrolled,   setScrolled]   = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when mobile menu open */
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Main header bar ──────────────────────────────── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500",
              scrolled
                ? "bg-[#08080f]/88 backdrop-blur-2xl border border-white/[0.07] shadow-2xl shadow-black/40"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-amber-500" />
                <span
                  className="relative z-10 text-[11px] font-bold text-white tracking-wide"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  NK
                </span>
              </div>
              <span
                className="hidden sm:block text-sm font-semibold text-white/90 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Naveen Kumar
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-200",
                    pathname === item.href
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  )}
                >
                  {pathname === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1.5">
              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  aria-label="Toggle theme"
                  className="p-2 rounded-xl text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
                </button>
              )}

              {/* Hire Me CTA */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-[13px] font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35"
              >
                Hire Me
                <ArrowUpRight size={13} />
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#0e0e1c] border-l border-white/[0.07] z-[70] flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.07]">
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Navigation
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/[0.06] text-slate-400 hover:text-white transition-all"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {[{ name: "Home", href: "/" }, ...navigation].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      pathname === item.href
                        ? "bg-violet-500/15 text-violet-300"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="p-4 border-t border-white/[0.07]">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-all"
                >
                  Hire Me
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
