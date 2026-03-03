"use client";
import { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import Link from "@mdigital_ui/ui/link";
import Notification from "@mdigital_ui/ui/notification";
import type { ForgotPasswordPageProps } from "./ForgotPasswordPage.types";

export default function ForgotPasswordPage({ logo, onSubmit, onBackToLogin, loading, success, error }: ForgotPasswordPageProps) {
  const [email, setEmail] = useState("");
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface/30 px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          {logo}<h1 className="text-2xl font-bold tracking-tight">Reset password</h1>
          <p className="text-sm text-text-secondary">We'll email you a reset link</p>
        </div>
        <Card><CardContent className="pt-6 space-y-4">
          {error && <Notification color="error" variant="soft" description={error} closable />}
          {success && <Notification color="success" variant="soft" description="Check your inbox for a reset link" />}
          <form onSubmit={e => { e.preventDefault(); onSubmit(email); }} className="flex flex-col gap-4">
            <Input value={email} onChange={(e: any) => setEmail(e.target?.value ?? e)} type="email" label="Email" placeholder="you@example.com" />
            <Button type="submit" color="primary" fullWidth loading={loading} icon={<Send className="size-4" />}>Send reset link</Button>
          </form>
          {onBackToLogin && <p className="text-center text-sm"><Link color="primary" onClick={onBackToLogin} size="sm" className="inline-flex items-center gap-1"><ArrowLeft className="size-3" /> Back to login</Link></p>}
        </CardContent></Card>
      </div>
    </div>
  );
}
