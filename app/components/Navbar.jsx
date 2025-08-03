import React from 'react'
import Image from 'next/image'
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
                                <a href="#" className="font-ovo text-[#111]">Home</a>
                            </li>
                            <li>
                                <a href="#" className="font-ovo text-[#111]">About</a>
                            </li>
                            <li>
                                <a href="#" className="font-ovo text-[#111]">Services</a>
                            </li>
                            <li>
                                <a href="#" className="font-ovo text-[#111]">Portfolio</a>
                            </li>
                            <li>
                                <a href="#" className="font-ovo text-[#111]">Contact</a>
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