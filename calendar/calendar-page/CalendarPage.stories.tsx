import type { Meta, StoryObj } from "@storybook/react";
import CalendarPage from "./CalendarPage";

const meta: Meta<typeof CalendarPage> = {
  title: "Pages/Calendar/CalendarPage",
  component: CalendarPage,
  tags: ["autodocs"],
  argTypes: { title: { control: "text" } },
};
export default meta;
type Story = StoryObj<typeof CalendarPage>;

export const Default: Story = {
  args: {
    onAddEvent: () => console.log("add event"),
    onEventClick: (id) => console.log("event", id),
    events: [
      { id: "1", title: "Team standup", date: "Feb 25, 2026", time: "9:00 AM", color: "#3b82f6" },
      { id: "2", title: "Design review", date: "Feb 25, 2026", time: "2:00 PM", color: "#8b5cf6" },
      { id: "3", title: "Sprint planning", date: "Feb 26, 2026", time: "10:00 AM", color: "#22c55e" },
      { id: "4", title: "Client call", date: "Feb 27, 2026", time: "3:30 PM", color: "#f59e0b" },
      { id: "5", title: "Deploy v2.0", date: "Feb 28, 2026", time: "5:00 PM", color: "#ef4444" },
    ],
  },
};
