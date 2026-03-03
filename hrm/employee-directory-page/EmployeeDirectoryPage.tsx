"use client";

import { Download, UserPlus, LayoutGrid, List } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import Badge from "@mdigital_ui/ui/badge";
import Avatar from "@mdigital_ui/ui/avatar";
import Toggle from "@mdigital_ui/ui/toggle";
import { cn } from "@mdigital_ui/ui";
import type { EmployeeDirectoryPageProps, EmployeeStatus } from "./EmployeeDirectoryPage.types";

const statusColors: Record<EmployeeStatus, "success" | "warning" | "info" | "default"> = {
  active: "success",
  "on-leave": "warning",
  remote: "info",
  offboarded: "default",
};

const statusDotBg: Record<EmployeeStatus, string> = {
  active: "bg-success",
  "on-leave": "bg-warning",
  remote: "bg-info",
  offboarded: "bg-border",
};

export default function EmployeeDirectoryPage({
  employees,
  title = "Employees",
  onAdd,
  onView,
  searchValue,
  onSearch,
  viewMode = "grid",
  onViewModeChange,
  filters,
  departmentFilter,
  totalCount,
  pagination,
  onExport,
  className,
}: EmployeeDirectoryPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {totalCount !== undefined && (
            <Badge variant="soft">{totalCount}</Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {onExport && (
            <Button variant="outline" icon={<Download className="size-4" />} onClick={onExport}>
              Export
            </Button>
          )}
          {onAdd && (
            <Button color="primary" icon={<UserPlus className="size-4" />} onClick={onAdd}>
              Add employee
            </Button>
          )}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          {onSearch && (
            <Input
              value={searchValue}
              onChange={(e: any) => onSearch(e.target?.value ?? e)}
              placeholder="Search employees..."
              className="max-w-xs"
            />
          )}
          {departmentFilter}
          {filters}
        </div>
        {onViewModeChange && (
          <div className="flex gap-1">
            <Toggle pressed={viewMode === "grid"} onChange={() => onViewModeChange("grid")} aria-label="Grid view" icon={<LayoutGrid className="size-4" />} />
            <Toggle pressed={viewMode === "list"} onChange={() => onViewModeChange("list")} aria-label="List view" icon={<List className="size-4" />} />
          </div>
        )}
      </div>

      {/* Empty state */}
      {employees.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UserPlus className="size-7" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">No employees found</h3>
            <p className="mt-1.5 max-w-xs text-sm text-text-secondary">
              Add your first team member to start building your organization.
            </p>
            {onAdd && (
              <Button color="primary" className="mt-5" onClick={onAdd}>
                Add employee
              </Button>
            )}
          </CardContent>
        </Card>
      ) : viewMode === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {employees.map((emp) => (
            <Card
              key={emp.id}
              className={cn(
                "transition-all duration-200",
                onView && "cursor-pointer hover:shadow-md hover:-translate-y-0.5"
              )}
              onClick={() => onView?.(emp.id)}
            >
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <Avatar src={emp.avatar} name={emp.name} size="lg" />
                    <div
                      className={cn(
                        "absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-white",
                        statusDotBg[emp.status]
                      )}
                    />
                  </div>
                  <h3 className="mt-3 font-semibold leading-tight">{emp.name}</h3>
                  <p className="mt-0.5 text-sm text-text-secondary">{emp.role}</p>
                  <Badge variant="soft" size="sm" className="mt-2.5">
                    {emp.department}
                  </Badge>
                  {emp.location && (
                    <p className="mt-2 text-xs text-text-secondary">
                      {emp.location}
                    </p>
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
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Employee</th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider md:table-cell">Department</th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider sm:table-cell">Role</th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider lg:table-cell">Location</th>
                    <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider lg:table-cell">Start Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {employees.map((emp) => (
                    <tr
                      key={emp.id}
                      className={cn(
                        "transition-colors",
                        onView && "cursor-pointer hover:bg-surface/50"
                      )}
                      onClick={() => onView?.(emp.id)}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar src={emp.avatar} name={emp.name} size="sm" />
                          <div className="min-w-0">
                            <p className="truncate font-medium">{emp.name}</p>
                            <p className="truncate text-xs text-text-secondary">{emp.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="hidden px-4 py-3 md:table-cell">
                        <Badge variant="soft" size="sm">{emp.department}</Badge>
                      </td>
                      <td className="hidden px-4 py-3 text-text-secondary sm:table-cell">{emp.role}</td>
                      <td className="hidden px-4 py-3 text-text-secondary lg:table-cell">{emp.location ?? "—"}</td>
                      <td className="px-4 py-3 text-center">
                        <Badge color={statusColors[emp.status]} variant="soft" size="sm">{emp.status}</Badge>
                      </td>
                      <td className="hidden px-4 py-3 text-text-secondary lg:table-cell">{emp.startDate ?? "—"}</td>
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
