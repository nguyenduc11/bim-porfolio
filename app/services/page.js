import React from 'react'
import Navbar from '../components/Navbar'
import ServiceCard from '../components/services/ServiceCard'
import { servicesData } from '../data/servicesData'

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">BIM Services</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive Building Information Modeling solutions for modern construction projects, 
                focusing on efficiency, accuracy, and collaboration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
