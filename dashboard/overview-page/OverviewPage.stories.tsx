import type { Meta, StoryObj } from "@storybook/react";
import OverviewPage from "./OverviewPage";

const meta: Meta<typeof OverviewPage> = {
  title: "Pages/Dashboard/OverviewPage",
  component: OverviewPage,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    greeting: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof OverviewPage>;

export const Default: Story = {
  args: {
    greeting: "Welcome back, Luke",
    stats: [
      { label: "Total Revenue", value: "$45,231", change: 12.5, changeLabel: "from last month" },
      { label: "Active Users", value: "2,350", change: 8.2, changeLabel: "from last month" },
      { label: "New Signups", value: "1,247", change: -3.1, changeLabel: "from last month" },
      { label: "Conversion Rate", value: "3.6%", change: 1.2, changeLabel: "from last month" },
    ],
  },
};
