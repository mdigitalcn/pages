"use client";
import { Mail, CheckCircle2 } from "lucide-react";
import Card, { CardContent } from "@mdigitalcn/uikit/card";
import Button from "@mdigitalcn/uikit/button";
import Link from "@mdigitalcn/uikit/link";
import type { VerifyEmailPageProps } from "./VerifyEmailPage.types";

export default function VerifyEmailPage({ logo, email, verified, onResend, onContinue, loading }: VerifyEmailPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface/30 px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          {logo}
          <div className={`flex size-16 items-center justify-center rounded-full ${verified ? "bg-success/10" : "bg-primary/10"}`}>
            {verified ? <CheckCircle2 className="size-7 text-success" /> : <Mail className="size-7 text-primary" />}
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{verified ? "Email verified" : "Check your email"}</h1>
          <p className="text-sm text-text-secondary">{verified ? "Your email has been verified successfully" : `We sent a verification link to ${email || "your email"}`}</p>
        </div>
        <Card><CardContent className="pt-6 space-y-4">
          {verified ? (
            onContinue && <Button color="primary" fullWidth onClick={onContinue}>Continue</Button>
          ) : (<>
            <p className="text-center text-sm text-text-secondary">Click the link in the email to verify your account</p>
            {onResend && <Button variant="outline" fullWidth loading={loading} onClick={onResend}>Resend email</Button>}
          </>)}
        </CardContent></Card>
      </div>
    </div>
  );
}
