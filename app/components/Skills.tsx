"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server } from "lucide-react"

const skills = [
  { name: "Frontend Development", icon: Globe, description: "Building responsive and interactive user interfaces" },
  { name: "Backend Development", icon: Server, description: "Designing and implementing server-side logic and APIs" },
  { name: "Database Management", icon: Database, description: "Working with both SQL and NoSQL databases" },
  { name: "Version Control", icon: Code, description: "Proficient in Git and collaborative development workflows" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 bg-gray">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-blue-500"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-700 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <skill.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

