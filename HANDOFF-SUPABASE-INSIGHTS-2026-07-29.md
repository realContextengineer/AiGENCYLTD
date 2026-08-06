# AiGENCY / GEO Expert / Hermes Insights — Supabase Handoff

**Date:** 29 July 2026  
**Purpose:** Carry this work into a fresh chat without losing the project boundaries, decisions, current database state, or next steps.

---

## 1. Current objective

The user is building a family of connected but separate websites and products:

1. **AiGENCY Ltd** — the main consultancy website.
2. **Hermes Agents** — a separate product/site for building and offering Hermes agents and skills.
3. **GEO Expert / AEO Expert** — a focused site and editorial/research product around SEO, AEO, GEO, AI search visibility and agent-ready websites.

The immediate technical objective is to turn the currently static **Insights** area of the GEO Expert site into a controlled editorial system using Supabase.

The intended workflow is:

```text
Hermes researches and drafts
        ↓
Draft stored in Supabase
        ↓
Validation / editorial checks
        ↓
Private preview
        ↓
Human review and approval
        ↓
Static article generated or updated
        ↓
Insights index, RSS, sitemap and llms.txt updated
        ↓
Published site deployed
```

Hermes should not have unrestricted publishing power. The user should remain the reviewer/publisher.

---

## 2. Important correction about the projects

The user correctly challenged the assistant after it asked for the location of the Insights project. The assistant should have known where it was because it had been working with it.

The actual Hermes-built Insights project was located and verified locally at:

```text
/Users/aigencyltd/Desktop/software builds/GEO Expert
```

The relevant files are:

```text
/Users/aigencyltd/Desktop/software builds/GEO Expert/insights/index.html
/Users/aigencyltd/Desktop/software builds/GEO Expert/insights/what-is-aeo/index.html
/Users/aigencyltd/Desktop/software builds/GEO Expert/insights/rss.xml
```

Clickable local references:

- [GEO Expert Insights index](/Users/aigencyltd/Desktop/software%20builds/GEO%20Expert/insights/index.html)
- [What is AEO article](/Users/aigencyltd/Desktop/software%20builds/GEO%20Expert/insights/what-is-aeo/index.html)
- [GEO Expert project folder](/Users/aigencyltd/Desktop/software%20builds/GEO%20Expert)

This is **not** the same project as the main AiGENCY static website:

```text
/Users/aigencyltd/Desktop/software builds/main website
```

Do not wire Supabase Insights functionality into the main AiGENCY website by mistake. The database-backed editorial work belongs to the GEO Expert project.

---

## 3. Supabase project

The user explicitly gave permission to enter the Supabase project and create the database.

Dashboard:

```text
https://supabase.com/dashboard/project/aoaxouldrgunihrmzrje
```

Verified project details:

- Project ID: `aoaxouldrgunihrmzrje`
- Project URL: `https://aoaxouldrgunihrmzrje.supabase.co`
- Project title shown in dashboard: `pdeadmusic@gmail.com's Project`
- Organisation: `AEOEXPERT`
- Region: West EU (Ireland), `eu-west-1`
- Status: Healthy
- No GitHub repository connected at the time of inspection
- No branches present at the time of inspection
- No migrations or backups were present before the schema was created

The Supabase dashboard was opened through the browser and the initial schema was executed successfully in SQL Editor.

The successful execution returned:

```text
Success. No rows returned
```

No existing tables or content were overwritten. The schema is additive and uses the `insights_` namespace.

---

## 4. Database schema already created

The following objects were created.

### `public.insights_roles`

Stores which authenticated users are allowed to act as `admin` or `editor`.

Columns:

- `user_id uuid primary key references auth.users(id) on delete cascade`
- `role text`, restricted to `admin` or `editor`
- `created_at timestamptz`

No user has been inserted into this table yet because the authenticated user UUID has not been established.

### `public.insights_categories`

Stores editorial categories.

Starter categories inserted:

- `aeo-foundations` — AEO Foundations
- `geo-citation` — GEO Citation
- `schema-tech` — Schema & Tech
- `measurement` — Measurement

### `public.insights_posts`

Stores articles and their editorial state.

Important columns:

- `id`
- `slug`
- `title`
- `kicker`
- `excerpt`
- `body_markdown`
- `category_slug`
- `status`
- `published_at`
- `featured_image_path`
- `seo_title`
- `meta_description`
- `canonical_url`
- `author_name`
- `created_by`
- `reviewed_by`
- `created_at`
- `updated_at`

