import type { Meta, StoryObj } from "@storybook/react";
import VerifyEmailPage from "./VerifyEmailPage";

const meta: Meta<typeof VerifyEmailPage> = {
  title: "Pages/Auth/VerifyEmailPage",
  component: VerifyEmailPage,
  tags: ["autodocs"],
  argTypes: {
    verified: { control: "boolean" },
    loading: { control: "boolean" },
    email: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof VerifyEmailPage>;

export const Pending: Story = {
  args: {
    email: "user@example.com",
    onResend: () => console.log("resend"),
  },
};

export const Verified: Story = {
  args: {
    verified: true,
    onContinue: () => console.log("continue"),
  },
};
