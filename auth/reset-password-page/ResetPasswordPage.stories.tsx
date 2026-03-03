import type { Meta, StoryObj } from "@storybook/react";
import ResetPasswordPage from "./ResetPasswordPage";

const meta: Meta<typeof ResetPasswordPage> = {
  title: "Pages/Auth/ResetPasswordPage",
  component: ResetPasswordPage,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    success: { control: "boolean" },
    error: { control: "text" },
    tokenExpired: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof ResetPasswordPage>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("reset", data),
    onBackToLogin: () => console.log("back"),
  },
};

export const Success: Story = {
  args: { ...Default.args, success: true },
};

export const TokenExpired: Story = {
  args: {
    onSubmit: (data) => console.log("reset", data),
    onBackToLogin: () => console.log("back"),
    onRequestNew: () => console.log("request new"),
    tokenExpired: true,
  },
};
