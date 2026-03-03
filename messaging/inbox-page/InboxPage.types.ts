import type { ReactNode } from "react";

export interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  time: string;
  unread?: number;
  online?: boolean;
}

export interface InboxPageProps {
  conversations: Conversation[];
  activeId?: string;
  onSelect?: (id: string) => void;
  onCompose?: () => void;
  searchValue?: string;
  onSearch?: (value: string) => void;
  detail?: ReactNode;
  className?: string;
}
