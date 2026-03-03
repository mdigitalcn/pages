"use client";

import { Plus, Pencil, Trash2, LogIn, Upload, Send, Pin, Download } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import Avatar from "@mdigital_ui/ui/avatar";
import Badge from "@mdigital_ui/ui/badge";
import Timeline from "@mdigital_ui/ui/timeline";
import { cn } from "@mdigital_ui/ui";
import type { ActivityLogPageProps, ActivityType } from "./ActivityLogPage.types";

const typeIcons: Record<ActivityType, React.ReactNode> = {
  create: <Plus className="size-3.5" />,
  update: <Pencil className="size-3.5" />,
  delete: <Trash2 className="size-3.5" />,
  login: <LogIn className="size-3.5" />,
  export: <Upload className="size-3.5" />,
  invite: <Send className="size-3.5" />,
  other: <Pin className="size-3.5" />,
};

const typeColors: Record<ActivityType, "success" | "info" | "error" | "primary" | "warning" | "default"> = {
  create: "success",
  update: "info",
  delete: "error",
  login: "primary",
  export: "warning",
  invite: "primary",
  other: "default",
};

export default function ActivityLogPage({
  activities,
  title = "Activity Log",
  searchValue,
  onSearch,
  typeFilter,
  dateRange,
  pagination,
  onExport,
  className,
}: ActivityLogPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="mt-0.5 text-sm text-text-secondary">Track all account activity</p>
        </div>
        {onExport && (
          <Button variant="outline" icon={<Download className="size-4" />} onClick={onExport}>
            Export
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {onSearch && (
          <Input
            value={searchValue}
            onChange={(e: any) => onSearch(e.target?.value ?? e)}
            placeholder="Search activity..."
            className="max-w-xs"
          />
        )}
        {typeFilter}
        {dateRange}
      </div>

      <Card>
        <CardContent className="p-5">
          <Timeline
            items={activities.map((a) => ({
              key: a.id,
              dot: typeIcons[a.type],
              color: typeColors[a.type],
              title: (
                <div className="flex items-center gap-2 flex-wrap">
                  <Avatar src={a.user.avatar} name={a.user.name} size="xs" />
                  <span className="text-sm font-medium">{a.user.name}</span>
                  <Badge color={typeColors[a.type]} variant="soft" size="sm">{a.type}</Badge>
                  <span className="text-xs text-text-secondary">{a.timestamp}</span>
                </div>
              ),
              description: (
                <div className="pb-1">
                  <p className="text-sm text-text-secondary leading-relaxed">{a.description}</p>
                  {a.metadata && Object.keys(a.metadata).length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {Object.entries(a.metadata).map(([k, v]) => (
                        <span key={k} className="rounded-md bg-surface px-2 py-0.5 text-xs text-text-secondary">
                          {k}: {v}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ),
            }))}
          />
        </CardContent>
      </Card>

      {pagination && <div className="flex justify-center">{pagination}</div>}
    </div>
  );
}
