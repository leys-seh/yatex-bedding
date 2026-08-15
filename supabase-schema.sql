-- Yatex Bedding - Comprehensive Supabase Schema
-- Run this entire script in Supabase Dashboard -> SQL Editor

-- ============================================
-- 1. CATEGORIES
-- ============================================
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  label text not null,
  created_at timestamp with time zone default now()
);

alter table public.categories enable row level security;

drop policy if exists "Herkes kategorileri görebilir" on public.categories;
create policy "Herkes kategorileri görebilir"
  on public.categories for select
  using (true);

-- Seed categories
insert into public.categories (slug, label)
values
  ('yatak-odasi', 'Bed'),
  ('oturma-grubu', 'Seating'),
  ('yemek-odasi', 'Dining'),
  ('genc-odasi', 'Youth'),
  ('ofis', 'Office')
on conflict (slug) do nothing;

-- ============================================
-- 2. PRODUCTS
-- ============================================
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  category text not null,
  images text[] not null default '{}',
  featured boolean not null default false,
  material text,
  dimensions text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Indexes for faster queries
create index if not exists idx_products_category on public.products(category);
create index if not exists idx_products_featured on public.products(featured);
create index if not exists idx_products_slug on public.products(slug);
create index if not exists idx_products_created_at on public.products(created_at desc);

-- Foreign key to categories
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE table_name = 'products' 
    AND constraint_name = 'fk_products_category'
  ) THEN
    ALTER TABLE public.products
      ADD CONSTRAINT fk_products_category
      FOREIGN KEY (category)
      REFERENCES public.categories(slug)
      ON UPDATE CASCADE
      ON DELETE RESTRICT;
  END IF;
END $$;

-- Trigger to auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists on_products_updated_at on public.products;
create trigger on_products_updated_at
  before update on public.products
  for each row execute procedure public.handle_updated_at();

alter table public.products enable row level security;

drop policy if exists "Herkes ürünleri görebilir" on public.products;
create policy "Herkes ürünleri görebilir"
  on public.products for select
  using (true);

-- Seed products (use local image paths)
insert into public.products (slug, name, description, category, images, featured, material, dimensions)
values
  (
    'osmanli-yatak-odasi-takimi',
    'Osmanlı Yatak Odası Takımı',
    'El oyması detaylarla süslenmiş, ceviz ağacından üretilmiş klasik yatak odası takımı.',
    'yatak-odasi',
    array['/assets/products/osmanliyatakodasi.webp'],
    true,
    'Ceviz Ağacı',
    '180x200 cm'
  ),
  (
    'saray-oturma-grubu',
    'Saray Oturma Grubu',
    'Kadife kumaş ve altın varak detaylarla zarafeti bir araya getiren oturma grubu.',
    'oturma-grubu',
    array['/assets/products/sarayyatakodasi.webp'],
    true,
    'Kadife / Masif Ahşap',
    '3+2+1 Takım'
  ),
  (
    'istanbul-yatak-odasi',
    'İstanbul Yatak Odası',
    'Modern tasarım ve şehir havasını yansıtan yatak odası koleksiyonu.',
    'yatak-odasi',
    array['/assets/products/istanbul-yatak-odasi.webp'],
    false,
    'Melamin / Mobilya Levhası',
    '160x200 cm'
  ),
  (
    'kosovo-yatak-odasi',
    'Kosovo Yatak Odası',
    'Sade ve zarif detaylarla öne çıkan yatak odası seti.',
    'yatak-odasi',
    array['/assets/products/kosovo-yatak-odasi.webp'],
    false,
    'MDF / Lazer kapaklı',
    '180x200 cm'
  )
on conflict (slug) do nothing;

-- ============================================
-- 3. INQUIRIES (Contact Form)
-- ============================================
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  status text not null default 'new',
  created_at timestamp with time zone default now()
);

create index if not exists idx_inquiries_status on public.inquiries(status);
create index if not exists idx_inquiries_created_at on public.inquiries(created_at desc);
create index if not exists idx_inquiries_email on public.inquiries(email);

alter table public.inquiries enable row level security;

drop policy if exists "Herkes inquiry gönderebilir" on public.inquiries;
create policy "Herkes inquiry gönderebilir"
  on public.inquiries for insert
  with check (true);

drop policy if exists "Herkes kendi inquiry'sini görebilir" on public.inquiries;
create policy "Herkes kendi inquiry'sini görebilir"
  on public.inquiries for select
  using (false);

-- ============================================
-- 4. STORAGE BUCKET (Optional - for Supabase Storage)
-- ============================================
-- Run this in Supabase Dashboard -> Storage if you want to use Supabase Storage instead of local public/ folder
-- insert into storage.buckets (id, name, public) values ('products', 'products', true);

-- ============================================
-- 5. REFRESH SCHEMA CACHE
-- ============================================
-- Run this last to make sure PostgREST picks up all changes
NOTIFY pgrst, 'reload schema';
