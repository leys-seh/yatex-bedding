-- Updates only the existing Ares Başlık product image path.
update public.products
set images = ARRAY['/assets/products/ares-baslik/ares-new.jpg']::text[]
where slug = 'ares-baslik';

-- Verify the one updated row.
select slug, name, category, images
from public.products
where slug = 'ares-baslik';
