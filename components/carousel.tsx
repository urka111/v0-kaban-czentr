interface CarouselProps {
  images: string[]
  alt: string
}

export default function Carousel({ images, alt }: CarouselProps) {
  // Використовуємо тільки перше зображення з масиву
  const image = images[0] || "/placeholder.svg"

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4 rounded-fix">
      <div className="h-full flex items-center justify-center bg-gray-100 rounded-lg rounded-fix">
        <img
          src={image || "/placeholder.svg"}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-lg rounded-fix"
        />
      </div>
    </div>
  )
}
