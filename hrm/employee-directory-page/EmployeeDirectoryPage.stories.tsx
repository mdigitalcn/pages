import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import EmployeeDirectoryPage from "./EmployeeDirectoryPage";
import type { Employee } from "./EmployeeDirectoryPage.types";

const meta: Meta<typeof EmployeeDirectoryPage> = {
  title: "Pages/HRM/EmployeeDirectoryPage",
  component: EmployeeDirectoryPage,
  tags: ["autodocs"],
  argTypes: {
    viewMode: { control: "select", options: ["grid", "list"] },
    totalCount: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof EmployeeDirectoryPage>;

const mockEmployees: Employee[] = [
  { id: "1", name: "Alice Johnson", email: "alice@company.com", role: "Engineering Manager", department: "Engineering", status: "active", location: "San Francisco, CA", startDate: "Jan 2022", phone: "+1 555-0101" },
  { id: "2", name: "Bob Smith", email: "bob@company.com", role: "Senior Designer", department: "Design", status: "remote", location: "Austin, TX", startDate: "Mar 2023" },
  { id: "3", name: "Carol Williams", email: "carol@company.com", role: "Product Manager", department: "Product", status: "active", location: "New York, NY", startDate: "Jun 2021" },
  { id: "4", name: "David Lee", email: "david@company.com", role: "Frontend Engineer", department: "Engineering", status: "on-leave", location: "Seattle, WA", startDate: "Sep 2023" },
  { id: "5", name: "Eva Martinez", email: "eva@company.com", role: "HR Specialist", department: "HR", status: "active", location: "Chicago, IL", startDate: "Nov 2022" },
  { id: "6", name: "Frank Brown", email: "frank@company.com", role: "Data Analyst", department: "Analytics", status: "active", location: "Denver, CO", startDate: "Feb 2024" },
  { id: "7", name: "Grace Kim", email: "grace@company.com", role: "Marketing Lead", department: "Marketing", status: "remote", location: "Portland, OR", startDate: "Aug 2022" },
  { id: "8", name: "Henry Davis", email: "henry@company.com", role: "DevOps Engineer", department: "Engineering", status: "offboarded", startDate: "Apr 2021" },
];

export const Default: Story = {
  args: {
    employees: mockEmployees,
    totalCount: 8,
    viewMode: "grid",
    onAdd: () => console.log("add"),
    onView: (id) => console.log("view", id),
    onSearch: (v) => console.log("search", v),
    onViewModeChange: (m) => console.log("view mode", m),
    onExport: () => console.log("export"),
  },
};

export const ListView: Story = {
  args: {
    ...Default.args,
    viewMode: "list",
  },
};

export const Empty: Story = {
  args: {
    employees: [],
    onAdd: () => console.log("add"),
  },
};
