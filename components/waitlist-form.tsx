"use client";

import { FormEvent, useMemo, useState, useSyncExternalStore } from "react";
import { ArrowIcon } from "@/components/icons";
import { isValidEmail, isValidFormspreeEndpoint, readUtmParams } from "@/lib/form";
type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const configured = isValidFormspreeEndpoint(endpoint);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [validationError, setValidationError] = useState("");
  const search = useSyncExternalStore(() => () => undefined, () => window.location.search, () => "");
  const utm = useMemo(() => readUtmParams(search), [search]);
  const statusMessage = useMemo(() => status === "success" ? "Ä°lk gelenlerden oldun. AÃ§Ä±ldÄ±ÄŸÄ±mÄ±zda haber vereceÄŸiz ðŸ–¤" : status === "error" ? "Bir ÅŸey ters gitti. Bir daha dener misin?" : "", [status]);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading" || status === "success" || !configured) return;
    if (!isValidEmail(email)) { setValidationError("GeÃ§erli bir e-posta adresi yazar mÄ±sÄ±n?"); return; }
    setValidationError(""); setStatus("loading");
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(event.currentTarget), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success"); setEmail("");
    } catch { setStatus("error"); }
  }

  return <div className="form-wrap" id="waitlist"><form onSubmit={handleSubmit} noValidate aria-label="NOBODI erken eriÅŸim formu">
    <div className="form-row">
      <label className="sr-only" htmlFor="email">E-posta adresin</label>
      <input id="email" name="email" type="email" inputMode="email" autoComplete="email" placeholder="E-posta adresin" value={email} onChange={(event) => { setEmail(event.target.value); setValidationError(""); if (status === "error") setStatus("idle"); }} disabled={!configured || status === "loading" || status === "success"} aria-invalid={Boolean(validationError)} aria-describedby="form-message form-note" required />
      <button type="submit" disabled={!configured || status === "loading" || status === "success"}><span>{status === "loading" ? "GÃ¶nderiliyorâ€¦" : status === "success" ? "Listedesin" : "Ä°lk gelenlerden ol ðŸ‘€"}</span>{status === "loading" ? <span className="spinner" aria-hidden="true" /> : <ArrowIcon className="button-arrow" />}</button>
    </div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="company">Åžirket</label><input id="company" name="_gotcha" tabIndex={-1} autoComplete="off" /></div>
    {Object.entries(utm).map(([key, value]) => <input key={key} type="hidden" name={key} value={value} />)}
    <p id="form-message" className={`form-message ${status === "success" ? "success" : ""}`} role="status" aria-live="polite">{!configured ? "Form henÃ¼z yapÄ±landÄ±rÄ±lmadÄ±. Site sahibi Formspree endpointâ€™ini eklemeli." : validationError || statusMessage}</p>
    <p id="form-note" className="form-note">AÃ§Ä±ldÄ±ÄŸÄ±mÄ±zda sana haber verelim. Spam yok, sÃ¶z. ðŸ–¤</p>
  </form></div>;
}

