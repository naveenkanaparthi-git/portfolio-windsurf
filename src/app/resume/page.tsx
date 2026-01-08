import { Download, ExternalLink, Mail, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { person } from "@/lib/data";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Resume",
  description: "Download my resume or view my professional experience and qualifications.",
  url: "/resume"
});

const experience = [
  {
    title: "Data Transformation Engineer (Consultant)",
    company: "Tata Consultancy Services Ltd (Client: Qualcomm Technologies Inc)",
    period: "Sep 2024 - Present",
    location: "San Diego, CA",
    description: "Building and optimizing data pipelines and analytics automation to improve reliability and stakeholder access to insights.",
    achievements: [
      "Build and support data workflows and automations across ingestion, transformation, and reporting",
      "Partner with stakeholders to define requirements and validate datasets",
      "Improve pipeline robustness through validation, monitoring, and operational best practices"
    ]
  },
  {
    title: "Data Engineer (Consultant)",
    company: "Tata Consultancy Services Ltd (Client: Apple Inc)",
    period: "Nov 2023 - Aug 2024",
    location: "San Diego, CA",
    description: "Implemented and optimized data pipelines and validation workflows to support analytics and reporting use cases.",
    achievements: [
      "Built and maintained repeatable data pipelines supporting analytics stakeholders",
      "Improved data quality with validation and QA checks",
      "Collaborated across teams to deliver reliable datasets and reporting outputs"
    ]
  },
  {
    title: "Data Analyst",
    company: "Myriad Genetics",
    period: "Jan 2023 - Nov 2023",
    location: "San Diego, CA",
    description: "Developed dashboards and performed data analysis for clinical and operational decision-making.",
    achievements: [
      "Developed dashboards and visualizations in Power BI and Tableau for tracking key KPIs",
      "Wrote SQL queries for data extraction and validation from relational databases",
      "Collaborated with cross-functional teams to deliver actionable insights"
    ]
  }
];

const education = [
  {
    degree: "Master of Science (MS), Applied Computer Science",
    school: "Northwest Missouri State University",
    period: "Aug 2021 - Dec 2022",
    details: "CGPA: 3.7/4.0"
  },
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science and Engineering",
    school: "JNTU Hyderabad",
    period: "Aug 2016 - Sept 2020",
    details: "CGPA: 3.4/4.0"
  }
];

const skills = {
  "Programming Languages": ["Python", "SQL", "Scala", "Java"],
  "Data Platforms": ["BigQuery", "Snowflake", "ClickHouse", "PostgreSQL"],
  "Orchestration": ["Apache Airflow", "Dagster", "Prefect"],
  "Streaming": ["Apache Kafka", "Apache Flink", "Kafka Streams"],
  "Cloud & Infrastructure": ["Google Cloud Platform", "AWS", "Docker", "Kubernetes"],
  "Analytics & ML": ["dbt", "Apache Spark", "MLflow", "Great Expectations"]
};

export default function ResumePage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Download my resume or view my professional experience online
        </p>
        <Button size="lg" className="gap-2" asChild>
          <a href={person.resumeUrl} download>
            <Download className="h-4 w-4" />
            Download PDF Resume
          </a>
        </Button>
      </div>

      {/* Contact Info */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">{person.name}</h2>
            <p className="text-lg text-muted-foreground">{person.title}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              {person.email}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {person.location}
            </div>
            {person.social.linkedin && (
              <a 
                href={person.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
            )}
            {person.social.github && (
              <a 
                href={person.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Professional Summary */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {person.longBio}
          </p>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {experience.map((job, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {job.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-3">{job.description}</p>
              <ul className="space-y-1">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h4 className="font-medium mb-2">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-muted-foreground">{edu.school}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
              <p className="text-sm text-muted-foreground">{edu.details}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-muted-foreground mb-6">
              Let&apos;s discuss how my data engineering expertise can help drive your organization&apos;s success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
