import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import KanbanPage from "./KanbanPage";

const meta: Meta<typeof KanbanPage> = {
  title: "Pages/Project/KanbanPage",
  component: KanbanPage,
  tags: ["autodocs"],
  argTypes: { title: { control: "text" } },
};
export default meta;
type Story = StoryObj<typeof KanbanPage>;

const TaskCard = ({ title, tag, assignee }: { title: string; tag?: string; assignee?: string }) => (
  <div className="rounded-md border border-border bg-background p-3 space-y-2">
    <p className="text-sm font-medium">{title}</p>
    <div className="flex items-center justify-between">
      {tag && <span className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">{tag}</span>}
      {assignee && <span className="text-xs text-text-secondary">{assignee}</span>}
    </div>
  </div>
);

export const Default: Story = {
  args: {
    title: "Sprint Board",
    onAddTask: () => console.log("add task"),
    columns: [
      { id: "1", title: "Backlog", color: "#94a3b8", count: 3, content: <><TaskCard title="Research user needs" tag="Research" /><TaskCard title="Design token system" tag="Design" assignee="Sarah" /><TaskCard title="API rate limiting" tag="Backend" /></> },
      { id: "2", title: "In Progress", color: "#3b82f6", count: 2, content: <><TaskCard title="Build checkout flow" tag="Frontend" assignee="Luke" /><TaskCard title="Setup CI/CD" tag="DevOps" assignee="Mike" /></> },
      { id: "3", title: "Review", color: "#f59e0b", count: 1, content: <TaskCard title="Landing page redesign" tag="Design" assignee="Anna" /> },
      { id: "4", title: "Done", color: "#22c55e", count: 4, content: <><TaskCard title="Auth flow" tag="Frontend" /><TaskCard title="Database migration" tag="Backend" /><TaskCard title="Unit tests" tag="Testing" /><TaskCard title="Deploy staging" tag="DevOps" /></> },
    ],
  },
};
