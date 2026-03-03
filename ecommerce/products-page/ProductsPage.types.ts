import type { ReactNode } from "react";

export type ProductStatus = "active" | "draft" | "archived" | "out-of-stock";

export interface Product {
  id: string;
  name: string;
  image?: string;
  price: string;
  comparePrice?: string;
  status: ProductStatus;
  category?: string;
  inventory?: number;
  sku?: string;
  rating?: number;
  reviewCount?: number;
}

export interface ProductsPageProps {
  /** Product data array */
  products: Product[];
  /** Page heading */
  title?: string;
  /** Add product action */
  onAdd?: () => void;
  /** View product detail */
  onView?: (id: string) => void;
  /** Delete product */
  onDelete?: (id: string) => void;
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
  /** Sorting controls slot */
  sorting?: ReactNode;
  /** Category filter slot */
  categoryFilter?: ReactNode;
  /** Total count to display */
  totalCount?: number;
  /** Pagination slot */
  pagination?: ReactNode;
  /** Bulk actions slot (shown when items selected) */
  bulkActions?: ReactNode;
  /** Export action */
  onExport?: () => void;
  className?: string;
}
