import type { ReactNode } from "react";

export interface CheckoutItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image?: string;
}

export interface CheckoutPageProps {
  items: CheckoutItem[];
  subtotal: string;
  tax?: string;
  shipping?: string;
  total: string;
  shippingForm?: ReactNode;
  paymentForm?: ReactNode;
  onSubmit?: () => void | Promise<void>;
  onBack?: () => void;
  loading?: boolean;
  currentStep?: number;
  className?: string;
}
