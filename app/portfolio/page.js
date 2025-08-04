'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/portfolio/ProjectCard'
import CallToAction from '../components/portfolio/CallToAction'
import { portfolioData } from '../data/portfolioData'

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{portfolioData.title}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {portfolioData.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
        <CallToAction data={portfolioData.callToAction} />
      </main>
    </>
  )
}
