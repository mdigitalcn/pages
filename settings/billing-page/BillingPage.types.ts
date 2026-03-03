import type { ReactNode } from "react";

export interface Plan {
  name: string;
  price: string;
  period: string;
  active?: boolean;
  features?: string[];
  renewalDate?: string;
}

export interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  expiry: string;
  default?: boolean;
  brand?: string;
}

export interface UsageMeter {
  label: string;
  used: number;
  limit: number;
  unit?: string;
}

export interface BillingInvoice {
  id: string;
  date: string;
  amount: string;
  status: "paid" | "pending" | "failed";
  downloadUrl?: string;
}

export interface BillingPageProps {
  /** Current subscription plan */
  plan?: Plan;
  /** Payment methods list */
  paymentMethods?: PaymentMethod[];
  /** Usage meters */
  usage?: UsageMeter[];
  /** Recent invoices */
  invoices?: BillingInvoice[];
  /** Change plan action */
  onChangePlan?: () => void;
  /** Add payment method action */
  onAddPayment?: () => void;
  /** Remove payment method */
  onRemovePayment?: (id: string) => void;
  /** Set default payment method */
  onSetDefault?: (id: string) => void;
  /** Download invoice */
  onDownloadInvoice?: (id: string) => void;
  /** Cancel subscription */
  onCancelSubscription?: () => void;
}
