import type { ReactNode } from "react";

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";

export interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: OrderStatus;
  items: number;
}

export interface OrdersPageProps {
  orders: Order[];
  title?: string;
  searchValue?: string;
  onSearch?: (value: string) => void;
  statusFilter?: ReactNode;
  dateRange?: ReactNode;
  onView?: (id: string) => void;
  onExport?: () => void;
  pagination?: ReactNode;
  currency?: string;
  className?: string;
}
