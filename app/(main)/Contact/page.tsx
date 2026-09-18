"use client";

import { motion } from "framer-motion";

export default function page() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="flex max-w-2xl flex-col items-center text-center">
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-full bg-gray-100 px-4 py-2 text-xs font-medium uppercase tracking-widest text-gray-500"
        >
          Contact Us
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl"
        >
          Something exciting
          <span className="block text-gray-400">is coming soon.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 max-w-lg text-sm leading-7 text-gray-500 sm:text-base"
        >
          We’re working behind the scenes to create a better way for you to
          reach us. Our contact page will be available soon.
        </motion.p>

        {/* Animated dots */}
        <div className="mt-8 flex items-center gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-2 w-2 rounded-full bg-gray-900"
              animate={{
                y: [0, -6, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}