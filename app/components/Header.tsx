import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          JoseMuñoz
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-600 hover:text-gray-800">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-600 hover:text-gray-800">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}

