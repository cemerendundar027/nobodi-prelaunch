"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Language, languageOptions, languages } from "@/lib/i18n";

const listeners = new Set<() => void>();
let activeLanguage: Language = "tr";

function readLanguage(): Language {
  if (typeof window === "undefined") return "tr";
  const saved = window.localStorage.getItem("nobodi-language");
  if (languages.includes(saved as Language)) activeLanguage = saved as Language;
  return activeLanguage;
}

function subscribe(listener: () => void) { listeners.add(listener); return () => listeners.delete(listener); }

export function useLanguage() {
  const language = useSyncExternalStore(subscribe, readLanguage, () => "tr" as Language);
  const setLanguage = (next: Language) => {
    activeLanguage = next;
    window.localStorage.setItem("nobodi-language", next);
    document.documentElement.lang = next;
    listeners.forEach((listener) => listener());
  };
  return { language, setLanguage };
}

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const active = languageOptions.find((option) => option.code === language)!;

  useEffect(() => {
    const close = (event: MouseEvent) => { if (!rootRef.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", close); document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", escape); };
  }, []);

  return <div className="language-selector" ref={rootRef}>
    <button className="language-trigger" type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
      <span className="flag-circle" aria-hidden="true">{active.flag}</span><span>{active.label}</span><span className={`language-chevron ${open ? "open" : ""}`} aria-hidden="true">⌄</span>
    </button>
    {open && <div className="language-menu" role="listbox" aria-label="Language">
      {languageOptions.map((option) => <button key={option.code} type="button" role="option" aria-selected={language === option.code} onClick={() => { setLanguage(option.code); setOpen(false); }}>
        <span className="flag-circle" aria-hidden="true">{option.flag}</span><span>{option.label}</span>{language === option.code && <span className="language-check" aria-hidden="true">✓</span>}
      </button>)}
    </div>}
  </div>;
}
