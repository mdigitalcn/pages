import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TeamPage from "./TeamPage";

const meta: Meta<typeof TeamPage> = {
  title: "Pages/Settings/TeamPage",
  component: TeamPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TeamPage>;

export const Default: Story = {
  args: {
    members: [
      { id: "1", name: "Alex Johnson", email: "alex@company.com", role: "Admin", status: "active", lastActive: "Just now" },
      { id: "2", name: "Sarah Chen", email: "sarah@company.com", role: "Editor", status: "active", lastActive: "2 hours ago" },
      { id: "3", name: "Mike Wilson", email: "mike@company.com", role: "Viewer", status: "active", lastActive: "1 day ago" },
      { id: "4", name: "Lisa Park", email: "lisa@company.com", role: "Editor", status: "inactive", lastActive: "2 weeks ago" },
    ],
    pendingInvites: [
      { id: "p1", email: "newdev@company.com", role: "Editor", sentAt: "2 days ago" },
      { id: "p2", email: "designer@company.com", role: "Viewer", sentAt: "5 days ago" },
    ],
    onInvite: () => console.log("invite"),
    onRemove: (id) => console.log("remove", id),
    onRoleChange: (id, role) => console.log("role", id, role),
    onCancelInvite: (id) => console.log("cancel invite", id),
    onResendInvite: (id) => console.log("resend invite", id),
    onSearch: (v) => console.log("search", v),
  },
};

export const Empty: Story = {
  args: {
    members: [],
    onInvite: () => console.log("invite"),
  },
};
