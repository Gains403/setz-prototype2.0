"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/setzEmailSignup.jpg')", // 👈 your CTA background
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black-900/70 backdrop-blur-[1px]" />

      <div className="relative max-w-3xl mx-auto text-center px-6 text-white z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Stay Updated with <span className="text-red-400">SETZ</span>
        </motion.h2>

        <p className="text-white/90 mb-10 text-lg">
          Be the first to hear about new features, product drops, and updates
          from <span className="font-semibold">SETZ</span>.
        </p>

        {!submitted ? (
          <form
            action="https://formspree.io/f/xzzjqlba" // 👈 your Formspree endpoint
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;

              fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { Accept: "application/json" },
              })
                .then((response) => {
                  if (response.ok) {
                    setSubmitted(true);
                    form.reset();
                  } else {
                    alert("Something went wrong. Please try again.");
                  }
                })
                .catch(() => {
                  alert("Error sending message. Please check your connection.");
                });
            }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-5 py-3 rounded-lg border border-white/40 bg-white/10 backdrop-blur-md text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-300 font-medium mt-6"
          >
            ✅ Thank you for subscribing! You’ll hear from us soon.
          </motion.p>
        )}
      </div>
    </section>
  );
}
