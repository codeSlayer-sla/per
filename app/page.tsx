"use client"

import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Toolbox from "./components/Toolbox"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <AnimatePresence>
        <main>
          <Hero />
          <AboutMe />
          <Toolbox />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

