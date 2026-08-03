-- Single-row table holding the editable site settings (contact info + Google tag scripts).
create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  singleton boolean not null default true unique,
  phone text,
  whatsapp text,
  email text,
  address text,
  gtm_head_script text,
  gtm_body_script text,
  updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;

-- No policies are defined: the anon/public key has zero access to this
-- table. All reads/writes happen server-side through the Supabase
-- service-role key (see lib/supabase/admin.ts), after the app has already
-- verified the request is an authenticated user (see app/settings).
