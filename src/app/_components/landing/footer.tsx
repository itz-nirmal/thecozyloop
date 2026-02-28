"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import TCLLogo from "../../../../assets/Brand Assets/TCL logo loop.png";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/catalog" },
    { name: "Keychains", href: "/catalog?category=keychains" },
    { name: "Flowers", href: "/catalog?category=flowers" },
    { name: "Bouquets", href: "/catalog?category=bouquets" },
    { name: "Gift Sets", href: "/catalog?category=sets" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/page/contact" },
  ],
  support: [
    { name: "FAQs", href: "/faqs" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/return-exchange-request" },
    { name: "Track Order", href: "/track" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/page/privacy" },
    { name: "Terms of Service", href: "/page/terms" },
    { name: "Cookie Policy", href: "/page/cookies" },
    { name: "Return & Refund Policy", href: "/page/return-refund-cancellation" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-12 lg:py-14 xl:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="relative w-14 h-10 sm:w-16 sm:h-10 lg:w-16 lg:h-10 xl:w-20 xl:h-12">
                <Image
                  src={TCLLogo}
                  alt="The Cozy Loop"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-white">The Cozy Loop</span>
            </Link>
            <p className="text-sm text-gray-400 mb-5 sm:mb-6 max-w-xs">
              Handmade, heartmade crochet products and gifts with love - At The Cozy Loop, every stitch carries warmth, care,love, comfort, and beautiful everyday moments.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-sm group">
                <Mail className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <a 
                  href="mailto:hello.thecozyloop@gmail.com" 
                  className="hover:text-rose-400 transition-colors cursor-pointer text-xs sm:text-sm truncate"
                >
                  hello.thecozyloop@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-sm group">
                <a 
                  href="https://wa.me/919475056952?text=Hello%20Cozy%20Loop,%20I%20am%20Interested%20to%20order%20from%20you.%20Kindly%20assist%20me." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-rose-400 transition-colors cursor-pointer flex items-center gap-2"
                  aria-label="Chat on WhatsApp"
                >
                  <Image 
                    src="https://img.icons8.com/color/48/whatsapp--v1.png" 
                    alt="WhatsApp" 
                    width={20} 
                    height={20} 
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                    unoptimized
                    suppressHydrationWarning
                  />
                  <span className="text-xs sm:text-sm">+91 9475056952</span>
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-sm group">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="hover:text-rose-400 transition-colors cursor-pointer text-xs sm:text-sm">
                  Raiganj, West Bengal, India
                </span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-rose-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-rose-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-rose-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-rose-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="mt-10 sm:mt-12 lg:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm text-gray-400">Follow us:</span>
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div
              className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto lg:w-auto"
              suppressHydrationWarning
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm focus:outline-none focus:border-rose-500 w-full sm:w-48 md:w-56 lg:w-64"
                suppressHydrationWarning
              />
              <button className="px-5 sm:px-6 py-2 bg-rose-500 text-white rounded-full text-sm font-semibold hover:bg-rose-600 transition-colors whitespace-nowrap w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <p>© 2024 The Cozy Loop. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 flex-wrap justify-center">
              <Link href="/page/privacy" className="hover:text-rose-400 transition-colors">
                Privacy
              </Link>
              <Link href="/page/terms" className="hover:text-rose-400 transition-colors">
                Terms
              </Link>
              <Link href="/page/cookies" className="hover:text-rose-400 transition-colors">
                Cookies
              </Link>
              <Link href="/page/return-refund-cancellation" className="hover:text-rose-400 transition-colors">
                Returns
              </Link>
              <Link href="/sitemap" className="hover:text-rose-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
