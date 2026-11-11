import { services } from "@/data/services";

/** Shared contact-form validation used on both the client and the server. */

export const budgetOptions = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
  "Not sure yet",
] as const;

export const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Something else / Not sure" },
];

export interface ContactValues {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export type ContactStatus = "idle" | "success" | "error" | "not_configured";

export interface ContactState {
  status: ContactStatus;
  message: string;
  errors?: ContactErrors;
  values?: ContactValues;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readContactForm(formData: FormData): ContactValues {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  return {
    name: get("name"),
    email: get("email"),
    company: get("company"),
    service: get("service"),
    budget: get("budget"),
    details: get("details"),
  };
}

export function validateContact(v: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (v.name.length < 2) errors.name = "Please enter your full name.";
  else if (v.name.length > 100) errors.name = "Name must be under 100 characters.";

  if (!v.email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email) || v.email.length > 200) errors.email = "Please enter a valid email address.";

  if (v.company.length > 120) errors.company = "Company name must be under 120 characters.";

  if (!v.service) errors.service = "Please choose the service you need.";
  else if (!serviceOptions.some((o) => o.value === v.service)) errors.service = "Please choose a valid service.";

  if (v.budget && !(budgetOptions as readonly string[]).includes(v.budget)) errors.budget = "Please choose a valid budget range.";

  if (v.details.length < 20) errors.details = "Please share a few more details (at least 20 characters).";
  else if (v.details.length > 5000) errors.details = "Project details must be under 5,000 characters.";

  return errors;
}
