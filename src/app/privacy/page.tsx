import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { LegalPage } from "@/components/sections/shared/LegalPage";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your personal information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated="[Add date]">
      <p>
        This Privacy Policy explains how {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;) collects, uses, and protects information
        when you visit our website or contact us. This is a starting template and must be reviewed and adapted to your
        jurisdiction and actual data practices before publishing.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Information you provide through our contact form, such as your name, email address, company, and project details.</li>
        <li>Technical information such as browser type and pages visited, if analytics tools are enabled.</li>
      </ul>
      <h2>How we use information</h2>
      <ul>
        <li>To respond to enquiries and provide requested services.</li>
        <li>To improve our website and understand how visitors use it.</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We do not sell personal information. We may share data with service providers (for example, email delivery or hosting) solely to operate our services.</p>
      <h2>Data retention</h2>
      <p>We retain personal information only as long as necessary for the purposes described above or as required by law.</p>
      <h2>Your rights</h2>
      <p>Depending on your location, you may have rights to access, correct, or delete your personal data. Contact us to make a request.</p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-sky underline underline-offset-2">{siteConfig.contact.email}</a>.
      </p>
    </LegalPage>
  );
}
