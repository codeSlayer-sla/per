"use client"

import { motion } from "framer-motion"
import type React from "react" // Import React

const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

interface ProgressBarProps {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div className="w-full bg-blue-200 rounded-full h-2.5 mb-4">
    <motion.div
      className="bg-blue-100 h-2.5 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
  </div>
)

export default function Hero() {
  return (
    <section className="bg-black text-white py-20 relative">
      <div className="container mx-auto px-4">
        {/*foto de perfil TOMAR UNA FOTO DECENTE */}
        <div className="absolute top-6 right-6 w-60 h-64 w-60 h-64 rounded-full overflow-hidden">
          
          <img src="/Leet.png" alt="Your Name" className="w-full h-full object-cover" />
        </div>
        {/* <!-- Quote debajo de la imagen --> */}
        <div className="absolute top-80  right-6 w-full sm:w-auto px-4 text-center text-white text-xl font-semibold">
          <p>"Do not comment bad code, <br />
             Rewrite it."</p>
        </div>

        <div className="absolute bottom-3 right-6 w-60 h-64  border-2 border-gray-300 overflow-hidden rounded-lg">
          <img src="/Leet.png" alt="Your Name" className="w-full h-full object-cover " />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Hi, I'm Jose Muñoz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-6"
        >
          I'm always ready for a new challenge.
        </motion.p>

        {/* Progress bars moved below the text and aligned to the left */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div animate={pulseAnimation} className="bg-blue-500 rounded-lg p-4 shadow-lg w-full max-w-md mb-4">
              <h2 className="text-lg font-semibold mb-2">Currently Learning</h2>
              <p className="text-blue-100 mb-2">c# and low level concepts</p>
              <ProgressBar progress={30} />
              <p className="text-sm text-blue-100">30% completed</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div animate={pulseAnimation} className="bg-blue-500 rounded-lg p-4 shadow-lg w-full max-w-md">
              <h2 className="text-lg font-semibold mb-2">Current Project</h2>
              <p className="text-blue-100 mb-2">2D game using Unity and scripting in c++</p>
              <ProgressBar progress={20} />
              <p className="text-sm text-blue-100">20% completed</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex justify-center space-x-4">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Get in touch
          </motion.a>
          <motion.a
            href="/assets/Hoja de vida.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-400 transition duration-300 border-2 border-white"
          >
            View CV
          </motion.a>
        </div>
      </div>
    </section>
  )
}
