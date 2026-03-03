"use client";

import { Plus, CalendarDays } from "lucide-react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Button from "@mdigital_ui/ui/button";
import Badge from "@mdigital_ui/ui/badge";
import { cn } from "@mdigital_ui/ui";
import type { CalendarPageProps } from "./CalendarPage.types";

export default function CalendarPage({
  title = "Calendar",
  events = [],
  onAddEvent,
  onEventClick,
  calendar,
  sidebar,
  viewToggle,
  className,
}: CalendarPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <div className="flex items-center gap-3">
          {viewToggle}
          {onAddEvent && <Button color="primary" icon={<Plus className="size-4" />} onClick={onAddEvent}>Add event</Button>}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3">
          {calendar || (
            <Card className="min-h-[500px]">
              <CardContent className="flex items-center justify-center h-full pt-6">
                <p className="text-text-secondary">
                  Pass a calendar component via the <code>calendar</code> prop
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-4">
          {sidebar || (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                {events.length === 0 ? (
                  <div className="flex flex-col items-center py-6 text-center">
                    <CalendarDays className="size-8 text-text-secondary/30" />
                    <p className="mt-2 text-sm text-text-secondary">No upcoming events</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {events.slice(0, 8).map((event) => (
                      <button
                        key={event.id}
                        onClick={() => onEventClick?.(event.id)}
                        className="flex w-full items-start gap-3 rounded-md p-2 text-left transition-colors hover:bg-surface/50"
                      >
                        <div
                          className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: event.color || "var(--color-primary)" }}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">{event.title}</p>
                          <p className="text-xs text-text-secondary">
                            {event.date}
                            {event.time && ` · ${event.time}`}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
