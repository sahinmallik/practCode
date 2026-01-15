"use client";

import { motion } from "framer-motion";

export default function InteractiveCodingIllustration() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-[360px] rounded-xl bg-zinc-900 p-4 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-3 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="space-y-2 font-mono text-sm">
          <motion.div
            className="h-3 rounded bg-emerald-400/80"
            initial={{ width: 0 }}
            whileInView={{ width: "70%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            className="h-3 rounded bg-sky-400/80"
            initial={{ width: 0 }}
            whileInView={{ width: "90%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <motion.div
            className="h-3 rounded bg-purple-400/80"
            initial={{ width: 0 }}
            whileInView={{ width: "55%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>

        <motion.div
          className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-emerald-400"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: [1, 1.05, 1], opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs">All tests passed</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
