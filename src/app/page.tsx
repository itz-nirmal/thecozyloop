import { Header } from "~/app/_components/landing/header";
import { HeroBanner } from "~/app/_components/landing/hero-banner";
import { CatalogSection } from "~/app/_components/landing/catalog-section";
import { FeaturedProducts } from "~/app/_components/landing/featured-products";
import { UGCVideos } from "~/app/_components/landing/ugc-videos";
import { UserReviews } from "~/app/_components/landing/user-reviews";
import { Footer } from "~/app/_components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <CatalogSection />
      <FeaturedProducts />
      <UGCVideos />
      <UserReviews />
      <Footer />
    </div>
  );
}
