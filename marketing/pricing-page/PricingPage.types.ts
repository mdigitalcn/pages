import type { ReactNode } from "react";

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  description?: string;
  price: string;
  period?: string;
  features: PricingFeature[];
  cta?: string;
  popular?: boolean;
  icon?: ReactNode;
}

export interface PricingPageProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  billingToggle?: ReactNode;
  onSelect?: (tierId: string) => void;
  faq?: ReactNode;
  className?: string;
}
