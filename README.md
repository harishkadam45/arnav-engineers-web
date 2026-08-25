# Arnav Engineers — Website

Official website for **Arnav Engineers**, a tool room company in Chikhali (Pune) manufacturing precision machined components, welding fixtures, inspection fixtures and prototype parts.

Built with [Astro](https://astro.build) v7.2 + Tailwind CSS v4. Fully static, zero-JS by default, SEO-optimised.

## Quick start

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Pages

| Route            | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `/`              | Home — hero, promise, capabilities, gallery teaser, clients |
| `/about/`        | Company story, promise values, team, process         |
| `/capabilities/` | Machines (M1TR / milling / lathe), welding, inspection instruments |
| `/products/`     | Filterable product gallery                           |
| `/contact/`      | Phone / email / map + enquiry form (opens email client) |

## Editing content

- **Contact info, GST, address** → `src/data/site.ts`
- **Products & categories** → `src/data/products.ts` (drop image in `src/assets/products/`, import it, add an entry)
- **Structured data (SEO schema)** → `src/data/schemas.ts`
- **Navigation links** → `src/data/site.ts` (`NAV_LINKS`)
- **Brand colors / fonts / design tokens** → `src/styles/global.css` (`@theme` block)

## SEO setup already in place

- Unique title + meta description per page, canonical URLs
- Open Graph & Twitter cards with generated `public/og.jpg`
- JSON-LD: `LocalBusiness`/`Manufacturer`, `BreadcrumbList`, `ContactPage`
- `@astrojs/sitemap` (`/sitemap-index.xml`) + `public/robots.txt`
- Semantic HTML, alt text everywhere, skip-link, keyboard-friendly

## Before going live

1. Replace placeholder domain `https://www.arnavengineers.com` in:
   - `astro.config.mjs` (`site`)
   - `src/data/site.ts` (`url`)
   - `public/robots.txt`
   - Contact form footer note in `src/pages/contact.astro`
2. Update approximate geo-coordinates in `src/data/site.ts` if you have exact workshop coordinates.
3. Deploy `dist/` to any static host (Cloudflare Pages / Netlify / Vercel / cPanel).
   - **Contact form**: submissions are delivered via [FormSubmit](https://formsubmit.co) to `dattatrayshinde435@gmail.com` — no server needed. **The very first submission triggers a one-time activation email to that inbox; it must be opened and confirmed once** (or the form will silently not deliver). Spam protection: honeypot field + FormSubmit's own filtering. To switch providers later, replace `ENDPOINT` in `src/pages/contact.astro` (e.g. Web3Forms/Formspree).
4. After launch: submit the sitemap in Google Search Console and create a Google Business Profile matching the site's name/address/phone exactly.
