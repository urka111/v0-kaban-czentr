interface InstructorProps {
  name: string
  image?: string
  description: string
}

export default function Instructor({ name, image, description }: InstructorProps) {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-primary rounded-fix">
        {image ? (
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">{name[0]}</span>
          </div>
        )}
      </div>
      <h4 className="font-medium text-center mb-1">{name}</h4>
      <p className="text-sm text-center text-gray-600">{description}</p>
    </div>
  )
}
