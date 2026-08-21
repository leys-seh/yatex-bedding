-- YATEX Başlık import
-- Run this in the connected Supabase project's SQL Editor.
-- Category-qualified slugs avoid overwriting existing Yatak and Baza products
-- with the same source model names.

begin;

insert into public.categories (slug, label)
values ('baslik', 'Başlık')
on conflict (slug) do update set label = excluded.label;

insert into public.products (slug, name, description, category, images, featured, material, dimensions)
values
  ('acelya-baslik', 'açelya', null, 'baslik', array['/assets/products/acelya-baslik/1.jpg'], false, null, null),
  ('ahenk-baslik', 'ahenk', null, 'baslik', array['/assets/products/ahenk-baslik/1.jpg'], false, null, null),
  ('ares-baslik', 'ares', null, 'baslik', array['/assets/products/ares-baslik/1.jpg'], false, null, null),
  ('bubble-baslik', 'bubble', null, 'baslik', array['/assets/products/bubble-baslik/1.jpg'], false, null, null),
  ('hermes-baslik', 'hermes', null, 'baslik', array['/assets/products/hermes-baslik/1.jpg'], false, null, null),
  ('hipnoz-baslik', 'hipnoz', null, 'baslik', array['/assets/products/hipnoz-baslik/1.jpg'], false, null, null),
  ('milas-baslik', 'milas', null, 'baslik', array['/assets/products/milas-baslik/1.jpg'], false, null, null),
  ('sedir-baslik', 'sedir', null, 'baslik', array['/assets/products/sedir-baslik/1.jpg'], false, null, null),
  ('sima-baslik', 'sima', null, 'baslik', array['/assets/products/sima-baslik/1.jpg'], false, null, null),
  ('yonca-baslik', 'yonca', null, 'baslik', array['/assets/products/yonca-baslik/1.jpg'], false, null, null)
on conflict (slug) do update
set
  name = excluded.name,
  category = excluded.category,
  images = excluded.images;

commit;
