import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { LegalPage } from "@/components/sections/shared/LegalPage";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `The terms and conditions governing use of the ${siteConfig.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" path="/terms" updated="[Add date]">
      <p>
        These Terms &amp; Conditions govern your use of the {siteConfig.name} website. This is a starting template and must be
        reviewed by a legal professional and adapted to your business before publishing.
      </p>
      <h2>Use of this website</h2>
      <p>You agree to use this website lawfully and not to interfere with its operation or security.</p>
      <h2>Intellectual property</h2>
      <p>All content on this website, including text, graphics, and logos, is owned by or licensed to {siteConfig.legalName} unless otherwise stated.</p>
      <h2>Services</h2>
      <p>Any services we provide are governed by a separate written agreement or proposal, which takes precedence over these terms.</p>
      <h2>Limitation of liability</h2>
      <p>This website is provided &quot;as is&quot;. To the extent permitted by law, we are not liable for any loss arising from its use.</p>
      <h2>Third-party links</h2>
      <p>Links to third-party websites are provided for convenience; we are not responsible for their content.</p>
      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use of the website constitutes acceptance of the updated terms.</p>
      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-sky underline underline-offset-2">{siteConfig.contact.email}</a>.
      </p>
    </LegalPage>
  );
}
