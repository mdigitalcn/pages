import type { ReactNode } from "react";

export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type TaskStatus = "todo" | "in-progress" | "review" | "done";

export interface Task {
  id: string;
  title: string;
  assignee?: { name: string; avatar?: string };
  priority: TaskPriority;
  status: TaskStatus;
  dueDate?: string;
  tags?: string[];
}

export interface TasksPageProps {
  tasks: Task[];
  title?: string;
  onAdd?: () => void;
  onView?: (id: string) => void;
  searchValue?: string;
  onSearch?: (value: string) => void;
  filters?: ReactNode;
  pagination?: ReactNode;
  className?: string;
}
