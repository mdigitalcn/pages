import type { Meta, StoryObj } from "@storybook/react";
import LoginPage from "./LoginPage";

const meta: Meta<typeof LoginPage> = {
  title: "Pages/Auth/LoginPage",
  component: LoginPage,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    error: { control: "text" },
    socialProviders: { control: "object" },
  },
};
export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log("login", data),
    onForgotPassword: () => console.log("forgot"),
    onSignUp: () => console.log("signup"),
    socialProviders: ["Google", "GitHub"],
    onSocialLogin: (p) => console.log("social", p),
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: "Invalid email or password",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const NoSocial: Story = {
  name: "Without Social Login",
  args: {
    onSubmit: (data) => console.log("login", data),
    onForgotPassword: () => console.log("forgot"),
    onSignUp: () => console.log("signup"),
  },
};
