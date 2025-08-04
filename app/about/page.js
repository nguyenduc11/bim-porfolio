import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50">
        {/* Personal Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="relative w-64 h-64 mx-auto">
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Profile" 
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">John Doe</h1>
                <h2 className="text-2xl text-gray-700 mb-6">Senior Structural BIM Specialist</h2>
                <p className="text-gray-600 mb-6">
                  Experienced BIM professional with over 8 years of expertise in structural modeling and coordination. 
                  Specialized in creating detailed 3D models, implementing BIM workflows, and optimizing project delivery 
                  through advanced automation techniques.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">john.doe@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">+1 234 567 890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Address Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-gray-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-700">123 Business District</p>
                  <p className="text-gray-700">Silicon Valley, CA 94025</p>
                  <p className="text-gray-700">United States</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Master of Engineering - Structural Engineering</h3>
                <p className="text-gray-700 mb-2">Stanford University</p>
                <p className="text-gray-600">2012 - 2014</p>
                <ul className="mt-4 list-disc list-inside text-gray-600">
                  <li>Specialized in Building Information Modeling</li>
                  <li>Research focus on BIM implementation in structural design</li>
                  <li>GPA: 3.9/4.0</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bachelor of Science - Civil Engineering</h3>
                <p className="text-gray-700 mb-2">MIT</p>
                <p className="text-gray-600">2008 - 2012</p>
                <ul className="mt-4 list-disc list-inside text-gray-600">
                  <li>Minor in Computer Science</li>
                  <li>Graduated with Honors</li>
                  <li>President of Engineering Society</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Senior BIM Manager</h3>
                    <p className="text-gray-700">Global Construction Corp</p>
                  </div>
                  <span className="text-gray-600">2018 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Led BIM implementation for $500M worth of construction projects</li>
                  <li>Managed a team of 15 BIM modelers and coordinators</li>
                  <li>Developed automated workflows reducing modeling time by 40%</li>
                  <li>Implemented clash detection protocols resulting in 90% reduction in field conflicts</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">BIM Coordinator</h3>
                    <p className="text-gray-700">Engineering Solutions Inc</p>
                  </div>
                  <span className="text-gray-600">2014 - 2018</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Coordinated BIM models for healthcare and commercial projects</li>
                  <li>Developed custom Dynamo scripts for automation</li>
                  <li>Trained junior staff in Revit and BIM best practices</li>
                  <li>Achieved 30% improvement in project delivery time</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <svg className="w-8 h-8 text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel & Photography</h3>
                <p className="text-gray-600">Exploring architectural marvels around the world and documenting them through photography.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <svg className="w-8 h-8 text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3D Printing</h3>
                <p className="text-gray-600">Creating architectural models and prototypes using 3D printing technology.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <svg className="w-8 h-8 text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Writing</h3>
                <p className="text-gray-600">Contributing to engineering blogs and writing about BIM best practices.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
