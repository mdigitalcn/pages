"use client";

import { Plus, Download, LayoutGrid, List, Package, Trash2, Star } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import Badge from "@mdigital_ui/ui/badge";
import Toggle from "@mdigital_ui/ui/toggle";
import { cn } from "@mdigital_ui/ui";
import type { ProductsPageProps, ProductStatus } from "./ProductsPage.types";

const statusColors: Record<ProductStatus, "success" | "default" | "warning" | "error"> = {
  active: "success",
  draft: "default",
  archived: "warning",
  "out-of-stock": "error",
};

export default function ProductsPage({
  products,
  title = "Products",
  onAdd,
  onView,
  onDelete,
  searchValue,
  onSearch,
  viewMode = "grid",
  onViewModeChange,
  filters,
  sorting,
  categoryFilter,
  totalCount,
  pagination,
  bulkActions,
  onExport,
  className,
}: ProductsPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {totalCount !== undefined && <Badge variant="soft">{totalCount}</Badge>}
        </div>
        <div className="flex items-center gap-2">
          {onExport && (
            <Button variant="outline" icon={<Download className="size-4" />} onClick={onExport}>
              Export
            </Button>
          )}
          {onAdd && (
            <Button color="primary" icon={<Plus className="size-4" />} onClick={onAdd}>
              Add product
            </Button>
          )}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-wrap items-center gap-2">
          {onSearch && (
            <Input
              value={searchValue}
              onChange={(e: any) => onSearch(e.target?.value ?? e)}
              placeholder="Search products..."
              className="max-w-xs"
            />
          )}
          {categoryFilter}
          {filters}
        </div>
        <div className="flex items-center gap-2">
          {sorting}
          {bulkActions}
          {onViewModeChange && (
            <div className="flex gap-1">
              <Toggle pressed={viewMode === "grid"} onChange={() => onViewModeChange("grid")} aria-label="Grid view" icon={<LayoutGrid className="size-4" />} />
              <Toggle pressed={viewMode === "list"} onChange={() => onViewModeChange("list")} aria-label="List view" icon={<List className="size-4" />} />
            </div>
          )}
        </div>
      </div>

      {/* Empty state */}
      {products.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Package className="size-7" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">No products yet</h3>
            <p className="mt-1.5 max-w-xs text-sm text-text-secondary">
              Add your first product to start building your catalog.
            </p>
            {onAdd && (
              <Button color="primary" className="mt-5" onClick={onAdd}>Add product</Button>
            )}
          </CardContent>
        </Card>
      ) : viewMode === "grid" ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <Card
              key={product.id}
              className={cn(
                "group overflow-hidden transition-all duration-200",
                onView && "cursor-pointer hover:shadow-md hover:-translate-y-0.5"
              )}
              onClick={() => onView?.(product.id)}
            >
              <div className="relative aspect-square bg-surface/50 overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center">
                    <Package className="size-10 text-text-secondary/20" />
                  </div>
                )}
                <div className="absolute right-2 top-2">
                  <Badge color={statusColors[product.status]} variant="soft" size="sm">
                    {product.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-3.5">
                <p className="truncate text-sm font-medium leading-tight">{product.name}</p>
                {product.category && (
                  <p className="mt-0.5 text-xs text-text-secondary">{product.category}</p>
                )}
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-base font-bold">{product.price}</span>
                  {product.comparePrice && (
                    <span className="text-xs text-text-secondary line-through">{product.comparePrice}</span>
                  )}
                </div>
                <div className="mt-1.5 flex items-center justify-between">
                  {product.inventory !== undefined && (
                    <p className={cn(
                      "text-xs",
                      product.inventory === 0 ? "text-error font-medium" :
                      product.inventory < 10 ? "text-warning" : "text-text-secondary"
                    )}>
                      {product.inventory === 0 ? "Out of stock" : `${product.inventory} in stock`}
                    </p>
                  )}
                  {product.rating !== undefined && (
                    <div className="flex items-center gap-1 text-xs text-text-secondary">
                      <Star className="size-3 fill-warning text-warning" />
                      <span>{product.rating}</span>
                      {product.reviewCount !== undefined && <span>({product.reviewCount})</span>}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/50 text-text-secondary">
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Product</th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider sm:table-cell">Category</th>
                    <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Price</th>
                    <th className="hidden px-4 py-3 text-center text-xs font-medium uppercase tracking-wider md:table-cell">Inventory</th>
                    <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
                    {onDelete && <th className="w-16 px-4 py-3" />}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className={cn("transition-colors", onView && "cursor-pointer hover:bg-surface/50")}
                      onClick={() => onView?.(product.id)}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {product.image ? (
                            <img src={product.image} alt={product.name} className="size-10 shrink-0 rounded-lg border border-border object-cover" />
                          ) : (
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface">
                              <Package className="size-5 text-text-secondary/40" />
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="truncate font-medium">{product.name}</p>
                            {product.sku && <p className="text-xs font-mono text-text-secondary">{product.sku}</p>}
                          </div>
                        </div>
                      </td>
                      <td className="hidden px-4 py-3 text-text-secondary sm:table-cell">{product.category ?? "—"}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-medium">{product.price}</span>
                        {product.comparePrice && (
                          <span className="ml-1.5 text-xs text-text-secondary line-through">{product.comparePrice}</span>
                        )}
                      </td>
                      <td className="hidden px-4 py-3 text-center md:table-cell">
                        <span className={cn(
                          product.inventory === 0 && "text-error font-medium",
                          product.inventory !== undefined && product.inventory > 0 && product.inventory < 10 && "text-warning"
                        )}>
                          {product.inventory ?? "—"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Badge color={statusColors[product.status]} variant="soft" size="sm">{product.status}</Badge>
                      </td>
                      {onDelete && (
                        <td className="px-4 py-3 text-right">
                          <Button variant="ghost" size="sm" color="error" iconOnly icon={<Trash2 className="size-4" />} aria-label="Delete"
                            onClick={(e: any) => { e.stopPropagation(); onDelete(product.id); }} />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {pagination && <div className="flex justify-center">{pagination}</div>}
    </div>
  );
}
