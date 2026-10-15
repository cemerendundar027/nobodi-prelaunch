import { describe, expect, it } from "vitest";
import { isValidEmail, isValidFormspreeEndpoint, readUtmParams } from "@/lib/form";
describe("waitlist helpers", () => {
  it("validates email addresses", () => { expect(isValidEmail("merhaba@nobodi.chat")).toBe(true); expect(isValidEmail("yanlis@adres")).toBe(false); });
  it("accepts only Formspree HTTPS endpoints", () => { expect(isValidFormspreeEndpoint("https://formspree.io/f/abc123")).toBe(true); expect(isValidFormspreeEndpoint("http://formspree.io/f/abc123")).toBe(false); expect(isValidFormspreeEndpoint(undefined)).toBe(false); });
  it("extracts UTM values", () => { const utm = readUtmParams("?utm_source=instagram&utm_campaign=lansman"); expect(utm.utm_source).toBe("instagram"); expect(utm.utm_campaign).toBe("lansman"); expect(utm.utm_medium).toBe(""); });
});
