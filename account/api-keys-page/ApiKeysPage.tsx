"use client";

import { Plus, Key, ShieldAlert, BookOpen, RefreshCw, Ban } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Button from "@mdigital_ui/ui/button";
import Badge from "@mdigital_ui/ui/badge";
import Clipboard from "@mdigital_ui/ui/clipboard";
import { cn } from "@mdigital_ui/ui";
import type { ApiKeysPageProps, ApiKeyStatus } from "./ApiKeysPage.types";

const statusColors: Record<ApiKeyStatus, "success" | "default" | "error"> = {
  active: "success",
  expired: "default",
  revoked: "error",
};

export default function ApiKeysPage({
  keys,
  onCreate,
  onRevoke,
  onRegenerate,
  onView,
  docsHref,
}: ApiKeysPageProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">API Keys</h1>
          <p className="mt-0.5 text-sm text-text-secondary">
            Manage API access keys for your integrations
          </p>
        </div>
        <div className="flex items-center gap-2">
          {docsHref && (
            <Button variant="outline" icon={<BookOpen className="size-4" />} asChild>
              <a href={docsHref}>API Docs</a>
            </Button>
          )}
          {onCreate && (
            <Button color="primary" icon={<Plus className="size-4" />} onClick={onCreate}>
              Create key
            </Button>
          )}
        </div>
      </div>

      {/* Security banner */}
      <div className="flex gap-3 rounded-xl border border-border bg-surface/50 p-4">
        <ShieldAlert className="size-5 shrink-0 text-warning mt-0.5" />
        <div className="text-sm">
          <p className="font-medium">Keep your API keys secure</p>
          <p className="mt-0.5 text-text-secondary leading-relaxed">
            Never share your API keys in public repositories or client-side
            code. Use environment variables instead.
          </p>
        </div>
      </div>

      {/* Keys list */}
      {keys.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-20 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Key className="size-7" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">No API keys yet</h3>
            <p className="mt-1.5 max-w-xs text-sm text-text-secondary">
              Create your first API key to start integrating with our API.
            </p>
            {onCreate && (
              <Button color="primary" className="mt-5" onClick={onCreate}>
                Create key
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {keys.map((k) => (
            <Card
              key={k.id}
              className={cn(
                "transition-all duration-200",
                onView && "cursor-pointer hover:shadow-sm"
              )}
              onClick={() => onView?.(k.id)}
            >
              <CardContent className="p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2.5">
                      <p className="font-medium">{k.name}</p>
                      {k.status && (
                        <Badge color={statusColors[k.status]} variant="soft" size="sm">
                          {k.status}
                        </Badge>
                      )}
                    </div>
                    <div className="mt-2.5 flex items-center gap-2">
                      <code className="rounded-lg bg-surface px-2.5 py-1 text-xs font-mono text-text-secondary">
                        {k.key.slice(0, 12)}...{k.key.slice(-4)}
                      </code>
                      <Clipboard value={k.key} />
                    </div>
                    {k.scopes && k.scopes.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {k.scopes.map((scope) => (
                          <Badge key={scope} variant="soft" size="sm">{scope}</Badge>
                        ))}
                      </div>
                    )}
                    <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary">
                      <span>Created: {k.createdAt}</span>
                      {k.lastUsed && <span>Last used: {k.lastUsed}</span>}
                      {k.expiresAt && <span>Expires: {k.expiresAt}</span>}
                    </div>
                  </div>
                  <div
                    className="flex shrink-0 items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {onRegenerate && k.status === "active" && (
                      <Button variant="outline" size="sm" icon={<RefreshCw className="size-3.5" />} onClick={() => onRegenerate(k.id)}>
                        Regenerate
                      </Button>
                    )}
                    {onRevoke && k.status === "active" && (
                      <Button variant="ghost" size="sm" color="error" icon={<Ban className="size-3.5" />} onClick={() => onRevoke(k.id)}>
                        Revoke
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
