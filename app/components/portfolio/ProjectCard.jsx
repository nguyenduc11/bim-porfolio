'use client'

import { useState } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import ImageCarousel from './ImageCarousel'
import ImageZoomModal from './ImageZoomModal'

export default function ProjectCard({ project }) {
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
        <div className="relative w-full aspect-[3/2] overflow-hidden">
          <ImageCarousel 
            images={project.images || [project.image]}
            projectTitle={project.title}
            onImageClick={handleImageClick}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base group"
            >
              <HiExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              View Interactive Model
            </a>
            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base group"
              >
                <HiExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch on YouTube
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <HiCode className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>

      <ImageZoomModal 
        isOpen={zoomModalOpen}
        onClose={handleCloseZoom}
        imageSrc={selectedImage}
        imageAlt={project.title}
      />
    </>
  )
}
