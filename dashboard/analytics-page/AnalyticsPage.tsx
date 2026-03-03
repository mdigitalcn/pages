"use client";

import { Download } from "lucide-react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Badge from "@mdigital_ui/ui/badge";
import Button from "@mdigital_ui/ui/button";
import { cn } from "@mdigital_ui/ui";
import type { AnalyticsPageProps } from "./AnalyticsPage.types";

export default function AnalyticsPage({
  title = "Analytics",
  subtitle,
  dateRange,
  filters,
  stats,
  primaryChart,
  secondaryChart,
  charts,
  breakdown,
  onExport,
  actions,
  children,
  className,
}: AnalyticsPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {filters}
          {dateRange}
          {onExport && (
            <Button
              variant="outline"
              icon={<Download className="size-4" />}
              onClick={onExport}
            >
              Export
            </Button>
          )}
          {actions}
        </div>
      </div>

      {/* Stat cards */}
      {stats && stats.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-text-secondary">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold tracking-tight">
                      {stat.value}
                    </p>
                  </div>
                  {stat.icon && (
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary [&>svg]:size-5">
                      {stat.icon}
                    </div>
                  )}
                </div>
                {stat.change !== undefined && (
                  <div className="mt-3 flex items-center gap-1.5 text-sm">
                    <Badge
                      color={stat.change >= 0 ? "success" : "error"}
                      variant="soft"
                      size="sm"
                    >
                      {stat.change > 0 && "+"}
                      {stat.change}%
                    </Badge>
                    {stat.changeLabel && (
                      <span className="truncate text-text-secondary">
                        {stat.changeLabel}
                      </span>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Primary + Secondary chart row */}
      {(primaryChart || secondaryChart) && (
        <div
          className={cn(
            "grid gap-4",
            primaryChart && secondaryChart
              ? "lg:grid-cols-5"
              : "lg:grid-cols-1"
          )}
        >
          {primaryChart && (
            <Card
              className={cn(
                primaryChart && secondaryChart ? "lg:col-span-3" : ""
              )}
            >
              <CardContent className="p-5">{primaryChart}</CardContent>
            </Card>
          )}
          {secondaryChart && (
            <Card
              className={cn(
                primaryChart && secondaryChart ? "lg:col-span-2" : ""
              )}
            >
              <CardContent className="p-5">{secondaryChart}</CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Additional charts grid */}
      {charts && <div className="grid gap-4 lg:grid-cols-2">{charts}</div>}

      {/* Breakdown table */}
      {breakdown && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Breakdown</CardTitle>
          </CardHeader>
          <CardContent>{breakdown}</CardContent>
        </Card>
      )}

      {/* Pass-through children */}
      {children}
    </div>
  );
}
