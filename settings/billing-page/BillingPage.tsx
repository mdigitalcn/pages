"use client";

import { CreditCard, Plus, Download, ArrowUpRight, X } from "lucide-react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Badge from "@mdigital_ui/ui/badge";
import Button from "@mdigital_ui/ui/button";
import Progress from "@mdigital_ui/ui/progress";
import Divider from "@mdigital_ui/ui/divider";
import { cn } from "@mdigital_ui/ui";
import type { BillingPageProps } from "./BillingPage.types";

const invoiceStatusColors: Record<string, "success" | "warning" | "error"> = {
  paid: "success",
  pending: "warning",
  failed: "error",
};

export default function BillingPage({
  plan,
  paymentMethods = [],
  usage,
  invoices,
  onChangePlan,
  onAddPayment,
  onRemovePayment,
  onSetDefault,
  onDownloadInvoice,
  onCancelSubscription,
}: BillingPageProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Billing</h1>
        <p className="mt-0.5 text-sm text-text-secondary">
          Manage your subscription, payment methods, and invoices
        </p>
      </div>

      {/* Current plan */}
      {plan && (
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <Badge color="primary" variant="soft" size="sm">Current plan</Badge>
                </div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-text-secondary">/{plan.period}</span>
                </div>
                {plan.renewalDate && (
                  <p className="mt-2 text-sm text-text-secondary">
                    Next billing date: {plan.renewalDate}
                  </p>
                )}
                {plan.features && plan.features.length > 0 && (
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="text-success text-xs">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex flex-col gap-2 sm:items-end shrink-0">
                {onChangePlan && (
                  <Button variant="outline" icon={<ArrowUpRight className="size-4" />} onClick={onChangePlan}>
                    Change plan
                  </Button>
                )}
                {onCancelSubscription && (
                  <Button variant="ghost" size="sm" color="error" onClick={onCancelSubscription}>
                    Cancel subscription
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Usage */}
      {usage && usage.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Usage</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {usage.map((meter, i) => {
              const pct = Math.min(100, Math.round((meter.used / meter.limit) * 100));
              const isHigh = pct >= 80;
              const isFull = pct >= 100;
              return (
                <div key={i}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">{meter.label}</span>
                    <span className={cn(
                      "tabular-nums",
                      isFull ? "font-medium text-error" : isHigh ? "text-warning" : "text-text-secondary"
                    )}>
                      {meter.used.toLocaleString()}{meter.unit && ` ${meter.unit}`}
                      {" / "}
                      {meter.limit.toLocaleString()}{meter.unit && ` ${meter.unit}`}
                    </span>
                  </div>
                  <Progress value={pct} color={isFull ? "error" : isHigh ? "warning" : "primary"} />
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}

      {/* Payment methods */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Payment Methods</CardTitle>
            {onAddPayment && (
              <Button variant="outline" size="sm" icon={<Plus className="size-4" />} onClick={onAddPayment}>
                Add method
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {paymentMethods.length === 0 ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CreditCard className="size-8 text-text-secondary/30" />
              <p className="mt-3 text-sm text-text-secondary">No payment methods added yet</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {paymentMethods.map((pm) => (
                <div key={pm.id} className="flex items-center justify-between gap-4 rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-surface text-xs font-bold uppercase text-text-secondary">
                      {pm.brand || pm.type}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium font-mono">•••• {pm.last4}</span>
                        {pm.default && <Badge color="primary" variant="soft" size="sm">Default</Badge>}
                      </div>
                      <p className="text-xs text-text-secondary">Expires {pm.expiry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {onSetDefault && !pm.default && (
                      <Button variant="ghost" size="sm" onClick={() => onSetDefault(pm.id)}>Set default</Button>
                    )}
                    {onRemovePayment && !pm.default && (
                      <Button variant="ghost" size="sm" color="error" iconOnly icon={<X className="size-4" />} aria-label="Remove" onClick={() => onRemovePayment(pm.id)} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Invoices */}
      {invoices && invoices.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Billing History</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/50 text-text-secondary">
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">Amount</th>
                    <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Status</th>
                    {onDownloadInvoice && <th className="w-16 px-4 py-3" />}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="transition-colors">
                      <td className="px-4 py-3 text-text-secondary">{inv.date}</td>
                      <td className="px-4 py-3 text-right font-medium tabular-nums">{inv.amount}</td>
                      <td className="px-4 py-3 text-center">
                        <Badge color={invoiceStatusColors[inv.status]} variant="soft" size="sm">{inv.status}</Badge>
                      </td>
                      {onDownloadInvoice && (
                        <td className="px-4 py-3 text-right">
                          <Button variant="ghost" size="sm" iconOnly icon={<Download className="size-4" />} aria-label="Download invoice" onClick={() => onDownloadInvoice(inv.id)} />
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
