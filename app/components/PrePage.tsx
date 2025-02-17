"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function PrePage({ onEnter }: { onEnter: () => void }) {
  // IMPORTANT: State to control the animation
  const [isAnimating, setIsAnimating] = useState(false)

  // IMPORTANT: Function to handle the transition to the main portfolio
  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => {
      onEnter()
    }, 800) // IMPORTANT: Adjust this timing to match your animation duration
  }

  return (
    // IMPORTANT: Fixed positioning to cover the entire viewport
    <section id="home" className="fixed inset-0 z-50 bg-black">
      <div className="slide-wrapper">
        <div className="smallcircles">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="small-circle" />
          ))}
        </div>
        <div className="cover-wrapper text-center" id="home-content">
          <div className="cover-wrapper__inner">
            <div className="cover-wrapper__container ">
              <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Jose Muñoz  
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button
                  className="btn btn-cta btn-cta__green text-uppercase trigger"
                  data-toggle="closed"
                  onClick={handleClick}
                >
                  View portfolio
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="big-circles">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="big-circle" />
        ))}
      </div>
      {/* IMPORTANT: Animation for transitioning to the main portfolio */}
      {isAnimating && (
        <motion.div
          className="fixed inset-0 bg-black z-50"
          initial={{ scale: 0, borderRadius: "100%" }}
          animate={{ scale: 2, borderRadius: "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      )}
    </section>
  )
}

