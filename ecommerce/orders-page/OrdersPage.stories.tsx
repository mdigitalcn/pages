import type { Meta, StoryObj } from "@storybook/react";
import OrdersPage from "./OrdersPage";

const meta: Meta<typeof OrdersPage> = {
  title: "Pages/Ecommerce/OrdersPage",
  component: OrdersPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof OrdersPage>;

export const Default: Story = {
  args: {
    onView: (id) => console.log("view", id),
    onExport: () => console.log("export"),
    orders: [
      { id: "ORD-001", customer: "John Doe", date: "Feb 20, 2026", total: "$129.99", status: "delivered", items: 3 },
      { id: "ORD-002", customer: "Jane Smith", date: "Feb 22, 2026", total: "$89.50", status: "shipped", items: 2 },
      { id: "ORD-003", customer: "Bob Johnson", date: "Feb 23, 2026", total: "$234.00", status: "processing", items: 5 },
      { id: "ORD-004", customer: "Alice Brown", date: "Feb 24, 2026", total: "$45.99", status: "pending", items: 1 },
      { id: "ORD-005", customer: "Charlie Wilson", date: "Feb 24, 2026", total: "$567.00", status: "cancelled", items: 4 },
      { id: "ORD-006", customer: "Diana Lee", date: "Feb 25, 2026", total: "$78.50", status: "refunded", items: 2 },
    ],
  },
};
