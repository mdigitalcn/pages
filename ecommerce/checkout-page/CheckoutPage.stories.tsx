import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CheckoutPage from "./CheckoutPage";

const meta: Meta<typeof CheckoutPage> = {
  title: "Pages/Ecommerce/CheckoutPage",
  component: CheckoutPage,
  tags: ["autodocs"],
  argTypes: {
    currentStep: { control: { type: "number", min: 0, max: 3 } },
    loading: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof CheckoutPage>;

export const Default: Story = {
  args: {
    currentStep: 1,
    items: [
      { id: "1", name: "Wireless Headphones", price: "$79.99", quantity: 1 },
      { id: "2", name: "USB-C Hub", price: "$49.99", quantity: 2 },
      { id: "3", name: "Laptop Stand", price: "$34.99", quantity: 1 },
    ],
    subtotal: "$214.96",
    shipping: "$9.99",
    tax: "$17.20",
    total: "$242.15",
    onSubmit: () => console.log("submit"),
    onBack: () => console.log("back"),
    shippingForm: (
      <div className="rounded-lg border border-dashed border-border p-6 text-center text-text-secondary text-sm">
        Shipping form fields go here
      </div>
    ),
    paymentForm: (
      <div className="rounded-lg border border-dashed border-border p-6 text-center text-text-secondary text-sm">
        Payment form fields go here
      </div>
    ),
  },
};
