"use client"

import { motion } from "framer-motion"
import type React from "react"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ type: "linear" }}>
      {children}
    </motion.div>
  )
}

