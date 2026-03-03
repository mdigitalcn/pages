import type { Meta, StoryObj } from "@storybook/react";
import TwoFactorPage from "./TwoFactorPage";

const meta: Meta<typeof TwoFactorPage> = {
  title: "Pages/Auth/TwoFactorPage",
  component: TwoFactorPage,
  tags: ["autodocs"],
  argTypes: {
    method: { control: "select", options: ["authenticator", "sms", "email"] },
    codeLength: { control: { type: "number", min: 4, max: 8 } },
    loading: { control: "boolean" },
    error: { control: "text" },
    maskedContact: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof TwoFactorPage>;

export const Authenticator: Story = {
  args: {
    method: "authenticator",
    onSubmit: (code) => console.log("verify", code),
    onBackToLogin: () => console.log("back"),
    onUseAlternate: () => console.log("alternate"),
  },
};

export const SMS: Story = {
  args: {
    method: "sms",
    maskedContact: "•••• •••• 1234",
    onSubmit: (code) => console.log("verify", code),
    onResend: () => console.log("resend"),
    onBackToLogin: () => console.log("back"),
  },
};

export const Email: Story = {
  args: {
    method: "email",
    maskedContact: "u***@example.com",
    onSubmit: (code) => console.log("verify", code),
    onResend: () => console.log("resend"),
    onBackToLogin: () => console.log("back"),
  },
};

export const WithError: Story = {
  args: {
    ...Authenticator.args,
    error: "Invalid code. Please try again.",
  },
};
