import type { ReactNode } from "react";

export type EmployeeStatus = "active" | "on-leave" | "remote" | "offboarded";

export interface Employee {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  department: string;
  status: EmployeeStatus;
  location?: string;
  phone?: string;
  startDate?: string;
  manager?: string;
}

export interface EmployeeDirectoryPageProps {
  /** Employee data array */
  employees: Employee[];
  /** Page heading */
  title?: string;
  /** Add employee action */
  onAdd?: () => void;
  /** View employee detail */
  onView?: (id: string) => void;
  /** Search value (controlled) */
  searchValue?: string;
  /** Search handler */
  onSearch?: (value: string) => void;
  /** View mode toggle */
  viewMode?: "grid" | "list";
  /** View mode change handler */
  onViewModeChange?: (mode: "grid" | "list") => void;
  /** Filter controls slot */
  filters?: ReactNode;
  /** Department filter slot */
  departmentFilter?: ReactNode;
  /** Total count to display */
  totalCount?: number;
  /** Pagination slot */
  pagination?: ReactNode;
  /** Export action */
  onExport?: () => void;
  className?: string;
}
