import Link from "next/link";
export function Logo({ linked = true }: { linked?: boolean }) { const mark = <span className="logo-mark" aria-label="NOBODI">n<span>.</span></span>; return linked ? <Link href="/" className="logo-link">{mark}</Link> : mark; }

