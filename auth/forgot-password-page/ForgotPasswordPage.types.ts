import type { ReactNode } from "react";
export interface ForgotPasswordPageProps { logo?: ReactNode; onSubmit: (email: string) => void | Promise<void>; onBackToLogin?: () => void; loading?: boolean; success?: boolean; error?: string; }
