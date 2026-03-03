import type { ReactNode } from "react";
export interface RegisterPageProps { logo?: ReactNode; onSubmit: (data: { name: string; email: string; password: string }) => void | Promise<void>; onSignIn?: () => void; onSocialSignup?: (provider: string) => void; socialProviders?: string[]; loading?: boolean; error?: string; }
