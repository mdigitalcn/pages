import type { ReactNode } from "react";

export interface ErrorPageProps {
  /** Error code (e.g. 500, 403, "TIMEOUT") */
  code?: number | string;
  /** Error title */
  title?: string;
  /** Error description */
  description?: string;
  /** Custom illustration slot */
  illustration?: ReactNode;
  /** Retry action */
  onRetry?: () => void;
  /** Go back action */
  onBack?: () => void;
  /** Home link href */
  homeHref?: string;
  /** Show technical details (collapsible) */
  details?: string;
  /** Support link */
  supportHref?: string;
  /** Logo slot */
  logo?: ReactNode;
}
