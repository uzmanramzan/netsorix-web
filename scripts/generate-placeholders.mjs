// Generates abstract SVG placeholder artwork for portfolio covers and screenshots.
// Run: node scripts/generate-placeholders.mjs
// Replace the generated files in /public/images/portfolio with real project imagery.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(process.cwd(), "public/images/portfolio");
mkdirSync(join(root, "screens"), { recursive: true });

const palettes = {
  "Web Development": ["#3b82f6", "#22d3ee"],
  "E-commerce": ["#8b5cf6", "#ec4899"],
  "Digital Marketing": ["#06b6d4", "#8b5cf6"],
  Branding: ["#f59e0b", "#ec4899"],
};

const projects = [
  ["saas-platform-website", "Web Development", "dashboard"],
  ["fashion-ecommerce-store", "E-commerce", "grid"],
  ["lead-generation-campaign", "Digital Marketing", "chart"],
  ["fintech-brand-identity", "Branding", "brand"],
  ["healthcare-web-portal", "Web Development", "dashboard"],
  ["home-goods-shopify-store", "E-commerce", "grid"],
  ["social-growth-campaign", "Digital Marketing", "chart"],
  ["studio-rebrand", "Branding", "brand"],
];

const W = 1200;
const H = 900;

function defs(id, a, b) {
  return `<defs>
  <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b1024"/><stop offset="1" stop-color="#05070f"/></linearGradient>
  <linearGradient id="ac-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
  <radialGradient id="glow-${id}" cx="0.75" cy="0.2" r="0.7"><stop offset="0" stop-color="${b}" stop-opacity="0.45"/><stop offset="1" stop-color="${b}" stop-opacity="0"/></radialGradient>
  <radialGradient id="glow2-${id}" cx="0.1" cy="0.95" r="0.6"><stop offset="0" stop-color="${a}" stop-opacity="0.35"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient>
  <pattern id="grid-${id}" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#94a3d6" stroke-opacity="0.07"/></pattern>
</defs>`;
}

function backdrop(id) {
  return `<rect width="${W}" height="${H}" fill="url(#bg-${id})"/>
<rect width="${W}" height="${H}" fill="url(#grid-${id})"/>
<rect width="${W}" height="${H}" fill="url(#glow-${id})"/>
<rect width="${W}" height="${H}" fill="url(#glow2-${id})"/>`;
}

function windowFrame(id, x, y, w, h, inner) {
  return `<g>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="#0d1328" stroke="#ffffff" stroke-opacity="0.1"/>
  <rect x="${x}" y="${y}" width="${w}" height="44" rx="22" fill="#ffffff" fill-opacity="0.04"/>
  <circle cx="${x + 26}" cy="${y + 22}" r="6" fill="#ff5f57" fill-opacity="0.8"/>
  <circle cx="${x + 46}" cy="${y + 22}" r="6" fill="#febc2e" fill-opacity="0.8"/>
  <circle cx="${x + 66}" cy="${y + 22}" r="6" fill="#28c840" fill-opacity="0.8"/>
  <rect x="${x + w / 2 - 120}" y="${y + 13}" width="240" height="18" rx="9" fill="#ffffff" fill-opacity="0.06"/>
  ${inner(x, y + 44, w, h - 44)}
</g>`;
}

const bar = (x, y, w, h, o = 0.1, r = 6) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#ffffff" fill-opacity="${o}"/>`;

