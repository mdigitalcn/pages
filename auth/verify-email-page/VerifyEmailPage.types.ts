import type { ReactNode } from "react";
export interface VerifyEmailPageProps { logo?: ReactNode; email?: string; verified?: boolean; onResend?: () => void; onContinue?: () => void; loading?: boolean; }
