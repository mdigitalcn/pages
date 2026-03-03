import type { Meta, StoryObj } from "@storybook/react";
import FileManagerPage from "./FileManagerPage";

const meta: Meta<typeof FileManagerPage> = {
  title: "Pages/FileManagement/FileManagerPage",
  component: FileManagerPage,
  tags: ["autodocs"],
  argTypes: {
    viewMode: { control: "select", options: ["grid", "list"] },
  },
};
export default meta;
type Story = StoryObj<typeof FileManagerPage>;

const files = [
  { id: "1", name: "Documents", type: "folder" as const, modified: "Feb 24, 2026" },
  { id: "2", name: "Images", type: "folder" as const, modified: "Feb 23, 2026" },
  { id: "3", name: "project-brief.pdf", type: "document" as const, size: "2.4 MB", modified: "Feb 22, 2026" },
  { id: "4", name: "hero-banner.png", type: "image" as const, size: "1.8 MB", modified: "Feb 21, 2026" },
  { id: "5", name: "demo-video.mp4", type: "video" as const, size: "45 MB", modified: "Feb 20, 2026" },
  { id: "6", name: "podcast-ep1.mp3", type: "audio" as const, size: "12 MB", modified: "Feb 19, 2026" },
  { id: "7", name: "report-q4.pdf", type: "document" as const, size: "890 KB", modified: "Feb 18, 2026" },
  { id: "8", name: "logo.svg", type: "file" as const, size: "24 KB", modified: "Feb 17, 2026" },
];

export const GridView: Story = {
  args: {
    viewMode: "grid",
    files,
    onUpload: () => console.log("upload"),
    onCreateFolder: () => console.log("create folder"),
    onOpen: (id) => console.log("open", id),
    onDelete: (id) => console.log("delete", id),
    onSearch: (v) => console.log("search", v),
    onViewModeChange: (m) => console.log("view", m),
    onSelect: (ids) => console.log("select", ids),
  },
};

export const ListView: Story = {
  args: {
    ...GridView.args,
    viewMode: "list",
  },
};
