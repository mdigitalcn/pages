import type { ReactNode } from "react";

export type FileType = "file" | "folder" | "image" | "document" | "video" | "audio";

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  size?: string;
  modified?: string;
  thumbnail?: string;
}

export interface FileManagerPageProps {
  files: FileItem[];
  title?: string;
  breadcrumbs?: ReactNode;
  onUpload?: () => void;
  onCreateFolder?: () => void;
  onOpen?: (id: string) => void;
  onDelete?: (id: string) => void;
  searchValue?: string;
  onSearch?: (value: string) => void;
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
  selectedIds?: string[];
  onSelect?: (ids: string[]) => void;
  className?: string;
}
