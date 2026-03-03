"use client";
import { Activity } from "lucide-react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Badge from "@mdigital_ui/ui/badge";
import { cn } from "@mdigital_ui/ui";
import type { OverviewPageProps } from "./OverviewPage.types";

export default function OverviewPage({ title = "Dashboard", greeting, stats, charts, recentActivity, quickActions, className }: OverviewPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold tracking-tight">{title}</h1>{greeting && <p className="text-text-secondary">{greeting}</p>}</div>
        {quickActions && <div className="flex items-center gap-2">{quickActions}</div>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Card key={i}><CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div><p className="text-sm text-text-secondary">{s.label}</p><p className="mt-1 text-2xl font-bold">{s.value}</p></div>
              {s.icon && <div className="rounded-lg bg-primary/10 p-2 text-primary">{s.icon}</div>}
            </div>
            {s.change !== undefined && <div className="mt-3 flex items-center gap-1.5 text-sm">
              <Badge color={s.change >= 0 ? "success" : "error"} variant="soft" size="sm">{s.change > 0 && "+"}{s.change}%</Badge>
              {s.changeLabel && <span className="text-text-secondary">{s.changeLabel}</span>}
            </div>}
          </CardContent></Card>
        ))}
      </div>
      {charts && <div className="grid gap-4 lg:grid-cols-2">{charts}</div>}
      {recentActivity && <Card><CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader><CardContent>{recentActivity}</CardContent></Card>}
    </div>
  );
}
