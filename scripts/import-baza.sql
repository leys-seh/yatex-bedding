-- YATEX Baza import
-- Run this in the connected Supabase project's SQL Editor.
-- It only inserts or updates the 11 Baza products below and does not remove
-- or modify existing Yatak Seti or Yatak rows.

begin;

insert into public.categories (slug, label)
values ('baza', 'Baza')
on conflict (slug) do update set label = excluded.label;

insert into public.products (slug, name, description, category, images, featured, material, dimensions)
values
  ('acelya-baza', 'açelya baza', null, 'baza', array['/assets/products/acelya-baza/1.jpg'], false, null, null),
  ('ahenk-baza', 'ahenk baza', null, 'baza', array['/assets/products/ahenk-baza/1.jpg'], false, null, null),
  ('ares-baza', 'ares baza', null, 'baza', array['/assets/products/ares-baza/1.jpg'], false, null, null),
  ('bubble-baza', 'bubble baza', null, 'baza', array['/assets/products/bubble-baza/1.jpg'], false, null, null),
  ('hermes', 'hermes', null, 'baza', array['/assets/products/hermes/1.jpg'], false, null, null),
  ('hipnoz-baza', 'hipnoz baza', null, 'baza', array['/assets/products/hipnoz-baza/1.jpg'], false, null, null),
  ('konfor-baza', 'konfor baza', null, 'baza', array['/assets/products/konfor-baza/1.jpg'], false, null, null),
  ('milas-baza', 'milas baza', null, 'baza', array['/assets/products/milas-baza/1.jpg'], false, null, null),
  ('neva-baza', 'neva baza', null, 'baza', array['/assets/products/neva-baza/1.jpg'], false, null, null),
  ('sedir-baza', 'sedir baza', null, 'baza', array['/assets/products/sedir-baza/1.jpg'], false, null, null),
  ('sima-baza', 'sima baza', null, 'baza', array['/assets/products/sima-baza/1.jpg'], false, null, null)
on conflict (slug) do update
set
  name = excluded.name,
  category = excluded.category,
  images = excluded.images;

commit;
