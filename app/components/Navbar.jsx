import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-semibold text-gray-800"
          >
            Portfolio
          </Link>
          <ul className="hidden md:flex items-center space-x-8">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Services', '/services'],
              ['Portfolio', '/portfolio'],
              ['Contact', '/contact'],
            ].map(([label, path]) => (
              <li key={path}>
                <Link 
                  href={path}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
            Hire me
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar