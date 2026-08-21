import { supabase, Product } from "./supabase";

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Ürünler alınamadı:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Öne çıkan ürünler alınamadı:", error.message);
    return [];
  }
  return data ?? [];
}

export type ProductCategorySlug =
  | "yatak-seti"
  | "yatak"
  | "baza"
  | "baslik";

export const PRODUCT_CATEGORIES = [
  { slug: "yatak-seti", label: "Yatak Seti" },
  { slug: "yatak", label: "Yatak" },
  { slug: "baza", label: "Baza" },
  { slug: "baslik", label: "Başlık" },
] as const satisfies ReadonlyArray<{
  slug: ProductCategorySlug;
  label: string;
}>;

export function isProductCategorySlug(
  category: string | undefined,
): category is ProductCategorySlug {
  return PRODUCT_CATEGORIES.some((item) => item.slug === category);
}

export async function getProductsByCategory(
  category: ProductCategorySlug,
): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Kategori ürünleri alınamadı:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Ürün bulunamadı:", error.message);
    return null;
  }
  return data;
}
