"use client";

import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/types";

interface StatCardsProps {
  stats: StatCard[];
  className?: string;
}

export function StatCards({ stats, className = "" }: StatCardsProps) {
  const getTrendIcon = (trend?: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-emerald-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'neutral':
        return <Minus className="h-4 w-4 text-muted-foreground" />;
      default:
        return null;
    }
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
              {stat.trend && (
                <div className="flex items-center">
                  {getTrendIcon(stat.trend)}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Default stats for the homepage
export const defaultStats: StatCard[] = [
  {
    value: "15+",
    label: "Data Pipelines Built",
    trend: "up",
  },
  {
    value: "100TB+",
    label: "Data Processed",
    trend: "up",
  },
  {
    value: "40%",
    label: "Average Latency Reduction",
    trend: "up",
  },
];
