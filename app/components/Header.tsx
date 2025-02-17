import Link from "next/link"
import Image from "next/image"
import { DarkModeToggle } from "./DarkModeToggle"
import '/styles/styles.css';


export default function Header() {
  

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-gray-900 shadow-sm transition-colors  fixed duration-200  top-0 left-0  right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex  justify-between items-center">
        <Link href="/" className="text-xs font-mono whitespace-pre text-red-500">
        {`             
┏┳┏┓┳┳┓┏┓
 ┃┃┓┃┃┃┗┓
┗┛┗┛┛ ┗┗┛`}
        </Link>
        <ul className="flex space-x-4 ">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-red-500"
            >
              About Me
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-red-500"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-red-500"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-red-500"
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          
          
        </div>
      </nav>
    </header>
  )
}


