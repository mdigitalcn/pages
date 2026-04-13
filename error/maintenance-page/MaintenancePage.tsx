"use client";

import { useEffect, useState } from "react";
import { Wrench, Bell } from "lucide-react";
import Input from "@mdigitalcn/uikit/input";
import Button from "@mdigitalcn/uikit/button";
import Notification from "@mdigitalcn/uikit/notification";
import type { MaintenancePageProps } from "./MaintenancePage.types";

function useCountdown(target: string | undefined) {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    if (!target) return;
    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      setTime({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

export default function MaintenancePage({
  title = "Under Maintenance",
  description = "We're performing scheduled maintenance to improve your experience. We'll be back shortly.",
  estimatedTime,
  countdownTarget,
  illustration,
  logo,
  statusUpdates,
  onSubscribe,
  subscribing,
  subscribed,
  socialLinks,
}: MaintenancePageProps) {
  const [email, setEmail] = useState("");
  const countdown = useCountdown(countdownTarget);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      {logo && <div className="mb-10">{logo}</div>}

      <div className="w-full max-w-md space-y-8 text-center">
        {/* Illustration */}
        {illustration ? (
          <div className="flex justify-center">{illustration}</div>
        ) : (
          <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-warning/10">
            <Wrench className="size-11 text-warning" strokeWidth={1.5} />
          </div>
        )}

        {/* Content */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="text-text-secondary leading-relaxed">{description}</p>
        </div>

        {/* Countdown */}
        {countdownTarget && (
          <div className="flex justify-center gap-3">
            {(["hours", "minutes", "seconds"] as const).map((unit) => (
              <div
                key={unit}
                className="flex flex-col items-center rounded-xl border border-border bg-surface/50 px-5 py-3"
              >
                <span className="text-3xl font-bold tabular-nums">
                  {String(countdown[unit]).padStart(2, "0")}
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-wider text-text-secondary">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Estimated time (fallback if no countdown) */}
        {!countdownTarget && estimatedTime && (
          <div className="rounded-xl border border-border bg-surface/50 px-5 py-3.5">
            <p className="text-sm">
              <span className="text-text-secondary">Estimated return: </span>
              <span className="font-medium">{estimatedTime}</span>
            </p>
          </div>
        )}

        {/* Status updates */}
        {statusUpdates && statusUpdates.length > 0 && (
          <div className="rounded-xl border border-border p-5 text-left">
            <p className="mb-4 text-sm font-semibold">Status Updates</p>
            <div className="space-y-3">
              {statusUpdates.map((update, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 font-mono text-xs text-text-secondary pt-0.5">
                    {update.time}
                  </span>
                  <span className="leading-relaxed">{update.message}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subscribe */}
        {onSubscribe && (
          <div className="mx-auto max-w-sm space-y-3">
            {subscribed ? (
              <Notification
                color="success"
                variant="soft"
                description="We'll notify you when we're back online."
              />
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubscribe(email);
                }}
                className="flex gap-2"
              >
                <Input
                  value={email}
                  onChange={(e: any) => setEmail(e.target?.value ?? e)}
                  type="email"
                  placeholder="Get notified when we're back"
                  className="flex-1"
                />
                <Button
                  type="submit"
                  color="primary"
                  loading={subscribing}
                  icon={<Bell className="size-4" />}
                >
                  Notify me
                </Button>
              </form>
            )}
          </div>
        )}

        {/* Social links */}
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex justify-center gap-4 pt-2">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors hover:text-text-primary [&>svg]:size-5"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
