This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# mobile-tyre-service-clean"

## Client Settings (Google Tags & Contact Info)

Clients can sign in at `/login` to manage Google Tag Manager / gtag scripts and
contact details (phone, WhatsApp, email, address) at `/settings`, without a
developer needing to touch the code.

### One-time setup

1. **Create a Supabase project** at [supabase.com](https://supabase.com).
2. **Run the migration** in `supabase/migrations/0001_site_settings.sql` via
   the Supabase SQL editor (or the Supabase CLI) to create the `site_settings`
   table.
3. **Create the client's login** in the Supabase dashboard under
   Authentication → Users → Add user (email + password). There is no public
   sign-up page by design — only accounts you create can log in.
4. **Set environment variables** (copy `.env.example` to `.env.local` locally,
   or add them in your hosting provider's dashboard):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (keep this secret — server-only)

Until these are configured, the site falls back to the defaults in
`config/site.ts` and the Google tags already in `app/layout.tsx`, so the
site keeps working with no setup required.

### What clients can edit

- **Head scripts** – anything that should load in `<head>` (GTM container
  snippet, gtag.js, Google Ads, Meta Pixel, etc.). Paste it exactly as given,
  `<script>` tags and all.
- **Body scripts** – anything that goes right after `<body>` (e.g. the GTM
  `<noscript>` iframe fallback).
- **Phone, WhatsApp, email, address** – used site-wide in the header, footer,
  contact page, and call-to-action buttons.
