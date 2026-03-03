import type { ReactNode } from "react";

export interface KanbanColumn {
  id: string;
  title: string;
  color?: string;
  count?: number;
  content: ReactNode;
}

export interface KanbanPageProps {
  columns: KanbanColumn[];
  title?: string;
  onAddTask?: () => void;
  filters?: ReactNode;
  className?: string;
}
