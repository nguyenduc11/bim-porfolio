'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiExternalLink, HiCalendar, HiAcademicCap } from 'react-icons/hi'
import ImageZoomModal from '../portfolio/ImageZoomModal'

export default function CertificateCard({ certificate }) {
  const [zoomModalOpen, setZoomModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc)
    setZoomModalOpen(true)
  }

  const handleCloseZoom = () => {
    setZoomModalOpen(false)
    setSelectedImage('')
  }

  return (
    <>
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 max-w-4xl mx-auto">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            priority={true}
            onClick={() => handleImageClick(certificate.image)}
          />
          {/* Zoom overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                <HiExternalLink className="w-6 h-6 text-gray-800" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <HiAcademicCap className="w-5 h-5 text-blue-600" />
            <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
              {certificate.issuer}
            </span>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <HiCalendar className="w-4 h-4" />
              <span>{certificate.issueDate}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{certificate.title}</h3>
          <p className="text-gray-600 mb-4">{certificate.description}</p>
          
          {certificate.credentialId && (
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700">Credential ID: </span>
              <span className="text-sm text-gray-600 font-mono">{certificate.credentialId}</span>
            </div>
          )}
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Skills Validated:</h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => handleImageClick(certificate.image)}
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base group"
            >
              <HiExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              View Certificate
            </button>
            {certificate.verificationUrl && certificate.verificationUrl !== "#" && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <HiExternalLink className="w-4 h-4" />
                Verify
              </a>
            )}
          </div>
        </div>
      </div>

      <ImageZoomModal 
        isOpen={zoomModalOpen}
        onClose={handleCloseZoom}
        imageSrc={selectedImage}
        imageAlt={certificate.title}
      />
    </>
  )
}
