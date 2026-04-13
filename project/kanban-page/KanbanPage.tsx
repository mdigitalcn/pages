"use client";

import { Plus } from "lucide-react";
import Badge from "@mdigitalcn/uikit/badge";
import Button from "@mdigitalcn/uikit/button";
import ScrollArea from "@mdigitalcn/uikit/scroll-area";
import { cn } from "@mdigitalcn/uikit";
import type { KanbanPageProps } from "./KanbanPage.types";

export default function KanbanPage({
  columns,
  title = "Board",
  onAddTask,
  filters,
  className,
}: KanbanPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <div className="flex items-center gap-3">
          {filters}
          {onAddTask && <Button color="primary" icon={<Plus className="size-4" />} onClick={onAddTask}>Add task</Button>}
        </div>
      </div>

      <ScrollArea direction="horizontal">
        <div className="flex gap-4 pb-4" style={{ minWidth: columns.length * 300 }}>
          {columns.map((col) => (
            <div
              key={col.id}
              className="w-72 shrink-0 rounded-lg border border-border bg-surface/30"
            >
              <div className="flex items-center justify-between border-b border-border p-3">
                <div className="flex items-center gap-2">
                  {col.color && (
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: col.color }}
                    />
                  )}
                  <span className="font-medium text-sm">{col.title}</span>
                  {col.count !== undefined && (
                    <Badge variant="soft" size="sm">{col.count}</Badge>
                  )}
                </div>
              </div>
              <div className="p-2 space-y-2 min-h-[120px]">{col.content}</div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
