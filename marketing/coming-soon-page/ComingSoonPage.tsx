"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import Notification from "@mdigital_ui/ui/notification";
import type { ComingSoonPageProps } from "./ComingSoonPage.types";

function useCountdown(target: string | undefined) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    if (!target) return;
    const tick = () => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
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

export default function ComingSoonPage({
  logo,
  title = "Something amazing is coming",
  description = "We're working hard to bring you something special. Stay tuned!",
  launchDate,
  onSubscribe,
  subscribing,
  subscribed,
  socialLinks,
  background,
}: ComingSoonPageProps) {
  const [email, setEmail] = useState("");
  const countdown = useCountdown(launchDate);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {background && <div className="absolute inset-0 -z-10 overflow-hidden">{background}</div>}

      <div className="w-full max-w-lg space-y-8">
        {logo && <div className="flex justify-center">{logo}</div>}

        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          <p className="text-text-secondary">{description}</p>
        </div>

        {launchDate && (
          <div className="flex justify-center gap-4">
            {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-3xl font-bold tabular-nums sm:text-4xl">
                  {String(countdown[unit]).padStart(2, "0")}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wider text-text-secondary">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        )}

        {onSubscribe && (
          <div className="mx-auto max-w-sm space-y-3">
            {subscribed ? (
              <Notification color="success" variant="soft" description="You're on the list! We'll notify you at launch." />
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); onSubscribe(email); }}
                className="flex gap-2"
              >
                <Input
                  value={email}
                  onChange={(e: any) => setEmail(e.target?.value ?? e)}
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button type="submit" color="primary" loading={subscribing} icon={<Bell className="size-4" />}>
                  Notify me
                </Button>
              </form>
            )}
          </div>
        )}

        {socialLinks && socialLinks.length > 0 && (
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors hover:text-text-primary"
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
