"use client";

import { Plus, ClipboardList } from "lucide-react";
import Card, { CardContent } from "@mdigitalcn/uikit/card";
import Input from "@mdigitalcn/uikit/input";
import Button from "@mdigitalcn/uikit/button";
import Badge from "@mdigitalcn/uikit/badge";
import Avatar from "@mdigitalcn/uikit/avatar";
import { cn } from "@mdigitalcn/uikit";
import type { TasksPageProps, TaskPriority, TaskStatus } from "./TasksPage.types";

const priorityColors: Record<TaskPriority, "default" | "info" | "warning" | "error"> = {
  low: "default",
  medium: "info",
  high: "warning",
  urgent: "error",
};

const statusColors: Record<TaskStatus, "default" | "info" | "warning" | "success"> = {
  todo: "default",
  "in-progress": "info",
  review: "warning",
  done: "success",
};

export default function TasksPage({
  tasks,
  title = "Tasks",
  onAdd,
  onView,
  searchValue,
  onSearch,
  filters,
  pagination,
  className,
}: TasksPageProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {onAdd && <Button color="primary" icon={<Plus className="size-4" />} onClick={onAdd}>Add task</Button>}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {onSearch && (
          <Input
            value={searchValue}
            onChange={(e: any) => onSearch(e.target?.value ?? e)}
            placeholder="Search tasks..."
            className="sm:w-72"
          />
        )}
        {filters}
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/50 text-text-secondary">
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Task</th>
                  <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Priority</th>
                  <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider sm:table-cell">Assignee</th>
                  <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider md:table-cell">Due</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr
                    key={task.id}
                    className={cn(
                      "border-b transition-colors last:border-0",
                      onView && "cursor-pointer hover:bg-surface/50"
                    )}
                    onClick={() => onView?.(task.id)}
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium">{task.title}</p>
                      {task.tags && task.tags.length > 0 && (
                        <div className="mt-1 flex gap-1">
                          {task.tags.map((tag) => (
                            <Badge key={tag} variant="soft" size="sm">{tag}</Badge>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge color={statusColors[task.status]} variant="soft" size="sm">
                        {task.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge color={priorityColors[task.priority]} variant="soft" size="sm">
                        {task.priority}
                      </Badge>
                    </td>
                    <td className="hidden px-4 py-3 sm:table-cell">
                      {task.assignee && (
                        <div className="flex items-center gap-2">
                          <Avatar src={task.assignee.avatar} name={task.assignee.name} size="xs" />
                          <span className="text-sm truncate">{task.assignee.name}</span>
                        </div>
                      )}
                    </td>
                    <td className="hidden px-4 py-3 text-text-secondary md:table-cell">
                      {task.dueDate}
                    </td>
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
