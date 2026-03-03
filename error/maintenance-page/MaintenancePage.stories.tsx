import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import MaintenancePage from "./MaintenancePage";

const meta: Meta<typeof MaintenancePage> = {
  title: "Pages/Error/MaintenancePage",
  component: MaintenancePage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof MaintenancePage>;

export const Default: Story = {
  args: {
    estimatedTime: "March 3, 2026 at 8:00 AM UTC",
  },
};

export const WithCountdown: Story = {
  args: {
    countdownTarget: new Date(Date.now() + 2 * 3600000).toISOString(),
    onSubscribe: (email) => console.log("subscribe", email),
  },
};

export const WithStatusUpdates: Story = {
  args: {
    estimatedTime: "~2 hours",
    statusUpdates: [
      { time: "04:00", message: "Maintenance started — database migration in progress" },
      { time: "04:15", message: "Database migration complete, rebuilding indexes" },
      { time: "04:30", message: "Running health checks on all services" },
    ],
    onSubscribe: (email) => console.log("subscribe", email),
  },
};

export const Subscribed: Story = {
  args: {
    estimatedTime: "Soon",
    onSubscribe: (email) => console.log("subscribe", email),
    subscribed: true,
  },
};
