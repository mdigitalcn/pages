import type { ReactNode } from "react";

export type InvoiceStatus = "draft" | "sent" | "paid" | "overdue" | "cancelled";

export interface Invoice {
  id: string;
  number: string;
  client: string;
  amount: string;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
}

export interface InvoicesPageProps {
  invoices: Invoice[];
  title?: string;
  onAdd?: () => void;
  onView?: (id: string) => void;
  searchValue?: string;
  onSearch?: (value: string) => void;
  statusFilter?: ReactNode;
  pagination?: ReactNode;
  summary?: { total: string; paid: string; overdue: string; pending: string };
  className?: string;
}
