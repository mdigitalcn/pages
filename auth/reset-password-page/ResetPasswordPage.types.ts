import type { ReactNode } from "react";

export interface ResetPasswordPageProps {
  logo?: ReactNode;
  onSubmit: (data: { password: string; confirmPassword: string }) => void | Promise<void>;
  onBackToLogin?: () => void;
  loading?: boolean;
  error?: string;
  success?: boolean;
  tokenExpired?: boolean;
  onRequestNew?: () => void;
}
