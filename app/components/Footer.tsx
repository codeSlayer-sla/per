export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} JoseMS. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://github.com/codeSlayer-sla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            LinkedIn
          </a>
          
        </div>
      </div>
    </footer>
  )
}

