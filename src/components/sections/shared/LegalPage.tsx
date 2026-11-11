import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Container } from "@/components/ui/Container";
import { SampleBadge } from "@/components/ui/Badge";

export function LegalPage({ title, path, updated, children }: { title: string; path: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero title={title} breadcrumbs={[{ label: title, href: path }]} description={`Last updated: ${updated}`}>
        <div className="mt-6">
          <SampleBadge>Template — have this reviewed by a legal professional</SampleBadge>
        </div>
      </PageHero>
      <Container className="max-w-3xl pb-28">
        <article className="prose-legal">{children}</article>
      </Container>
    </>
  );
}
