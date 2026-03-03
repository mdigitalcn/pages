import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import NotificationsPage from "./NotificationsPage";

const meta: Meta<typeof NotificationsPage> = {
  title: "Pages/Settings/NotificationsPage",
  component: NotificationsPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NotificationsPage>;

export const Default: Story = {
  args: {
    groups: [
      {
        title: "Activity",
        description: "Notifications about actions in your workspace",
        channels: [
          { id: "comments", label: "Comments", description: "When someone comments on your items", email: true, push: true, inApp: true },
          { id: "mentions", label: "Mentions", description: "When someone mentions you", email: true, push: true, inApp: true },
          { id: "assignments", label: "Assignments", description: "When a task is assigned to you", email: true, push: false, inApp: true },
        ],
      },
      {
        title: "Updates",
        description: "Product and system notifications",
        channels: [
          { id: "product", label: "Product updates", description: "New features and improvements", email: true, push: false, inApp: false },
          { id: "security", label: "Security alerts", description: "Login attempts and security events", email: true, push: true, inApp: true },
          { id: "billing", label: "Billing", description: "Invoice and payment notifications", email: true, push: false, inApp: true },
        ],
      },
      {
        title: "Marketing",
        description: "Promotional content and newsletters",
        channels: [
          { id: "newsletter", label: "Newsletter", description: "Monthly product newsletter", email: false, push: false, inApp: false },
          { id: "tips", label: "Tips & tricks", description: "Helpful guides and tutorials", email: false, push: false, inApp: false },
        ],
      },
    ],
    onToggle: (id, type, value) => console.log("toggle", id, type, value),
    onSave: () => console.log("save"),
  },
};

export const FlatList: Story = {
  args: {
    channels: [
      { id: "comments", label: "Comments", email: true, push: true, inApp: true },
      { id: "mentions", label: "Mentions", email: true, push: true, inApp: true },
      { id: "security", label: "Security alerts", email: true, push: true, inApp: true },
    ],
    onToggle: (id, type, value) => console.log("toggle", id, type, value),
    onSave: () => console.log("save"),
  },
};
