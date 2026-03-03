import type { Meta, StoryObj } from "@storybook/react";
import ActivityLogPage from "./ActivityLogPage";

const meta: Meta<typeof ActivityLogPage> = {
  title: "Pages/Account/ActivityLogPage",
  component: ActivityLogPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ActivityLogPage>;

export const Default: Story = {
  args: {
    activities: [
      { id: "1", type: "login", description: "Signed in from Chrome on macOS", user: { name: "Luke Ahmed" }, timestamp: "2 min ago" },
      { id: "2", type: "update", description: "Updated profile settings", user: { name: "Luke Ahmed" }, timestamp: "1 hour ago", metadata: { field: "email" } },
      { id: "3", type: "create", description: "Created new API key 'Production'", user: { name: "Sarah Chen" }, timestamp: "3 hours ago" },
      { id: "4", type: "invite", description: "Invited mike@example.com to the team", user: { name: "Luke Ahmed" }, timestamp: "Yesterday" },
      { id: "5", type: "delete", description: "Deleted project 'Old Demo'", user: { name: "Mike Johnson" }, timestamp: "2 days ago" },
      { id: "6", type: "export", description: "Exported contacts to CSV", user: { name: "Anna Kim" }, timestamp: "3 days ago", metadata: { rows: "1,247" } },
    ],
    onExport: () => console.log("export"),
  },
};
