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

export async function getProductsByCategory(category: string): Promise<Product[]> {
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

export const CATEGORIES = [
  { slug: "yatak-odasi", label: "Bed" },
  { slug: "oturma-grubu", label: "Seating" },
  { slug: "yemek-odasi", label: "Dining" },
  { slug: "genc-odasi", label: "Youth" },
  { slug: "ofis", label: "Office" },
];
