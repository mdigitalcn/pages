"use client";

import { useState } from "react";
import { AlertTriangle, ArrowLeft, RotateCcw, Home, ChevronDown, ChevronUp, LifeBuoy } from "lucide-react";
import Button from "@mdigitalcn/uikit/button";
import type { ErrorPageProps } from "./ErrorPage.types";

export default function ErrorPage({
  code = 500,
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again or contact support if the problem persists.",
  illustration,
  onRetry,
  onBack,
  homeHref = "/",
  details,
  supportHref,
  logo,
}: ErrorPageProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
      {logo && <div className="mb-10">{logo}</div>}

      {/* Illustration */}
      {illustration ? (
        <div className="mb-8">{illustration}</div>
      ) : (
        <div className="mb-8 flex size-24 items-center justify-center rounded-full bg-error/10">
          <AlertTriangle className="size-11 text-error" strokeWidth={1.5} />
        </div>
      )}

      {/* Error code */}
      <p className="text-7xl font-bold tabular-nums text-error/20 sm:text-8xl">
        {code}
      </p>

      {/* Content */}
      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-text-secondary leading-relaxed">
        {description}
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {onBack && (
          <Button variant="outline" icon={<ArrowLeft className="size-4" />} onClick={onBack}>
            Go back
          </Button>
        )}
        {onRetry && (
          <Button variant="outline" icon={<RotateCcw className="size-4" />} onClick={onRetry}>
            Try again
          </Button>
        )}
        <Button color="primary" icon={<Home className="size-4" />} asChild>
          <a href={homeHref}>Back to home</a>
        </Button>
      </div>

      {/* Support link */}
      {supportHref && (
        <a
          href={supportHref}
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-primary"
        >
          <LifeBuoy className="size-4" />
          Contact support
        </a>
      )}

      {/* Technical details */}
      {details && (
        <div className="mt-8 w-full max-w-lg">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            {showDetails ? (
              <ChevronUp className="size-4" />
            ) : (
              <ChevronDown className="size-4" />
            )}
            Technical details
          </button>
          {showDetails && (
            <pre className="mt-3 max-h-48 overflow-auto rounded-lg border border-border bg-surface/50 p-4 text-left text-xs leading-relaxed text-text-secondary">
              {details}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
