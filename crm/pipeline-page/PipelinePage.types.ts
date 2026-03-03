import type { ReactNode } from "react";
export interface PipelineStage { id: string; name: string; count?: number; value?: number; content: ReactNode; }
export interface PipelinePageProps { stages: PipelineStage[]; title?: string; onAddDeal?: () => void; currency?: string; className?: string; }
