import type { ReactNode } from "react";

export interface ProfileData {
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  phone?: string;
  location?: string;
  website?: string;
  company?: string;
  role?: string;
}

export interface ProfilePageProps {
  /** User profile data */
  profile: ProfileData;
  /** Save handler */
  onSave: (data: ProfileData) => void | Promise<void>;
  /** Avatar file change handler */
  onAvatarChange?: (file: File) => void;
  /** Save loading state */
  saving?: boolean;
  /** Password change action */
  onChangePassword?: () => void;
  /** Delete account action */
  onDeleteAccount?: () => void;
  /** Extra sections slot (rendered after main form) */
  extraSections?: ReactNode;
  /** Success notification message */
  successMessage?: string;
}
