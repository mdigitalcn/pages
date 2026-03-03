"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LogIn } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import InputPassword from "@mdigital_ui/ui/input-password";
import Checkbox from "@mdigital_ui/ui/checkbox";
import Button from "@mdigital_ui/ui/button";
import Link from "@mdigital_ui/ui/link";
import Divider from "@mdigital_ui/ui/divider";
import Notification from "@mdigital_ui/ui/notification";
import type { LoginPageProps } from "./LoginPage.types";

const schema = z.object({ email: z.string().email(), password: z.string().min(1), rememberMe: z.boolean().optional() });
type FD = z.infer<typeof schema>;

export default function LoginPage({ logo, onSubmit, onForgotPassword, onSignUp, onSocialLogin, socialProviders = [], loading, error }: LoginPageProps) {
  const { control, handleSubmit, formState: { errors } } = useForm<FD>({ resolver: zodResolver(schema), defaultValues: { email: "", password: "", rememberMe: false } });
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface/30 px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          {logo && <div className="mb-2">{logo}</div>}
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-sm text-text-secondary">Sign in to your account</p>
        </div>
        <Card><CardContent className="pt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {error && <Notification color="error" variant="soft" description={error} closable />}
            <Controller name="email" control={control} render={({ field }) => <Input {...field} type="email" label="Email" placeholder="you@example.com" error={errors.email?.message} />} />
            <Controller name="password" control={control} render={({ field }) => <InputPassword {...field} label="Password" error={errors.password?.message} />} />
            <div className="flex items-center justify-between">
              <Controller name="rememberMe" control={control} render={({ field }) => <Checkbox label="Remember me" checked={field.value} onChange={field.onChange} />} />
              {onForgotPassword && <Link size="sm" color="primary" onClick={onForgotPassword}>Forgot password?</Link>}
            </div>
            <Button type="submit" color="primary" fullWidth loading={loading} icon={<LogIn className="size-4" />}>Sign in</Button>
          </form>
          {socialProviders.length > 0 && onSocialLogin && <>
            <Divider className="my-6">or</Divider>
            <div className="flex flex-col gap-2">{socialProviders.map((p) => <Button key={p} variant="outline" fullWidth onClick={() => onSocialLogin(p)}>Continue with {p}</Button>)}</div>
          </>}
        </CardContent></Card>
        {onSignUp && <p className="text-center text-sm text-text-secondary">No account? <Link color="primary" onClick={onSignUp} size="sm">Sign up</Link></p>}
      </div>
    </div>
  );
}
