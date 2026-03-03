import type { Meta, StoryObj } from "@storybook/react";
import ForgotPasswordPage from "./ForgotPasswordPage";

const meta: Meta<typeof ForgotPasswordPage> = {
  title: "Pages/Auth/ForgotPasswordPage",
  component: ForgotPasswordPage,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    success: { control: "boolean" },
    error: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof ForgotPasswordPage>;

export const Default: Story = {
  args: {
    onSubmit: (email) => console.log("reset", email),
    onBackToLogin: () => console.log("back"),
  },
};

export const Success: Story = {
  args: { ...Default.args, success: true },
};

export const WithError: Story = {
  args: { ...Default.args, error: "No account found with this email" },
};
