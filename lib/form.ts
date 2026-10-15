export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
export type UtmData = Record<(typeof UTM_KEYS)[number], string>;
export function readUtmParams(search: string): UtmData { const params = new URLSearchParams(search); return Object.fromEntries(UTM_KEYS.map((key) => [key, params.get(key)?.slice(0, 200) ?? ""])) as UtmData; }
export function isValidEmail(value: string): boolean { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()); }
export function isValidFormspreeEndpoint(value?: string): value is string { if (!value) return false; try { const url = new URL(value); return url.protocol === "https:" && url.hostname === "formspree.io" && url.pathname.startsWith("/f/"); } catch { return false; } }

