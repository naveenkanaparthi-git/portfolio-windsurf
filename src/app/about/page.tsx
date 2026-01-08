import { Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { person } from "@/lib/data";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "About",
  description: "Learn more about my background, experience, and approach to data engineering.",
  url: "/about"
});

const timeline = [
  {
    year: "Sep 2024 - Present",
    title: "Data Transformation Engineer (Consultant)",
    company: "Tata Consultancy Services Ltd (Client: Qualcomm Technologies Inc)",
    description: "Building and optimizing data pipelines and analytics workflows to improve data freshness, reliability, and stakeholder access to insights.",
    achievements: [
      "Design and support production data workflows and automation for reporting and analytics",
      "Partner with cross-functional stakeholders to define data requirements and validate outputs",
      "Improve pipeline robustness through validation, monitoring, and operational best practices"
    ]
  },
  {
    year: "Nov 2023 - Aug 2024",
    title: "Data Engineer (Consultant)",
    company: "Tata Consultancy Services Ltd (Client: Apple Inc)",
    description: "Implemented and optimized data pipelines and validation workflows to support analytics and reporting use cases.",
    achievements: [
      "Built and maintained data extraction and transformation workflows for analytics consumers",
      "Improved data quality through validation and repeatable checks",
      "Collaborated with stakeholders to deliver reliable datasets for decision-making"
    ]
  },
  {
    year: "Jan 2023 - Nov 2023",
    title: "Data Analyst",
    company: "Myriad Genetics",
    description: "Developed dashboards and performed data analysis for clinical and operational decision-making.",
    achievements: [
      "Developed dashboards and visualizations in Power BI and Tableau for tracking key metrics",
      "Wrote SQL queries for data extraction and validation from relational databases",
      "Partnered with cross-functional teams to deliver actionable insights"
    ]
  }
];

const principles = [
  {
    title: "Reliability First",
    description: "Data systems must be dependable. I design with failure modes in mind, implement comprehensive monitoring, and ensure graceful degradation."
  },
  {
    title: "Performance Matters",
    description: "Efficient data processing saves time and money. I optimize for both query performance and resource utilization."
  },
  {
    title: "Quality by Design",
    description: "Data quality issues compound quickly. I build validation, testing, and monitoring into every pipeline from day one."
  },
  {
    title: "Scalable Architecture",
    description: "Systems should grow with business needs. I design modular, extensible architectures that can handle increasing data volumes."
  }
];

export default function AboutPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground">
          Data Engineer passionate about building reliable, scalable data infrastructure
        </p>
      </div>

      {/* Bio Section */}
      <section className="mb-16">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">NK</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{person.name}</h2>
                <p className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {person.location}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {person.longBio}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Engineering Principles */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Engineering Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <p className="text-muted-foreground font-medium">{item.company}</p>
                  </div>
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.year}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills & Interests */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certifications & Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Google Cloud Professional Data Engineer (In Progress)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Apache Airflow Fundamentals
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Kafka Streams and ksqlDB
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Interests & Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Open source contributions to data tools
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Data engineering meetups and conferences
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Technical writing and knowledge sharing
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Let&apos;s Build Something Together</h2>
            <p className="text-muted-foreground mb-6">
              I&apos;m always interested in challenging data engineering problems and opportunities 
              to work with innovative teams building the future of data-driven organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Get In Touch
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                View Resume
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
