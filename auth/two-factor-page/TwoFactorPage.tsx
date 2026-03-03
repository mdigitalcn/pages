"use client";

import { useState } from "react";
import { ShieldCheck, Smartphone, Mail } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import InputOtp from "@mdigital_ui/ui/input-otp";
import Button from "@mdigital_ui/ui/button";
import Link from "@mdigital_ui/ui/link";
import Notification from "@mdigital_ui/ui/notification";
import type { TwoFactorPageProps } from "./TwoFactorPage.types";

const methodLabels = {
  authenticator: { icon: <ShieldCheck className="size-7 text-primary" />, title: "Authenticator code", desc: "Enter the code from your authenticator app" },
  sms: { icon: <Smartphone className="size-7 text-primary" />, title: "SMS verification", desc: "Enter the code sent to your phone" },
  email: { icon: <Mail className="size-7 text-primary" />, title: "Email verification", desc: "Enter the code sent to your email" },
};

export default function TwoFactorPage({
  logo,
  method = "authenticator",
  codeLength = 6,
  onSubmit,
  onResend,
  onBackToLogin,
  onUseAlternate,
  loading,
  error,
  maskedContact,
}: TwoFactorPageProps) {
  const [code, setCode] = useState("");
  const info = methodLabels[method];

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface/30 px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          {logo}
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">{info.icon}</div>
          <h1 className="text-2xl font-bold tracking-tight">{info.title}</h1>
          <p className="text-sm text-text-secondary">
            {info.desc}
            {maskedContact && (
              <span className="block mt-1 font-medium text-text-primary">{maskedContact}</span>
            )}
          </p>
        </div>
        <Card>
          <CardContent className="pt-6 space-y-4">
            {error && (
              <Notification color="error" variant="soft" description={error} closable />
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(code);
              }}
              className="flex flex-col items-center gap-5"
            >
              <InputOtp
                value={code}
                onChange={(val: string) => setCode(val)}
                length={codeLength}
              />
              <Button
                type="submit"
                color="primary"
                fullWidth
                loading={loading}
                disabled={code.length < codeLength}
              >
                Verify
              </Button>
            </form>
            <div className="flex flex-col items-center gap-2 text-sm">
              {onResend && method !== "authenticator" && (
                <Link color="primary" onClick={onResend} size="sm">
                  Resend code
                </Link>
              )}
              {onUseAlternate && (
                <Link color="primary" onClick={onUseAlternate} size="sm">
                  Use another method
                </Link>
              )}
              {onBackToLogin && (
                <Link color="primary" onClick={onBackToLogin} size="sm">
                  Back to login
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
