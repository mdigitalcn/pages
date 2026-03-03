import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ProductsPage from "./ProductsPage";
import type { Product } from "./ProductsPage.types";

const meta: Meta<typeof ProductsPage> = {
  title: "Pages/Ecommerce/ProductsPage",
  component: ProductsPage,
  tags: ["autodocs"],
  argTypes: {
    viewMode: { control: "select", options: ["grid", "list"] },
    totalCount: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof ProductsPage>;

const mockProducts: Product[] = [
  { id: "1", name: "Wireless Headphones Pro", price: "$149.99", comparePrice: "$199.99", status: "active", category: "Audio", inventory: 45, sku: "WHP-001", rating: 4.8, reviewCount: 234 },
  { id: "2", name: "Smart Watch Ultra", price: "$299.99", status: "active", category: "Wearables", inventory: 12, sku: "SWU-002", rating: 4.5, reviewCount: 89 },
  { id: "3", name: "USB-C Hub 7-in-1", price: "$49.99", status: "active", category: "Accessories", inventory: 120, sku: "UCH-003", rating: 4.2, reviewCount: 56 },
  { id: "4", name: "Mechanical Keyboard RGB", price: "$89.99", status: "draft", category: "Input", inventory: 0, sku: "MKR-004" },
  { id: "5", name: "4K Webcam", price: "$79.99", status: "active", category: "Video", inventory: 8, sku: "4KW-005", rating: 4.6, reviewCount: 112 },
  { id: "6", name: "Desk Lamp LED", price: "$34.99", status: "archived", category: "Office", inventory: 3, sku: "DLL-006" },
  { id: "7", name: "Laptop Stand Aluminum", price: "$59.99", status: "active", category: "Office", inventory: 67, sku: "LSA-007", rating: 4.9, reviewCount: 45 },
  { id: "8", name: "Monitor Light Bar", price: "$44.99", status: "out-of-stock", category: "Lighting", inventory: 0, sku: "MLB-008", rating: 4.3, reviewCount: 78 },
];

export const Default: Story = {
  args: {
    products: mockProducts,
    totalCount: 156,
    viewMode: "grid",
    onAdd: () => console.log("add"),
    onView: (id) => console.log("view", id),
    onDelete: (id) => console.log("delete", id),
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
    products: [],
    onAdd: () => console.log("add"),
  },
};
