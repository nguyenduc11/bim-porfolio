'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export default function ImageCarousel({ images, projectTitle, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full aspect-[3/2] bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">No images available</span>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-[3/2] overflow-hidden group">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} - Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={currentIndex === 0}
        />
        
        {/* Zoom Button */}
        <button
          onClick={() => onImageClick(images[currentIndex])}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Zoom image"
        >
          <ZoomIn className="w-5 h-5" />
        </button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
