"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Magnetic Mount",
    description:
      "Easily attaches to any metal gym equipment, staying secure through every rep.",
    image: "/images/setzKeyFeature1.png",
  },
  {
    title: "Smart Set Counter",
    description:
      "Counts your completed sets automatically so you stay focused on your workout.",
    image: "/images/setzKeyFeature2.png",
  },
  {
    title: "Compact & Durable",
    description:
      "Lightweight, rugged, and designed to handle even your toughest training days.",
    image: "/images/setzKeyFeature1.png",
  },
  {
    title: "Long Battery Life",
    description:
      "Enjoy weeks of use on a single charge — no more downtime between sessions.",
    image: "/images/setzKeyFeature2.png",
  },
];

export default function FeaturesCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % features.length);
  const prev = () => setCurrent((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section id="features" className="w-full bg-gray-100 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-4 z-10 p-3 rounded-full bg-white/70 shadow hover:bg-white transition"
            aria-label="Previous feature"
          >
            <ArrowLeft className="w-6 h-6 text-red-700" />
          </button>

          {/* Slides */}
          <div className="relative w-full max-w-3xl h-[420px] md:h-[480px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-red-100"
              >
                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px]">
                    <Image
                      src={features[current].image}
                      alt={features[current].title}
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-red-700 mb-3">
                    {features[current].title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {features[current].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-2 md:right-4 z-10 p-3 rounded-full bg-white/70 shadow hover:bg-white transition"
            aria-label="Next feature"
          >
            <ArrowRight className="w-6 h-6 text-red-700" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === i
                  ? "bg-red-700 scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
