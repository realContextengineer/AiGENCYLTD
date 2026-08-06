-- Public read-only cover images for published AiGENCY Insights.
-- Writes remain server-side through the upload-insight-image Edge Function.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'insights-covers',
  'insights-covers',
  true,
  52428800,
  array['image/png', 'image/jpeg', 'image/webp']::text[]
)
on conflict (id) do update set
  name = excluded.name,
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
