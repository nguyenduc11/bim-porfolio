import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-ovo text-gray-900 mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent font-bold">
              Duc Nguyen
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-8 font-light">
            Structural BIM Specialist & Digital Construction Expert
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            I specialize in creating detailed 3D building models and implementing BIM workflows 
            using Autodesk Revit, Dynamo, and Navisworks. With expertise in parametric modeling 
            and clash detection, I help transform complex architectural designs into precise, 
            constructible models.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
            <Link href="/contact">
              <button className="group relative px-10 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto text-lg font-semibold">
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="group px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto text-lg font-semibold">
                View Projects
              </button>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-gray-400 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero