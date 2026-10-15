import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { WaitlistForm } from "@/components/waitlist-form";

describe("WaitlistForm", () => {
  afterEach(() => { cleanup(); vi.unstubAllEnvs(); vi.restoreAllMocks(); window.history.replaceState({}, "", "/"); });

  it("disables submission and explains missing configuration", () => {
    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_ENDPOINT", "");
    render(<WaitlistForm />);
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent("Form henüz yapılandırılmadı");
  });

  it("validates the email before sending", () => {
    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_ENDPOINT", "https://formspree.io/f/test123");
    render(<WaitlistForm />);
    fireEvent.change(screen.getByLabelText("E-posta adresin"), { target: { value: "yanlis" } });
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("status")).toHaveTextContent("Geçerli bir e-posta");
  });

  it("shows success only after a successful response and passes UTMs", async () => {
    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_ENDPOINT", "https://formspree.io/f/test123");
    window.history.replaceState({}, "", "/?utm_source=instagram&utm_campaign=launch");
    let resolveRequest!: (response: Response) => void;
    const fetchMock = vi.spyOn(globalThis, "fetch").mockImplementation(() => new Promise((resolve) => { resolveRequest = resolve; }));
    render(<WaitlistForm />);
    fireEvent.change(screen.getByLabelText("E-posta adresin"), { target: { value: "hello@nobodi.chat" } });
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toBeDisabled();
    expect(screen.queryByText(/İlk gelenlerden oldun/)).not.toBeInTheDocument();
    resolveRequest(new Response("{}", { status: 200 }));
    await screen.findByText(/İlk gelenlerden oldun/);
    const submitted = fetchMock.mock.calls[0][1]?.body as FormData;
    expect(submitted.get("utm_source")).toBe("instagram");
    expect(submitted.get("utm_campaign")).toBe("launch");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("shows an error when Formspree rejects the request", async () => {
    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_ENDPOINT", "https://formspree.io/f/test123");
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response("{}", { status: 429 }));
    render(<WaitlistForm />);
    fireEvent.change(screen.getByLabelText("E-posta adresin"), { target: { value: "hello@nobodi.chat" } });
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Bir şey ters gitti"));
  });
});
