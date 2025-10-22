"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";

export default function Hero() {
  return (
    <section className="w-full bg-gray-100 pt-32 pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Take Your Turn. <br className="hidden md:block" />
            <span className="text-red-700 block">
              <Typed
                strings={[
                  "Train Smarter.",
                  "Focus Harder.",
                  "Recover Better.",
                  "Lift Stronger.",
                ]}
                typeSpeed={70}
                backSpeed={50}
                backDelay={1500}
                loop
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            SetCount is a compact magnetic device that keeps track of your sets
            while you focus on your workout — no distractions, just results.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center md:items-start gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white px-8 py-3 text-lg rounded-lg shadow-md">
                Buy Now
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-red-700 text-red-700 hover:bg-red-50 px-8 py-3 text-lg rounded-lg"
              >
                Learn More
              </Button>

          </motion.div>
        </motion.div>

        {/* Right image with deep red glow */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {/* Glowing background animation */}
          <motion.div
            className="absolute inset-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 0.75, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-[380px] h-[380px] md:w-[520px] md:h-[520px] rounded-full bg-red-800/30 blur-3xl" />
          </motion.div>

          <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]">
            <Image
              src="/images/setzHero.png"
              alt="SetCount device"
              fill
              className="object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
