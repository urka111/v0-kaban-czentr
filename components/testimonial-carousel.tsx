"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialData {
  text: string
  author: string
  image: string
}

interface TestimonialCarouselProps {
  testimonials: TestimonialData[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
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
    <div className="relative w-full py-8">
      <h2 className="section-title text-accent mb-8">Що про нас кажуть</h2>

      <div
        className="relative overflow-hidden rounded-lg bg-white shadow-md min-h-[340px] rounded-fix"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full ${index === currentIndex ? "block" : "hidden"}`}
          >
            <div className="flex flex-col items-center h-full py-5 px-6">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary mb-4 rounded-fix">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 w-full flex flex-col justify-between">
                <div className="mb-3 max-w-[80%] mx-auto">
                  <p className="text-base text-center italic leading-tight">«{testimonial.text}»</p>
                </div>
                <p className="font-medium text-primary text-center mt-auto">— {testimonial.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 shadow-md z-10 hover:bg-primary/10 transition-colors"
        aria-label="Попередній відгук"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-1.5 shadow-md z-10 hover:bg-primary/10 transition-colors"
        aria-label="Наступний відгук"
      >
        <ChevronRight className="w-5 h-5 text-primary" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-primary scale-125" : "bg-primary/30"
            }`}
            aria-label={`Перейти до відгуку ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
