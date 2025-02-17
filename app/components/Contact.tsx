"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import emailjs from "emailjs-com"

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Ensure the form reference is valid
    if (formRef.current) {
      emailjs
        .sendForm('service_u538176', 'template_njkpf1m', formRef.current, 'pJ8EE3o6aC3DzsJlr')
        .then(
          (result) => {
            console.log('Message sent successfully:', result.text)
            alert('Message sent successfully!')
          },
          (error) => {
            console.error('Error sending message:', error.text)
            alert('Error sending message.')
          }
        )
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-blue-500"
        >
          Contact Me

        </motion.h2>
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

