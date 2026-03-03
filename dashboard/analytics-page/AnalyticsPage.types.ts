import type { ReactNode } from "react";

export interface AnalyticsStat {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: ReactNode;
}

export interface AnalyticsPageProps {
  /** Page heading */
  title?: string;
  /** Subtitle text below the heading */
  subtitle?: string;
  /** Date range picker slot */
  dateRange?: ReactNode;
  /** Filter controls slot */
  filters?: ReactNode;
  /** Top-level metric cards */
  stats?: AnalyticsStat[];
  /** Primary chart area (full width or left column) */
  primaryChart?: ReactNode;
  /** Secondary chart area (right column) */
  secondaryChart?: ReactNode;
  /** Additional charts rendered in a 2-col grid */
  charts?: ReactNode;
  /** Breakdown table or list below charts */
  breakdown?: ReactNode;
  /** Export / download action */
  onExport?: () => void;
  /** Extra actions slot (top-right) */
  actions?: ReactNode;
  /** Content rendered after all built-in sections */
  children?: ReactNode;
  className?: string;
}
