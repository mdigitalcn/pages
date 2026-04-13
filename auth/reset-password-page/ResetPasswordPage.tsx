"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import Card, { CardContent } from "@mdigitalcn/uikit/card";
import InputPassword from "@mdigitalcn/uikit/input-password";
import Button from "@mdigitalcn/uikit/button";
import Link from "@mdigitalcn/uikit/link";
import Notification from "@mdigitalcn/uikit/notification";
import type { ResetPasswordPageProps } from "./ResetPasswordPage.types";

export default function ResetPasswordPage({
  logo,
  onSubmit,
  onBackToLogin,
  loading,
  error,
  success,
  tokenExpired,
  onRequestNew,
}: ResetPasswordPageProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mismatch, setMismatch] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMismatch(true);
      return;
    }
    setMismatch(false);
    onSubmit({ password, confirmPassword });
  };

  if (tokenExpired) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface/30 px-4">
        <div className="w-full max-w-sm space-y-6 text-center">
          {logo}
          <div className="flex size-16 items-center justify-center rounded-full bg-warning/10">
            <Clock className="size-7 text-warning" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Link expired</h1>
          <p className="text-sm text-text-secondary">
            This password reset link has expired. Please request a new one.
          </p>
          <div className="flex flex-col gap-2">
            {onRequestNew && (
              <Button color="primary" fullWidth onClick={onRequestNew}>
                Request new link
              </Button>
            )}
            {onBackToLogin && (
              <Button variant="outline" fullWidth onClick={onBackToLogin}>
                Back to login
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface/30 px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          {logo}
          <h1 className="text-2xl font-bold tracking-tight">Set new password</h1>
          <p className="text-sm text-text-secondary">
            Enter your new password below
          </p>
        </div>
        <Card>
          <CardContent className="pt-6 space-y-4">
            {error && (
              <Notification color="error" variant="soft" description={error} closable />
            )}
            {success && (
              <Notification
                color="success"
                variant="soft"
                description="Password reset successfully! You can now sign in."
              />
            )}
            {!success && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputPassword
                  value={password}
                  onChange={(e: any) => setPassword(e.target?.value ?? e)}
                  label="New password"
                  placeholder="Min. 8 characters"
                />
                <InputPassword
                  value={confirmPassword}
                  onChange={(e: any) => setConfirmPassword(e.target?.value ?? e)}
                  label="Confirm password"
                  error={mismatch ? "Passwords don't match" : undefined}
                />
                <Button type="submit" color="primary" fullWidth loading={loading}>
                  Reset password
                </Button>
              </form>
            )}
            {(success || onBackToLogin) && (
              <p className="text-center text-sm">
                <Link color="primary" onClick={onBackToLogin} size="sm">
                  Back to login
                </Link>
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
