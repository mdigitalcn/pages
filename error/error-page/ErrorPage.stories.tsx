import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ErrorPage from "./ErrorPage";

const meta: Meta<typeof ErrorPage> = {
  title: "Pages/Error/ErrorPage",
  component: ErrorPage,
  tags: ["autodocs"],
  argTypes: {
    code: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {
  args: {
    onRetry: () => console.log("retry"),
    onBack: () => console.log("back"),
  },
};

export const Forbidden: Story = {
  args: {
    code: 403,
    title: "Access denied",
    description: "You don't have permission to access this resource.",
    onBack: () => console.log("back"),
  },
};

export const WithDetails: Story = {
  args: {
    code: 500,
    onRetry: () => console.log("retry"),
    supportHref: "/support",
    details: `Error: INTERNAL_SERVER_ERROR
at processRequest (/api/handler.ts:42:11)
at async Server.handleRequest (/server/index.ts:128:5)

Request ID: req_abc123def456
Timestamp: 2026-03-03T04:26:59.000Z`,
  },
};

export const Timeout: Story = {
  args: {
    code: "TIMEOUT",
    title: "Request timed out",
    description: "The server took too long to respond. This might be due to high traffic.",
    onRetry: () => console.log("retry"),
  },
};
