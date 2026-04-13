"use client";

import { Check, Minus } from "lucide-react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigitalcn/uikit/card";
import Button from "@mdigitalcn/uikit/button";
import Badge from "@mdigitalcn/uikit/badge";
import { cn } from "@mdigitalcn/uikit";
import type { PricingPageProps } from "./PricingPage.types";

export default function PricingPage({
  title = "Simple, transparent pricing",
  subtitle = "Choose the plan that works for you",
  tiers,
  billingToggle,
  onSelect,
  faq,
  className,
}: PricingPageProps) {
  return (
    <div className={cn("space-y-12 py-12", className)}>
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mx-auto max-w-xl text-text-secondary">{subtitle}</p>
        {billingToggle && <div className="mt-6 flex justify-center">{billingToggle}</div>}
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.id}
            className={cn(
              "relative flex flex-col",
              tier.popular && "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary"
            )}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge color="primary" variant="solid" size="sm">Most Popular</Badge>
              </div>
            )}
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {tier.icon && <div className="text-primary">{tier.icon}</div>}
                <CardTitle className="text-lg">{tier.name}</CardTitle>
              </div>
              {tier.description && (
                <p className="text-sm text-text-secondary mt-1">{tier.description}</p>
              )}
            </CardHeader>
            <CardContent className="flex flex-1 flex-col pt-0">
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.period && (
                  <span className="text-text-secondary ml-1">/{tier.period}</span>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span className={cn("mt-0.5 shrink-0", f.included ? "text-success" : "text-text-secondary/40")}>
                      {f.included ? <Check className="size-4" /> : <Minus className="size-4" />}
                    </span>
                    <span className={cn(!f.included && "text-text-secondary/60 line-through")}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <Button
                color="primary"
                variant={tier.popular ? "solid" : "outline"}
                fullWidth
                onClick={() => onSelect?.(tier.id)}
              >
                {tier.cta || "Get started"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {faq && <div className="mx-auto max-w-2xl px-4">{faq}</div>}
    </div>
  );
}
