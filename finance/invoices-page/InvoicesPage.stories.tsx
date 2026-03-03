import type { Meta, StoryObj } from "@storybook/react";
import InvoicesPage from "./InvoicesPage";

const meta: Meta<typeof InvoicesPage> = {
  title: "Pages/Finance/InvoicesPage",
  component: InvoicesPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof InvoicesPage>;

export const Default: Story = {
  args: {
    onAdd: () => console.log("add"),
    onView: (id) => console.log("view", id),
    onSearch: (v) => console.log("search", v),
    summary: { total: "$45,231", paid: "$32,100", overdue: "$5,680", pending: "$7,451" },
    invoices: [
      { id: "1", number: "INV-001", client: "Acme Corp", amount: "$12,500", status: "paid", issueDate: "Jan 15", dueDate: "Feb 15" },
      { id: "2", number: "INV-002", client: "Beta Inc", amount: "$8,200", status: "sent", issueDate: "Feb 1", dueDate: "Mar 1" },
      { id: "3", number: "INV-003", client: "Gamma LLC", amount: "$5,680", status: "overdue", issueDate: "Jan 20", dueDate: "Feb 20" },
      { id: "4", number: "INV-004", client: "Delta Co", amount: "$3,450", status: "draft", issueDate: "Feb 24", dueDate: "Mar 24" },
      { id: "5", number: "INV-005", client: "Epsilon Ltd", amount: "$15,401", status: "paid", issueDate: "Feb 10", dueDate: "Mar 10" },
      { id: "6", number: "INV-006", client: "Zeta Global", amount: "$2,500", status: "cancelled", issueDate: "Feb 5", dueDate: "Mar 5" },
    ],
  },
};
