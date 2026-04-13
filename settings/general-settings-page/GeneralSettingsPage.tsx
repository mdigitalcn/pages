"use client";

import { Save, AlertTriangle } from "lucide-react";
import Button from "@mdigitalcn/uikit/button";
import Notification from "@mdigitalcn/uikit/notification";
import { cn } from "@mdigitalcn/uikit";
import type { GeneralSettingsPageProps } from "./GeneralSettingsPage.types";

export default function GeneralSettingsPage({
  sections,
  activeSection,
  onSectionChange,
  children,
  onSave,
  saving,
  dirty,
  title = "Settings",
  subtitle = "Manage your account preferences",
  successMessage,
}: GeneralSettingsPageProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="mt-0.5 text-sm text-text-secondary">{subtitle}</p>
        </div>
        {onSave && (
          <Button
            color="primary"
            onClick={onSave}
            loading={saving}
            disabled={!dirty}
            icon={<Save className="size-4" />}
          >
            Save changes
          </Button>
        )}
      </div>

      {successMessage && (
        <Notification
          color="success"
          variant="soft"
          description={successMessage}
          closable
        />
      )}

      {/* Unsaved changes banner */}
      {dirty && (
        <div className="flex items-center gap-2.5 rounded-xl border border-warning/30 bg-warning/5 px-4 py-3">
          <AlertTriangle className="size-4 shrink-0 text-warning" />
          <p className="text-sm text-warning">
            You have unsaved changes. Don't forget to save before leaving.
          </p>
        </div>
      )}

      {/* Layout */}
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* Sidebar navigation */}
        <aside className="w-full shrink-0 lg:w-56">
          <nav className="flex gap-1 overflow-x-auto lg:flex-col">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => onSectionChange?.(s.id)}
                className={cn(
                  "flex items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                  activeSection === s.id
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-text-secondary hover:bg-surface hover:text-text-primary"
                )}
              >
                {s.icon && (
                  <span className="shrink-0 [&>svg]:size-4">{s.icon}</span>
                )}
                <span>{s.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
