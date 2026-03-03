import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ContactsPage from "./ContactsPage";
import type { Contact } from "./ContactsPage.types";

const meta: Meta<typeof ContactsPage> = {
  title: "Pages/CRM/ContactsPage",
  component: ContactsPage,
  tags: ["autodocs"],
  argTypes: {
    viewMode: { control: "select", options: ["grid", "list"] },
    totalCount: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof ContactsPage>;

const mockContacts: Contact[] = [
  { id: "1", name: "Sarah Chen", email: "sarah@acme.com", phone: "+1 555-0101", company: "Acme Corp", role: "CEO", status: "customer", lastContact: "2 days ago", tags: ["VIP"] },
  { id: "2", name: "James Wilson", email: "james@globex.io", phone: "+1 555-0102", company: "Globex", role: "CTO", status: "active", lastContact: "1 week ago" },
  { id: "3", name: "Maria Garcia", email: "maria@initech.com", phone: "+1 555-0103", company: "Initech", role: "VP Sales", status: "lead", lastContact: "3 days ago", tags: ["Enterprise"] },
  { id: "4", name: "Alex Kim", email: "alex@wayne.co", company: "Wayne Enterprises", role: "Engineer", status: "inactive", lastContact: "1 month ago" },
  { id: "5", name: "Priya Patel", email: "priya@stark.io", phone: "+1 555-0105", company: "Stark Industries", role: "Designer", status: "active", lastContact: "Yesterday", tags: ["Design", "Partner"] },
  { id: "6", name: "Tom Baker", email: "tom@umbrella.co", phone: "+1 555-0106", company: "Umbrella Corp", role: "Manager", status: "customer", lastContact: "5 days ago" },
];

export const Default: Story = {
  args: {
    contacts: mockContacts,
    totalCount: 6,
    onAdd: () => console.log("add"),
    onView: (id) => console.log("view", id),
    onDelete: (id) => console.log("delete", id),
    onSearch: (v) => console.log("search", v),
    onExport: () => console.log("export"),
    onViewModeChange: (m) => console.log("view mode", m),
    viewMode: "list",
  },
};

export const GridView: Story = {
  args: {
    ...Default.args,
    viewMode: "grid",
  },
};

export const Empty: Story = {
  args: {
    contacts: [],
    onAdd: () => console.log("add"),
  },
};
