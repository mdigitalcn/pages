import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import HelpCenterPage from "./HelpCenterPage";

const meta: Meta<typeof HelpCenterPage> = {
  title: "Pages/Help/HelpCenterPage",
  component: HelpCenterPage,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof HelpCenterPage>;

export const Default: Story = {
  args: {
    onSearch: (v) => console.log("search", v),
    onCategoryClick: (id) => console.log("category", id),
    categories: [
      { id: "getting-started", title: "Getting Started", description: "Learn the basics and set up your account", articleCount: 12, icon: <span>🚀</span> },
      { id: "billing", title: "Billing & Plans", description: "Manage subscriptions and payments", articleCount: 8, icon: <span>💳</span> },
      { id: "integrations", title: "Integrations", description: "Connect with third-party tools", articleCount: 15, icon: <span>🔌</span> },
      { id: "security", title: "Security", description: "Account security and privacy settings", articleCount: 6, icon: <span>🔐</span> },
      { id: "api", title: "API & Developers", description: "API docs, SDKs, and webhooks", articleCount: 23, icon: <span>⚡</span> },
      { id: "troubleshooting", title: "Troubleshooting", description: "Fix common issues and errors", articleCount: 18, icon: <span>🔧</span> },
    ],
    faq: [
      { question: "How do I reset my password?", answer: "Go to Settings → Security → Change Password, or use the 'Forgot Password' link on the login page." },
      { question: "Can I change my plan at any time?", answer: "Yes! You can upgrade or downgrade your plan at any time from Settings → Billing. Changes take effect immediately." },
      { question: "How do I invite team members?", answer: "Navigate to Settings → Team and click 'Invite member'. Enter their email and select a role." },
      { question: "Is there a free trial?", answer: "Yes, all paid plans come with a 14-day free trial. No credit card required." },
      { question: "How do I export my data?", answer: "Go to Settings → General → Export Data. You can export as CSV or JSON." },
    ],
    contactCta: (
      <div>
        <h3 className="text-lg font-bold mb-2">Still need help?</h3>
        <p className="text-text-secondary mb-4">Our support team is available 24/7</p>
        <button className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white">Contact Support</button>
      </div>
    ),
  },
};