Allowed statuses:

```text
draft
review
published
archived
```

There is also a database check that prevents a post being marked `published` unless it has a `published_at` value.

### Indexes

Indexes were added for:

- post status and publication date
- category slug

### Functions and trigger

Created:

- `public.insights_has_role(required_role text)` — checks whether the signed-in user has the required role, with admin inheriting editor permissions.
- `public.set_insights_updated_at()` — updates `updated_at` automatically.

Created trigger:

- `set_insights_posts_updated_at` on `public.insights_posts` before update.

---

## 5. Row-level security and intended permissions

Row-level security was enabled on:

- `insights_roles`
- `insights_categories`
- `insights_posts`

### Public readers

Anonymous and authenticated public readers can select only posts where:

```text
status = 'published'
and published_at <= now()
```

This means drafts, reviews and archived articles are not public.

### Editors

Authenticated users with the `editor` role can:

- view insights
- create drafts
- create review submissions
- update unpublished drafts or review items

Editors cannot publish directly under the intended policy.

### Admin

Authenticated users with the `admin` role can manage all insights and categories, including publishing.

### Roles table

Only admins can view or manage role records.

The user's role has not yet been assigned because the correct Supabase Auth UUID is still needed.

Do not put a Supabase service-role key in browser JavaScript. If Hermes needs privileged operations, use a server-side or Edge Function boundary.

---

## 6. Exact SQL that was executed

The following is the schema that was run successfully in Supabase SQL Editor:

```sql
create table if not exists public.insights_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('admin', 'editor')),
  created_at timestamptz not null default now()
);

create table if not exists public.insights_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.insights_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  kicker text,
  excerpt text,
  body_markdown text not null default '',
  category_slug text references public.insights_categories(slug) on update cascade on delete set null,
  status text not null default 'draft' check (status in ('draft', 'review', 'published', 'archived')),
  published_at timestamptz,
  featured_image_path text,
  seo_title text,
  meta_description text,
  canonical_url text,
  author_name text not null default 'AiGENCY Ltd',
  created_by uuid references auth.users(id) on delete set null,
  reviewed_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (status <> 'published' or published_at is not null)
);

create index if not exists insights_posts_status_published_at_idx
  on public.insights_posts (status, published_at desc);

create index if not exists insights_posts_category_slug_idx
  on public.insights_posts (category_slug);

create or replace function public.insights_has_role(required_role text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.insights_roles
    where user_id = auth.uid()
      and (role = required_role or role = 'admin')
  );
$$;

revoke all on function public.insights_has_role(text) from public;
grant execute on function public.insights_has_role(text) to authenticated;

create or replace function public.set_insights_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_insights_posts_updated_at on public.insights_posts;
create trigger set_insights_posts_updated_at
before update on public.insights_posts
for each row execute function public.set_insights_updated_at();

alter table public.insights_roles enable row level security;
alter table public.insights_categories enable row level security;
alter table public.insights_posts enable row level security;

drop policy if exists "Published insights are public" on public.insights_posts;
create policy "Published insights are public"
on public.insights_posts
for select
to anon, authenticated
using (status = 'published' and published_at <= now());

drop policy if exists "Editors can view insights" on public.insights_posts;
create policy "Editors can view insights"
on public.insights_posts
for select
to authenticated
using (public.insights_has_role('editor'));

drop policy if exists "Editors can create draft insights" on public.insights_posts;
create policy "Editors can create draft insights"
on public.insights_posts
for insert
to authenticated
with check (
  public.insights_has_role('editor')
  and status in ('draft', 'review')
);

drop policy if exists "Editors can update unpublished insights" on public.insights_posts;
create policy "Editors can update unpublished insights"
on public.insights_posts
for update
to authenticated
using (
  public.insights_has_role('editor')
  and status in ('draft', 'review')
)
with check (
  public.insights_has_role('editor')
  and status in ('draft', 'review')
);

drop policy if exists "Admins can manage all insights" on public.insights_posts;
create policy "Admins can manage all insights"
on public.insights_posts
for all
to authenticated
using (public.insights_has_role('admin'))
with check (public.insights_has_role('admin'));

drop policy if exists "Published categories are public" on public.insights_categories;
create policy "Published categories are public"
on public.insights_categories
for select
to anon, authenticated
using (true);

drop policy if exists "Admins manage categories" on public.insights_categories;
create policy "Admins manage categories"
on public.insights_categories
for all
to authenticated
using (public.insights_has_role('admin'))
with check (public.insights_has_role('admin'));

drop policy if exists "Admins can view roles" on public.insights_roles;
create policy "Admins can view roles"
on public.insights_roles
for select
to authenticated
using (public.insights_has_role('admin'));

drop policy if exists "Admins can manage roles" on public.insights_roles;
create policy "Admins can manage roles"
on public.insights_roles
for all
to authenticated
using (public.insights_has_role('admin'))
with check (public.insights_has_role('admin'));

insert into public.insights_categories (slug, name, description, sort_order)
values
  ('aeo-foundations', 'AEO Foundations', 'Answer engine optimisation and clear answers.', 10),
  ('geo-citation', 'GEO Citation', 'Generative search visibility and citation signals.', 20),
  ('schema-tech', 'Schema & Tech', 'Structured data, technical clarity and machine-readable websites.', 30),
  ('measurement', 'Measurement', 'Practical ways to understand search and content performance.', 40)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  sort_order = excluded.sort_order;
```

