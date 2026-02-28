"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Star, ArrowRight } from "lucide-react";

// Import Catalog images
import Keychain01 from "../../../../assets/Catalog/Keychain01.jpg";
import Flower01 from "../../../../assets/Catalog/Flower01.jpg";
import Bouquet01 from "../../../../assets/Catalog/Bouquet01.jpg";
import Bag01 from "../../../../assets/Catalog/Bag01.jpg";
import Bookmark01 from "../../../../assets/Catalog/Bookmark01.jpg";
import SoftToy01 from "../../../../assets/Catalog/Soft_toy01.jpg";
import Gift01 from "../../../../assets/Catalog/Gift01.jpg";

type BadgeType = "new" | "high-demand" | "trending" | "most-demand" | "new-stock";

const featuredProducts = [
  {
    id: 1,
    name: "Custom Rose Gold Keychain",
    description: "Personalized brass keychain with elegant rose gold plating",
    price: 249,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    image: Keychain01,
    category: "Keychains",
    badge: "high-demand" as BadgeType,
  },
  {
    id: 2,
    name: "Fresh Rose Bouquet",
    description: "Handcrafted bouquet with premium red roses",
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviews: 89,
    image: Bouquet01,
    category: "Bouquets",
    badge: "new" as BadgeType,
  },
  {
    id: 3,
    name: "Handmade Silk Flower Arrangement",
    description: "Everlasting silk flower arrangement for home decor",
    price: 599,
    originalPrice: 749,
    rating: 4.8,
    reviews: 201,
    image: Flower01,
    category: "Flowers",
    badge: "trending" as BadgeType,
  },
  {
    id: 4,
    name: "Handcrafted Cotton Drawstring Bag",
    description: "Eco-friendly cotton pouch for gifts and storage",
    price: 199,
    originalPrice: 299,
    rating: 4.7,
    reviews: 156,
    image: Bag01,
    category: "Bags",
    badge: "most-demand" as BadgeType,
  },
  {
    id: 5,
    name: "Artisan Leather Bookmark",
    description: "Handcrafted leather bookmark with floral embossing",
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviews: 78,
    image: Bookmark01,
    category: "Bookmarks",
    badge: "new-stock" as BadgeType,
  },
  {
    id: 6,
    name: "Cute Teddy Bear Soft Toy",
    description: "Premium quality plush teddy bear for gifting",
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviews: 234,
    image: SoftToy01,
    category: "Soft Toys",
    badge: "trending" as BadgeType,
  },
  {
    id: 7,
    name: "Premium Gift Box Set",
    description: "Curated collection of handmade gifts for loved ones",
    price: 1299,
    originalPrice: 1599,
    rating: 5.0,
    reviews: 67,
    image: Gift01,
    category: "Gift Sets",
    badge: "new" as BadgeType,
  },
];

const getBadgeStyle = (badge: BadgeType) => {
  switch (badge) {
    case "new":
      return { bg: "bg-rose-500", text: "New" };
    case "high-demand":
      return { bg: "bg-orange-500", text: "High Demand" };
    case "trending":
      return { bg: "bg-purple-500", text: "Trending" };
    case "most-demand":
      return { bg: "bg-emerald-500", text: "Most Demand" };
    case "new-stock":
      return { bg: "bg-blue-500", text: "New Stock" };
    default:
      return { bg: "bg-gray-800", text: "Sale" };
  }
};

export function FeaturedProducts() {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-[#FFCBA4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Handpicked favorites from our collection - loved by customers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center">
          {featuredProducts.map((product) => {
            const badgeStyle = getBadgeStyle(product.badge);
            const discount = product.originalPrice > product.price
              ? Math.round((1 - product.price / product.originalPrice) * 100)
              : 0;

            return (
              <div
                key={product.id}
                className="group bg-white border border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <span className={`px-2 sm:px-3 py-1 ${badgeStyle.bg} text-white text-xs font-semibold rounded-full`}>
                      {badgeStyle.text}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      aria-label="Add to wishlist"
                      className="p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors"
                    >
                      <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                    </button>
                    <button
                      aria-label="Add to cart"
                      className="p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors"
                    >
                      <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4">
                  {/* Category */}
                  <p className="text-xs text-rose-500 font-medium uppercase tracking-wide mb-1">
                    {product.category}
                  </p>
                  
                  {/* Name */}
                  <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1 group-hover:text-rose-500 transition-colors text-sm sm:text-base">
                    {product.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-500 mb-2 sm:mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2 sm:mb-3">
                    <Star className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{product.rating}</span>
                    <span className="text-xs sm:text-sm text-gray-500">({product.reviews})</span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg font-bold text-gray-800">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs sm:text-sm text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                    {discount > 0 && (
                      <span className="text-xs sm:text-sm font-medium text-rose-500">
                        {discount}% OFF
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition-colors group text-sm sm:text-base"
          >
            View All Products
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
