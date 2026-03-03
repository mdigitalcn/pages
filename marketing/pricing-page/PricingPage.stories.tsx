import type { Meta, StoryObj } from "@storybook/react";
import PricingPage from "./PricingPage";

const meta: Meta<typeof PricingPage> = {
  title: "Pages/Marketing/PricingPage",
  component: PricingPage,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof PricingPage>;

export const Default: Story = {
  args: {
    onSelect: (id) => console.log("select", id),
    tiers: [
      {
        id: "free",
        name: "Free",
        description: "For individuals getting started",
        price: "$0",
        period: "month",
        cta: "Get started free",
        features: [
          { text: "Up to 3 projects", included: true },
          { text: "1 GB storage", included: true },
          { text: "Community support", included: true },
          { text: "Custom domains", included: false },
          { text: "Analytics", included: false },
          { text: "Priority support", included: false },
        ],
      },
      {
        id: "pro",
        name: "Pro",
        description: "For growing teams",
        price: "$29",
        period: "month",
        popular: true,
        cta: "Start free trial",
        features: [
          { text: "Unlimited projects", included: true },
          { text: "50 GB storage", included: true },
          { text: "Priority support", included: true },
          { text: "Custom domains", included: true },
          { text: "Advanced analytics", included: true },
          { text: "SSO / SAML", included: false },
        ],
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "For large organizations",
        price: "$99",
        period: "month",
        cta: "Contact sales",
        features: [
          { text: "Unlimited everything", included: true },
          { text: "1 TB storage", included: true },
          { text: "24/7 dedicated support", included: true },
          { text: "Custom domains", included: true },
          { text: "Advanced analytics", included: true },
          { text: "SSO / SAML", included: true },
        ],
      },
    ],
  },
};
