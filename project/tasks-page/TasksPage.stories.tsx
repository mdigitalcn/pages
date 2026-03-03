import type { Meta, StoryObj } from "@storybook/react";
import TasksPage from "./TasksPage";

const meta: Meta<typeof TasksPage> = {
  title: "Pages/Project/TasksPage",
  component: TasksPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TasksPage>;

export const Default: Story = {
  args: {
    onAdd: () => console.log("add"),
    onView: (id) => console.log("view", id),
    onSearch: (v) => console.log("search", v),
    tasks: [
      { id: "1", title: "Build checkout flow", priority: "high", status: "in-progress", assignee: { name: "Luke Ahmed" }, dueDate: "Feb 28", tags: ["frontend"] },
      { id: "2", title: "Setup CI/CD pipeline", priority: "urgent", status: "in-progress", assignee: { name: "Mike Johnson" }, dueDate: "Feb 26", tags: ["devops"] },
      { id: "3", title: "Design token system", priority: "medium", status: "review", assignee: { name: "Sarah Chen" }, dueDate: "Mar 1", tags: ["design"] },
      { id: "4", title: "API rate limiting", priority: "medium", status: "todo", dueDate: "Mar 5", tags: ["backend", "security"] },
      { id: "5", title: "Write unit tests", priority: "low", status: "done", assignee: { name: "Anna Kim" }, dueDate: "Feb 20", tags: ["testing"] },
      { id: "6", title: "Database migration", priority: "high", status: "done", assignee: { name: "Mike Johnson" }, dueDate: "Feb 22", tags: ["backend"] },
    ],
  },
};
