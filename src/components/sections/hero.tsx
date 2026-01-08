"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { person } from "@/lib/data";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showCTAs?: boolean;
  className?: string;
}

export function Hero({
  title = person.name,
  subtitle = person.title,
  description = person.shortBio,
  showCTAs = true,
  className = "",
}: HeroProps) {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          {/* Badge */}
          <Badge variant="secondary" className="mb-4">
            Available for new opportunities
          </Badge>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          {/* CTAs */}
          {showCTAs && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              
              <Button asChild variant="ghost" size="lg">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
