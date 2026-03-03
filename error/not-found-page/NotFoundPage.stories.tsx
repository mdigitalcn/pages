import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import NotFoundPage from "./NotFoundPage";

const meta: Meta<typeof NotFoundPage> = {
  title: "Pages/Error/NotFoundPage",
  component: NotFoundPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {
  args: {
    onBack: () => console.log("back"),
  },
};

export const WithSearch: Story = {
  args: {
    onBack: () => console.log("back"),
    onSearch: (q) => console.log("search", q),
  },
};

export const WithSuggestions: Story = {
  args: {
    onBack: () => console.log("back"),
    onSearch: (q) => console.log("search", q),
    suggestions: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Products", href: "/products" },
      { label: "Settings", href: "/settings" },
      { label: "Help Center", href: "/help" },
    ],
  },
};
