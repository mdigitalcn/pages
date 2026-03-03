import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import GeneralSettingsPage from "./GeneralSettingsPage";

const meta: Meta<typeof GeneralSettingsPage> = {
  title: "Pages/Settings/GeneralSettingsPage",
  component: GeneralSettingsPage,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof GeneralSettingsPage>;

const sections = [
  { id: "general", title: "General", icon: <span>⚙️</span> },
  { id: "appearance", title: "Appearance", icon: <span>🎨</span> },
  { id: "language", title: "Language & Region", icon: <span>🌍</span> },
  { id: "integrations", title: "Integrations", icon: <span>🔗</span> },
  { id: "advanced", title: "Advanced", icon: <span>🔧</span> },
];

export const Default: Story = {
  args: {
    sections,
    activeSection: "general",
    onSectionChange: (id) => console.log("section", id),
    onSave: () => console.log("save"),
    dirty: false,
    children: (
      <div className="space-y-6">
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold">General Settings</h3>
          <p className="mt-1 text-sm text-text-secondary">
            Configure your workspace name, timezone, and default preferences.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Workspace Name</label>
              <input className="w-full rounded-md border border-border px-3 py-2 text-sm" defaultValue="My Workspace" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Timezone</label>
              <select className="w-full rounded-md border border-border px-3 py-2 text-sm">
                <option>UTC</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

export const WithUnsavedChanges: Story = {
  args: {
    ...Default.args,
    dirty: true,
  },
};

export const WithSuccess: Story = {
  args: {
    ...Default.args,
    successMessage: "Settings saved successfully!",
  },
};
