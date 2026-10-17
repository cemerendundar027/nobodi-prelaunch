"use client";

import { FormEvent, useMemo, useState, useSyncExternalStore } from "react";
import { ArrowIcon } from "@/components/icons";
import { useLanguage } from "@/components/language-selector";
import { isValidEmail, isValidFormspreeEndpoint, readUtmParams } from "@/lib/form";
import { translations } from "@/lib/i18n";
type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const { language } = useLanguage();
  const copy = translations[language].form;
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const configured = isValidFormspreeEndpoint(endpoint);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [validationError, setValidationError] = useState("");
  const search = useSyncExternalStore(() => () => undefined, () => window.location.search, () => "");
  const utm = useMemo(() => readUtmParams(search), [search]);
  const statusMessage = useMemo(() => status === "success" ? copy.success : status === "error" ? copy.error : "", [copy, status]);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading" || status === "success" || !configured) return;
    if (!isValidEmail(email)) { setValidationError(copy.invalid); return; }
    setValidationError(""); setStatus("loading");
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(event.currentTarget), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success"); setEmail("");
    } catch { setStatus("error"); }
  }

  return <div className="form-wrap" id="waitlist"><form onSubmit={handleSubmit} noValidate aria-label={copy.aria}>
    <div className="form-row">
      <label className="sr-only" htmlFor="email">{copy.label}</label>
      <input id="email" name="email" type="email" inputMode="email" autoComplete="email" placeholder={copy.placeholder} value={email} onChange={(event) => { setEmail(event.target.value); setValidationError(""); if (status === "error") setStatus("idle"); }} disabled={!configured || status === "loading" || status === "success"} aria-invalid={Boolean(validationError)} aria-describedby="form-message form-note" required />
      <button type="submit" disabled={!configured || status === "loading" || status === "success"}><span>{status === "loading" ? copy.loading : status === "success" ? copy.submitted : copy.submit}</span>{status === "loading" ? <span className="spinner" aria-hidden="true" /> : <ArrowIcon className="button-arrow" />}</button>
    </div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="company">{copy.honeypot}</label><input id="company" name="_gotcha" tabIndex={-1} autoComplete="off" /></div>
    {Object.entries(utm).map(([key, value]) => <input key={key} type="hidden" name={key} value={value} />)}
    <p id="form-message" className={`form-message ${status === "success" ? "success" : ""}`} role="status" aria-live="polite">{!configured ? copy.config : validationError || statusMessage}</p>
    <p id="form-note" className="form-note">{copy.note}</p>
  </form></div>;
}
