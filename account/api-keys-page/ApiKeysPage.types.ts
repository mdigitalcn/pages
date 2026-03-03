export type ApiKeyStatus = "active" | "expired" | "revoked";

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  createdAt: string;
  lastUsed?: string;
  expiresAt?: string;
  status?: ApiKeyStatus;
  scopes?: string[];
}

export interface ApiKeysPageProps {
  /** API keys list */
  keys: ApiKey[];
  /** Create new key action */
  onCreate?: () => void;
  /** Revoke key action */
  onRevoke?: (id: string) => void;
  /** Regenerate key action */
  onRegenerate?: (id: string) => void;
  /** View key details */
  onView?: (id: string) => void;
  /** Documentation link */
  docsHref?: string;
}