---

## 7. What is currently in the GEO Expert site

The project is a static HTML/CSS site. Its `package.json` contains CSS/build checks, but no Supabase dependency or application backend.

Current package scripts include:

```text
npm run build:css
npm run watch:css
npm run check
```

The Insights index currently includes:

- masthead and “ACTIVE RESEARCH DESK” status badge
- topic navigation
- featured article
- quick abstract sidebar
- latest research stream
- one published AEO article row
- draft placeholders for GEO and Schema
- expandable topic library sections using native `<details>`
- monthly archive accordions
- 3-layer model sidebar
- editorial cadence/sidebar CTA
- RSS, `llms.txt` and `robots.txt` links

The existing article page includes:

- breadcrumb navigation
- hero and executive answer block
- on-page table of contents
- SEO/AEO/GEO comparison cards
- GEO authority layer section
- practical action list
- primary-source links
- next practical step callout

Existing public canonical domain in the HTML is:

```text
https://aeoexpert.uk
```

Existing public routes include:

```text
https://aeoexpert.uk/insights/
https://aeoexpert.uk/insights/what-is-aeo/
https://aeoexpert.uk/insights/rss.xml
```

The site deliberately keeps published content as crawlable static HTML. This should be preserved for SEO/AEO/GEO. A client-only database-rendered article list should not replace the public static article surface unless there is a strong reason and the rendering/crawling consequences are tested.

---

## 8. What has not been built yet

The following work remains:

### Authentication and roles

- Confirm or create the user’s Supabase Auth account.
- Obtain the authenticated user UUID.
- Insert the user into `public.insights_roles` as `admin`.
- Decide whether Hermes gets its own authenticated identity or uses a protected server-side integration.

### Storage

- Create a Supabase Storage bucket for featured images if images are to be managed through the editorial system.
- Add policies so public users can read only approved/published assets, while editors/admins can upload according to the workflow.

### Application connection

- Add the Supabase client to the GEO Expert project.
- Keep the public browser client limited to the publish-safe anon key.
- Never expose a service-role key in static files or browser JavaScript.

### Editorial interface

Build a private admin/editor surface that supports:

- draft list
- create/edit draft
- category selection
- SEO title
- meta description
- canonical URL
- featured image
- status transitions
- private preview
- review notes
- approve/publish action for the admin only

### Static publishing bridge

The preferred SEO-safe publishing design is:

1. Read approved content from Supabase in a build script or server-side function.
2. Generate a static article directory such as `insights/slug/index.html`.
3. Update the Insights index.
4. Update the monthly archive.
5. Update RSS.
6. Update sitemap.
7. Update `llms.txt` / `llms-full.txt` where appropriate.
8. Run HTML/CSS/link checks.
9. Deploy the static site.

This can be triggered manually first, then later through an Edge Function/webhook/CI pipeline.

### Hermes integration

Hermes should be able to:

- create a draft
- update its own draft
- submit a draft for review
- attach research/source references

Hermes should not be able to:

- publish directly
- alter roles
- change categories without permission
- overwrite existing published articles without an admin path
- access a service-role secret from the browser

---

## 9. Recommended next implementation order

Do not jump straight into a large redesign. Use this order:

### Phase 1 — establish identity

1. Check Supabase Authentication users.
2. Identify the user’s Auth UUID.
3. Insert the user as `admin` in `insights_roles`.
4. Test that the authenticated admin can read and manage posts.

### Phase 2 — connect the public site safely

1. Add a small Supabase client module to the GEO Expert project.
2. Use the public anon key only for published reads.
3. Do not alter the current static Insights pages yet.
4. Add a safe test query against published posts.

