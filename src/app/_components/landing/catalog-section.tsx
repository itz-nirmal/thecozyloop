"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

// Import Catalog images
import Bag01 from "../../../../assets/Catalog/Bag01.jpg";
import Bag02 from "../../../../assets/Catalog/Bag02.jpg";
import Bag03 from "../../../../assets/Catalog/Bag03.jpg";
import Bookmark01 from "../../../../assets/Catalog/Bookmark01.jpg";
import Bookmark02 from "../../../../assets/Catalog/Bookmark02.jpg";
import Bookmark03 from "../../../../assets/Catalog/Bookmark03.jpg";
import Bouquet01 from "../../../../assets/Catalog/Bouquet01.jpg";
import Bouquet02 from "../../../../assets/Catalog/Bouquet02.jpg";
import Bouquet03 from "../../../../assets/Catalog/Bouquet03.jpg";
import Flower01 from "../../../../assets/Catalog/Flower01.jpg";
import Flower02 from "../../../../assets/Catalog/Flower02.jpg";
import Flower03 from "../../../../assets/Catalog/Flower03.jpg";
import Gift01 from "../../../../assets/Catalog/Gift01.jpg";
import Gift02 from "../../../../assets/Catalog/Gift02.jpg";
import Gift03 from "../../../../assets/Catalog/Gift03.jpg";
import Keychain01 from "../../../../assets/Catalog/Keychain01.jpg";
import Keychain02 from "../../../../assets/Catalog/Keychain02.jpg";
import Keychain03 from "../../../../assets/Catalog/Keychain03.jpg";
import SoftToy01 from "../../../../assets/Catalog/Soft_toy01.jpg";
import SoftToy02 from "../../../../assets/Catalog/Soft_toy02.jpg";
import SoftToy03 from "../../../../assets/Catalog/Soft_toy03.jpg";

const categories = [
  {
    id: "keychains",
    name: "Keychains",
    description: "Personalized & custom keychains",
    color: "bg-amber-100 text-amber-600",
    link: "/catalog?category=keychains",
    images: [Keychain01, Keychain02, Keychain03] as StaticImageData[],
  },
  {
    id: "flowers",
    name: "Flowers",
    description: "Handmade flower arrangements",
    color: "bg-rose-100 text-rose-600",
    link: "/catalog?category=flowers",
    images: [Flower01, Flower02, Flower03] as StaticImageData[],
  },
  {
    id: "bouquets",
    name: "Bouquets",
    description: "Gift bouquets for all occasions",
    color: "bg-pink-100 text-pink-600",
    link: "/catalog?category=bouquets",
    images: [Bouquet01, Bouquet02, Bouquet03] as StaticImageData[],
  },
  {
    id: "bags",
    name: "Bags",
    description: "Handcrafted bags & pouches",
    color: "bg-blue-100 text-blue-600",
    link: "/catalog?category=bags",
    images: [Bag01, Bag02, Bag03] as StaticImageData[],
  },
  {
    id: "bookmarks",
    name: "Bookmarks",
    description: "Artisan crafted bookmarks",
    color: "bg-indigo-100 text-indigo-600",
    link: "/catalog?category=bookmarks",
    images: [Bookmark01, Bookmark02, Bookmark03] as StaticImageData[],
  },
  {
    id: "soft-toys",
    name: "Soft Toys",
    description: "Plush toys & stuffed animals",
    color: "bg-orange-100 text-orange-600",
    link: "/catalog?category=soft-toys",
    images: [SoftToy01, SoftToy02, SoftToy03] as StaticImageData[],
  },
  {
    id: "sets",
    name: "Gift Sets",
    description: "Curated gift collections",
    color: "bg-emerald-100 text-emerald-600",
    link: "/catalog?category=sets",
    images: [Gift01, Gift02, Gift03] as StaticImageData[],
  },
];

function ImageCarousel({ images }: { images: StaticImageData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-square rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
      {/* Render all images with opacity transition */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-500 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={img}
            alt={`Product ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, (max-width: 1024px) 30vw, (max-width: 1280px) 25vw, 20vw"
            priority={idx === 0}
          />
        </div>
      ))}
      
      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              idx === currentIndex ? "bg-white w-3" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ 
  category, 
  onPause, 
  onResume 
}: { 
  category: typeof categories[0]; 
  onPause?: () => void; 
  onResume?: () => void; 
}) {
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.stopPropagation();
    onPause?.();
  }, [onPause]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    e.stopPropagation();
    onResume?.();
  }, [onResume]);

  return (
    <Link
      href={category.link}
      className="group bg-white rounded-2xl p-4 sm:p-5 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 2xl:w-64 flex flex-col items-center text-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`w-full aspect-square rounded-xl flex items-center justify-center mb-2 sm:mb-3 overflow-hidden`}
      >
        <ImageCarousel images={category.images} />
      </div>
      <h3 className="font-semibold font-[family-name:var(--font-duplet)] text-[#592720] mb-1 group-hover:text-rose-500 transition-colors text-sm sm:text-base">
        {category.name}
      </h3>
      <p className="text-xs sm:text-sm text-black mb-2">
        {category.description}
      </p>
      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all" />
    </Link>
  );
}

export function CatalogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle card pause - pause animation when touching a card
  const handleCardPause = useCallback(() => {
    setIsPaused(true);
    // Clear any existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  }, []);

  // Handle card resume - resume animation after delay when releasing a card
  const handleCardResume = useCallback(() => {
    // Resume animation after 3 seconds of no interaction
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  // Create content for seamless infinite scroll - 2 complete sets for 50% scroll
  const allCards = [
    ...categories.map(c => ({ ...c, key: `a-${c.id}` })),
    ...categories.map(c => ({ ...c, key: `b-${c.id}` })),
  ];

  return (
    <section className="py-10 bg-[#592720] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Explore Our Collection
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover unique handmade products crafted with love and attention to detail
          </p>
        </div>

        {/* Horizontal Scrolling Categories */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Scrolling container - touch events moved to individual cards */}
          <div 
            className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8"
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`flex gap-4 ml-4 scroll-track ${isPaused ? 'scroll-paused' : ''}`}
            >
              {allCards.map((item) => (
                <CategoryCard 
                  key={item.key} 
                  category={item}
                  onPause={handleCardPause}
                  onResume={handleCardResume}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 px-4 sm:px-6 lg:px-8">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition-colors group"
          >
            View Full Catalog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* CSS for infinite scroll and touch scrolling */}
      <style jsx>{`
        .scroll-track {
          display: flex;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }
        
        .scroll-track.scroll-paused {
          animation-play-state: paused;
        }
        
        .scroll-track:hover {
          animation-play-state: paused;
        }
        
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          -webkit-overflow-scrolling: touch;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
