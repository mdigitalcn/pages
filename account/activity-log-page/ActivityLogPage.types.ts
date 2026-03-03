import type { ReactNode } from "react";

export type ActivityType = "create" | "update" | "delete" | "login" | "export" | "invite" | "other";

export interface ActivityEntry {
  id: string;
  type: ActivityType;
  description: string;
  user: { name: string; avatar?: string };
  timestamp: string;
  metadata?: Record<string, string>;
}

export interface ActivityLogPageProps {
  activities: ActivityEntry[];
  title?: string;
  searchValue?: string;
  onSearch?: (value: string) => void;
  typeFilter?: ReactNode;
  dateRange?: ReactNode;
  pagination?: ReactNode;
  onExport?: () => void;
  className?: string;
}
