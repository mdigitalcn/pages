"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserPlus } from "lucide-react";
import Card, { CardContent } from "@mdigitalcn/uikit/card";
import Input from "@mdigitalcn/uikit/input";
import InputPassword from "@mdigitalcn/uikit/input-password";
import Button from "@mdigitalcn/uikit/button";
import Link from "@mdigitalcn/uikit/link";
import Divider from "@mdigitalcn/uikit/divider";
import Notification from "@mdigitalcn/uikit/notification";
import type { RegisterPageProps } from "./RegisterPage.types";

const schema = z.object({ name: z.string().min(2), email: z.string().email(), password: z.string().min(8), confirmPassword: z.string() }).refine(d => d.password === d.confirmPassword, { message: "Passwords don't match", path: ["confirmPassword"] });

export default function RegisterPage({ logo, onSubmit, onSignIn, onSocialSignup, socialProviders = [], loading, error }: RegisterPageProps) {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", password: "", confirmPassword: "" } });
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface/30 px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          {logo}<h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
          <p className="text-sm text-text-secondary">Get started in minutes</p>
        </div>
        <Card><CardContent className="pt-6">
          <form onSubmit={handleSubmit(({ name, email, password }) => onSubmit({ name, email, password }))} className="flex flex-col gap-4">
            {error && <Notification color="error" variant="soft" description={error} closable />}
            <Controller name="name" control={control} render={({ field }) => <Input {...field} label="Full name" error={errors.name?.message} />} />
            <Controller name="email" control={control} render={({ field }) => <Input {...field} type="email" label="Email" error={errors.email?.message} />} />
            <Controller name="password" control={control} render={({ field }) => <InputPassword {...field} label="Password" error={errors.password?.message} />} />
            <Controller name="confirmPassword" control={control} render={({ field }) => <InputPassword {...field} label="Confirm password" error={errors.confirmPassword?.message} />} />
            <Button type="submit" color="primary" fullWidth loading={loading} icon={<UserPlus className="size-4" />}>Create account</Button>
          </form>
          {socialProviders.length > 0 && onSocialSignup && <><Divider className="my-6">or</Divider><div className="flex flex-col gap-2">{socialProviders.map(p => <Button key={p} variant="outline" fullWidth onClick={() => onSocialSignup(p)}>Continue with {p}</Button>)}</div></>}
        </CardContent></Card>
        {onSignIn && <p className="text-center text-sm text-text-secondary">Have an account? <Link color="primary" onClick={onSignIn} size="sm">Sign in</Link></p>}
      </div>
    </div>
  );
}
