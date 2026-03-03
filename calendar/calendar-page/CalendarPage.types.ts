import type { ReactNode } from "react";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  color?: string;
  description?: string;
}

export interface CalendarPageProps {
  title?: string;
  events?: CalendarEvent[];
  onAddEvent?: () => void;
  onEventClick?: (id: string) => void;
  calendar?: ReactNode;
  sidebar?: ReactNode;
  viewToggle?: ReactNode;
  className?: string;
}
