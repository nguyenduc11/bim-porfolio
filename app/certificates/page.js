'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import CertificateCard from '../components/certificates/CertificateCard'
import CallToAction from '../components/portfolio/CallToAction'
import { certificatesData } from '../data/certificatesData'

export default function Certificates() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold font-ovo text-gray-900 mb-6">{certificatesData.title}</h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {certificatesData.description}
              </p>
            </div>
            <div className="space-y-16">
              {certificatesData.certificates.map((certificate, index) => (
                <CertificateCard key={index} certificate={certificate} />
              ))}
            </div>
          </div>
        </section>
        <CallToAction data={certificatesData.callToAction} />
      </main>
    </>
  )
}
