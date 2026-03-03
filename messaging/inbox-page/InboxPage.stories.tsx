import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InboxPage from "./InboxPage";

const meta: Meta<typeof InboxPage> = {
  title: "Pages/Messaging/InboxPage",
  component: InboxPage,
  tags: ["autodocs"],
  argTypes: { activeId: { control: "text" } },
};
export default meta;
type Story = StoryObj<typeof InboxPage>;

export const Default: Story = {
  args: {
    activeId: "2",
    onSelect: (id) => console.log("select", id),
    onCompose: () => console.log("compose"),
    onSearch: (v) => console.log("search", v),
    conversations: [
      { id: "1", name: "Sarah Chen", lastMessage: "Sure, I'll send the designs over", time: "2m", unread: 2, online: true },
      { id: "2", name: "Mike Johnson", lastMessage: "The deployment went smoothly 🎉", time: "15m", online: true },
      { id: "3", name: "Anna Kim", lastMessage: "Can you review the PR?", time: "1h", unread: 1 },
      { id: "4", name: "Bob Wilson", lastMessage: "Meeting moved to 3pm", time: "3h" },
      { id: "5", name: "Diana Lee", lastMessage: "Thanks for the update!", time: "Yesterday", online: true },
      { id: "6", name: "Team Frontend", lastMessage: "Anna: Merged the feature branch", time: "Yesterday", unread: 5 },
    ],
    detail: (
      <div className="flex flex-1 flex-col">
        <div className="border-b border-border p-4">
          <p className="font-semibold">Mike Johnson</p>
          <p className="text-xs text-text-secondary">Online</p>
        </div>
        <div className="flex-1 p-4 space-y-4">
          <div className="flex justify-start"><div className="max-w-xs rounded-lg bg-surface p-3 text-sm">Hey, the deployment went smoothly 🎉</div></div>
          <div className="flex justify-end"><div className="max-w-xs rounded-lg bg-primary text-white p-3 text-sm">Awesome! Any issues with the new release?</div></div>
          <div className="flex justify-start"><div className="max-w-xs rounded-lg bg-surface p-3 text-sm">Nope, all green. Monitoring looks clean.</div></div>
        </div>
        <div className="border-t border-border p-4">
          <div className="rounded-lg border border-border p-3 text-sm text-text-secondary">Type a message...</div>
        </div>
      </div>
    ),
  },
};

export const Empty: Story = {
  args: {
    conversations: [],
    onCompose: () => console.log("compose"),
  },
};
