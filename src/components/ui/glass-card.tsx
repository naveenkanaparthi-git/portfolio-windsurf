"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function GlassCard({ 
  children, 
  className = "", 
  hover = true,
  gradient = false 
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20",
        "bg-white/10 backdrop-blur-xl",
        "dark:bg-black/10 dark:border-white/10",
        gradient && "bg-gradient-to-br from-white/20 to-white/5",
        gradient && "dark:from-white/10 dark:to-white/5",
        hover && "hover-lift cursor-pointer",
        className
      )}
      whileHover={hover ? { 
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
