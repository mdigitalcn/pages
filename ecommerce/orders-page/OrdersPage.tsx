"use client";

import { Download, Eye } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import Badge from "@mdigital_ui/ui/badge";
import { cn } from "@mdigital_ui/ui";
import type { OrdersPageProps, OrderStatus } from "./OrdersPage.types";

const statusColors: Record<OrderStatus, "default" | "primary" | "success" | "warning" | "error" | "info"> = {
  pending: "warning",
  processing: "info",
  shipped: "primary",
  delivered: "success",
  cancelled: "error",
  refunded: "default",
};

export default function OrdersPage({
  orders,
  title = "Orders",
  searchValue,
  onSearch,
  statusFilter,
  dateRange,
  onView,
  onExport,
  pagination,
  className,
}: OrdersPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {onExport && (
          <Button variant="outline" icon={<Download className="size-4" />} onClick={onExport}>
            Export
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {onSearch && (
          <Input
            value={searchValue}
            onChange={(e: any) => onSearch(e.target?.value ?? e)}
            placeholder="Search orders..."
            className="max-w-xs"
          />
        )}
        {statusFilter}
        {dateRange}
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/50 text-text-secondary">
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Order</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Customer</th>
                  <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider sm:table-cell">Date</th>
                  <th className="hidden px-4 py-3 text-center text-xs font-medium uppercase tracking-wider md:table-cell">Items</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Total</th>
                  <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
                  {onView && <th className="w-16 px-4 py-3" />}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className={cn("transition-colors", onView && "cursor-pointer hover:bg-surface/50")}
                    onClick={() => onView?.(order.id)}
                  >
                    <td className="px-4 py-3 font-medium font-mono text-xs">#{order.id}</td>
                    <td className="px-4 py-3">{order.customer}</td>
                    <td className="hidden px-4 py-3 text-text-secondary sm:table-cell">{order.date}</td>
                    <td className="hidden px-4 py-3 text-center tabular-nums md:table-cell">{order.items}</td>
                    <td className="px-4 py-3 text-right font-medium tabular-nums">{order.total}</td>
                    <td className="px-4 py-3 text-center">
                      <Badge color={statusColors[order.status]} variant="soft" size="sm">{order.status}</Badge>
                    </td>
                    {onView && (
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="sm" iconOnly icon={<Eye className="size-4" />} aria-label="View order" />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {pagination && <div className="flex justify-center">{pagination}</div>}
    </div>
  );
}
