import type { ReactNode } from "react";

export interface MaintenancePageProps {
  /** Page heading */
  title?: string;
  /** Description text */
  description?: string;
  /** Estimated return time string */
  estimatedTime?: string;
  /** ISO date string for countdown target */
  countdownTarget?: string;
  /** Custom illustration/icon slot */
  illustration?: ReactNode;
  /** Logo slot */
  logo?: ReactNode;
  /** Status updates list */
  statusUpdates?: Array<{ time: string; message: string }>;
  /** Subscribe to updates action */
  onSubscribe?: (email: string) => void;
  /** Loading state for subscribe */
  subscribing?: boolean;
  /** Subscribed confirmation */
  subscribed?: boolean;
  /** Social links */
  socialLinks?: Array<{ label: string; href: string; icon: ReactNode }>;
}