### Phase 3 — add the private editorial route

1. Add authenticated editor/admin access.
2. Add draft creation and editing.
3. Add role-aware status transitions.
4. Add preview without making drafts public.

### Phase 4 — add the publishing script

1. Fetch approved published content.
2. Render static HTML using the existing visual system.
3. Preserve the accepted editorial design.
4. Update metadata, JSON-LD, RSS, sitemap and llms files.
5. Verify output before deployment.

### Phase 5 — connect Hermes

1. Decide whether Hermes calls a protected API/Edge Function or authenticates as an editor.
2. Add validation for title, slug, body, source links and metadata.
3. Store source provenance and research notes.
4. Create drafts only.
5. Add a clear “ready for human review” state.

---

## 10. Important distinction: what is already complete

### Complete

- Correct GEO Expert project located.
- Correct Supabase project located.
- Initial `insights_` database schema created.
- Starter categories inserted.
- RLS policies created.
- Public published-only read policy created.
- Editor/admin separation defined at database level.

### Not complete

- No Auth role has been assigned yet.
- No Supabase client has been added to the GEO Expert codebase.
- No Storage bucket has been created.
- No private admin/editor screen exists.
- No Hermes API/Edge Function bridge exists.
- No automated static article generation exists.
- No published content has been migrated into Supabase.
- No production deployment has been changed by this database action.

Do not describe the system as “connected” or “live” until the application has been wired, authenticated and tested end to end.

---

## 11. Browser/verification note

The Supabase dashboard showed the project as healthy. The initial SQL execution succeeded.

A later attempt to run a verification query in the same SQL Editor was cancelled because the editor appended text to the existing query instead of replacing it. A destructive-query warning appeared and was cancelled. No second combined query was executed.

Therefore:

- The initial schema execution is confirmed successful by the SQL Editor success state.
- The table list was not relied on as final verification because the dashboard table list did not immediately show the names in the captured DOM.
- Future verification should use a fresh SQL Editor query or the Supabase table UI carefully, clearing the editor before typing.

Do not repeat the accidental append behaviour. Use a fresh SQL editor tab or keyboard-select all before entering a verification query.

---

## 12. Main AiGENCY site context

The main website project is:

```text
/Users/aigencyltd/Desktop/software builds/main website
```

It is a separate static site with the AiGENCY brand, homepage video, Responsible AI/Transparency journey, compliance check and service pages.

The accepted design direction is:

- deep navy
- jade / pale jade
- bronze / muted gold
- amber highlights
- translucent glass
- refined cybernetic / steampunk systems aesthetic
- subtle depth and carefully controlled motion

The user has repeatedly asked not to flatten the design into generic SaaS cards. They also asked that accepted visual work and the homepage video not be disturbed casually.

The main site and GEO Expert site must remain distinct. The presence of similar branding and shared research does not mean their codebases should be merged.

---

## 13. User communication requirements

The user values:

- direct answers
- visible, verified progress
- exact source paths
- clear distinction between finished, partially finished and merely planned
- no permission loops when permission has already been granted
- no pretending that a static mock-up is a live backend
- no drifting into unrelated redesign work

The user has explicitly said they were concerned that the assistant was drifting. The next chat should start from this handoff and stay tightly focused on Supabase/editorial integration.

If a task is stopped, stop edits and browser actions immediately. Do not continue visual experimentation after the user says stop.

---

## 14. Best opening message for the next chat

Use something like:

> I’ve read the handoff. The correct target is `/Users/aigencyltd/Desktop/software builds/GEO Expert`, specifically its existing static `/insights/` site. Supabase project `aoaxouldrgunihrmzrje` already has the initial `insights_posts`, `insights_categories` and `insights_roles` schema with RLS. The next safe step is to identify the Supabase Auth user, assign the user `admin`, then connect the GEO Expert project without changing the public static article design. I will report each completed step and keep Hermes draft-only until human review is working.

Then proceed with Phase 1 only unless the user explicitly asks for more.

---

## 15. Immediate next action

The next action is **not** to ask where the project is. It is known.

The next action is:

1. Open Supabase Authentication → Users.
2. Identify the user’s account and UUID.
3. Insert that UUID into `public.insights_roles` with role `admin`.
4. Verify the admin role safely.
5. Inspect the GEO Expert project before editing.
6. Add the minimal client/configuration needed for published reads and private editorial work.

No new visual redesign is requested by this handoff.
