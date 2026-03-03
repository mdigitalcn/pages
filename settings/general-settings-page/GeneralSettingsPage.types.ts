import type { ReactNode } from "react";

export interface SettingsSection {
  id: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}

export interface GeneralSettingsPageProps {
  /** Navigation sections */
  sections: SettingsSection[];
  /** Currently active section ID */
  activeSection?: string;
  /** Section change handler */
  onSectionChange?: (id: string) => void;
  /** Content for the active section */
  children: ReactNode;
  /** Save handler */
  onSave?: () => void | Promise<void>;
  /** Save loading state */
  saving?: boolean;
  /** Whether the form has unsaved changes */
  dirty?: boolean;
  /** Page title */
  title?: string;
  /** Page subtitle */
  subtitle?: string;
  /** Success notification */
  successMessage?: string;
}
