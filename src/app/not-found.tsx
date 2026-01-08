import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="container max-w-2xl mx-auto px-4 py-20">
      <div className="text-center">
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              <Search className="mr-2 h-4 w-4" />
              Browse Projects
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4">Popular Pages</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link 
                href="/projects" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="/stack" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Tech Stack
              </Link>
              <Link 
                href="/about" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Me
              </Link>
              <Link 
                href="/contact" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="mt-8">
          <Button 
            variant="ghost" 
            asChild
            className="gap-2"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
