"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Toolbox from "./components/Toolbox"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ChessGame from "./components/ChessGame"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PrePage from "./components/PrePage"


export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  return (
    <>
      {!showPortfolio && <PrePage onEnter={() => setShowPortfolio(true)} />}
      <AnimatePresence>
        {showPortfolio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-900 transition-colors duration-200"
          >
            <Header />
            <main className="pt-16">
              <Hero />
              <AboutMe />
              <Toolbox />
              <Skills />
              <Projects/>
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}