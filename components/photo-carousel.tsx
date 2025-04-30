"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PhotoCarouselProps {
  images: string[]
  alts: string[]
}

export default function PhotoCarousel({ images, alts }: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      // Swiped left
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      // Swiped right
      prevSlide()
    }
  }

  return (
    <div
      className="relative w-full mb-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Current slide */}
      <div className="relative overflow-hidden rounded-lg rounded-fix">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={alts[index] || `Фото Кабан центру ${index + 1}`}
              className="w-full h-auto rounded-lg rounded-fix"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md z-10 transition-all"
        onClick={prevSlide}
        aria-label="Попереднє фото"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md z-10 transition-all"
        onClick={nextSlide}
        aria-label="Наступне фото"
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </button>

      {/* Indicator dots */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-primary scale-110" : "bg-primary/30"
            }`}
            aria-label={`Перейти до фото ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
