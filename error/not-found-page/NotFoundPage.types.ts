import type { ReactNode } from "react";

export interface NotFoundPageProps {
  /** Page title */
  title?: string;
  /** Description text */
  description?: string;
  /** Home link href */
  homeHref?: string;
  /** Go back action */
  onBack?: () => void;
  /** Custom illustration slot */
  illustration?: ReactNode;
  /** Logo slot */
  logo?: ReactNode;
  /** Search handler — shows search input when provided */
  onSearch?: (query: string) => void;
  /** Suggested links */
  suggestions?: Array<{ label: string; href: string }>;
}
