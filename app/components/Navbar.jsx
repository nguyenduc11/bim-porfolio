'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experiences', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-semibold text-gray-800"
          >
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={200} 
              height={50} 
              className="w-auto h-16" 
              priority 
            />
          </Link>
          <ul className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-600 hover:text-white transition-all duration-300 rounded-full hover:bg-gray-700/90 backdrop-blur-sm"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact">
            <button className="group relative px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg overflow-hidden">
              <span className="relative z-10 font-medium">Hire me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar