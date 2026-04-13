"use client";

import { PenSquare, MessageSquare } from "lucide-react";
import Input from "@mdigitalcn/uikit/input";
import Button from "@mdigitalcn/uikit/button";
import Avatar from "@mdigitalcn/uikit/avatar";
import Badge from "@mdigitalcn/uikit/badge";
import { cn } from "@mdigitalcn/uikit";
import type { InboxPageProps } from "./InboxPage.types";

export default function InboxPage({
  conversations,
  activeId,
  onSelect,
  onCompose,
  searchValue,
  onSearch,
  detail,
  className,
}: InboxPageProps) {
  return (
    <div className={cn("flex h-[calc(100vh-8rem)] overflow-hidden rounded-lg border border-border", className)}>
      {/* Sidebar */}
      <div className="flex w-80 shrink-0 flex-col border-r border-border">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h1 className="text-lg font-bold">Inbox</h1>
          {onCompose && (
            <Button color="primary" size="sm" icon={<PenSquare className="size-4" />} onClick={onCompose}>
              Compose
            </Button>
          )}
        </div>

        {onSearch && (
          <div className="border-b border-border p-3">
            <Input
              value={searchValue}
              onChange={(e: any) => onSearch(e.target?.value ?? e)}
              placeholder="Search messages..."
              size="sm"
            />
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => onSelect?.(conv.id)}
              className={cn(
                "flex w-full items-start gap-3 border-b border-border p-4 text-left transition-colors",
                activeId === conv.id
                  ? "bg-primary/5 border-l-2 border-l-primary"
                  : "hover:bg-surface/50"
              )}
            >
              <div className="relative shrink-0">
                <Avatar src={conv.avatar} name={conv.name} size="sm" />
                {conv.online && (
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-success" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className={cn("text-sm truncate", conv.unread ? "font-semibold" : "font-medium")}>
                    {conv.name}
                  </p>
                  <span className="shrink-0 text-xs text-text-secondary">{conv.time}</span>
                </div>
                <p className={cn("mt-0.5 truncate text-xs", conv.unread ? "text-text-primary font-medium" : "text-text-secondary")}>
                  {conv.lastMessage}
                </p>
              </div>
              {conv.unread && conv.unread > 0 && (
                <Badge color="primary" variant="solid" size="sm" className="shrink-0">
                  {conv.unread}
                </Badge>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Detail */}
      <div className="flex flex-1 flex-col">
        {detail || (
          <div className="flex flex-1 items-center justify-center text-text-secondary">
            <div className="flex flex-col items-center gap-3 text-center">
            <MessageSquare className="size-10 text-text-secondary/30" />
            <p className="text-sm">Select a conversation to start messaging</p>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
