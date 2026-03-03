"use client";

import { useState } from "react";
import { Search, ArrowLeft, Home, FileQuestion } from "lucide-react";
import Button from "@mdigital_ui/ui/button";
import Input from "@mdigital_ui/ui/input";
import type { NotFoundPageProps } from "./NotFoundPage.types";

export default function NotFoundPage({
  title = "Page not found",
  description = "The page you're looking for doesn't exist or has been moved.",
  homeHref = "/",
  onBack,
  illustration,
  logo,
  onSearch,
  suggestions,
}: NotFoundPageProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
      {logo && <div className="mb-10">{logo}</div>}

      {/* Illustration */}
      {illustration ? (
        <div className="mb-8">{illustration}</div>
      ) : (
        <div className="mb-8 flex size-24 items-center justify-center rounded-full bg-primary/10">
          <FileQuestion className="size-11 text-primary" strokeWidth={1.5} />
        </div>
      )}

      {/* 404 code */}
      <p className="text-7xl font-bold tabular-nums text-primary/20 sm:text-8xl">
        404
      </p>

      {/* Content */}
      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-text-secondary leading-relaxed">
        {description}
      </p>

      {/* Search */}
      {onSearch && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(query);
          }}
          className="mx-auto mt-6 flex w-full max-w-sm gap-2"
        >
          <Input
            value={query}
            onChange={(e: any) => setQuery(e.target?.value ?? e)}
            placeholder="Search for something..."
            className="flex-1"
          />
          <Button type="submit" color="primary" icon={<Search className="size-4" />}>
            Search
          </Button>
        </form>
      )}

      {/* Actions */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {onBack && (
          <Button variant="outline" icon={<ArrowLeft className="size-4" />} onClick={onBack}>
            Go back
          </Button>
        )}
        <Button color="primary" icon={<Home className="size-4" />} asChild>
          <a href={homeHref}>Back to home</a>
        </Button>
      </div>

      {/* Suggested links */}
      {suggestions && suggestions.length > 0 && (
        <div className="mt-10 w-full max-w-xs">
          <p className="mb-3 text-sm font-medium text-text-secondary">
            Popular pages
          </p>
          <div className="flex flex-col gap-0.5">
            {suggestions.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="rounded-lg px-3 py-2.5 text-sm text-primary transition-colors hover:bg-primary/5"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
