import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-3 md:px-12">
                <div className="flex items-center justify-between">
                    <div>
                        <Image src={assets.logo} 
                        className="w-20 cursor-pointer" 
                        alt="" />
                    </div>
                    <div>
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/" className="font-ovo text-[#111] hover:text-gray-600 transition-colors duration-200 relative group">
                                    Home
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="font-ovo text-[#111] hover:text-gray-600 transition-colors duration-200 relative group">
                                    About
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="font-ovo text-[#111] hover:text-gray-600 transition-colors duration-200 relative group">
                                    Services
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="font-ovo text-[#111] hover:text-gray-600 transition-colors duration-200 relative group">
                                    Portfolio
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="font-ovo text-[#111] hover:text-gray-600 transition-colors duration-200 relative group">
                                    Contact
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-800 transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className="bg-[#111] text-white px-6 py-2 rounded-md">Hire me</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar