import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Users, ExternalLink, Github, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { generateMetadata as generateMeta } from "@/lib/metadata";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    return generateMeta({
      title: "Project Not Found",
      description: "The requested project could not be found.",
    });
  }

  return generateMeta({
    title: project.title,
    description: project.summary,
    url: `/projects/${project.slug}`,
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="ghost" asChild className="gap-2">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Cover */}
      <div className="mb-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border bg-muted">
          <Image
            src={project.cover_image.src}
            alt={project.cover_image.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{project.summary}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{project.timeline}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{project.domain}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{project.role}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Problem / Solution */}
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution_overview}</p>
          </CardContent>
        </Card>
      </div>

      {/* Architecture */}
      {project.architecture && project.architecture.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Architecture</h2>
          <div className="grid gap-6">
            {project.architecture.map((img) => (
              <Card key={img.src}>
                <CardContent className="p-4">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg border bg-muted">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack */}
      {project.tech_stack?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Contributions / Challenges */}
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>What I Built</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.my_contributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {project.challenges && project.challenges.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.challenges.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : (
          <div />
        )}
      </div>

      {/* Impact Metrics */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {project.impact.map((impact, index: number) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <p className="text-sm font-medium">{`${impact.metric}: ${impact.value}`}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {project.results?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-2">
                {project.results.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {project.code_snippets && project.code_snippets.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Selected Snippets</h2>
          <div className="space-y-6">
            {project.code_snippets.map((snippet) => (
              <Card key={snippet.caption}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    {snippet.caption}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border bg-muted/50 overflow-hidden">
                    <div className="px-4 py-2 border-b text-xs text-muted-foreground">
                      {snippet.language}
                    </div>
                    <pre className="p-4 overflow-x-auto text-xs leading-relaxed">
                      <code>{snippet.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {project.lessons && project.lessons.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Lessons Learned</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-2">
                {project.lessons.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Links */}
      {(project.links?.github || project.links?.blog || project.links?.slides || project.links?.video) && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <div className="flex flex-wrap gap-3">
            {project.links?.github && (
              <Button asChild variant="outline" className="gap-2">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.links?.blog && (
              <Button asChild variant="outline" className="gap-2">
                <a href={project.links.blog} target="_blank" rel="noopener noreferrer">
                  Blog
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.links?.slides && (
              <Button asChild variant="outline" className="gap-2">
                <a href={project.links.slides} target="_blank" rel="noopener noreferrer">
                  Slides
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            {project.links?.video && (
              <Button asChild variant="outline" className="gap-2">
                <a href={project.links.video} target="_blank" rel="noopener noreferrer">
                  Video
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="text-center py-12 bg-muted/50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Interested in Similar Solutions?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let&apos;s discuss how I can help build reliable data infrastructure for your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">View More Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
