-- YATEX Yatak Seti import
-- Run this once in the connected Supabase project's SQL Editor.
-- It removes only the four legacy demo products, keeps the product category
-- architecture intact, and imports the 12 supplied Yatak Seti products.

begin;

delete from public.products
where slug in (
  'istanbul-yatak-odasi',
  'kosovo-yatak-odasi',
  'osmanli-yatak-odasi-takimi',
  'saray-oturma-grubu'
);

insert into public.categories (slug, label)
values ('yatak-seti', 'Yatak Seti')
on conflict (slug) do update set label = excluded.label;

insert into public.products (slug, name, description, category, images, featured, material, dimensions)
values
  (
    'acelya-set',
    'açelya set',
    null,
    'yatak-seti',
    array(select format('/assets/products/acelya-set/%s.jpg', image_number) from generate_series(1, 10) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'ahenk-set',
    'ahenk set',
    null,
    'yatak-seti',
    array(select format('/assets/products/ahenk-set/%s.jpg', image_number) from generate_series(1, 11) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'ares-set',
    'ares set',
    null,
    'yatak-seti',
    array(select format('/assets/products/ares-set/%s.jpg', image_number) from generate_series(1, 10) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'bubble-set',
    'bubble set',
    null,
    'yatak-seti',
    array(select format('/assets/products/bubble-set/%s.jpg', image_number) from generate_series(1, 14) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'hermes-set',
    'hermes set',
    null,
    'yatak-seti',
    array(select format('/assets/products/hermes-set/%s.jpg', image_number) from generate_series(1, 11) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'hipnoz-set',
    'hipnoz set',
    null,
    'yatak-seti',
    array(select format('/assets/products/hipnoz-set/%s.jpg', image_number) from generate_series(1, 7) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'konfor-set',
    'konfor set',
    null,
    'yatak-seti',
    array(select format('/assets/products/konfor-set/%s.jpg', image_number) from generate_series(1, 9) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'lidya-set',
    'lidya set',
    null,
    'yatak-seti',
    array(select format('/assets/products/lidya-set/%s.jpg', image_number) from generate_series(1, 8) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'milas-set',
    'milas set',
    null,
    'yatak-seti',
    array(select format('/assets/products/milas-set/%s.jpg', image_number) from generate_series(1, 11) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'neva-set',
    'neva set',
    null,
    'yatak-seti',
    array[
      '/assets/products/neva-set/1.jpg',
      '/assets/products/neva-set/2.jpg',
      '/assets/products/neva-set/3.jpg',
      '/assets/products/neva-set/4.jpg',
      '/assets/products/neva-set/5.jpg',
      '/assets/products/neva-set/6.jpg',
      '/assets/products/neva-set/7.jpg',
      '/assets/products/neva-set/8.jpg',
      '/assets/products/neva-set/10.jpg',
      '/assets/products/neva-set/11.jpg',
      '/assets/products/neva-set/12.jpg',
      '/assets/products/neva-set/13.jpg'
    ],
    false,
    null,
    null
  ),
  (
    'sedir-set',
    'sedir set',
    null,
    'yatak-seti',
    array(select format('/assets/products/sedir-set/%s.jpg', image_number) from generate_series(1, 7) as series(image_number)),
    false,
    null,
    null
  ),
  (
    'sima-set',
    'sima set',
    null,
    'yatak-seti',
    array(select format('/assets/products/sima-set/%s.jpg', image_number) from generate_series(1, 10) as series(image_number)),
    false,
    null,
    null
  )
on conflict (slug) do update
set images = excluded.images;

commit;
