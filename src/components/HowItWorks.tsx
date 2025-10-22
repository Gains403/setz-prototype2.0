"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cog } from "lucide-react";

const steps = [
  {
    title: "Attach Effortlessly",
    description:
      "Mount SetCount securely using its magnetic base. It locks onto gym equipment instantly and stays put through every workout.",
    image: "/images/setzKeyFeature1.png",
  },
  {
    title: "LED Indicator",
    description:
      "Once attached,the red LED shows its in use — no tapping, no distractions.",
    image: "/images/setzKeyFeature1.png",
  },
  {
    title: "Set Counter",
    description:
      "During your workout, the number indicates yours remaining sets.",
    image: "/images/setzKeyFeature1.png",
  },
  {
    title: "ReSETZ Buttons",
    description:
      "Quickly reset between workouts with a single tap — effortless, intuitive, and ready for your next challenge.",
    image: "/images/setzKeyFeature1.png",
  },
];

export default function HowItWorks() {
  const cogPositions = [
    ["top-10 left-10", 30, 360, 0.3, 28],
    ["top-20 right-12", 40, -360, 0.25, 24],
    ["bottom-10 left-16", 50, 360, 0.3, 32],
    ["bottom-20 right-10", 60, -360, 0.25, 36],
    ["top-1/3 left-1/4", 70, 360, 0.3, 38],
    ["top-1/3 right-1/3", 80, -360, 0.35, 42],
    // Added cogs ↓
    ["top-1/2 left-1/2", 55, 360, 0.25, 30],
    ["bottom-1/4 right-1/4", 65, -360, 0.3, 34],
    ["top-1/4 right-1/5", 50, 360, 0.25, 28],
    ["bottom-1/5 left-1/5", 70, -360, 0.35, 40],
    ["top-3/4 left-1/3", 60, 360, 0.3, 36],
    ["bottom-3/4 right-1/3", 80, -360, 0.25, 32],
  ];

  return (
    <section id="how-it-works" className="relative bg-gray-100 py-24 overflow-hidden">
      {/* ⚙️ Animated cogs */}
      <div className="absolute inset-0 overflow-hidden">
        {cogPositions.map(([pos, duration, direction, opacity, size], i) => (
          <motion.div
            key={i}
            className={`absolute ${pos}`}
            animate={{ rotate: [0, direction as number], y: [0, 15, 0] }}
            transition={{ duration: duration as number, repeat: Infinity, ease: "linear" }}
          >
            <Cog
              size={size as number}
              style={{ opacity: opacity as number }}
              className="text-red-700 drop-shadow-[0_0_8px_rgba(185,28,28,0.5)]"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-20"
        >
          How It Works
        </motion.h2>

        <div className="flex flex-col gap-20 md:gap-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 flex justify-center md:justify-start">
                <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain drop-shadow-2xl rounded-2xl"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="w-12 h-12 flex items-center justify-center bg-red-700 text-white text-lg font-semibold rounded-full shadow-md mb-6 mx-auto md:mx-0">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-semibold text-red-700 mb-3">{step.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
