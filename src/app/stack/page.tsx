import { Database, Workflow, Zap, Cloud, BarChart, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Tech Stack",
  description: "Technologies, tools, and frameworks I use for building scalable data engineering solutions.",
  url: "/stack"
});

type Proficiency = "Expert" | "Advanced" | "Intermediate" | "Beginner";

const proficiencyColors: Record<Proficiency, string> = {
  Expert: "bg-emerald-500",
  Advanced: "bg-blue-500",
  Intermediate: "bg-amber-500",
  Beginner: "bg-slate-400",
};

const proficiencyDescriptions: Record<Proficiency, string> = {
  Expert: "Deep expertise with repeated, production-grade ownership.",
  Advanced: "Strong hands-on experience building and operating real systems.",
  Intermediate: "Comfortable with core concepts and can ship features with guidance.",
  Beginner: "Familiar with fundamentals; actively learning through projects.",
};

const groupIcons = {
  Languages: Code,
  WarehousesAndStorage: Database,
  Orchestration: Workflow,
  Streaming: Zap,
  CloudAndDevOps: Cloud,
  Analytics: BarChart,
} as const;

function normalizeProficiency(value: string): Proficiency {
  if (value === "Expert") return "Expert";
  if (value === "Advanced") return "Advanced";
  if (value === "Intermediate") return "Intermediate";
  return "Beginner";
}

function getAllSkills() {
  return skills.flatMap((category) => category.skills.map((skill) => ({ ...skill, sourceCategory: category.category })));
}

function toGroup(sourceCategory: string, name: string) {
  const lowerName = name.toLowerCase();

  if (sourceCategory === "Programming Languages") return "Languages" as const;
  if (sourceCategory === "Cloud Platforms") return "CloudAndDevOps" as const;
  if (sourceCategory === "Databases & Storage") return "WarehousesAndStorage" as const;
  if (sourceCategory === "Monitoring & Analytics") return "Analytics" as const;

  if (sourceCategory === "DevOps & Infrastructure") return "CloudAndDevOps" as const;

  if (sourceCategory === "Data Engineering & Analytics Tools") {
    if (lowerName.includes("airflow") || lowerName.includes("dagster") || lowerName.includes("prefect")) {
      return "Orchestration" as const;
    }
    if (lowerName.includes("kafka")) return "Streaming" as const;
    return "Analytics" as const;
  }

  return "Analytics" as const;
}

export default function StackPage() {
  const allSkills = getAllSkills();

  const grouped = {
    Languages: allSkills
      .filter((s) => toGroup(s.sourceCategory, s.name) === "Languages")
      .sort((a, b) => a.name.localeCompare(b.name)),
    WarehousesAndStorage: allSkills
      .filter((s) => toGroup(s.sourceCategory, s.name) === "WarehousesAndStorage")
      .sort((a, b) => a.name.localeCompare(b.name)),
    Orchestration: allSkills
      .filter((s) => toGroup(s.sourceCategory, s.name) === "Orchestration")
      .sort((a, b) => a.name.localeCompare(b.name)),
    Streaming: allSkills
      .filter((s) => toGroup(s.sourceCategory, s.name) === "Streaming")
      .sort((a, b) => a.name.localeCompare(b.name)),
    CloudAndDevOps: allSkills
      .filter((s) => toGroup(s.sourceCategory, s.name) === "CloudAndDevOps")
      .sort((a, b) => a.name.localeCompare(b.name)),
    Analytics: allSkills
      .filter((s) => toGroup(s.sourceCategory, s.name) === "Analytics")
      .sort((a, b) => a.name.localeCompare(b.name)),
  };

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tech Stack</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I use across the data lifecycle: ingestion, orchestration, warehousing,
          analytics, and operational reliability.
        </p>
      </div>

      {/* Proficiency Legend */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Proficiency Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(Object.keys(proficiencyDescriptions) as Proficiency[]).map((level) => (
            <Card key={level}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${proficiencyColors[level]}`}></div>
                  <span className="font-medium">{level}</span>
                </div>
                <p className="text-sm text-muted-foreground">{proficiencyDescriptions[level]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills by Category */}
      <div className="space-y-8">
        {(Object.keys(grouped) as Array<keyof typeof grouped>).map((groupKey) => {
          const groupSkills = grouped[groupKey];
          if (groupSkills.length === 0) return null;

          const IconComponent =
            groupKey === "WarehousesAndStorage"
              ? groupIcons.WarehousesAndStorage
              : groupKey === "CloudAndDevOps"
                ? groupIcons.CloudAndDevOps
                : groupIcons[groupKey];

          const title =
            groupKey === "WarehousesAndStorage"
              ? "Warehouses & Storage"
              : groupKey === "CloudAndDevOps"
                ? "Cloud & DevOps"
                : groupKey;

          return (
            <Card key={groupKey}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <IconComponent className="h-5 w-5 text-primary" />
                  {title}
                  <Badge variant="secondary" className="ml-auto">
                    {groupSkills.length} skills
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupSkills.map((skill) => {
                    const level = normalizeProficiency(skill.proficiency);

                    return (
                      <div
                        key={`${groupKey}-${skill.name}`}
                        className="p-3 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-2 h-2 rounded-full ${proficiencyColors[level]}`}></div>
                            <span className="font-medium truncate">{skill.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {level}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-16 text-center">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Always Learning</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The data engineering landscape evolves rapidly. I continuously learn new technologies 
              and stay updated with industry best practices through hands-on projects, 
              community contributions, and professional development.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Apache Iceberg</Badge>
              <Badge variant="secondary">Delta Lake</Badge>
              <Badge variant="secondary">Apache Spark</Badge>
              <Badge variant="secondary">Terraform</Badge>
              <Badge variant="secondary">Great Expectations</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Currently exploring these technologies
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
