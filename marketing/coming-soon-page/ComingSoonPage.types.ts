import type { ReactNode } from "react";

export interface ComingSoonPageProps {
  logo?: ReactNode;
  title?: string;
  description?: string;
  launchDate?: string;
  onSubscribe?: (email: string) => void | Promise<void>;
  subscribing?: boolean;
  subscribed?: boolean;
  socialLinks?: { icon: ReactNode; href: string; label: string }[];
  background?: ReactNode;
}
