"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingCart, UserPlus, LogIn, ChevronDown } from "lucide-react";
import TCLLogo from "../../../../assets/Brand Assets/TCL logo loop transparent.png";

const typingTexts = ["Key Chain", "Flower", "Bouquets","Gift Hamper", "Bookmark", "Bag", "Soft toy"];

// Catalog items for dropdown
const catalogItems = [
  { name: "Keychains", href: "/catalog?category=keychains", icon: "🔑" },
  { name: "Flowers", href: "/catalog?category=flowers", icon: "🌸" },
  { name: "Bouquets", href: "/catalog?category=bouquets", icon: "💐" },
  { name: "Gift Hampers", href: "/catalog?category=gifts", icon: "🎁" },
  { name: "Bookmarks", href: "/catalog?category=bookmarks", icon: "🔖" },
  { name: "Bags", href: "/catalog?category=bags", icon: "👜" },
  { name: "Soft Toys", href: "/catalog?category=soft-toys", icon: "🧸" },
];

function TypingEffect({ inputRef }: { inputRef: React.RefObject<HTMLInputElement | null> }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex] ?? "";
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typingTexts.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.placeholder = displayText;
    }
  }, [displayText, inputRef]);

  return null;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMobileCatalogOpen, setIsMobileCatalogOpen] = useState(false);
  const mobileSearchRef = useRef<HTMLInputElement>(null);
  const desktopSearchRef = useRef<HTMLInputElement>(null);
  const catalogDropdownRef = useRef<HTMLDivElement>(null);

  // Close catalog dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (catalogDropdownRef.current && !catalogDropdownRef.current.contains(event.target as Node)) {
        setIsCatalogOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsMobileCatalogOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8E7] shadow-sm">
      {/* Main Header */}
      <div className="flex items-center justify-between h-14 sm:h-16 md:h-[4.5rem] lg:h-20 px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Logo - positioned outside container to be flush left */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0">
            <Image
              src={TCLLogo}
              alt="The Cozy Loop"
              fill
              className="object-contain"
            />
          </div>
          <div className="block">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-[#1A1110] font-['Bricolage_Grotesque'] tracking-wide">The Cozy Loop</h1>
          </div>
        </Link>

        {/* Rest of header content in container */}
        <div className="max-w-7xl mx-auto flex-1 flex items-center justify-end">

            {/* Desktop Navigation - visible on xl (1280px) and above */}
            <nav className="hidden xl:flex items-center gap-5 xl:gap-8 2xl:gap-10 flex-1 justify-center">
            <Link href="/" className="text-[#1A1110] hover:text-rose-500 font-medium transition-colors text-sm xl:text-base">
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Home</span>
            </Link>
            
            {/* Catalog Dropdown */}
            <div className="relative" ref={catalogDropdownRef}>
              <button
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                className="flex items-center gap-1 text-[#1A1110] hover:text-rose-500 font-medium transition-colors cursor-pointer text-sm xl:text-base"
              >
                <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Catalog</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${isCatalogOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* Desktop Catalog Dropdown */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 xl:w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
                  isCatalogOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  {catalogItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsCatalogOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 xl:py-3 text-[#1A1110] hover:bg-rose-50 hover:text-rose-600 transition-colors text-sm"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-100">
                  <Link
                    href="/catalog"
                    onClick={() => setIsCatalogOpen(false)}
                    className="block px-4 py-2.5 xl:py-3 text-center text-rose-500 hover:bg-rose-50 font-medium transition-colors text-sm"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/wishlist" className="text-[#1A1110] hover:text-rose-500 font-medium transition-colors text-sm xl:text-base">
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Wishlist</span>
            </Link>
            <Link href="/cart" className="text-[#1A1110] hover:text-rose-500 font-medium transition-colors text-sm xl:text-base">
              <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">Cart</span>
            </Link>
          </nav>

          {/* Desktop Search & Icons - visible on lg (1024px) and above */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <TypingEffect inputRef={desktopSearchRef} />
            {/* Search Bar - placed first so it expands to the left */}
            <div className="relative flex-shrink-0 search-moving-border">
              <input
                ref={desktopSearchRef}
                type="text"
                placeholder="Search..."
                className="w-32 lg:w-40 xl:w-48 2xl:w-56 px-4 py-2 text-sm text-[#1A1110] placeholder-[#1A1110]/50 focus:outline-none bg-transparent"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1110]" />
            </div>

            {/* Icons & Auth Buttons */}
            <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <Link
                href="/wishlist"
                className="p-2 hover:bg-[#722F37]/20 rounded-full transition-colors relative"
              >
                <Heart className="w-5 h-5 text-[#1A1110] hover:text-[#722F37] transition-colors" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#722F37] text-white text-xs rounded-full flex items-center justify-center">0</span>
              </Link>
              <Link
                href="/cart"
                className="p-2 hover:bg-[#722F37]/20 rounded-full transition-colors relative"
              >
                <ShoppingCart className="w-5 h-5 text-[#1A1110] hover:text-[#722F37] transition-colors" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#722F37] text-white text-xs rounded-full flex items-center justify-center">0</span>
              </Link>
              <Link
                href="/page/login"
                className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap hidden sm:inline">Login</span>
              </Link>
              <Link
                href="/page/signup"
                className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap hidden sm:inline">Sign Up</span>
              </Link>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button - visible on md to lg (768px-1023px) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:block lg:hidden p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors relative ml-2 sm:ml-0"
          >
            <div className="relative w-5 h-4 sm:w-6 sm:h-5">
              {/* Top line */}
              <span className={`absolute left-0 top-0 w-5 h-0.5 bg-[#1A1110] transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-1.5' : ''}`} />
              {/* Middle line */}
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-[#1A1110] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              {/* Bottom line */}
              <span className={`absolute left-0 bottom-0 w-5 h-0.5 bg-[#1A1110] transition-all duration-300 ${isMenuOpen ? '-rotate-45 bottom-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Search Bar - Below Header - visible on md to lg (768px-1023px) */}
      <div className="md:block lg:hidden px-3 sm:px-4 py-2 sm:py-3 border-t border-gray-100">
        <TypingEffect inputRef={mobileSearchRef} />
        <div className="relative search-moving-border">
          <input
            ref={mobileSearchRef}
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 text-sm text-[#1A1110] placeholder-[#1A1110]/50 focus:outline-none bg-transparent"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1110]" />
        </div>
      </div>

      {/* Mobile/Tablet Menu - visible on md to lg (768px-1023px) */}
      <div className={`md:block lg:hidden bg-[#FFF8E7] border-t border-gray-100 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-[#1A1110] hover:bg-rose-50 rounded-lg transition-colors text-sm sm:text-base"
            onClick={() => { setIsMenuOpen(false); setIsMobileCatalogOpen(false); }}
          >
            <span>Home</span>
          </Link>
          
          {/* Mobile Catalog with submenu */}
          <div className="relative">
            <button
              onClick={() => setIsMobileCatalogOpen(!isMobileCatalogOpen)}
              className="w-full flex items-center justify-between gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-[#1A1110] hover:bg-rose-50 rounded-lg transition-colors"
            >
              <span className="font-medium text-sm sm:text-base">Catalog</span>
              <ChevronDown className={`w-4 sm:w-5 h-4 sm:h-5 transition-transform duration-300 ${isMobileCatalogOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Catalog Submenu */}
            <div className={`overflow-hidden transition-all duration-300 ${isMobileCatalogOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 sm:pl-6 pr-2 sm:pr-4 py-2 space-y-1 max-h-56 sm:max-h-64 overflow-y-auto">
                {catalogItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => { setIsMenuOpen(false); setIsMobileCatalogOpen(false); }}
                    className="flex items-center gap-3 px-3 sm:px-4 py-2 text-[#1A1110]/80 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors text-sm"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
                <Link
                  href="/catalog"
                  onClick={() => { setIsMenuOpen(false); setIsMobileCatalogOpen(false); }}
                  className="block px-3 sm:px-4 py-2 text-center text-rose-500 hover:bg-rose-50 rounded-lg transition-colors text-sm font-medium"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
          
          <Link
            href="/wishlist"
            className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-[#1A1110] hover:bg-[#722F37]/20 rounded-lg transition-colors text-sm sm:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            <Heart className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Wishlist</span>
            <span className="ml-auto bg-[#722F37]/20 text-[#722F37] px-2 py-0.5 rounded-full text-xs">0</span>
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-[#1A1110] hover:bg-[#722F37]/20 rounded-lg transition-colors text-sm sm:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5" />
            <span>Cart</span>
            <span className="ml-auto bg-[#722F37]/20 text-[#722F37] px-2 py-0.5 rounded-full text-xs">0</span>
          </Link>
          <div className="pt-2 sm:pt-3 border-t border-gray-100 flex gap-2 sm:gap-3">
            <Link
              href="/page/login"
              className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="w-4 sm:w-5 h-4 sm:h-5" />
              <span>Login</span>
            </Link>
            <Link
              href="/page/signup"
              className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              <UserPlus className="w-4 sm:w-5 h-4 sm:h-5" />
              <span>Sign Up</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
