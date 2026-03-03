import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import BillingPage from "./BillingPage";

const meta: Meta<typeof BillingPage> = {
  title: "Pages/Settings/BillingPage",
  component: BillingPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof BillingPage>;

export const Default: Story = {
  args: {
    plan: {
      name: "Pro Plan",
      price: "$29",
      period: "month",
      renewalDate: "April 3, 2026",
      features: ["Unlimited projects", "50 GB storage", "Priority support", "Custom domains"],
    },
    paymentMethods: [
      { id: "1", type: "card", brand: "Visa", last4: "4242", expiry: "12/27", default: true },
      { id: "2", type: "card", brand: "MC", last4: "8888", expiry: "06/26" },
    ],
    usage: [
      { label: "Storage", used: 32, limit: 50, unit: "GB" },
      { label: "API Requests", used: 8500, limit: 10000 },
      { label: "Team Members", used: 4, limit: 10 },
    ],
    invoices: [
      { id: "1", date: "Mar 1, 2026", amount: "$29.00", status: "paid" },
      { id: "2", date: "Feb 1, 2026", amount: "$29.00", status: "paid" },
      { id: "3", date: "Jan 1, 2026", amount: "$29.00", status: "paid" },
      { id: "4", date: "Dec 1, 2025", amount: "$19.00", status: "paid" },
    ],
    onChangePlan: () => console.log("change plan"),
    onAddPayment: () => console.log("add payment"),
    onRemovePayment: (id) => console.log("remove", id),
    onSetDefault: (id) => console.log("set default", id),
    onDownloadInvoice: (id) => console.log("download", id),
    onCancelSubscription: () => console.log("cancel"),
  },
};

export const FreePlan: Story = {
  args: {
    plan: {
      name: "Free",
      price: "$0",
      period: "month",
      features: ["1 project", "1 GB storage", "Community support"],
    },
    usage: [
      { label: "Storage", used: 900, limit: 1000, unit: "MB" },
      { label: "API Requests", used: 980, limit: 1000 },
    ],
    onChangePlan: () => console.log("upgrade"),
  },
};
