"use client";

import { Play } from "lucide-react";

const ugcVideos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
    title: "Unboxing Love - Customer Reaction",
    author: "@sarah_creates",
    views: "12.5K",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop",
    title: "Gift Box Opening Experience",
    author: "@giftlover",
    views: "8.2K",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=400&fit=crop",
    title: "Beautiful Bouquet Review",
    author: "@flower_power",
    views: "15.1K",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop",
    title: "Custom Keychain Unboxing",
    author: "@unbox_daily",
    views: "9.8K",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&h=400&fit=crop",
    title: "Anniversary Surprise Reaction",
    author: "@couple_goals",
    views: "22.3K",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
    title: "Crystal Keychain Collection",
    author: "@jewelry_love",
    views: "11.7K",
  },
];

export function UGCVideos() {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-[#bc4749]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#FDF0D5] mb-3 sm:mb-4">
            Customer Videos
          </h2>
          <p className="text-[#F8EDEB] max-w-2xl mx-auto text-sm sm:text-base">
            See what our customers are creating and sharing with their loved ones
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 justify-center">
          {ugcVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-rose-500 ml-0.5 sm:ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 px-2 py-0.5 sm:py-1 bg-black/70 text-white text-xs rounded">
                  0:45
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-3 sm:mt-4">
                <h3 className="font-semibold text-[#1D3557] mb-1 group-hover:text-[#FDF0D5] transition-colors line-clamp-1 text-sm sm:text-base">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#F1FAEE]">
                  <span>{video.author}</span>
                  <span>•</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
