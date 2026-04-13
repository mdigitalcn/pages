"use client";

import { Plus, Eye } from "lucide-react";
import Card, { CardContent } from "@mdigitalcn/uikit/card";
import Input from "@mdigitalcn/uikit/input";
import Button from "@mdigitalcn/uikit/button";
import Badge from "@mdigitalcn/uikit/badge";
import { cn } from "@mdigitalcn/uikit";
import type { InvoicesPageProps, InvoiceStatus } from "./InvoicesPage.types";

const statusColors: Record<InvoiceStatus, "default" | "info" | "success" | "error" | "warning"> = {
  draft: "default",
  sent: "info",
  paid: "success",
  overdue: "error",
  cancelled: "warning",
};

export default function InvoicesPage({
  invoices,
  title = "Invoices",
  onAdd,
  onView,
  searchValue,
  onSearch,
  statusFilter,
  pagination,
  summary,
  className,
}: InvoicesPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {onAdd && <Button color="primary" icon={<Plus className="size-4" />} onClick={onAdd}>Create invoice</Button>}
      </div>

      {summary && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total", value: summary.total, color: "text-text-primary" },
            { label: "Paid", value: summary.paid, color: "text-success" },
            { label: "Overdue", value: summary.overdue, color: "text-error" },
            { label: "Pending", value: summary.pending, color: "text-warning" },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="pt-6">
                <p className="text-sm text-text-secondary">{s.label}</p>
                <p className={cn("mt-1 text-2xl font-bold", s.color)}>{s.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {onSearch && (
          <Input
            value={searchValue}
            onChange={(e: any) => onSearch(e.target?.value ?? e)}
            placeholder="Search invoices..."
            className="sm:w-72"
          />
        )}
        {statusFilter}
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/50 text-text-secondary">
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Invoice</th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Client</th>
                  <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider sm:table-cell">Issued</th>
                  <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider md:table-cell">Due</th>
                  <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
                  {onView && <th className="w-16 px-4 py-3" />}
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr
                    key={inv.id}
                    className={cn(
                      "border-b transition-colors last:border-0",
                      onView && "cursor-pointer hover:bg-surface/50"
                    )}
                    onClick={() => onView?.(inv.id)}
                  >
                    <td className="px-4 py-3 font-medium font-mono text-xs">{inv.number}</td>
                    <td className="px-4 py-3">{inv.client}</td>
                    <td className="hidden px-4 py-3 text-text-secondary sm:table-cell">{inv.issueDate}</td>
                    <td className="hidden px-4 py-3 text-text-secondary md:table-cell">{inv.dueDate}</td>
                    <td className="px-4 py-3 text-right font-medium">{inv.amount}</td>
                    <td className="px-4 py-3 text-center">
                      <Badge color={statusColors[inv.status]} variant="soft" size="sm">
                        {inv.status}
                      </Badge>
                    </td>
                    {onView && (
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="sm" iconOnly icon={<Eye className="size-4" />} aria-label="View invoice" />
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
