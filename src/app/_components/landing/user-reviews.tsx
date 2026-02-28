"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment: "Absolutely loved the bouquet I ordered for my anniversary! The flowers were fresh and beautifully arranged. The delivery was on time and the packaging was exquisite. Will definitely order again!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    productImage: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=100&h=100&fit=crop",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi, NCR",
    rating: 5,
    comment: "Ordered a personalized keychain for my girlfriend and she absolutely loved it! The quality is amazing and the customization was perfect. Great customer service too!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    productImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&h=100&fit=crop",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Anjali Patel",
    location: "Bangalore, Karnataka",
    rating: 5,
    comment: "The gift box set I ordered was beyond my expectations! Every item was carefully packed and the quality was superb. Perfect for any occasion.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    productImage: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=100&h=100&fit=crop",
    date: "3 days ago",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    rating: 4,
    comment: "Great experience overall! The bouquet was fresh and the delivery was smooth. Would have loved a little more variety in the color options, but the quality made up for it.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    productImage: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=100&h=100&fit=crop",
    date: "5 days ago",
  },
  {
    id: 5,
    name: "Meera Nair",
    location: "Kochi, Kerala",
    rating: 5,
    comment: "I've ordered multiple times from The Cozy Loop and every time it's been perfect! Their attention to detail and packaging is commendable. Highly recommended!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    productImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100&h=100&fit=crop",
    date: "1 day ago",
  },
  // Additional reviews for smooth infinite scroll
  {
    id: 6,
    name: "Arjun Kapoor",
    location: "Hyderabad, Telangana",
    rating: 5,
    comment: "The personalized mug I ordered arrived perfectly! The print quality was excellent and it was delivered well before the expected date. Great service!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    productImage: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=100&h=100&fit=crop",
    date: "4 days ago",
  },
  {
    id: 7,
    name: "Sofia Rahman",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    comment: "Ordered a surprise gift hamper for my mother's birthday. She was thrilled! The presentation was beautiful and everything was of premium quality.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    productImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=100&h=100&fit=crop",
    date: "1 week ago",
  },
  {
    id: 8,
    name: "Karthik Iyer",
    location: "Pune, Maharashtra",
    rating: 4,
    comment: "Great selection of gifts! The soft toy I bought was incredibly soft and cuddly. My niece loved it. Will definitely shop here again.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    productImage: "https://images.unsplash.com/photo-1555445054-d166d1487c67?w=100&h=100&fit=crop",
    date: "3 days ago",
  },
];

export function UserReviews() {
  const swiperRef = useRef<SwiperRef>(null);

  const goNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-[#F5EFE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Real reviews from our happy customers across India
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 flex justify-between pointer-events-none">
          <button 
            onClick={goPrev}
            className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-rose-50 transition-colors ml-2 sm:ml-4"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={goNext}
            className="pointer-events-auto w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-rose-50 transition-colors mr-2 sm:mr-4"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Reviews Carousel */}
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{ 
            delay: 4000, 
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true, 
          }}
          navigation={false}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={1}
          speed={800}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          allowTouchMove={true}
          onReachBeginning={() => {
            // Handle reach beginning
          }}
          onFromEdge={() => {
            // Handle from edge
          }}
          onReachEnd={() => {
            // Handle reach end
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          className="reviews-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={`${review.id}-${index}`} className="review-slide">
              <div className="review-card bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 sm:w-10 h-10 text-rose-200 mb-3 sm:mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2 sm:mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 sm:w-4 h-3 sm:h-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Review Comment */}
                <p className="text-gray-600 mb-4 sm:mb-6 flex-grow leading-relaxed text-xs sm:text-sm md:text-base overflow-hidden">
                  <span className="line-clamp-4 sm:line-clamp-5">
                    "{review.comment}"
                  </span>
                </p>

                {/* Customer & Product Info */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 flex-shrink-0">
                  {/* Customer */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{review.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                  
                  {/* Product Thumbnail */}
                  <img
                    src={review.productImage}
                    alt="Product"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover flex-shrink-0"
                  />
                </div>

                {/* Date */}
                <p className="text-xs text-gray-400 mt-2 sm:mt-3 flex-shrink-0">{review.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styles */}
        <style jsx global>{`
          .reviews-swiper {
            padding: 20px 0 40px 0;
            overflow: visible !important;
          }
          .reviews-swiper .swiper-wrapper {
            align-items: center;
          }
          .review-slide {
            display: flex;
            align-items: stretch;
            height: auto;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .review-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: center center;
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
          }
          /* Side cards - smaller and faded */
          .reviews-swiper .swiper-slide:not(.swiper-slide-active) .review-card {
            opacity: 0.5;
            transform: scale(0.88);
            filter: blur(1px);
          }
          /* Active card - centered, larger, with shadow */
          .reviews-swiper .swiper-slide-active .review-card {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(244, 63, 94, 0.1);
          }
          .reviews-swiper .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
          }
          .reviews-swiper .swiper-pagination {
            position: relative !important;
            bottom: auto !important;
            margin-top: 32px !important;
            display: flex !important;
            justify-content: center !important;
            gap: 8px !important;
          }
          .reviews-swiper .swiper-pagination-bullet {
            background: #f43f5e !important;
            width: 8px !important;
            height: 8px !important;
            opacity: 0.4 !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            flex-shrink: 0 !important;
            margin: 0 4px !important;
          }
          .reviews-swiper .swiper-pagination-bullet-active {
            opacity: 1 !important;
            width: 28px !important;
            border-radius: 4px !important;
            background: #f43f5e !important;
          }
        `}</style>
      </div>
    </section>
  );
}
