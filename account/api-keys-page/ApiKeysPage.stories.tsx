import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ApiKeysPage from "./ApiKeysPage";

const meta: Meta<typeof ApiKeysPage> = {
  title: "Pages/Account/ApiKeysPage",
  component: ApiKeysPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ApiKeysPage>;

export const Default: Story = {
  args: {
    keys: [
      {
        id: "1",
        name: "Production API",
        key: "test",
        createdAt: "Jan 15, 2026",
        lastUsed: "2 hours ago",
        status: "active",
        scopes: ["read", "write"],
        expiresAt: "Jan 15, 2027",
      },
      {
        id: "2",
        name: "Development",
        key: "test",
        createdAt: "Feb 1, 2026",
        lastUsed: "Just now",
        status: "active",
        scopes: ["read", "write", "admin"],
      },
      {
        id: "3",
        name: "CI/CD Pipeline",
        key: "test",
        createdAt: "Dec 10, 2025",
        lastUsed: "3 days ago",
        status: "active",
        scopes: ["read"],
      },
      {
        id: "4",
        name: "Old Integration",
        key: "test",
        createdAt: "Jun 5, 2025",
        status: "revoked",
      },
    ],
    onCreate: () => console.log("create"),
    onRevoke: (id) => console.log("revoke", id),
    onRegenerate: (id) => console.log("regenerate", id),
    onView: (id) => console.log("view", id),
    docsHref: "/docs/api",
  },
};

export const Empty: Story = {
  args: {
    keys: [],
    onCreate: () => console.log("create"),
    docsHref: "/docs/api",
  },
};
