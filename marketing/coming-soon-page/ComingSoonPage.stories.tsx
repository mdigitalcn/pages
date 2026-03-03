import type { Meta, StoryObj } from "@storybook/react";
import ComingSoonPage from "./ComingSoonPage";

const meta: Meta<typeof ComingSoonPage> = {
  title: "Pages/Marketing/ComingSoonPage",
  component: ComingSoonPage,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    launchDate: { control: "text" },
    subscribing: { control: "boolean" },
    subscribed: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof ComingSoonPage>;

export const Default: Story = {
  args: {
    launchDate: "2026-06-01T00:00:00",
    onSubscribe: (email) => console.log("subscribe", email),
  },
};

export const Subscribed: Story = {
  args: {
    launchDate: "2026-06-01T00:00:00",
    subscribed: true,
  },
};

export const NoCountdown: Story = {
  name: "Without Countdown",
  args: {
    title: "We're building something new",
    description: "Sign up to be the first to know when we launch.",
    onSubscribe: (email) => console.log("subscribe", email),
  },
};
