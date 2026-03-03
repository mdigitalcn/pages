"use client";

import { Save } from "lucide-react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Switch from "@mdigital_ui/ui/switch";
import Button from "@mdigital_ui/ui/button";
import Notification from "@mdigital_ui/ui/notification";
import type { NotificationsPageProps, NotificationChannel } from "./NotificationsPage.types";

function ChannelTable({
  channels,
  onToggle,
}: {
  channels: NotificationChannel[];
  onToggle: NotificationsPageProps["onToggle"];
}) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 pr-4 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
              Type
            </th>
            <th className="w-20 py-3 text-center text-xs font-medium uppercase tracking-wider text-text-secondary">
              Email
            </th>
            <th className="w-20 py-3 text-center text-xs font-medium uppercase tracking-wider text-text-secondary">
              Push
            </th>
            <th className="w-20 py-3 text-center text-xs font-medium uppercase tracking-wider text-text-secondary">
              In-app
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {channels.map((ch) => (
            <tr key={ch.id}>
              <td className="py-4 pr-4">
                <p className="font-medium">{ch.label}</p>
                {ch.description && (
                  <p className="mt-0.5 text-xs text-text-secondary leading-relaxed">
                    {ch.description}
                  </p>
                )}
              </td>
              <td className="py-4 text-center">
                <Switch
                  checked={ch.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onToggle(ch.id, "email", e.target.checked)
                  }
                  aria-label={`${ch.label} email`}
                />
              </td>
              <td className="py-4 text-center">
                <Switch
                  checked={ch.push}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onToggle(ch.id, "push", e.target.checked)
                  }
                  aria-label={`${ch.label} push`}
                />
              </td>
              <td className="py-4 text-center">
                <Switch
                  checked={ch.inApp}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onToggle(ch.id, "inApp", e.target.checked)
                  }
                  aria-label={`${ch.label} in-app`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NotificationsPage({
  groups,
  channels,
  onToggle,
  onSave,
  saving,
  successMessage,
}: NotificationsPageProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
          <p className="mt-0.5 text-sm text-text-secondary">
            Choose how and when you want to be notified
          </p>
        </div>
        {onSave && (
          <Button
            color="primary"
            loading={saving}
            icon={<Save className="size-4" />}
            onClick={onSave}
          >
            Save preferences
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

      {/* Grouped view */}
      {groups
        ? groups.map((group, i) => (
            <Card key={i}>
              <CardHeader>
                <div>
                  <CardTitle className="text-base">{group.title}</CardTitle>
                  {group.description && (
                    <p className="mt-1 text-sm text-text-secondary">
                      {group.description}
                    </p>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ChannelTable channels={group.channels} onToggle={onToggle} />
              </CardContent>
            </Card>
          ))
        : channels && (
            <Card>
              <CardContent className="pt-6">
                <ChannelTable channels={channels} onToggle={onToggle} />
              </CardContent>
            </Card>
          )}
    </div>
  );
}
