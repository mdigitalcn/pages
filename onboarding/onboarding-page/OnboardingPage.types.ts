import type { ReactNode } from "react";

export interface OnboardingStep {
  id: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  content: ReactNode;
}

export interface OnboardingPageProps {
  steps: OnboardingStep[];
  currentStep?: number;
  onNext?: () => void;
  onPrev?: () => void;
  onSkip?: () => void;
  onComplete?: () => void;
  logo?: ReactNode;
  className?: string;
}
