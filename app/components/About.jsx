import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets'
import { HiArrowRight } from 'react-icons/hi'

const About = () => {
  const personalInfo = [
    { label: "Name", value: "Duc Nguyen" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Location", value: "Ho Chi Minh City, Vietnam" },
    { label: "Experience", value: "3+ Years" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 font-ovo text-lg mb-4 tracking-wide uppercase">
            Introduction
          </p>
          <h2 className="font-ovo text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold">
            About me
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
              <Image 
                src={assets.user_image} 
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105" 
                alt="Duc Nguyen - Full Stack Developer" 
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Greeting */}
            <div className="mb-8">
              <h3 className="font-ovo text-gray-900 text-3xl md:text-4xl font-bold mb-4">
                Hello, I'm Duc Nguyen
              </h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                A passionate Full Stack Developer with expertise in modern web technologies. 
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                    {info.label}
                  </p>
                  <p className="font-ovo text-gray-900 text-lg font-semibold mt-1">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl hover:from-gray-800 hover:to-gray-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0.5 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-300"></div>
              <span className="relative z-10 font-ovo flex items-center gap-2 text-lg">
                Let's Work Together
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About