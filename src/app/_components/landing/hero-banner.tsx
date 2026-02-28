"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Import Desktop Banners
import DesktopKeyChain from "../../../../assets/Banner/Desktop/KeyChain.png";
import DesktopFlower from "../../../../assets/Banner/Desktop/Flower.png";
import DesktopSweater from "../../../../assets/Banner/Desktop/Sweater.png";

// Import Mobile Banners
import MobileKeyChain from "../../../../assets/Banner/Mobile/KeyChain.png";
import MobileFlower from "../../../../assets/Banner/Mobile/Flower.png";
import MobileSweater from "../../../../assets/Banner/Mobile/Sweater.png";

const banners = [
  {
    id: 1,
    title: "Handmade Keychains",
    subtitle: "Up to 30% Off",
    description: "Unique personalized keychains crafted with love",
    cta: "Shop Now",
    link: "/catalog?category=keychains",
    desktopImage: DesktopKeyChain,
    mobileImage: MobileKeyChain,
  },
  {
    id: 2,
    title: "Fresh Flower Bouquets",
    subtitle: "New Arrivals",
    description: "Beautiful handmade flower arrangements for every occasion",
    cta: "Explore Collection",
    link: "/catalog?category=flowers",
    desktopImage: DesktopFlower,
    mobileImage: MobileFlower,
  },
  {
    id: 3,
    title: "Cozy Sweaters",
    subtitle: "Winter Collection",
    description: "Warm and stylish handmade sweaters for the season",
    cta: "Browse Now",
    link: "/catalog?category=sweaters",
    desktopImage: DesktopSweater,
    mobileImage: MobileSweater,
  },
];

export function HeroBanner() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px]">
              {/* Desktop Image - visible on sm (640px) and above */}
              <Image
                src={banner.desktopImage}
                alt={banner.title}
                fill
                className="object-cover hidden sm:block"
                priority={banner.id === 1}
              />
              {/* Mobile Image - visible on xs and sm (below 640px) */}
              <Image
                src={banner.mobileImage}
                alt={banner.title}
                fill
                className="object-cover sm:hidden"
                priority={banner.id === 1}
              />
              {/* No overlay - showing full banner graphics */}

              {/* Content */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full h-full flex items-center">
                <div className="max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                  <p className="text-white/90 text-xs sm:text-sm md:text-base uppercase tracking-wider mb-2">
                    {banner.subtitle}
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8">
                    {banner.description}
                  </p>
                  <Link
                    href={banner.link}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 bg-white text-rose-500 rounded-full font-semibold hover:bg-rose-50 transition-colors group text-sm sm:text-base"
                  >
                    {banner.cta}
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5 !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
}
