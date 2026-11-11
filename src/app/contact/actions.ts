"use server";

import { readContactForm, serviceOptions, validateContact, type ContactState } from "@/lib/contact";
import { siteConfig } from "@/data/site";

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/**
 * Handles contact form submissions.
 *
 * Delivery uses the Resend HTTP API when these env vars are set:
 *   RESEND_API_KEY      – API key from https://resend.com
 *   CONTACT_TO_EMAIL    – inbox that should receive enquiries
 *   CONTACT_FROM_EMAIL  – verified sender, e.g. "Netsorix <noreply@yourdomain.com>"
 *
 * Without them, the action validates input but tells the visitor honestly that
 * the message was NOT delivered, and offers the email address instead.
 */
export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: bots fill hidden fields. Pretend success without sending.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success", message: "Thanks! Your message has been received." };
  }

  const values = readContactForm(formData);
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields and try again.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      status: "not_configured",
      message: `Your message was not sent — the contact form hasn't been connected to an email service yet. Please email us directly at ${siteConfig.contact.email}.`,
      values,
    };
  }

  const serviceLabel = serviceOptions.find((o) => o.value === values.service)?.label ?? values.service;
  const rows: [string, string][] = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company || "—"],
    ["Service", serviceLabel],
    ["Budget", values.budget || "—"],
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `New project enquiry — ${values.name} (${serviceLabel})`,
        text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nProject details:\n${values.details}`,
        html: `<table>${rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("")}</table><p><strong>Project details</strong></p><p>${escapeHtml(values.details).replace(/\n/g, "<br/>")}</p>`,
      }),
    });

    if (!res.ok) {
      console.error("Contact form delivery failed:", res.status, await res.text().catch(() => ""));
      return {
        status: "error",
        message: `We couldn't send your message right now. Please try again shortly or email us at ${siteConfig.contact.email}.`,
        values,
      };
    }
  } catch (err) {
    console.error("Contact form delivery error:", err);
    return {
      status: "error",
      message: `We couldn't send your message right now. Please try again shortly or email us at ${siteConfig.contact.email}.`,
      values,
    };
  }

  return { status: "success", message: "Thanks! Your message has been sent. We'll review it and get back to you soon." };
}
