/** Re-exports for the places that need both voices (server metadata, tests). */

import { ar, type Dict, type Lang } from "./i18n-ar";
import { en } from "./i18n-en";

export type { Dict, Lang };
export { ar, en };

export const DICTS: Record<Lang, Dict> = { ar, en };
