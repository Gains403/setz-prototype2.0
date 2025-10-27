"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-28 bg-black text-white"
    >
      {/* 🏋️‍♂️ Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/SetzCTA.jpg" // replace with your preferred gym background
          alt="Gym background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      {/* 🔴 Soft red overlay for theme consistency */}
      <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply" />

      {/* ✨ Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Take Control of Every Set
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Get <span className="text-red-400 font-semibold">SETZ</span> for
          just <span className="text-white font-bold">$69.99</span> — track
          every rep, every set, and elevate your training without missing a
          moment.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-800 transition-all text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-red-500/30"
        >
          <ShoppingBag size={22} />
          Buy Now – $69.99
        </motion.button>
      </div>

      {/* ⚙️ Optional animated faint red glow */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-600 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-red-700 rounded-full blur-3xl opacity-10"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