const layouts = {
  dashboard: (id) => (x, y, w, h) => `
    ${bar(x + 24, y + 24, 160, h - 48, 0.04, 14)}
    ${[0, 1, 2, 3, 4].map((i) => bar(x + 44, y + 52 + i * 44, 110, 12, i === 0 ? 0.3 : 0.1)).join("")}
    ${bar(x + 208, y + 24, w - 232, 70, 0.04, 14)}
    ${bar(x + 232, y + 46, 220, 18, 0.25)}
    ${[0, 1, 2].map((i) => `<rect x="${x + 208 + i * ((w - 232) / 3 + 0)}" y="${y + 114}" width="${(w - 232) / 3 - 16}" height="110" rx="14" fill="#ffffff" fill-opacity="0.05"/>${bar(x + 230 + i * ((w - 232) / 3), y + 138, 80, 12, 0.18)}<rect x="${x + 230 + i * ((w - 232) / 3)}" y="${y + 166}" width="120" height="28" rx="8" fill="url(#ac-${id})" fill-opacity="${0.5 + i * 0.2}"/>`).join("")}
    <rect x="${x + 208}" y="${y + 244}" width="${w - 232}" height="${h - 268}" rx="14" fill="#ffffff" fill-opacity="0.04"/>
    <path d="M${x + 240} ${y + h - 60} C ${x + 360} ${y + h - 160}, ${x + 460} ${y + h - 90}, ${x + 560} ${y + h - 170} S ${x + 760} ${y + h - 150}, ${x + w - 60} ${y + h - 240}" fill="none" stroke="url(#ac-${id})" stroke-width="5" stroke-linecap="round"/>`,
  grid: (id) => (x, y, w, h) => `
    ${bar(x + 32, y + 28, 180, 18, 0.25)}
    ${[0, 1, 2, 3].map((i) => bar(x + w - 360 + i * 84, y + 30, 64, 12, 0.1)).join("")}
    ${[0, 1, 2].map((c) => [0, 1].map((r) => {
      const cw = (w - 96) / 3; const cx = x + 32 + c * (cw + 16); const cy = y + 76 + r * ((h - 110) / 2);
      const ch = (h - 110) / 2 - 16;
      return `<rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" rx="16" fill="#ffffff" fill-opacity="0.05"/>
      <rect x="${cx + 14}" y="${cy + 14}" width="${cw - 28}" height="${ch - 80}" rx="12" fill="url(#ac-${id})" fill-opacity="${0.25 + ((c + r) % 3) * 0.2}"/>
      ${bar(cx + 14, cy + ch - 52, cw * 0.55, 12, 0.22)}${bar(cx + 14, cy + ch - 30, cw * 0.3, 10, 0.12)}`;
    }).join("")).join("")}`,
  chart: (id) => (x, y, w, h) => `
    ${bar(x + 32, y + 28, 240, 20, 0.25)}
    ${[0, 1, 2, 3].map((i) => `<rect x="${x + 32 + i * ((w - 64) / 4)}" y="${y + 70}" width="${(w - 64) / 4 - 16}" height="86" rx="14" fill="#ffffff" fill-opacity="0.05"/>${bar(x + 52 + i * ((w - 64) / 4), y + 92, 70, 10, 0.16)}${bar(x + 52 + i * ((w - 64) / 4), y + 114, 110, 20, 0.28)}`).join("")}
    <rect x="${x + 32}" y="${y + 176}" width="${w - 64}" height="${h - 208}" rx="14" fill="#ffffff" fill-opacity="0.04"/>
    ${Array.from({ length: 12 }, (_, i) => {
      const bh = 40 + ((i * 47) % 160) + i * 9;
      const bw = (w - 160) / 12 - 12;
      return `<rect x="${x + 64 + i * (bw + 12)}" y="${y + h - 56 - bh}" width="${bw}" height="${bh}" rx="8" fill="url(#ac-${id})" fill-opacity="${0.35 + (i / 12) * 0.6}"/>`;
    }).join("")}`,
  brand: (id) => (x, y, w, h) => `
    <circle cx="${x + w * 0.32}" cy="${y + h * 0.45}" r="${h * 0.26}" fill="url(#ac-${id})" fill-opacity="0.9"/>
    <circle cx="${x + w * 0.32}" cy="${y + h * 0.45}" r="${h * 0.12}" fill="#0d1328"/>
    <rect x="${x + w * 0.32 - 8}" y="${y + h * 0.19}" width="16" height="${h * 0.52}" rx="8" fill="#0d1328"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="${x + w * 0.58 + i * 70}" y="${y + h * 0.22}" width="56" height="56" rx="14" fill="${["#ffffff", "#0b1024", "url(#ac-" + id + ")", "#94a3b8", "#1e293b"][i]}" fill-opacity="${i === 0 ? 0.9 : 1}" stroke="#ffffff" stroke-opacity="0.12"/>`).join("")}
    ${bar(x + w * 0.58, y + h * 0.42, 300, 26, 0.3)}
    ${bar(x + w * 0.58, y + h * 0.42 + 44, 220, 14, 0.14)}
    ${bar(x + w * 0.58, y + h * 0.42 + 70, 260, 14, 0.1)}
    <text x="${x + w * 0.58}" y="${y + h * 0.78}" font-family="Georgia, serif" font-size="68" fill="#ffffff" fill-opacity="0.85">Aa</text>`,
};

function label(text) {
  return `<g>
  <rect x="40" y="${H - 84}" width="${text.length * 11 + 48}" height="44" rx="22" fill="#05070f" fill-opacity="0.65" stroke="#ffffff" stroke-opacity="0.15"/>
  <text x="64" y="${H - 56}" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" fill="#cbd5f5" letter-spacing="0.5">${text}</text>
</g>`;
}

function cover(slug, category, kind) {
  const [a, b] = palettes[category];
  const id = slug;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Placeholder project artwork">
${defs(id, a, b)}
${backdrop(id)}
<g transform="rotate(-6 600 450)">${windowFrame(id, 150, 150, 900, 600, layouts[kind](id))}</g>
${label("Project image placeholder")}
</svg>`;
}

function screen(slug, category, kind, n) {
  const [a, b] = palettes[category];
  const id = `${slug}-s${n}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Placeholder project screenshot">
${defs(id, n === 1 ? a : b, n === 1 ? b : a)}
${backdrop(id)}
${windowFrame(id, 70, 70, W - 140, H - 170, layouts[n === 1 ? kind : kind === "brand" ? "grid" : kind === "grid" ? "dashboard" : "grid"](id))}
${label(`Screenshot placeholder ${n}`)}
</svg>`;
}

for (const [slug, category, kind] of projects) {
  writeFileSync(join(root, `${slug}.svg`), cover(slug, category, kind));
  writeFileSync(join(root, "screens", `${slug}-1.svg`), screen(slug, category, kind, 1));
  writeFileSync(join(root, "screens", `${slug}-2.svg`), screen(slug, category, kind, 2));
}
console.log(`Generated ${projects.length * 3} placeholder SVGs in ${root}`);
