# Surge website

Public Next.js (App Router) rebuild of the Surge Rails site. Markup, Tailwind classes, routes, and copy are ported from the conversion spec — not redesigned.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3001](http://localhost:3001). If the original Rails app is already on port 3000, this keeps both available for comparison.

Contact and apply forms email `info@surge.africa` via Postmark when `POSTMARK_SERVER_TOKEN` is set. Without it, submissions are accepted and logged.

## Public routes

`/`, `/about`, `/contact`, `/faqs`, `/legal/privacy-policy`, `/board-and-management`, `/products/[slug]`, `/product_applications/new`, `/product_applications/success`, `/posts`, `/posts/[id]`

Staff `/dashboard` and `/users` stay on Rails for v1.

See `REACT_CONVERSION.md` for the full spec.
