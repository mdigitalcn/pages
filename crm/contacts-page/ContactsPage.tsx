"use client";

import { Upload, Download, Plus, UserPlus, Trash2, LayoutGrid, List } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import Badge from "@mdigital_ui/ui/badge";
import Avatar from "@mdigital_ui/ui/avatar";
import Toggle from "@mdigital_ui/ui/toggle";
import { cn } from "@mdigital_ui/ui";
import type { ContactsPageProps, ContactStatus } from "./ContactsPage.types";

const statusColors: Record<ContactStatus, "success" | "default" | "warning" | "info"> = {
  active: "success",
  inactive: "default",
  lead: "warning",
  customer: "info",
};

export default function ContactsPage({
  contacts,
  title = "Contacts",
  onAdd,
  onView,
  onDelete,
  searchValue,
  onSearch,
  filters,
  statusFilter,
  viewMode = "list",
  onViewModeChange,
  pagination,
  totalCount,
  onImport,
  onExport,
  className,
}: ContactsPageProps) {
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
          {onImport && (
            <Button variant="outline" icon={<Upload className="size-4" />} onClick={onImport}>
              Import
            </Button>
          )}
          {onExport && (
            <Button variant="outline" icon={<Download className="size-4" />} onClick={onExport}>
              Export
            </Button>
          )}
          {onAdd && (
            <Button color="primary" icon={<UserPlus className="size-4" />} onClick={onAdd}>
              Add contact
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
              placeholder="Search contacts..."
              className="max-w-xs"
            />
          )}
          {statusFilter}
          {filters}
        </div>
        {onViewModeChange && (
          <div className="flex gap-1">
            <Toggle
              pressed={viewMode === "list"}
              onChange={() => onViewModeChange("list")}
              aria-label="List view"
              icon={<List className="size-4" />}
            />
            <Toggle
              pressed={viewMode === "grid"}
              onChange={() => onViewModeChange("grid")}
              aria-label="Grid view"
              icon={<LayoutGrid className="size-4" />}
            />
          </div>
        )}
      </div>

      {/* Empty state */}
      {contacts.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UserPlus className="size-7" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">No contacts yet</h3>
            <p className="mt-1.5 max-w-xs text-sm text-text-secondary">
              Add your first contact to start building your CRM pipeline.
            </p>
            {onAdd && (
              <Button color="primary" className="mt-5" onClick={onAdd}>
                Add contact
              </Button>
            )}
          </CardContent>
        </Card>
      ) : viewMode === "grid" ? (
        /* Grid view */
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {contacts.map((contact) => (
            <Card
              key={contact.id}
              className={cn(
                "transition-all duration-200",
                onView && "cursor-pointer hover:shadow-md hover:-translate-y-0.5"
              )}
              onClick={() => onView?.(contact.id)}
            >
              <CardContent className="p-5">
                <div className="flex flex-col items-center text-center">
                  <Avatar src={contact.avatar} name={contact.name} size="lg" />
                  <h3 className="mt-3 font-semibold leading-tight">
                    {contact.name}
                  </h3>
                  {contact.role && (
                    <p className="mt-0.5 text-sm text-text-secondary">
                      {contact.role}
                    </p>
                  )}
                  {contact.company && (
                    <p className="mt-0.5 text-xs text-text-secondary">
                      {contact.company}
                    </p>
                  )}
                  <div className="mt-3">
                    <Badge
                      color={statusColors[contact.status]}
                      variant="soft"
                      size="sm"
                    >
                      {contact.status}
                    </Badge>
                  </div>
                  {contact.tags && contact.tags.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap justify-center gap-1">
                      {contact.tags.map((tag) => (
                        <Badge key={tag} variant="soft" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        /* List/table view */
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/50 text-text-secondary">
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider md:table-cell">
                      Company
                    </th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider sm:table-cell">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider lg:table-cell">
                      Last Contact
                    </th>
                    {onDelete && <th className="w-16 px-4 py-3" />}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className={cn(
                        "transition-colors",
                        onView && "cursor-pointer hover:bg-surface/50"
                      )}
                      onClick={() => onView?.(contact.id)}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={contact.avatar}
                            name={contact.name}
                            size="sm"
                          />
                          <div className="min-w-0">
                            <p className="truncate font-medium">
                              {contact.name}
                            </p>
                            <p className="truncate text-xs text-text-secondary">
                              {contact.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="hidden px-4 py-3 text-text-secondary md:table-cell">
                        {contact.company ?? "—"}
                      </td>
                      <td className="hidden px-4 py-3 text-text-secondary sm:table-cell">
                        {contact.phone ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Badge
                          color={statusColors[contact.status]}
                          variant="soft"
                          size="sm"
                        >
                          {contact.status}
                        </Badge>
                      </td>
                      <td className="hidden px-4 py-3 text-text-secondary lg:table-cell">
                        {contact.lastContact ?? "—"}
                      </td>
                      {onDelete && (
                        <td className="px-4 py-3 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            color="error"
                            iconOnly
                            icon={<Trash2 className="size-4" />}
                            aria-label="Delete contact"
                            onClick={(e: any) => {
                              e.stopPropagation();
                              onDelete(contact.id);
                            }}
                          />
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

      {/* Pagination */}
      {pagination && <div className="flex justify-center">{pagination}</div>}
    </div>
  );
}
