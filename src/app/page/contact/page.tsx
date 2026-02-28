"use client";

import { Mail, MapPin, Instagram } from "lucide-react";
import Lottie from "lottie-react";
import whatsappAnim from "../../../../assets/Icons/icons8-whatsapp.json";
import { Header } from "~/app/_components/landing/header";
import { Footer } from "~/app/_components/landing/footer";

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header />
      {/* Hero Section */}
      <div className="bg-[#1F1F1F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, need help with an order, or just want to say hello.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mail Only Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="text-xl font-bold text-[#1A1110] mb-6">Mail Only</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-rose-400 pl-4">
                <p className="text-sm text-gray-500 mb-1">General Purpose Main Mail</p>
                <a
                  href="mailto:hello.thecozyloop@gmail.com"
                  className="text-rose-500 font-semibold hover:text-rose-600 transition-colors"
                >
                  hello.thecozyloop@gmail.com
                </a>
              </div>
              <div className="border-l-4 border-rose-400 pl-4">
                <p className="text-sm text-gray-500 mb-1">Support Mail</p>
                <a
                  href="mailto:help.thecozyloop@gmail.com"
                  className="text-rose-500 font-semibold hover:text-rose-600 transition-colors"
                >
                  help.thecozyloop@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Only Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <div className="w-10 h-10">
                <Lottie animationData={whatsappAnim} loop={true} />
              </div>
            </div>
            <h2 className="text-xl font-bold text-[#1A1110] mb-6">WhatsApp Only</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <p className="text-sm text-gray-500 mb-1">General Purpose Main Number</p>
                <a
                  href="https://wa.me/919475056952?text=Hello%20The%20Cozy%20Loop,%20Can%20you%20guide%20me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-semibold hover:text-green-600 transition-colors"
                >
                  +91 9475056952
                </a>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <p className="text-sm text-gray-500 mb-1">Support Number</p>
                <a
                  href="https://wa.me/919475053178?text=I%20have%20some%20queries,%20kindly%20look%20into%20this."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 font-semibold hover:text-green-600 transition-colors"
                >
                  +91 9475053178
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#1A1110] mb-6 text-center">Follow Us</h2>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/thecozyloop.in_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
              <Instagram className="w-6 h-6" />
              <span className="font-semibold">thecozyloop.in_</span>
            </a>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#1A1110] mb-6 text-center">Our Location</h2>
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <MapPin className="w-6 h-6 text-rose-500" />
            <p className="text-lg">Raiganj, West Bengal, India</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
