import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '../../assets/assets'

const Services = () => {
  const additionalServices = [
    {
      icon: assets.code_icon,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind CSS.",
      features: ["React & Next.js", "Responsive Design", "Modern CSS", "Performance Optimization"]
    },
    {
      icon: assets.web_icon,
      title: "Backend Development", 
      description: "Building robust server-side applications with Node.js, databases, and API integrations for scalable solutions.",
      features: ["Node.js & Express", "Database Design", "API Development", "Cloud Integration"]
    },
    {
      icon: assets.mobile_icon,
      title: "Full Stack Solutions",
      description: "End-to-end web application development from concept to deployment with modern tech stacks.",
      features: ["MERN Stack", "Database Management", "DevOps", "Testing & QA"]
    },
    {
      icon: assets.ui_icon,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with modern design principles and user-centered approach.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 font-ovo text-lg mb-4 tracking-wide uppercase">
            What I Offer
          </p>
          <h2 className="font-ovo text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I provide comprehensive web development services to help bring your digital vision to life. 
            From concept to deployment, I ensure quality and excellence in every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {additionalServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={service.icon} 
                      className="w-8 h-8 filter brightness-0 invert" 
                      alt={`${service.title} icon`} 
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-ovo text-gray-900 text-2xl font-bold mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-gray-800 font-semibold text-sm uppercase tracking-wide mb-3">
                    Key Features:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2"></div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="group/btn inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-200">
                    <span className="font-ovo">Learn More</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="font-ovo text-gray-900 text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              I'm here to help bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl hover:from-gray-800 hover:to-gray-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50">
                <span className="relative z-10 font-ovo flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="group inline-flex items-center justify-center px-8 py-4 font-medium text-gray-900 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200">
                <span className="font-ovo flex items-center gap-2">
                  View Portfolio
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
