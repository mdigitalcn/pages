import type { Meta, StoryObj } from "@storybook/react";
import RegisterPage from "./RegisterPage";

const meta: Meta<typeof RegisterPage> = {
  title: "Pages/Auth/RegisterPage",
  component: RegisterPage,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    error: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof RegisterPage>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("register", data),
    onSignIn: () => console.log("signin"),
    socialProviders: ["Google", "GitHub"],
    onSocialSignup: (p) => console.log("social", p),
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "An account with this email already exists",
  },
};
