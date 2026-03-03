import type { ReactNode } from "react";

export interface TwoFactorPageProps {
  logo?: ReactNode;
  method?: "authenticator" | "sms" | "email";
  codeLength?: number;
  onSubmit: (code: string) => void | Promise<void>;
  onResend?: () => void;
  onBackToLogin?: () => void;
  onUseAlternate?: () => void;
  loading?: boolean;
  error?: string;
  maskedContact?: string;
}
