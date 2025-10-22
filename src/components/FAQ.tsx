"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is SETZ?",
    answer:
      "SetCount is a compact, magnetic smart counter that automatically tracks your sets during workouts — no manual input, no distractions. Just attach and train.",
  },
  {
    question: "How does SETZ stay attached during workouts?",
    answer:
      "It features a strong magnetic base designed to lock onto metallic gym equipment securely, even during high-intensity sets and movements.",
  },
  {
    question: "Do I need to connect it to my phone?",
    answer:
      "No — SetCount works completely independently. It counts your sets automatically and stores your data internally for quick review.",
  },
  {
    question: "Is it rechargeable?",
    answer:
      "Yes! SetCount comes with a rechargeable battery that lasts multiple training sessions on a single charge. It uses a simple USB-C port for fast charging.",
  },
  {
    question: "When will my order arrive?",
    answer:
      "Orders are processed within 24 hours and typically delivered within 3–5 business days, depending on your location.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Red decorative glow */}
      <motion.div
        className="absolute -top-20 left-1/3 w-72 h-72 bg-red-500/30 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between items-center w-full p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-red-700 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
