"use client";

import { startTransition, useActionState, useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Info, Loader2, Send } from "lucide-react";
import { submitContact } from "@/app/contact/actions";
import {
  budgetOptions,
  serviceOptions,
  validateContact,
  type ContactErrors,
  type ContactState,
  type ContactValues,
} from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const initialState: ContactState = { status: "idle", message: "" };

const empty: ContactValues = { name: "", email: "", company: "", service: "", budget: "", details: "" };

function Field({
  id,
  label,
  optional,
  error,
  children,
  hint,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-fg">
        <span>
          {label}
          {!optional && <span className="ml-0.5 text-brand-sky" aria-hidden="true">*</span>}
        </span>
        {optional && <span className="text-xs font-normal text-fg-subtle">Optional</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="text-xs text-fg-subtle">{hint}</p>}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-1.5 text-xs text-danger"
          >
            <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactFormInner({ defaultService, onReset }: { defaultService: string; onReset: () => void }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [values, setValues] = useState<ContactValues>({ ...empty, service: defaultService });
  const [touched, setTouched] = useState<Partial<Record<keyof ContactValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  const clientErrors: ContactErrors = validateContact(values);
  const errorFor = (k: keyof ContactValues) =>
    (submitted || touched[k]) && clientErrors[k] ? clientErrors[k] : state.status === "error" ? state.errors?.[k] : undefined;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const onBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setTouched((t) => ({ ...t, [e.target.name]: true }));

  // Submit manually (instead of <form action>) so React doesn't auto-reset the
  // form afterwards — that would wipe the visitor's input on an error.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const errs = validateContact(values);
    if (Object.keys(errs).length > 0) {
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const data = new FormData(e.currentTarget);
    startTransition(() => formAction(data));
  };

  const describedBy = (k: keyof ContactValues, hint?: boolean) =>
    errorFor(k) ? `${id(k)}-error` : hint ? `${id(k)}-hint` : undefined;

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        className="flex flex-col items-center gap-5 py-16 text-center"
      >
        <span className="grid size-16 place-items-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </span>
        <h3 className="text-2xl font-semibold text-fg">Message sent</h3>
        <p className="max-w-md text-fg-muted">{state.message}</p>
        <Button variant="secondary" onClick={onReset}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-6">
      {/* Honeypot field (hidden from people, attractive to bots) */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id("name")} label="Full name" error={errorFor("name")}>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={!!errorFor("name")}
            aria-describedby={describedBy("name")}
            placeholder="Jane Doe"
            className="field"
          />
        </Field>
        <Field id={id("email")} label="Email address" error={errorFor("email")}>
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={!!errorFor("email")}
            aria-describedby={describedBy("email")}
            placeholder="jane@company.com"
            className="field"
          />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id("company")} label="Company name" optional error={errorFor("company")}>
          <input
            id={id("company")}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={!!errorFor("company")}
            aria-describedby={describedBy("company")}
            placeholder="Company Inc."
            className="field"
          />
        </Field>
        <Field id={id("service")} label="Required service" error={errorFor("service")}>
          <select
            id={id("service")}
            name="service"
            required
            value={values.service}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={!!errorFor("service")}
            aria-describedby={describedBy("service")}
            className={cn("field field-select", !values.service && "text-fg-subtle")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-ink-900 text-fg">
                {o.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 flex w-full items-baseline justify-between text-sm font-medium text-fg">
          <span>Project budget</span>
          <span className="text-xs font-normal text-fg-subtle">Optional</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {budgetOptions.map((b) => {
            const checked = values.budget === b;
            return (
              <label
                key={b}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-2 text-sm transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-sky",
                  checked ? "border-transparent bg-gradient-to-r from-brand-blue to-brand-violet text-white" : "border-line-strong text-fg-muted hover:text-fg",
                )}
              >
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  checked={checked}
                  onChange={onChange}
                  onClick={() => checked && setValues((v) => ({ ...v, budget: "" }))}
                  className="sr-only"
                />
                {b}
              </label>
            );
          })}
        </div>
        {errorFor("budget") && <p className="text-xs text-danger">{errorFor("budget")}</p>}
      </fieldset>

      <Field id={id("details")} label="Project details" error={errorFor("details")} hint="Tell us about your goals, timeline, and anything else we should know.">
        <textarea
          id={id("details")}
          name="details"
          required
          rows={6}
          value={values.details}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!!errorFor("details")}
          aria-describedby={describedBy("details", true)}
          placeholder="We're looking to redesign our website and improve lead generation…"
          className="field resize-y"
        />
      </Field>

      <AnimatePresence>
        {(state.status === "error" || state.status === "not_configured") && (
          <motion.div
            role="alert"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={cn(
              "flex items-start gap-3 rounded-2xl border p-4 text-sm",
              state.status === "error" ? "border-danger/30 bg-danger/10 text-red-200" : "border-warning/30 bg-warning/10 text-amber-100",
            )}
          >
            {state.status === "error" ? (
              <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            ) : (
              <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            )}
            <p>{state.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-xs text-fg-subtle">
          By submitting, you agree to our handling of your data as described in our{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-fg">
            Privacy Policy
          </a>
          .
        </p>
        <Button type="submit" size="lg" disabled={pending} aria-disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

/** Reads `?service=` to preselect a service, and remounts the form for "send another". */
export function ContactForm() {
  const params = useSearchParams();
  const requested = params.get("service") ?? "";
  const defaultService = serviceOptions.some((o) => o.value === requested) ? requested : "";
  const [formKey, setFormKey] = useState(0);
  return <ContactFormInner key={`${formKey}-${defaultService}`} defaultService={defaultService} onReset={() => setFormKey((k) => k + 1)} />;
}

export function ContactFormFallback() {
  return <ContactFormInner defaultService="" onReset={() => {}} />;
}
