"use client";

import { motion } from "framer-motion";

export default function ResearchClientContent() {
  return (
    <div className="mt-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Collaborate with Our Research Team
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-8">
          Interested in our cutting-edge AI research? Let's connect and innovate together.
        </p>
        <a 
          href="/contact" 
          className="bg-gradient-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all"
        >
          Contact Research Team
        </a>
      </motion.div>
    </div>
  );
} 