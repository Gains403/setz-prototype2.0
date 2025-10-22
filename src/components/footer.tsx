"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-gray-300 py-12">
      {/* 🔴 Subtle red gradient glow at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-red-600 to-red-700" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-bold text-white">SETZ</h2>
          <p className="text-gray-400 text-sm mt-1">
            Train smarter. Track better. Stay focused.
          </p>
        </motion.div>

        {/* Links */}
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          <li>
            <Link
              href="#how-it-works"
              className="hover:text-red-500 transition-colors"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="hover:text-red-500 transition-colors"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="#cta"
              className="hover:text-red-500 transition-colors"
            >
              Buy Now
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-red-500 transition-colors"
            >
              Contact
            </Link>
          </li>
        </motion.ul>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <Link href="#" className="hover:text-red-500 transition-colors">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-red-500 transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-red-500 transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-red-500 transition-colors">
            <Github className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Divider + Bottom note */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SetCount. All rights reserved.
      </div>
    </footer>
  );
}
