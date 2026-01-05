'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react'

export default function ImageZoomModal({ isOpen, onClose, imageSrc, imageAlt }) {
  const [scale, setScale] = useState(1)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setScale(1)
      setRotation(0)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5))
  }

  const handleRotate = () => {
    setRotation(prev => prev + 90)
  }

  const handleReset = () => {
    setScale(1)
    setRotation(0)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          onClick={handleZoomOut}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomIn}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={handleRotate}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
          aria-label="Rotate"
        >
          <RotateCw className="w-5 h-5" />
        </button>
        <button
          onClick={handleReset}
          className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium"
        >
          Reset
        </button>
        <button
          onClick={onClose}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scale indicator */}
      <div className="absolute top-4 left-4 bg-white/20 text-white px-3 py-2 rounded-lg text-sm font-medium">
        {Math.round(scale * 100)}%
      </div>

      {/* Image container */}
      <div className="relative max-w-full max-h-full overflow-auto">
        <div 
          className="relative transition-transform duration-200 ease-out"
          style={{ 
            transform: `scale(${scale}) rotate(${rotation}deg)`,
            transformOrigin: 'center'
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            priority
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center">
        <p>Click outside image to close • Use controls to zoom and rotate</p>
      </div>
    </div>
  )
}
