import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ProfilePage from "./ProfilePage";

const meta: Meta<typeof ProfilePage> = {
  title: "Pages/Settings/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
  args: {
    profile: {
      name: "Alex Johnson",
      email: "alex@example.com",
      phone: "+1 555-0123",
      bio: "Full-stack developer passionate about building great products.",
      location: "San Francisco, CA",
      company: "Acme Corp",
      role: "Senior Engineer",
      website: "https://alexj.dev",
    },
    onSave: (data) => console.log("save", data),
    onAvatarChange: (file) => console.log("avatar", file.name),
    onChangePassword: () => console.log("change password"),
    onDeleteAccount: () => console.log("delete account"),
  },
};

export const Minimal: Story = {
  args: {
    profile: {
      name: "New User",
      email: "new@example.com",
    },
    onSave: (data) => console.log("save", data),
  },
};

export const WithSuccess: Story = {
  args: {
    ...Default.args,
    successMessage: "Profile updated successfully!",
  },
};
