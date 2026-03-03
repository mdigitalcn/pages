import type { ReactNode } from "react";
export interface OverviewStat { label: string; value: string | number; change?: number; changeLabel?: string; icon?: ReactNode; }
export interface OverviewPageProps { title?: string; greeting?: string; stats: OverviewStat[]; charts?: ReactNode; recentActivity?: ReactNode; quickActions?: ReactNode; className?: string; }
