import type { ReactNode } from "react";

export type MemberStatus = "active" | "pending" | "inactive";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  status?: MemberStatus;
  joinedDate?: string;
  lastActive?: string;
}

export interface PendingInvite {
  id: string;
  email: string;
  role: string;
  sentAt: string;
}

export interface TeamPageProps {
  /** Team members list */
  members: TeamMember[];
  /** Pending invites list */
  pendingInvites?: PendingInvite[];
  /** Invite action */
  onInvite?: () => void;
  /** Remove member */
  onRemove?: (id: string) => void;
  /** Change member role */
  onRoleChange?: (id: string, role: string) => void;
  /** Cancel pending invite */
  onCancelInvite?: (id: string) => void;
  /** Resend invite */
  onResendInvite?: (id: string) => void;
  /** Available roles */
  roles?: string[];
  /** Search value (controlled) */
  searchValue?: string;
  /** Search handler */
  onSearch?: (value: string) => void;
}
