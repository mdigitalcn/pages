import type { ReactNode } from "react";

export type ContactStatus = "active" | "inactive" | "lead" | "customer";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  role?: string;
  status: ContactStatus;
  avatar?: string;
  lastContact?: string;
  tags?: string[];
}

export interface ContactsPageProps {
  /** Contact data array */
  contacts: Contact[];
  /** Page heading */
  title?: string;
  /** Add contact action */
  onAdd?: () => void;
  /** View contact detail */
  onView?: (id: string) => void;
  /** Delete contact */
  onDelete?: (id: string) => void;
  /** Search value (controlled) */
  searchValue?: string;
  /** Search handler */
  onSearch?: (value: string) => void;
  /** Filter controls slot */
  filters?: ReactNode;
  /** Status filter slot */
  statusFilter?: ReactNode;
  /** View mode toggle */
  viewMode?: "grid" | "list";
  /** View mode change handler */
  onViewModeChange?: (mode: "grid" | "list") => void;
  /** Pagination slot */
  pagination?: ReactNode;
  /** Total count to display */
  totalCount?: number;
  /** Import action */
  onImport?: () => void;
  /** Export action */
  onExport?: () => void;
  className?: string;
}
