import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '../../assets/assets'

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-ovo text-gray-900 mb-4">
              Hi, I'm <span className="text-gray-900 font-semibold">Duc Nguyen</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Full Stack Developer specializing in modern web technologies
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              I craft robust and scalable web applications using Next.js, React, and Node.js. 
              With a passion for clean code and user-centric design, I transform ideas into 
              seamless digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link href="/contact">
                <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto">
                  Hire me
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto">
                  View Projects
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image 
                src={assets.profile_img} 
                alt="Duc Nguyen" 
                className="rounded-2xl shadow-2xl object-cover"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero