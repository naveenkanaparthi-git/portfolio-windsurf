# PORTFOLIO_SPEC

## Purpose
This repository hosts Naveen Kanaparthi’s portfolio website. The goal is to present an industry-grade **Data Engineering / Analytics Engineering / Data Platform Engineering** portfolio while preserving all working features and existing content unless explicitly replaced.

This document is the **single source of truth** for:
- stack and project structure
- content model (where text/data lives)
- copywriting rules
- build/deploy automation (Netlify)
- a running changelog

---

## Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **UI**: shadcn/ui (Radix UI) + Tailwind CSS
- **Icons**: lucide-react
- **Theme**: next-themes (dark/light)
- **Animations**: framer-motion

---

## Repository structure (authoritative)
- `src/app/`:
  - `page.tsx`: Home
  - `about/page.tsx`: About
  - `projects/page.tsx`: Projects listing
  - `projects/[slug]/page.tsx`: Project case study page
  - `stack/page.tsx`: Tech stack
  - `resume/page.tsx`: Resume page
  - `contact/page.tsx`: Contact page
  - `sitemap.ts`: Sitemap route
  - `robots.ts`: Robots route
  - `not-found.tsx`: 404 page
- `src/components/`:
  - `layout/`: header/footer
  - `sections/`: higher-level page sections
  - `ui/`: reusable UI primitives
- `src/data/` (single source of truth for content):
  - `person.json`: name, role, bio, social links, resume URL
  - `projects.json`: project list + case study details
  - `skills.json`: skill categories + skills
- `src/lib/`:
  - `data.ts`: typed accessors for JSON content
  - `metadata.ts`: SEO metadata builder + JSON-LD helper

---

## Content model

### Personal info
**File**: `src/data/person.json`
- `name`, `title`, `location`, `email`, `phone`, `website`
- `social`: `github`, `linkedin`, `x` etc.
- `bio`, `shortBio`, `longBio`
- `resumeUrl` (should resolve to an actual public file under `public/`)

### Projects
**File**: `src/data/projects.json`
Each project should include:
- `title`, `slug`, `summary`, `role`, `timeline`, `domain`, `tags`
- `impact`: list of `{ metric, value, trend }`
- `problem`, `solution_overview`
- `architecture[]`: images/diagrams used in the case study
- `tech_stack[]`, `my_contributions[]`, `challenges[]`, `results[]`, `lessons[]`
- `links` (optional): `github`, `caseStudy`, etc.

**Asset convention**:
- Architecture/cover images should live under `public/images/`.
- Prefer lightweight SVG where possible.

### Skills
**File**: `src/data/skills.json`
- A list of categories, each with a list of skills.
- Skills should be grouped for a data engineering audience:
  - Languages
  - Warehouses/Lakes
  - Orchestration
  - Transform (dbt / modeling)
  - Streaming
  - Cloud/DevOps
  - Quality/Observability

---

## Copywriting rules
- **Tone**: confident, specific, and human. Avoid buzzword lists.
- **Claims**: do not invent experience, employers, metrics, certifications, or technologies.
- **Style**:
  - short sentences
  - use measurable outcomes only if present in repo content
  - prefer “what + how + impact” phrasing
- **Data engineering vocabulary**: use naturally where relevant (ETL/ELT, orchestration, modeling, data quality, observability, governance/security, performance/cost).

---

## SEO requirements
- Use `src/lib/metadata.ts` for page metadata.
- Ensure OpenGraph/Twitter metadata stays valid.
- `sitemap.ts` and `robots.ts` must use the same `NEXT_PUBLIC_SITE_URL` base.
- Canonicals should resolve correctly for all routes.

---

## Build & local development

### Install
```bash
npm install
```

### Run dev
```bash
npm run dev
```

### Lint
```bash
npm run lint
```

### Production build
```bash
npm run build
npm run start
```

---

## Netlify deployment

### Config
**File**: `netlify.toml`
- Build command: `npm run build`
- Publish directory: `.next` (Next.js on Netlify)
- Security headers and long-cache static assets are configured.

### Environment variables
- `NEXT_PUBLIC_SITE_URL` (required): deployed site base URL
- Optional analytics variables (only if wired in code):
  - `NEXT_PUBLIC_GA_ID`
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`

### Deploy packaging
- This repo includes a `.netlifyignore` to ensure deployment bundles exclude `node_modules`, `.next`, and other local artifacts.
- `src/lib/metadata.ts` resolves the site base URL using (in order):
  - `NEXT_PUBLIC_SITE_URL`
  - `SITE_URL` / `URL` / `DEPLOY_PRIME_URL` (Netlify-provided)
  - `person.website`

### Forms
- The contact form is implemented as a `mailto:` handoff by default (works on any host, no backend).
- If you want Netlify Forms, additional migration steps are required with the Next.js runtime/plugin.

---

## Future-edit checklist
- Update **only** the JSON data sources for content changes (`src/data/*`) unless adding a new feature.
- Keep navigation consistent across `Header`, `Footer`, and command palette.
- Ensure all referenced assets exist under `public/`.
- Validate:
  - `npm run build`
  - `npm run lint`
  - no broken internal links (notably `/resume`, `/legal`, project slugs)
  - `robots.txt` sitemap points to the correct domain

---

## Change log

### 2026-01-08
- Created `PORTFOLIO_SPEC.md` as the single source of truth for stack, content model, SEO/deploy rules, and future-edit checklist.
- Removed the Netlify `/resume` redirect that conflicted with the Next.js `/resume` route.
- Fixed `robots.ts` to emit a correct `sitemap.xml` URL derived from `NEXT_PUBLIC_SITE_URL` (fallback `https://naveenkanaparthi.dev`).
- Added `/legal` route to prevent broken footer navigation.
- Fixed `/stack` page to match the `skills.json` schema and present skills grouped for a data engineering audience.
- Added local image assets under `public/images/` (avatar, OG image, project covers, architecture diagrams) and updated JSON references.
- Updated SEO defaults in `generateMetadata()` to use the new OG image and a more accurate base URL fallback.
- Updated the contact form to a `mailto:` handoff (Netlify Forms removed due to Next.js runtime/plugin limitations unless migrated).
- Expanded `/projects/[slug]` to render full case study sections (problem/solution/architecture/stack/contributions/challenges/results/lessons/snippets).
- Re-enabled strict ESLint/TypeScript checks during builds in `next.config.ts`.
- Added `@netlify/plugin-nextjs` in `netlify.toml` for more reliable Next.js deployments on Netlify.
- Improved base URL detection for canonical/OG/JSON-LD on Netlify using `SITE_URL`/`URL`/`DEPLOY_PRIME_URL` fallbacks.
