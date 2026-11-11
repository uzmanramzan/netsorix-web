import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — Digital agency for web, marketing & design`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image, inherited by every route that doesn't define its own. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 85% 10%, rgba(139,92,246,0.45), transparent 50%), radial-gradient(circle at 0% 100%, rgba(59,130,246,0.45), transparent 55%), #05070f",
          color: "#f4f6fc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #60a5fa, #22d3ee, #a78bfa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              color: "#05070f",
            }}
          >
            N
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 950 }}>
            Transform Your Ideas Into Digital Success.
          </div>
          <div style={{ fontSize: 30, color: "#a3acc7" }}>Web Development · Digital Marketing · SEO · UI/UX · Branding</div>
        </div>
      </div>
    ),
    size,
  );
}
