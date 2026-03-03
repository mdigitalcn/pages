import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PipelinePage from "./PipelinePage";

const meta: Meta<typeof PipelinePage> = {
  title: "Pages/CRM/PipelinePage",
  component: PipelinePage,
  tags: ["autodocs"],
  argTypes: { title: { control: "text" }, currency: { control: "text" } },
};
export default meta;
type Story = StoryObj<typeof PipelinePage>;

const DealCard = ({ name, amount }: { name: string; amount: string }) => (
  <div className="rounded-md border border-border bg-background p-3">
    <p className="text-sm font-medium">{name}</p>
    <p className="text-xs text-text-secondary mt-1">{amount}</p>
  </div>
);

export const Default: Story = {
  args: {
    onAddDeal: () => console.log("add deal"),
    stages: [
      { id: "1", name: "Lead", count: 3, value: 15000, content: <><DealCard name="Acme Corp" amount="$5,000" /><DealCard name="Beta Inc" amount="$3,500" /><DealCard name="Gamma LLC" amount="$6,500" /></> },
      { id: "2", name: "Qualified", count: 2, value: 24000, content: <><DealCard name="Delta Co" amount="$12,000" /><DealCard name="Epsilon Ltd" amount="$12,000" /></> },
      { id: "3", name: "Proposal", count: 1, value: 45000, content: <DealCard name="Zeta Global" amount="$45,000" /> },
      { id: "4", name: "Negotiation", count: 1, value: 30000, content: <DealCard name="Theta Systems" amount="$30,000" /> },
      { id: "5", name: "Won", count: 0, content: <p className="p-3 text-xs text-text-secondary text-center">No deals yet</p> },
    ],
  },
};
