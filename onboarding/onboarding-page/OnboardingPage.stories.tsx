import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import OnboardingPage from "./OnboardingPage";

const meta: Meta<typeof OnboardingPage> = {
  title: "Pages/Onboarding/OnboardingPage",
  component: OnboardingPage,
  tags: ["autodocs"],
  argTypes: {
    currentStep: { control: { type: "number", min: 0, max: 3 } },
  },
};
export default meta;
type Story = StoryObj<typeof OnboardingPage>;

export const Default: Story = {
  args: {
    currentStep: 0,
    onNext: () => console.log("next"),
    onPrev: () => console.log("prev"),
    onSkip: () => console.log("skip"),
    onComplete: () => console.log("complete"),
    steps: [
      {
        id: "welcome",
        title: "Welcome to mdigitalcn",
        description: "Let's get your workspace set up in a few quick steps",
        icon: <span>👋</span>,
        content: <div className="text-center text-text-secondary text-sm">We're glad to have you here!</div>,
      },
      {
        id: "profile",
        title: "Set up your profile",
        description: "Tell us a bit about yourself",
        icon: <span>👤</span>,
        content: (
          <div className="space-y-3">
            <div className="rounded-lg border border-border p-3 text-sm text-text-secondary">Name input</div>
            <div className="rounded-lg border border-border p-3 text-sm text-text-secondary">Role input</div>
          </div>
        ),
      },
      {
        id: "team",
        title: "Invite your team",
        description: "Collaborate with your teammates",
        icon: <span>👥</span>,
        content: (
          <div className="rounded-lg border border-dashed border-border p-6 text-center text-text-secondary text-sm">
            Team invite form
          </div>
        ),
      },
      {
        id: "done",
        title: "You're all set!",
        description: "Your workspace is ready to go",
        icon: <span>🎉</span>,
        content: <div className="text-center text-text-secondary text-sm">Start exploring your new workspace</div>,
      },
    ],
  },
};

export const Step2: Story = {
  name: "Step 2 - Profile",
  args: { ...Default.args, currentStep: 1 },
};

export const LastStep: Story = {
  name: "Final Step",
  args: { ...Default.args, currentStep: 3 },
};
