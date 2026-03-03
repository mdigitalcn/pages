"use client";

import { ArrowLeft, ArrowRight, Rocket } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Button from "@mdigital_ui/ui/button";
import Progress from "@mdigital_ui/ui/progress";
import { cn } from "@mdigital_ui/ui";
import type { OnboardingPageProps } from "./OnboardingPage.types";

export default function OnboardingPage({
  steps,
  currentStep = 0,
  onNext,
  onPrev,
  onSkip,
  onComplete,
  logo,
  className,
}: OnboardingPageProps) {
  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className={cn("flex min-h-screen items-center justify-center bg-surface/30 px-4", className)}>
      <div className="w-full max-w-lg space-y-8">
        {logo && <div className="flex justify-center">{logo}</div>}

        <div>
          <div className="mb-2 flex items-center justify-between text-sm text-text-secondary">
            <span>Step {currentStep + 1} of {steps.length}</span>
            {onSkip && !isLast && (
              <button onClick={onSkip} className="text-primary hover:underline">
                Skip
              </button>
            )}
          </div>
          <Progress value={progress} color="primary" />
        </div>

        <Card>
          <CardContent className="pt-8 pb-8 space-y-6">
            <div className="text-center space-y-2">
              {step?.icon && (
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
                  {step.icon}
                </div>
              )}
              <h2 className="text-xl font-bold tracking-tight">{step?.title}</h2>
              {step?.description && (
                <p className="text-sm text-text-secondary">{step.description}</p>
              )}
            </div>

            <div>{step?.content}</div>
          </CardContent>
        </Card>

        {/* Step dots */}
        <div className="flex justify-center gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2 rounded-full transition-all",
                i === currentStep ? "w-6 bg-primary" : "w-2 bg-border"
              )}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            icon={<ArrowLeft className="size-4" />}
            onClick={onPrev}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          {isLast ? (
            <Button
              color="primary"
              icon={<Rocket className="size-4" />}
              onClick={onComplete}
            >
              Get started
            </Button>
          ) : (
            <Button
              color="primary"
              onClick={onNext}
            >
              Continue
              <ArrowRight className="ml-1.5 size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
