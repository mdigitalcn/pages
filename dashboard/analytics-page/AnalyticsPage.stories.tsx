import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import AnalyticsPage from "./AnalyticsPage";

const meta: Meta<typeof AnalyticsPage> = {
  title: "Pages/Dashboard/AnalyticsPage",
  component: AnalyticsPage,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof AnalyticsPage>;

const mockStats = [
  { label: "Total Visitors", value: "24,512", change: 12.5, changeLabel: "vs last month", icon: <span>👁️</span> },
  { label: "Conversion Rate", value: "3.24%", change: -0.8, changeLabel: "vs last month", icon: <span>📊</span> },
  { label: "Avg. Session", value: "4m 32s", change: 8.1, changeLabel: "vs last month", icon: <span>⏱️</span> },
  { label: "Bounce Rate", value: "42.1%", change: -3.2, changeLabel: "vs last month", icon: <span>↩️</span> },
];

export const Default: Story = {
  args: {
    title: "Analytics",
    subtitle: "Track your key performance metrics",
    stats: mockStats,
    onExport: () => console.log("export"),
    primaryChart: (
      <div className="flex h-64 items-center justify-center rounded-md bg-surface/50 text-text-secondary">
        <p>Revenue chart area — plug in your chart library</p>
      </div>
    ),
    secondaryChart: (
      <div className="flex h-64 items-center justify-center rounded-md bg-surface/50 text-text-secondary">
        <p>Traffic sources chart</p>
      </div>
    ),
    charts: (
      <>
        <div className="rounded-lg border border-border p-8 text-center text-text-secondary">
          Engagement over time
        </div>
        <div className="rounded-lg border border-border p-8 text-center text-text-secondary">
          Device breakdown
        </div>
      </>
    ),
    breakdown: (
      <div className="space-y-3">
        {["Organic Search", "Direct", "Referral", "Social", "Email"].map((source, i) => (
          <div key={source} className="flex items-center justify-between border-b border-border py-2 last:border-0">
            <span className="text-sm font-medium">{source}</span>
            <div className="flex items-center gap-4">
              <div className="h-2 w-32 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${[45, 25, 15, 10, 5][i]}%` }}
                />
              </div>
              <span className="w-12 text-right text-sm text-text-secondary">
                {[45, 25, 15, 10, 5][i]}%
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: "Analytics",
    stats: mockStats.slice(0, 2),
    primaryChart: (
      <div className="flex h-48 items-center justify-center rounded-md bg-surface/50 text-text-secondary">
        Single chart view
      </div>
    ),
  },
};

export const StatsOnly: Story = {
  args: {
    title: "Performance",
    subtitle: "Last 30 days overview",
    stats: mockStats,
  },
};
