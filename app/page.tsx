import { getAllProducts } from "@/lib/products";
import Hero from "@/components/Hero";
import CatalogSection from "@/components/CatalogSection";
import FeaturedModelsSection from "@/components/FeaturedModelsSection";
import QualitySection from "@/components/QualitySection";
import HomeContactSection from "@/components/HomeContactSection";
import AboutScrollAnimation from "@/components/AboutScrollAnimation";



export const revalidate = 3600;

export default async function HomePage() {
  const products = await getAllProducts();
  const productsWithImages = products.filter((product) =>
    product.images?.some(
      (image) => typeof image === "string" && image.trim().length > 0,
    ),
  );
  // Prefer products selected as featured when they have an image. The current
  // catalogue has no such records, so its real-image products remain visible.
  const carouselProducts = productsWithImages.filter((product) => product.featured);
  const visibleProducts =
    carouselProducts.length > 0 ? carouselProducts : productsWithImages;
  // A set contains at least six rendered cards, keeping wide screens covered
  // even when the source collection is small. This never changes product data.
  const marqueeProducts = Array.from(
    {
      length:
        visibleProducts.length > 0
          ? Math.max(1, Math.ceil(6 / visibleProducts.length))
          : 0,
    },
    () => visibleProducts,
  ).flat();

  return (
    <>
      <Hero />

      <CatalogSection />

      {/* Featured Products */}
      {visibleProducts.length > 0 && (
        <FeaturedModelsSection marqueeProducts={marqueeProducts} />
      )}

      {/* About / Brand Section */}
      <AboutScrollAnimation />

      <QualitySection />

      <HomeContactSection />
    </>
  );
}
