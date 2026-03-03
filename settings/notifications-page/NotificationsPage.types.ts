import type { ReactNode } from "react";

export interface NotificationChannel {
  id: string;
  label: string;
  description?: string;
  email?: boolean;
  push?: boolean;
  inApp?: boolean;
}

export interface NotificationGroup {
  title: string;
  description?: string;
  channels: NotificationChannel[];
}

export interface NotificationsPageProps {
  /** Grouped notification channels */
  groups?: NotificationGroup[];
  /** Flat channel list (used when groups not provided) */
  channels?: NotificationChannel[];
  /** Toggle handler */
  onToggle: (
    channelId: string,
    type: "email" | "push" | "inApp",
    value: boolean
  ) => void;
  /** Save handler */
  onSave?: () => void;
  /** Save loading state */
  saving?: boolean;
  /** Enable/disable all email notifications */
  onToggleAllEmail?: (value: boolean) => void;
  /** Enable/disable all push notifications */
  onToggleAllPush?: (value: boolean) => void;
  /** Success message */
  successMessage?: string;
}
