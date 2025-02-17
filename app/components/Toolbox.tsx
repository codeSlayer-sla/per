"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Tool {
  name: string
  image: string
  level: 1 | 2 | 3 | 4
}

const tools: Tool[] = [
  { name: "AWS", image: "/AWS.png", level: 1 },
  { name: "mongoDB", image: "/mongodb.jpg", level: 2 },
  { name: "PostgreSQL", image: "/postgresql.png", level: 2 },
  { name: "Python", image: "/Python.png", level: 4 },
  { name: "Git", image: "/Git.png", level: 2 },
  { name: "Stack basico de frontend", image: "/StackBasico.png", level: 3 },
]

const levelDescriptions = [
  { level: 1, description: "Basics" },
  { level: 2, description: "Familiar" },
  { level: 3, description: "Capable" },
  { level: 4, description: "Proficient" },
  { level: 5, description: "Advanced" },
]

function Badge({ tool }: { tool: Tool }) {
  return (
    <div className="relative w-32 h-32 bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden">
      <Image
        src={tool.image || "/placeholder.svg"}
        alt={tool.name}
        width={128}
        height={128}
        className="object-contain"
      />
      <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
        {tool.level}
      </div>
    </div>
  )
}

export default function Toolbox() {
  return (
    <section id="toolbox" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-blue-500"
        >
          TechStack
        </motion.h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Badge tool={tool} />
            </motion.div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-gray-300">Level</th>
                <th className="px-4 py-2 text-left text-gray-300">Description</th>
              </tr>
            </thead>
            <tbody>
              {levelDescriptions.map(({ level, description }) => (
                <tr key={level} className="border-b">
                  <td className="px-4 py-2 text-gray-300">{level}</td>
                  <td className="px-4 py-2 text-gray-300">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
