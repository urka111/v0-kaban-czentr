interface TestimonialProps {
  text: string
  author: string
  image?: string
}

export default function Testimonial({ text, author, image }: TestimonialProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
      {image ? (
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary">
          <img src={image || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 font-medium text-xl">{author[0]}</span>
        </div>
      )}
      <p className="text-center italic mb-4">{text}</p>
      <p className="text-center font-medium">{author}</p>
    </div>
  )
}
