"use client";
import { Plus } from "lucide-react";
import Badge from "@mdigital_ui/ui/badge";
import Button from "@mdigital_ui/ui/button";
import ScrollArea from "@mdigital_ui/ui/scroll-area";
import { cn } from "@mdigital_ui/ui";
import type { PipelinePageProps } from "./PipelinePage.types";

export default function PipelinePage({ stages, title = "Pipeline", onAddDeal, currency = "$", className }: PipelinePageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {onAddDeal && <Button color="primary" icon={<Plus className="size-4" />} onClick={onAddDeal}>Add deal</Button>}
      </div>
      <ScrollArea direction="horizontal">
        <div className="flex gap-4 pb-4" style={{ minWidth: stages.length * 280 }}>
          {stages.map(s => (
            <div key={s.id} className="w-72 shrink-0 rounded-lg border border-border bg-surface/30">
              <div className="flex items-center justify-between border-b border-border p-3">
                <div className="flex items-center gap-2"><span className="font-medium text-sm">{s.name}</span>{s.count !== undefined && <Badge variant="soft" size="sm">{s.count}</Badge>}</div>
                {s.value !== undefined && <span className="text-xs text-text-secondary">{currency}{s.value.toLocaleString()}</span>}
              </div>
              <div className="p-2 space-y-2">{s.content}</div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
