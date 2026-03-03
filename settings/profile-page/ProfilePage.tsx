"use client";

import { useRef, useState } from "react";
import { Camera, KeyRound, Trash2, Save } from "lucide-react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Avatar from "@mdigital_ui/ui/avatar";
import Input from "@mdigital_ui/ui/input";
import Textarea from "@mdigital_ui/ui/textarea";
import Button from "@mdigital_ui/ui/button";
import Divider from "@mdigital_ui/ui/divider";
import Notification from "@mdigital_ui/ui/notification";
import type { ProfilePageProps, ProfileData } from "./ProfilePage.types";

export default function ProfilePage({
  profile,
  onSave,
  onAvatarChange,
  saving,
  onChangePassword,
  onDeleteAccount,
  extraSections,
  successMessage,
}: ProfilePageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<ProfileData>({ ...profile });

  const update = (field: keyof ProfileData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onAvatarChange) onAvatarChange(file);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
          <p className="mt-0.5 text-sm text-text-secondary">
            Manage your personal information
          </p>
        </div>
        <Button
          color="primary"
          loading={saving}
          icon={<Save className="size-4" />}
          onClick={() => onSave(form)}
        >
          Save changes
        </Button>
      </div>

      {successMessage && (
        <Notification
          color="success"
          variant="soft"
          description={successMessage}
          closable
        />
      )}

      {/* Avatar section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-5">
            <button
              type="button"
              className="group relative shrink-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => fileInputRef.current?.click()}
              aria-label="Change avatar"
            >
              <Avatar src={profile.avatar} name={profile.name} size="lg" />
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <Camera className="size-5 text-white" />
              </div>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              aria-label="Upload avatar"
            />
            <div className="min-w-0">
              <p className="text-lg font-semibold truncate">{profile.name}</p>
              <p className="text-sm text-text-secondary truncate">{profile.email}</p>
              {profile.role && (
                <p className="mt-0.5 text-sm text-text-secondary truncate">
                  {profile.role}
                  {profile.company && ` at ${profile.company}`}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Full name"
              value={form.name}
              onChange={(e: any) => update("name", e.target?.value ?? e)}
            />
            <Input
              label="Email"
              type="email"
              value={form.email}
              onChange={(e: any) => update("email", e.target?.value ?? e)}
            />
            <Input
              label="Phone"
              value={form.phone ?? ""}
              onChange={(e: any) => update("phone", e.target?.value ?? e)}
            />
            <Input
              label="Location"
              value={form.location ?? ""}
              onChange={(e: any) => update("location", e.target?.value ?? e)}
              placeholder="City, Country"
            />
            <Input
              label="Company"
              value={form.company ?? ""}
              onChange={(e: any) => update("company", e.target?.value ?? e)}
            />
            <Input
              label="Website"
              value={form.website ?? ""}
              onChange={(e: any) => update("website", e.target?.value ?? e)}
              placeholder="https://"
            />
          </div>
          <Textarea
            label="Bio"
            value={form.bio ?? ""}
            onChange={(e: any) => update("bio", e.target?.value ?? e)}
            rows={3}
            placeholder="Tell us about yourself"
          />
        </CardContent>
      </Card>

      {/* Extra sections */}
      {extraSections}

      {/* Account / Danger zone */}
      {(onChangePassword || onDeleteAccount) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Account</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            {onChangePassword && (
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium">Password</p>
                  <p className="text-xs text-text-secondary">
                    Change your account password
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  icon={<KeyRound className="size-4" />}
                  onClick={onChangePassword}
                >
                  Change
                </Button>
              </div>
            )}
            {onChangePassword && onDeleteAccount && <Divider />}
            {onDeleteAccount && (
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-error">Delete account</p>
                  <p className="text-xs text-text-secondary">
                    Permanently delete your account and all data
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  color="error"
                  icon={<Trash2 className="size-4" />}
                  onClick={onDeleteAccount}
                >
                  Delete
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
