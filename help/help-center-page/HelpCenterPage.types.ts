import type { ReactNode } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HelpCategory {
  id: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  articleCount?: number;
}

export interface HelpCenterPageProps {
  title?: string;
  subtitle?: string;
  searchValue?: string;
  onSearch?: (value: string) => void;
  categories?: HelpCategory[];
  onCategoryClick?: (id: string) => void;
  faq?: FaqItem[];
  contactCta?: ReactNode;
  className?: string;
}
