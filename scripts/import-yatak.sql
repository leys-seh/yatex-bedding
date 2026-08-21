-- YATEX Yatak import
-- Run this in the connected Supabase project's SQL Editor.
-- It only inserts or updates the 11 Yatak products below and does not remove
-- or modify any Yatak Seti rows.

begin;

insert into public.categories (slug, label)
values ('yatak', 'Yatak')
on conflict (slug) do update set label = excluded.label;

insert into public.products (slug, name, description, category, images, featured, material, dimensions)
values
  ('ahenk', 'Ahenk', null, 'yatak', array['/assets/products/ahenk/1.jpg'], false, null, null),
  ('alara', 'Alara', null, 'yatak', array['/assets/products/alara/1.jpg'], false, null, null),
  ('as', 'AS', null, 'yatak', array['/assets/products/as/1.jpg'], false, null, null),
  ('bubble', 'Bubble', null, 'yatak', array['/assets/products/bubble/1.jpg'], false, null, null),
  ('hipnoz', 'Hipnoz', null, 'yatak', array['/assets/products/hipnoz/1.jpg'], false, null, null),
  ('konfor', 'Konfor', null, 'yatak', array['/assets/products/konfor/1.jpg'], false, null, null),
  ('milas', 'Milas', null, 'yatak', array['/assets/products/milas/1.jpg'], false, null, null),
  ('neva', 'Neva', null, 'yatak', array['/assets/products/neva/1.jpg'], false, null, null),
  ('sedir', 'Sedir', null, 'yatak', array['/assets/products/sedir/1.jpg'], false, null, null),
  ('sima', 'Sima', null, 'yatak', array['/assets/products/sima/1.jpg'], false, null, null),
  ('yonca', 'Yonca', null, 'yatak', array['/assets/products/yonca/1.jpg'], false, null, null)
on conflict (slug) do update
set
  name = excluded.name,
  category = excluded.category,
  images = excluded.images;

commit;
