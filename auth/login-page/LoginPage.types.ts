import type { ReactNode } from "react";
export interface LoginPageProps { logo?: ReactNode; onSubmit: (data: { email: string; password: string; rememberMe?: boolean }) => void | Promise<void>; onForgotPassword?: () => void; onSignUp?: () => void; onSocialLogin?: (provider: string) => void; socialProviders?: string[]; loading?: boolean; error?: string; }
