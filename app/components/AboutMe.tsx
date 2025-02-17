"use client"

import { motion } from "framer-motion"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-blue-500 font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg mb-6 text-white">
            I'm a passionate junior software engineer.
          </p>
          <p className="text-lg mb-6 text-white">
            When I'm not coding, you can find me exploring new technologies.
          </p>
          <p className="text-lg text-white">
            I'm currently looking for opportunities to grow as a developer and contribute to meaningful projects. If you
            think we'd be a good fit, I'd love to hear from you!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

