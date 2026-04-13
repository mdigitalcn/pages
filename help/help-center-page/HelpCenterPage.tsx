"use client";

import { Search } from "lucide-react";
import Card, { CardContent } from "@mdigitalcn/uikit/card";
import Input from "@mdigitalcn/uikit/input";
import Accordion from "@mdigitalcn/uikit/accordion";
import { cn } from "@mdigitalcn/uikit";
import type { HelpCenterPageProps } from "./HelpCenterPage.types";

export default function HelpCenterPage({
  title = "Help Center",
  subtitle = "How can we help you today?",
  searchValue,
  onSearch,
  categories,
  onCategoryClick,
  faq,
  contactCta,
  className,
}: HelpCenterPageProps) {
  return (
    <div className={cn("space-y-12", className)}>
      {/* Hero */}
      <div className="rounded-xl bg-primary/5 px-6 py-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-text-secondary">{subtitle}</p>
        {onSearch && (
          <div className="mx-auto mt-6 max-w-lg">
            <Input
              value={searchValue}
              onChange={(e: any) => onSearch(e.target?.value ?? e)}
              placeholder="Search articles, guides, and more..."
              size="lg"
            />
          </div>
        )}
      </div>

      {/* Categories */}
      {categories && categories.length > 0 && (
        <div>
          <h2 className="mb-6 text-xl font-bold">Browse by topic</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Card
                key={cat.id}
                className={cn(
                  "transition-shadow",
                  onCategoryClick && "cursor-pointer hover:shadow-md"
                )}
                onClick={() => onCategoryClick?.(cat.id)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    {cat.icon && (
                      <div className="shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                        {cat.icon}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold">{cat.title}</h3>
                      {cat.description && (
                        <p className="mt-1 text-sm text-text-secondary">{cat.description}</p>
                      )}
                      {cat.articleCount !== undefined && (
                        <p className="mt-2 text-xs text-text-secondary">
                          {cat.articleCount} article{cat.articleCount !== 1 ? "s" : ""}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-xl font-bold text-center">Frequently Asked Questions</h2>
          <Accordion
            items={faq.map((item, i) => ({
              key: String(i),
              title: item.question,
              content: <p className="text-text-secondary">{item.answer}</p>,
            }))}
          />
        </div>
      )}

      {/* Contact CTA */}
      {contactCta && (
        <div className="rounded-xl border border-border p-8 text-center">
          {contactCta}
        </div>
      )}
    </div>
  );
}
