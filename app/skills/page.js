'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import SkillCategory from '../components/skills/SkillCategory'
import { skillsData } from '../data/skillsData'

export default function Skills() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{skillsData.title}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {skillsData.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsData.categories.map((category, index) => (
                <SkillCategory key={index} category={category} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
