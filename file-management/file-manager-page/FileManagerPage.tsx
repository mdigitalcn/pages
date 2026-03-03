"use client";

import { Folder, File, Image, FileText, Video, Music, LayoutGrid, List, Upload, FolderPlus, Trash2 } from "lucide-react";
import Card, { CardContent } from "@mdigital_ui/ui/card";
import Input from "@mdigital_ui/ui/input";
import Button from "@mdigital_ui/ui/button";
import Toggle from "@mdigital_ui/ui/toggle";
import Checkbox from "@mdigital_ui/ui/checkbox";
import { cn } from "@mdigital_ui/ui";
import type { FileManagerPageProps, FileType } from "./FileManagerPage.types";

const fileIcons: Record<FileType, React.ReactNode> = {
  folder: <Folder className="size-8 text-warning" />,
  file: <File className="size-8 text-text-secondary" />,
  image: <Image className="size-8 text-info" />,
  document: <FileText className="size-8 text-primary" />,
  video: <Video className="size-8 text-error" />,
  audio: <Music className="size-8 text-success" />,
};

export default function FileManagerPage({
  files,
  title = "Files",
  breadcrumbs,
  onUpload,
  onCreateFolder,
  onOpen,
  onDelete,
  searchValue,
  onSearch,
  viewMode = "grid",
  onViewModeChange,
  selectedIds = [],
  onSelect,
  className,
}: FileManagerPageProps) {
  const toggleSelect = (id: string) => {
    if (!onSelect) return;
    onSelect(
      selectedIds.includes(id)
        ? selectedIds.filter((s) => s !== id)
        : [...selectedIds, id]
    );
  };

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          {breadcrumbs && <div className="mt-1">{breadcrumbs}</div>}
        </div>
        <div className="flex items-center gap-2">
          {onCreateFolder && (
            <Button variant="outline" icon={<FolderPlus className="size-4" />} onClick={onCreateFolder}>New folder</Button>
          )}
          {onUpload && (
            <Button color="primary" icon={<Upload className="size-4" />} onClick={onUpload}>Upload</Button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {onSearch && (
          <Input
            value={searchValue}
            onChange={(e: any) => onSearch(e.target?.value ?? e)}
            placeholder="Search files..."
            className="sm:w-72"
          />
        )}
        <div className="flex items-center gap-3">
          {selectedIds.length > 0 && onDelete && (
            <Button variant="outline" color="error" size="sm" icon={<Trash2 className="size-4" />} onClick={() => selectedIds.forEach(onDelete)}>
              Delete ({selectedIds.length})
            </Button>
          )}
          {onViewModeChange && (
            <div className="flex gap-1">
              <Toggle pressed={viewMode === "grid"} onChange={() => onViewModeChange("grid")} aria-label="Grid view" icon={<LayoutGrid className="size-4" />} />
              <Toggle pressed={viewMode === "list"} onChange={() => onViewModeChange("list")} aria-label="List view" icon={<List className="size-4" />} />
            </div>
          )}
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {files.map((file) => (
            <Card
              key={file.id}
              className={cn(
                "transition-all cursor-pointer",
                selectedIds.includes(file.id) && "ring-2 ring-primary",
                "hover:shadow-md"
              )}
              onClick={() => file.type === "folder" ? onOpen?.(file.id) : toggleSelect(file.id)}
              onDoubleClick={() => onOpen?.(file.id)}
            >
              <CardContent className="p-4 text-center">
                {file.thumbnail ? (
                  <img src={file.thumbnail} alt={file.name} className="mx-auto mb-3 h-16 w-16 rounded-md object-cover" />
                ) : (
                  <div className="mx-auto mb-3 flex items-center justify-center">{fileIcons[file.type]}</div>
                )}
                <p className="truncate text-sm font-medium">{file.name}</p>
                {file.size && <p className="text-xs text-text-secondary mt-0.5">{file.size}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-surface/50">
                    {onSelect && <th className="w-10 px-4 py-3" />}
                    <th className="px-4 py-3 text-left font-medium">Name</th>
                    <th className="px-4 py-3 text-left font-medium">Size</th>
                    <th className="px-4 py-3 text-left font-medium">Modified</th>
                    {onDelete && <th className="px-4 py-3" />}
                  </tr>
                </thead>
                <tbody>
                  {files.map((file) => (
                    <tr
                      key={file.id}
                      className={cn(
                        "border-b transition-colors last:border-0 cursor-pointer hover:bg-surface/50",
                        selectedIds.includes(file.id) && "bg-primary/5"
                      )}
                      onClick={() => toggleSelect(file.id)}
                      onDoubleClick={() => onOpen?.(file.id)}
                    >
                      {onSelect && (
                        <td className="px-4 py-3">
                          <Checkbox checked={selectedIds.includes(file.id)} onChange={() => toggleSelect(file.id)} />
                        </td>
                      )}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <span className="shrink-0 [&>svg]:size-5">{fileIcons[file.type]}</span>
                          <span className="font-medium">{file.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-text-secondary">{file.size ?? "—"}</td>
                      <td className="px-4 py-3 text-text-secondary">{file.modified ?? "—"}</td>
                      {onDelete && (
                        <td className="px-4 py-3 text-right">
                          <Button variant="ghost" size="sm" color="error" onClick={(e: any) => { e.stopPropagation(); onDelete(file.id); }}>
                            Delete
                          </Button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
