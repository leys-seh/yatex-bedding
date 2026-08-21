import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string;

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn(
    "Supabase ortam değişkenleri eksik. Lütfen .env.local dosyasını kontrol edin."
  );
}

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  category: string;
  images: string[];
  featured: boolean;
  material: string | null;
  dimensions: string | null;
  created_at: string;
};  