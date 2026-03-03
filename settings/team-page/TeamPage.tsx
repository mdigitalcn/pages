"use client";

import { UserPlus, Send, X, Trash2, Users, Mail } from "lucide-react";
import Card, { CardContent, CardHeader, CardTitle } from "@mdigital_ui/ui/card";
import Avatar from "@mdigital_ui/ui/avatar";
import Badge from "@mdigital_ui/ui/badge";
import Button from "@mdigital_ui/ui/button";
import Input from "@mdigital_ui/ui/input";
import { cn } from "@mdigital_ui/ui";
import type { TeamPageProps, MemberStatus } from "./TeamPage.types";

const statusColors: Record<MemberStatus, "success" | "warning" | "default"> = {
  active: "success",
  pending: "warning",
  inactive: "default",
};

export default function TeamPage({
  members,
  pendingInvites,
  onInvite,
  onRemove,
  onRoleChange,
  onCancelInvite,
  onResendInvite,
  roles = ["Admin", "Editor", "Viewer"],
  searchValue,
  onSearch,
}: TeamPageProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Team</h1>
          <p className="mt-0.5 text-sm text-text-secondary">
            Manage team members and their roles
          </p>
        </div>
        {onInvite && (
          <Button color="primary" icon={<UserPlus className="size-4" />} onClick={onInvite}>
            Invite member
          </Button>
        )}
      </div>

      {/* Search */}
      {onSearch && (
        <Input
          value={searchValue}
          onChange={(e: any) => onSearch(e.target?.value ?? e)}
          placeholder="Search members..."
          className="max-w-xs"
        />
      )}

      {/* Pending invites */}
      {pendingInvites && pendingInvites.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2.5">
              <CardTitle className="text-base">Pending Invites</CardTitle>
              <Badge variant="soft" size="sm">{pendingInvites.length}</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {pendingInvites.map((invite) => (
              <div
                key={invite.id}
                className="flex items-center justify-between gap-4 rounded-xl border border-dashed border-border p-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{invite.email}</p>
                    <p className="text-xs text-text-secondary">
                      Invited {invite.sentAt} · {invite.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {onResendInvite && (
                    <Button variant="ghost" size="sm" icon={<Send className="size-3.5" />} onClick={() => onResendInvite(invite.id)}>
                      Resend
                    </Button>
                  )}
                  {onCancelInvite && (
                    <Button variant="ghost" size="sm" color="error" iconOnly icon={<X className="size-4" />} aria-label="Cancel invite" onClick={() => onCancelInvite(invite.id)} />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Members */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2.5">
            <CardTitle className="text-base">Members</CardTitle>
            <Badge variant="soft" size="sm">{members.length}</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {members.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center px-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="size-6" />
              </div>
              <p className="mt-4 text-sm text-text-secondary">No team members yet</p>
              {onInvite && (
                <Button color="primary" size="sm" className="mt-3" onClick={onInvite}>
                  Invite someone
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/50 text-text-secondary">
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Member</th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider sm:table-cell">Role</th>
                    <th className="hidden px-4 py-3 text-center text-xs font-medium uppercase tracking-wider md:table-cell">Status</th>
                    <th className="hidden px-4 py-3 text-left text-xs font-medium uppercase tracking-wider lg:table-cell">Last Active</th>
                    <th className="w-16 px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {members.map((member) => (
                    <tr key={member.id} className="transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Avatar src={member.avatar} name={member.name} size="sm" />
                          <div className="min-w-0">
                            <p className="truncate font-medium">{member.name}</p>
                            <p className="truncate text-xs text-text-secondary">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="hidden px-4 py-3 sm:table-cell">
                        {onRoleChange ? (
                          <select
                            value={member.role}
                            onChange={(e) => onRoleChange(member.id, e.target.value)}
                            className="rounded-lg border border-border bg-transparent px-2.5 py-1.5 text-sm transition-colors focus:border-primary focus:outline-none"
                          >
                            {roles.map((r) => (
                              <option key={r} value={r}>{r}</option>
                            ))}
                          </select>
                        ) : (
                          <Badge variant="soft" size="sm">{member.role}</Badge>
                        )}
                      </td>
                      <td className="hidden px-4 py-3 text-center md:table-cell">
                        {member.status && (
                          <Badge color={statusColors[member.status]} variant="soft" size="sm">{member.status}</Badge>
                        )}
                      </td>
                      <td className="hidden px-4 py-3 text-text-secondary lg:table-cell">{member.lastActive ?? "—"}</td>
                      <td className="px-4 py-3 text-right">
                        {onRemove && (
                          <Button variant="ghost" size="sm" color="error" iconOnly icon={<Trash2 className="size-4" />} aria-label="Remove member" onClick={() => onRemove(member.id)} />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
